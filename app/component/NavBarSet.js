'use strict'

import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class NavBarSet extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return this._trans();
    }
    _trans() {
        let {basic, sets} = this.props.dataSource;
        basic.style && (basic.style = [style.navBarSetContainer, basic.style])
        return (
            <View {...basic}>
                <Text>
                    HouHou
                </Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    navBarSetContainer: {
        flex: 1
    }
})
