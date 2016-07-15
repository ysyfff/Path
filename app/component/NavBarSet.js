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

        return (
            <View style={[style.navBarSetContainer, basic.style ? basic.style : void 0]}>
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
