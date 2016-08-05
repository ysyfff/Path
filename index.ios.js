/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react'
import {AppRegistry, Navigator, Text, TouchableHighlight, View} from 'react-native'



import NavAllDay from './app/src/example/test/testNavigator'
import ViewContainer from './app/src/common/ViewContainer'
import NavigatorIOSApp from './app/src/example/test/testNavigatorIOS'

import PathNav from './app/src/navigator/PathNav'

class Path extends Component {
    render() {
        return (<PathNav />)
    }
}

AppRegistry.registerComponent('Path', () => Path)
