/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react'
import {AppRegistry, Navigator, Text} from 'react-native'

import PathTabBar from './app/src/tabBar/PathTabBar'
import NavAllDay from './app/src/example/test/testNavigator'
import ViewContainer from './app/src/common/viewContainer'

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
            />
        )
    }
}

AppRegistry.registerComponent('Path', () => Path)
