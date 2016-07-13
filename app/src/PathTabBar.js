'use strict'

import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

import TabBar from '../component/TabBar'


export default class PathTabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personCount: 0
        }
    }
    _createTabBar() {
        var me = this;
        return {
            tabBarProps: {
                tintColor: "blue",
            },
            tabBarItemsProps: [
                {
                    title: '他的',
                    iconName: 'ios-alarm-outline',
                    selectedIconName: 'ios-alarm',
                    defaultSelected: true,
                    renderedContent: <Text>3</Text>
                },
                {
                    title: '我的',
                    iconName:'ios-person-outline',
                    selectedIconName:'ios-person',
                    onPress: () => {
                    },
                    renderedContent: <Text>2</Text>
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
