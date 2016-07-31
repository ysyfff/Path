import React, {Component} from 'react'
import {Navigator, View, TouchableOpacity, Text} from 'react-native'

let _currentRoute = '';

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRoute: ''
        }
        this.renderByRoute = false;
        this.hasInited = false;
    }
    render() {
        return this._trans();
    }
    componentDidMount() {
        console.log('oo')
    }
    _trans() {
        const renderSceneMap = {};
        const renderNavBarMap = {};
        const navigatorPara = Object.assign({}, this.props.dataSource);
        const navigationBarPara = Object.assign({}, navigatorPara.route[navigatorPara.initialRoute].NavBar);

        for(let route in navigatorPara.route) {
            renderSceneMap[route] = navigatorPara.route[route].renderScene;
            renderNavBarMap[route] = Object.assign({}, navigatorPara.route[route].NavBar);
        }

        //navigator
        navigatorPara.initialRoute = {ident: navigatorPara.initialRoute};
        navigatorPara.renderScene = (route, navigators) => {
            if(renderSceneMap[route.ident]){
                return renderSceneMap[route.ident](route, navigators);
            }else{
                return (
                    <View style={{paddingTop: 93, backgroundColor: 'red', flex: 1}}>
                        <Text>
                            You messed something up!!!
                        </Text>
                        <Text>
                            '{route.ident}' not found!
                        </Text>
                    </View>
                )
            }
        };

        //navigationBar
        navigationBarPara.routeMapper = {
            LeftButton: (route, navigator, index, navState) => {
                const {LeftButton} = renderNavBarMap[route.ident].routeMapper;
                if(LeftButton){
                    return (
                        <View style={{flex: 1, justifyContent: 'center'}}>
                           <TouchableOpacity onPress={() => navigator.pop()}>
                               {LeftButton}
                           </TouchableOpacity>
                       </View>
                    )
                }else{
                    return null;
                }
            },
            RightButton: (route, navigator, index, navState) => {
                const {RightButton} = renderNavBarMap[route.ident].routeMapper;
                if(RightButton) {
                    return (
                        <View style={{flex: 1, justifyContent: 'center'}}>
                           <TouchableOpacity>
                               {RightButton}
                           </TouchableOpacity>
                       </View>
                    )
                }else{
                    return null;
                }
            },
            Title: (route, navigator, index, navState) => {
                const {Title} = renderNavBarMap[route.ident].routeMapper;
                if(Title){
                    return (
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            {Title}
                        </View>
                    )
                }else{
                    return null;
                }
            }
        }

        return (
            <Navigator
                {...navigatorPara}
                navigationBar={
                    <Navigator.NavigationBar
                        {...navigationBarPara}
                    />
                }
            />
        )

    }
}
