import React, {Component} from 'react'
import {Text, MapView} from 'react-native'
import ViewContainer from '../common/ViewContainer'
// import MapView from 'react-native-maps'

export default class Foot extends Component {
    render() {
        return (
            // <ViewContainer>
            //     <Text>Welcome to Foot</Text>
            // </ViewContainer>
            <MapView
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
        )
    }
}
