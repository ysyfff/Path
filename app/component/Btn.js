import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, TouchableHighlight, Text} from 'react-native'

/**
@type: opacity | highlight
@bg  : any color value

//如果style是数组呢??? React Native兼容了[{}, {}, [{}, {}]]这种情况！！！
*/

export default class Btn extends Component {
    render() {
        return this._trans();
    }
    _trans() {
        const btnProps = Object.assign({}, this.props);

        //处理btnProps.style
        btnProps.style = btnProps.style ? [style.btn, style.dodgerblue, btnProps.style] : [style.btn, style.dodgerblue];
        btnProps.bg && btnProps.style.push({backgroundColor: btnProps.bg});

        //处理tstyle
        const tstyle = btnProps.tstyle ? [style.txt, btnProps.tstyle] : [style.txt];
        btnProps.c && tstyle.push({color: btnProps.c});

        //如果被disabled了，增加disabled样式
        btnProps.disabled && (btnProps.style.push(style.disabled), tstyle.push(style.disabledTxt));

        //确定Btn的type
        btnProps.type = btnProps.type || 'opacity';

        const result = btnProps.type === 'opacity' ? (
            <TouchableOpacity {...btnProps}>
                <Text style={tstyle}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        ) : (
            <TouchableHighlight {...btnProps}>
                <Text style={tstyle}>
                    {this.props.children}
                </Text>
            </TouchableHighlight>
        )

        return result;
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
        color: 'white'
    },
    dodgerblue: {
        backgroundColor: 'dodgerblue'
    }
})
