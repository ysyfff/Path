import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';

export default class NavAllDay extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    const Ctitle={
        0: 1,
        1: 2
    };
    return (

      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
        }
        style={{padding: 100}}
        navigationBar={
         <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
             {
               if (route.index === 0) {
                 return null;
               } else {
                 return (
                   <TouchableHighlight onPress={() => navigator.pop()}>
                     <Text>Back</Text>
                   </TouchableHighlight>
                 );
               }
             },
             RightButton: (route, navigator, index, navState) =>
               { return (<Text>Done</Text>); },
             Title: (route, navigator, index, navState) =>
               {
                   if(Ctitle[index]) {
                        return (<Text>{Ctitle[index]}</Text>);
                   }else{
                       return null;
                   }

               },
           }}
           style={{backgroundColor: 'gray'}}
         />
        }
      />
    );
  }
}
