import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'


export default class ViewContainer extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.props.children}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        backgroundColor: '#f8f8f8',
    }
})
