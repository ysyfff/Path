'use strict'

import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

let css = (deft, custom) => {
    return custom ? [deft, custom] : deft
}
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

        custom.style = css(style.navBarSetContainer, custom.style)
        let createBar = (bar, j) => {
            !bar.custom && (bar.custom = {})
            bar.custom.key = bar.bar.key = j
            !bar.custom && (bar.custom = {})
            bar.custom.style = css(style.listBar, bar.custom.style)
            !bar.bar.title.custom && (bar.bar.title.custom = {})
            bar.bar.title.custom.style = css(style.listBarTitle, bar.bar.title.custom.style)
            !bar.bar.iconStart.custom && (bar.bar.iconStart.custom = {})
            bar.bar.iconStart.custom.style = css(style.listBarStart, bar.bar.iconStart.custom.style)
            !bar.bar.iconEnd.custom && (bar.bar.iconEnd.custom = {})
            bar.bar.iconEnd.custom.style = css(style.listBarEnd, bar.bar.iconEnd.custom.style)
            return (
                <View {...bar.custom}>
                    <View {...bar.bar.iconStart.custom}>
                        <Icon {...bar.bar.iconStart} />
                    </View>
                    <View style={style.listBarTitle}>
                        <Text {...bar.bar.title.custom}>
                            {bar.bar.title.main}
                        </Text>
                    </View>
                    <View {...bar.bar.iconEnd.custom}>
                        <Icon {...bar.bar.iconEnd} />
                    </View>
                </View>
            )
        }
        let createSet = (set, i) => {
            !set.custom && (set.custom = {})
            set.custom.key = i
            set.custom.style = css(style.setBar, set.custom.style)
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
    },
    setBar: {
        marginBottom: 20
    },
    listBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: -1,
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    listBarTitle: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    listBarStart: {
    },
    listBarEnd: {
    }
})
