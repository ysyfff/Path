/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react'
import {AppRegistry, Navigator, Text, TouchableHighlight, View} from 'react-native'

import PathTabBar from './app/src/tabBar/PathTabBar'
import NavAllDay from './app/src/example/test/testNavigator'
import ViewContainer from './app/src/common/ViewContainer'
import NavigatorIOSApp from './app/src/example/test/testNavigatorIOS'
import Icon from 'react-native-vector-icons/FontAwesome'

class Path extends Component {
    _renderScene(route, navigators) {
        switch(route.ident) {
            case 'Myself':
                return (
                    <PathTabBar navigators={navigators} />
                )
                break;
            case 'Myself.basicInfo':
                return (
                    <ViewContainer>
                        <Text>
                        Welcome to ${route.ident}
                        </Text>
                    </ViewContainer>
                )
            default:
                return (
                    <Text>{`You messed something up: ${route.ident}`}</Text>
                )
        }

    }
    render() {
        return (
            <Navigator
                initialRoute={{ident: 'Myself', index: 0}}
                ref="myselfNavgitor"
                renderScene={this._renderScene}
                navigationBar={
                 <Navigator.NavigationBar
                   routeMapper={{
                     LeftButton: (route, navigator, index, navState) =>{
                       if (route.index === 0) {
                         return null;
                       } else {
                         return (
                             <View style={{flex: 1, justifyContent: 'center'}}>
                                <TouchableHighlight onPress={() => navigator.pop()}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems:"center", paddingLeft: 15, paddingRight: 10, paddingTop: 10, paddingBottom: 10}}>
                                        <Icon name="angle-left" color="black" size={26} />
                                    </View>
                                </TouchableHighlight>
                            </View>
                         );
                       }
                     },
                     RightButton: (route, navigator, index, navState) =>{
                         return null;
                     },
                     Title: (route, navigator, index, navState) =>{
                         return (
                             <View style={{flex: 1, justifyContent: 'center'}}>
                                <Text style={{fontSize: 18}}>我</Text>
                             </View>
                         );
                     },
                   }}
                   style={{backgroundColor: 'blueviolet', borderBottomWidth: 1, borderBottomColor: '#eee'}}
                 />
                }
            />
        )
    }
}

AppRegistry.registerComponent('Path', () => Path)
