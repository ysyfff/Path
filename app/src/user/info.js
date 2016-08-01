'use strict'

import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

import NavBar from '../../component/NavBar'
import ViewContainer from '../common/ViewContainer'
import Skin from '../common/Skin'

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
                                color: Skin.baseColor
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: Skin.baseColor
                            },
                            title: {
                                main: '基本信息',
                                custom: {
                                    style: {color: Skin.baseColor}
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
                                color: Skin.baseColor
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: Skin.baseColor
                            },
                            title: {
                                main: '历史记录',
                                custom: {
                                    style: {color: Skin.baseColor}
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
                                color: Skin.baseColor
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: Skin.baseColor
                            },
                            title: {
                                main: '步行记录',
                                custom: {
                                    style: {color: Skin.baseColor}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'heart',
                                size: 22,
                                color: Skin.baseColor
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: Skin.baseColor
                            },
                            title: {
                                main: '跑步记录',
                                custom: {
                                    style: {color: Skin.baseColor}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'subway',
                                size: 22,
                                color: Skin.baseColor
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: Skin.baseColor
                            },
                            title: {
                                main: '地铁记录',
                                custom: {
                                    style: {color: Skin.baseColor}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'bus',
                                size: 22,
                                color: Skin.baseColor
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: Skin.baseColor
                            },
                            title: {
                                main: '公交记录',
                                custom: {
                                    style: {color: Skin.baseColor}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'train',
                                size: 22,
                                color: Skin.baseColor
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: Skin.baseColor
                            },
                            title: {
                                main: '火车记录',
                                custom: {
                                    style: {color: Skin.baseColor}
                                }
                            }
                        }
                    },{
                        bar: {
                            iconStart: {
                                name: 'plane',
                                size: 22,
                                color: Skin.baseColor
                            },
                            iconEnd: {
                                name: 'angle-right',
                                size: 16,
                                color: Skin.baseColor
                            },
                            title: {
                                main: '飞行记录',
                                custom: {
                                    style: {color: Skin.baseColor}
                                }
                            }
                        }
                    }]
                }
            ]
        }
        return (
            <ViewContainer>
                <NavBar dataSource={data} />
            </ViewContainer>
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
