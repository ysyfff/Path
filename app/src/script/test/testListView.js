import React, {Component} from 'react'
import {ListView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class TestListView extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([
            'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
          ])
        };
    }
    render() {
        return (
            <View style={style.container}>
                <ListView dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                            return (
                                <TouchableOpacity>
                                    <View style={{borderBottomWidth: 1, borderBottomColor: '#eee', paddingTop: 20, paddingBottom: 20}}>
                                        <Text>{rowData}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                    }}
                />
            </View>
        )
    }
}

var style = StyleSheet.create({
    container: {
        paddingTop: 22
    }
});
