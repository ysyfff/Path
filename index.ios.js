/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react'
import {AppRegistry, Navigator, Text, TouchableHighlight} from 'react-native'

import PathTabBar from './app/src/tabBar/PathTabBar'
import NavAllDay from './app/src/example/test/testNavigator'
import ViewContainer from './app/src/common/viewContainer'
import NavigatorIOSApp from './app/src/example/test/testNavigatorIOS'

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
                initialRoute={{ident: 'Myself'}}
                ref="myselfNavgitor"
                renderScene={this._renderScene}
                navigationBar={
                 <Navigator.NavigationBar
                   routeMapper={{
                     LeftButton: (route, navigator, index, navState) =>
                     {
                       if (route.index === 0) {
                         return null;
                       } else {
                         return (
                           <TouchableHighlight onPress={() => navigator.pop()}>
                             <Text>Back</Text>
                           </TouchableHighlight>
                         );
                       }
                     },
                     RightButton: (route, navigator, index, navState) =>
                       { return (<Text>Done</Text>); },
                     Title: (route, navigator, index, navState) =>
                       { return (<Text>Awesome Nav Bar</Text>); },
                   }}
                   style={{backgroundColor: 'gray'}}
                 />
                }
            />
        )
    }
}

AppRegistry.registerComponent('Path', () => Path)
