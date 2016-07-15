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
            custom: {
                style: [{backgroundColor: 'skyblue'}]
            },
            sets: [
                {
                    custom: {

                    },
                    list: [{
                        custom: {

                        },
                        bar: {
                            iconStart: {
                                name: 'subway',
                                size: 16,
                                color: 'skyblue'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'skyblue'
                            },
                            title: {
                                main: '地铁记录',
                                custom: {
                                    style: {color: 'skyblue'}
                                }
                            }
                        }
                    },{
                        custom: {
                            
                        },
                        bar: {
                            iconStart: {
                                name: 'subway',
                                size: 16,
                                color: 'skyblue'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'skyblue'
                            },
                            title: {
                                main: '地铁记录',
                                custom: {
                                    style: {color: 'skyblue'}
                                }
                            }
                        }
                    }

                    ]
                }

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
