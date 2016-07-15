'use strict'

import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class NavBarSet extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return this._trans()
    }
    _trans() {
        let {custom, sets} = this.props.dataSource
        custom.style && (custom.style = [style.navBarSetContainer, custom.style])
        let createBar = (bar, j) => {
            bar.custom.key = bar.bar.key = j
            return (
                <View {...bar.custom}>
                    <View>
                        <Icon {...bar.bar.iconStart} />
                    </View>
                    <View>
                        <Text>
                            {bar.bar.title}
                        </Text>
                    </View>
                    <View>
                        <Icon {...bar.bar.iconEnd} />
                    </View>
                </View>
            )
        }
        let createSet = (set, i) => {
            set.custom.key = i
            return (
                <View {...set.custom}>
                    {set.list.map(createBar)}
                </View>
            )
        }
        return (
            <View {...custom}>
                {sets.map(createSet)}
            </View>
        )
    }
}


const style = StyleSheet.create({
    navBarSetContainer: {
        flex: 1,
        paddingTop: 20,
    }
})
