import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS
} from 'react-native';


export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: {},
            selectedTab: ''
        }
    }
    render() {
        return this._trans();
    }
    //将数据结构解析成<TabBarIOS><TabBarIOS.item></></>
    _trans() {
        let {basic,items} = this.props.dataSource;
        let createBarItem = (item) => {
            item.key = item.title;

            item.selected = (this.state.selectedTab == item.key);
            //处理renderAsOriginal字段，设置selectedTab属性
            item.renderAsOriginal && (item.selected = true);

            //截获onPress并处理onPress
            let tmpOnPress = item.onPress;
            item.onPress = () => {
                this.setState({
                    selectedTab: item.key
                });
                tmpOnPress && tmpOnPress();
            }

            return (
                <TabBarIOS.Item {...item}>
                    {item.renderedContent}
                </TabBarIOS.Item>
            )
        };

        return (
            <TabBarIOS {...basic}>
                {items.map(createBarItem)}
            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
