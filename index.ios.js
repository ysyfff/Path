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
import Skin from './app/src/common/Skin'
import Nav from './app/component/Nav'

class Path extends Component {
    render() {
        const NavDataSource = {
            initialRoute: 'Myself',
            route: {
                Myself: {
                    renderScene: function(route, navigators) {
                        return (
                            <PathTabBar navigators={navigators} />
                        )
                    },
                    NavBar: {
                        routeMapper: {
                            LeftButton: '',
                            RightButton: '',
                            Title: (
                                <Text style={{fontSize: 18}}>我</Text>
                            )
                        },
                        style: {backgroundColor: Skin.baseColor}
                    }
                },
                'Myself.basicInfo': {
                    renderScene: function(route, navigators) {
                        return (
                            <ViewContainer>
                                <Text>
                                Welcome to ${route.ident}
                                </Text>
                            </ViewContainer>
                        )
                    },
                    NavBar: {
                        routeMapper: {
                            LeftButton: (
                                <View style={{flex: 1, flexDirection: 'row', alignItems:"center", paddingLeft: 15, paddingRight: 10, paddingTop: 10, paddingBottom: 10}}>
                                    <Icon name="angle-left" color="black" size={26} />
                                </View>
                            ),
                            RightButton: '',
                            Title: (
                                <Text style={{fontSize: 18}}>基本信息</Text>
                            )
                        },
                        style: {backgroundColor: 'gray'}
                    }
                }
            }
        }

        return (
            <Nav dataSource={NavDataSource} />
        )
    }
}

AppRegistry.registerComponent('Path', () => Path)
