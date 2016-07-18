import React, {Component} from 'react'
import {ListView, View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'

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
    _renderSeperator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
          <View
            key={`${sectionID}-${rowID}`}
            style={{
              height: adjacentRowHighlighted ? 1 : 1,
              backgroundColor: adjacentRowHighlighted ? '#f8f8f8' : '#eee',
            }}
          />
        );
    }
    _renderRow(rowData: string, sectionID: number, rowID: number,
        highlightRow: (sectionID: number, rowID: number) => void ) {
            return (
                <TouchableHighlight
                activeOpacity={0.2}
                underlayColor='#eee'
                onPress = {() => {
                    // highlightRow(sectionID, rowID);
                }}>

                    <View style={{ flex: 1, flexDirection: 'row'}}>
                        <View style={{backgroundColor: 'white', width: 50, height: 60}}>
                            <Text>
                            2
                            </Text>
                        </View>
                        <Text>{rowData}</Text>
                    </View>
                </TouchableHighlight>
            )
    }
    render() {
        return (
            <View style={style.container}>
                <ListView dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeperator}
                />
            </View>
        )
    }
}

var style = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: '#f8f8f8'
    }
});
