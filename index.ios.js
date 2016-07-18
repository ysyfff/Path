/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react'
import {AppRegistry, Navigator} from 'react-native'

import PathTabBar from './app/src/script/tabBar/PathTabBar'
import NavAllDay from './app/src/script/test/testNavigator'

class Path extends Component {
    _renderScene(route, navigators) {
        console.log(route, navigators)
        return (
            <PathTabBar />
        )
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

AppRegistry.registerComponent('Path', () => NavAllDay)
