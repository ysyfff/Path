'use strict'

import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

import NavBarSet from '../../component/NavBarSet'

export default class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        var me = this;
        var data = {
            custom: {
                style: [{backgroundColor: '#f8f8f8'}]
            },
            sets: [{
                    custom: {
                        style: {marginTop: 20}
                    },
                    list: [{
                        bar: {
                            iconStart: {
                                name: 'user',
                                size: 22,
                                color: 'blueviolet'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'blueviolet'
                            },
                            title: {
                                main: '基本信息',
                                custom: {
                                    style: {color: 'blueviolet'}
                                }
                            },
                            onPress: () => {
                                me.props.navigators.push({
                                    ident: 'Myself.basicInfo'
                                })
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'history',
                                size: 22,
                                color: 'blueviolet'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'blueviolet'
                            },
                            title: {
                                main: '历史记录',
                                custom: {
                                    style: {color: 'blueviolet'}
                                }
                            }
                        }
                    }]
                },
                {
                    list: [{
                        bar: {
                            iconStart: {
                                name: 'heart-o',
                                size: 22,
                                color: 'blueviolet'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'blueviolet'
                            },
                            title: {
                                main: '步行记录',
                                custom: {
                                    style: {color: 'blueviolet'}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'heart',
                                size: 22,
                                color: 'blueviolet'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'blueviolet'
                            },
                            title: {
                                main: '跑步记录',
                                custom: {
                                    style: {color: 'blueviolet'}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'subway',
                                size: 22,
                                color: 'blueviolet'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'blueviolet'
                            },
                            title: {
                                main: '地铁记录',
                                custom: {
                                    style: {color: 'blueviolet'}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'bus',
                                size: 22,
                                color: 'blueviolet'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'blueviolet'
                            },
                            title: {
                                main: '公交记录',
                                custom: {
                                    style: {color: 'blueviolet'}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'train',
                                size: 22,
                                color: 'blueviolet'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'blueviolet'
                            },
                            title: {
                                main: '火车记录',
                                custom: {
                                    style: {color: 'blueviolet'}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'plane',
                                size: 22,
                                color: 'blueviolet'
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: 'blueviolet'
                            },
                            title: {
                                main: '飞行记录',
                                custom: {
                                    style: {color: 'blueviolet'}
                                }
                            }
                        }
                    }]
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
