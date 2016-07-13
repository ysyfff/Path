'use strict'

import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import styles from '../../style/common'

export default class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={style.infoText}>
                    <Text >
                        Welcome to Info
                    </Text>
                </View>
            </View>
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
