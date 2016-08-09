import React, {Component} from 'react'
import {Text, View, MapView} from 'react-native'
import ViewContainer from '../common/ViewContainer'
// import MapView from 'react-native-maps'

export default class Foot extends Component {
    render() {
        console.log(MapView)
        return (
          <MapView
            style={{flex:1, marginTop: 162}}
            showsUserLocation={true}
          />
        )
        // return (
        //     <ViewContainer>
        //         <Text>Welcome to Foot</Text>
        //     </ViewContainer>
        //     // <MapView
        //     //     initialRegion={{
        //     //       latitude: 37.78825,
        //     //       longitude: -122.4324,
        //     //       latitudeDelta: 0.0922,
        //     //       longitudeDelta: 0.0421,
        //     //     }}
        //     //   />
        // )
    }
}
