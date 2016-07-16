'use strict'

import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

import TabBar from '../../../component/TabBar'

import Info from '../user/info'
import TestListView from '../test/testListView'


export default class PathTabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personCount: 0
        }
    }
    _createTabBar() {
        var me = this
        return {
            tabBarProps: {
                tintColor: "blue",
            },
            tabBarItemsProps: [
                {
                    title: '他的',
                    iconName: 'ios-alarm-outline',
                    selectedIconName: 'ios-alarm',
                    renderedContent: <TestListView />
                },
                {
                    title: '我',
                    iconName:'ios-person-outline',
                    selectedIconName:'ios-person',
                    defaultSelected: true,
                    onPress: () => {
                    },
                    renderedContent: <Info />
                },
            ]
        }
    }
    render() {
        return (
            <TabBar dataSource={this._createTabBar()} />
        )
    }
}
