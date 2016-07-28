import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'


export default class ViewContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 62,
        backgroundColor: '#f8f8f8',
    }
})
