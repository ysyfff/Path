import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, TouchableHighlight, Text} from 'react-native'

export class BtnO extends Component {
    render() {
        return this._trans();
    }
    _trans() {
        const opacityProps = Object.assign({}, this.props);

        return (
            <TouchableOpacity {...opacityProps} style={[style.btn, style.dodgerblue]}>
                <Text>
                    Right
                </Text>
            </TouchableOpacity>
        )
    }
}

export class BtnH extends Component {
    render() {

    }
    _trans() {

    }
}

const style = StyleSheet.create({
    btn: {
        paddingTop: 6,
        paddingRight: 10,
        paddingBottom: 6,
        paddingLeft: 10,
    },
    dodgerblue: {
        backgroundColor: 'dodgerblue'
    }
})
