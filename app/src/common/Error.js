import React, {Component} from 'react'
import {View, Text} from 'react-native'
import ViewContainer from './ViewContainer'

export default class Error extends Component {
    render() {
        return (
            <ViewContainer>
                <View style={style.error}>
                    {this.props.children}
                </View>
            </ViewContainer>
        )
    }
}

const style = React.StyleSheet.create({
    error: {
        flex: 1,
        backgroundColor: 'red',
        paddingTop: 20,
        paddingBottom: 20,
    }
});
