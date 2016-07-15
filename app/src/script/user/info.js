'use strict'

import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import styles from '../../style/common'

import NavBarSet from '../../../component/NavBarSet'

export default class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        var data = {
            basic: {
                style: [{backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}, styles.container]
            },
            sets: [
                [
                    {
                        iconName: '',
                        title: '地铁记录'
                    }
                ]
            ]
        }
        return (
            <NavBarSet dataSource={data} />
        )
    }
}

const style = StyleSheet.create({
    infoText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
