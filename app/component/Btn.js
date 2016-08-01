import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, TouchableHighlight, Text} from 'react-native'

export class BtnO extends Component {
    render() {
        return this._trans();
    }
    _trans() {
        const opacityProps = Object.assign({}, this.props);

        //如果style是数组呢??? React Native兼容了[{}, {}, [{}, {}]]这种情况！！！
        opacityProps.style = opacityProps.style ? [style.btn, style.dodgerblue, opacityProps.style] : [style.btn, style.dodgerblue];
        const tstyle = opacityProps.tstyle ? [style.txt, opacityProps.tstyle] : [style.txt];

        //如果被disabled了，增加disabled样式
        opacityProps.disabled && (opacityProps.style.push(style.disabled), tstyle.push(style.disabledTxt));
        return (
            <TouchableOpacity {...opacityProps}>
                <Text style={tstyle}>
                    {this.props.children}
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
        borderRadius: 999, //设置的足够大，确保是圆角
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginRight: 5,
    },
    disabled: {
        backgroundColor: 'gainsboro',
    },
    disabledTxt: {
        color: 'darkgray'
    },
    txt: {
        textAlign: 'center',
    },
    dodgerblue: {
        backgroundColor: 'dodgerblue'
    }
})
