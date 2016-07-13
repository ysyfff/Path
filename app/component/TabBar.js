import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: {},
            selectedTab: ''
        }
        this.activedKey = '';
    }
    render() {
        return this._trans();
    }
    componentDidMount() {
        this.activedKey && this.setState({selectedTab: this.activedKey});
    }
    //将数据结构解析成<TabBarIOS><TabBarIOS.item></></>
    _trans() {
        let {basic,items} = this.props.dataSource;
        let createBarItem = (item) => {
            item.key = item.title;

            item.selected = (this.state.selectedTab == item.title);
            //处理renderAsOriginal字段，设置selectedTab属性
            item.defaultSelected && (this.activedKey = item.key);
            //截获onPress并处理onPress
            let tmpOnPress = item.onPress;
            item.onPress = () => {
                this.setState({
                    selectedTab: item.key
                });
                tmpOnPress && tmpOnPress();
            }

            return (
                <Icon.TabBarItemIOS {...item}>
                    {item.renderedContent}
                </Icon.TabBarItemIOS>
            )
        };

        return (
            <TabBarIOS {...basic}>
                {items.map(createBarItem)}
            </TabBarIOS>
        );
    }
}
