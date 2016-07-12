import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  ListView,
  TabBarIOS
} from 'react-native';


export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: {}
        }
    }
    render() {
        return this._trans();
    }
    //将数据结构解析成<TabBarIOS><TabBarIOS.item></></>
    _trans() {
        let {basic,items} = this.props.dataSource;

        let createBarItem = function(item) {
            item.key = item.title;
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
