'use strict'

import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-vector-icons/MaterialIcons'

let css = (deft, custom) => {
    return custom ? [deft, custom] : deft
}

let setListLength = 0;
export default class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return this._trans()
    }
    _trans() {
        let {custom, sets} = this.props.dataSource

        custom.style = css(style.navBarContainer, custom.style)
        let createBar = (bar, j) => {

            !bar.custom && (bar.custom = {})
            bar.custom.key = bar.bar.key = j
            !bar.custom && (bar.custom = {})

            !bar.bar.title.custom && (bar.bar.title.custom = {})
            bar.bar.title.custom.style = css(style.listBarTitle, bar.bar.title.custom.style)
            !bar.bar.iconStart.custom && (bar.bar.iconStart.custom = {})
            bar.bar.iconStart.custom.style = css(style.listBarStart, bar.bar.iconStart.custom.style)
            !bar.bar.iconEnd.custom && (bar.bar.iconEnd.custom = {})
            bar.bar.iconEnd.custom.style = css(style.listBarEnd, bar.bar.iconEnd.custom.style)

            bar.custom.style = j == 0 ? css(style.listBarHasTopBorder, bar.custom.style) :
                               j == setListLength - 1 ? css(style.listBarHasBottomBorder, bar.custom.style) : css(style.listBar, bar.custom.style);
           let titleContainer = j == setListLength - 1 ? style.titleContainer :
                                style.titleContainerWithBottomBorder

            bar.bar.onPress && (bar.custom.onPress = bar.bar.onPress)
            return (
                <TouchableOpacity {...bar.custom}>
                        <View {...bar.bar.iconStart.custom}>
                            <Icon {...bar.bar.iconStart} />
                        </View>
                        <View style={titleContainer}>
                            <View style={style.listBarTitle}>
                                <Text {...bar.bar.title.custom}>
                                    {bar.bar.title.main}
                                </Text>
                            </View>
                            <View {...bar.bar.iconEnd.custom}>
                                <Icon {...bar.bar.iconEnd} />
                            </View>
                        </View>
                </TouchableOpacity>
            )
        }
        let createSet = (set, i) => {
            !set.custom && (set.custom = {})
            set.custom.key = i
            set.custom.style = css(style.setBar, set.custom.style)
            setListLength = set.list.length
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
    navBarContainer: {
        flex: 1,
    },
    setBar: {
        marginBottom: 20
    },
    listBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    listBarHasTopBorder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    listBarHasBottomBorder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 13,
        paddingBottom: 13,
        paddingRight: 20,
    },
    titleContainerWithBottomBorder: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 13,
        paddingBottom: 13,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    listBarTitle: {
        flex: 1,
        alignItems: 'flex-start',
    },
    listBarStart: {
        paddingLeft: 18,
        paddingRight: 18,
    },
    listBarEnd: {
    },

})
