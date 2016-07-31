import React, {Component} from 'react'
import {Navigator, View, TouchableHighlight, Text} from 'react-native'

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
        _currentRoute = _currentRoute || navigatorPara.initialRoute;
        const navigationBarPara = Object.assign({}, navigatorPara.route[_currentRoute].NavBar);

        for(let route in navigatorPara.route) {
            renderSceneMap[route] = navigatorPara.route[route].renderScene;
            renderNavBarMap[route] = Object.assign({}, navigatorPara.route[route].NavBar);
        }
        //navigator
        navigatorPara.initialRoute = {ident: navigatorPara.initialRoute};
        navigatorPara.renderScene = function(route, navigators){
            _currentRoute = route.ident;
            // if(this.hasInit && !this.renderByRoute) { //不是初始化且不是重复setState触发
            //     this.renderByRoute = true;
            //     this.hasInit = false;
            //     this.setState({currentRoute: route.ident});
            // }else{
            //     this.renderByRoute = false;
            // }
            // this.hasInit = true;
            if(renderSceneMap[_currentRoute]){
                return renderSceneMap[_currentRoute](route, navigators);
            }else{
                return (
                    <View style={{paddingTop: 93, backgroundColor: 'red', flex: 1}}>
                        <Text>
                            You messed something up!!!
                        </Text>
                        <Text>
                            '{_currentRoute}' not found!
                        </Text>
                    </View>
                )
            }
        }.bind(this);

        //navigationBar
        const {LeftButton, RightButton, Title} = renderNavBarMap[_currentRoute].routeMapper;
        navigationBarPara.routeMapper = {
            LeftButton: (route, navigator, index, navState) => {
                const {LeftButton, RightButton, Title} = renderNavBarMap[_currentRoute].routeMapper;
                if(LeftButton){
                    return (
                        <View style={{flex: 1, justifyContent: 'center'}}>
                           <TouchableHighlight onPress={() => navigator.pop()}>
                               {LeftButton}
                           </TouchableHighlight>
                       </View>
                    )
                }else{
                    return null;
                }
            },
            RightButton: (route, navigator, index, navState) => {
                const {LeftButton, RightButton, Title} = renderNavBarMap[_currentRoute].routeMapper;
                if(RightButton) {
                    return (
                        <View style={{flex: 1, justifyContent: 'center'}}>
                           <TouchableHighlight>
                               {RightButton}
                           </TouchableHighlight>
                       </View>
                    )
                }else{
                    return null;
                }
            },
            Title: (route, navigator, index, navState) => {
                const {LeftButton, RightButton, Title} = renderNavBarMap[_currentRoute].routeMapper;
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
