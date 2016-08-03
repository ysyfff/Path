'use strict'

import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

import TabBar from '../../component/TabBar'

import Info from '../user/Info'
import TestListView from '../example/test/testListView'
import Skin from '../common/Skin'

export default class PathTabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personCount: 0
        }
    }
    _resetToMyself() {
        this.props.navigators.resetTo({ident: 'Myself'});
    }
    _resetToMap() {
        this.props.navigators.resetTo({ident: 'Map'})
    }
    _createTabBar() {
        var me = this
        return {
            tabBarProps: {
                tintColor: Skin.baseColor,
            },
            tabBarItemsProps: [
                {
                    title: '地图',
                    iconName: 'ios-alarm-outline',
                    selectedIconName: 'ios-alarm',
                    onPress: () => {
                        console.log('what??')
                        me.props.navigators.resetTo({ident: 'Map'})
                    },
                    renderedContent: <TestListView navigators={me.props.navigators}/>
                },
                {
                    title: '我',
                    iconName:'ios-person-outline',
                    selectedIconName:'ios-person',
                    defaultSelected: true,
                    onPress: () => {
                        // debugger
                        me.props.navigators.resetTo({ident: 'Myself'})
                    },
                    renderedContent: <Info navigators={me.props.navigators}/>
                },
            ]
        }
    }
    render() {
        return (
            <TabBar dataSource={this._createTabBar()} initialTab={this.props.initialTab} />
        )
    }
}
