import React, { Component } from 'react';
import { NavigatorIOS, Text, View, TouchableHighlight } from 'react-native';

export default class NavigatorIOSApp extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MyView,
                    title: 'My Initial Scene'
                }}
                style={{flex: 1}}
            />
        )
    }
}

class MyScene extends Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        navigator: React.PropTypes.object.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }

    _onForward() {
        this.props.navigator.push({
            title: 'Scene' + nextIndex,
        })
    }

    render() {
        return (
            <View>
                <Text>Current Scene: {this.props.title}</Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>
                        Tap me to load the next scene
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class MyView extends Component {
    _handleBackPress() {
        this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute)
    }

    render() {
        const nextRoute = {
            component: MyView,
            title: 'Bar That',
            passProps: {myProp: 'bar'}
        };

        return (
            <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>
                <Text style={{marginTop: 200, alignSelf: 'center'}}>
                    See you on the other nav {this.props.myProp}
                </Text>
            </TouchableHighlight>
        )
    }
}
