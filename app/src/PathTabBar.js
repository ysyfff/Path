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
    _renderContent(color: string, name: string, count: number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color ? color : void 0}]}>
                <Text style={styles.tabText}>
                    {name}
                </Text>
            </View>
        )
    }
    render() {
        var me = this;
        let tabBarSource = {
            basic: {
                tintColor: "blue",
            },
            items: [
                {
                    title: '他的',
                    iconName: 'ios-alarm-outline',
                    selectedIconName: 'ios-alarm',
                    defaultSelected: true,
                    onPress: () => {console.log('243')},
                    renderedContent: this._renderContent('#414A8C', 'Blue Tab')
                },
                {
                    title: '我的',
                    iconName:'ios-person-outline',
                    selectedIconName:'ios-person',
                    badge: me.state.personCount,
                    onPress: () => {
                        me.setState({
                            personCount: me.state.personCount + 1
                        })
                    },
                    renderedContent: this._renderContent('green', 'Green Tab')
                },
            ]
        }
        return (
            <TabBar dataSource={tabBarSource} />
        )
    }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 22,
  },
});
