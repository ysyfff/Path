/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  ListView
} from 'react-native';

import TabBarExample from './app/component/tabBarExample';
import TabBarExample2 from './app/component/IconTabBar';
import nav from './app/component/nav/nav';
import TabBar from './app/component/TabBar';
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
class Path extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personCount: 0
        }
    }
    _renderContent(color: string, pageText: string, num?: number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
              <Text style={styles.tabText}>{pageText}</Text>
              <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        );
    }
  render() {
    //   tintColor="blue"
    //   barTintColor="#3abeff"
    var me = this;
      var TabBarModel = {
          basic: {
              tintColor: "blue",
          },
          items: [
              {
                  title: '你的',
                  iconName: 'ios-alert-outline',
                  selectedIconName: 'ios-alert',
                  onPress: () => {console.log('23')},
                  renderedContent: this._renderContent('pink', 'oo', 23)
              },
              {
                  title: '他的',
                  iconName: 'ios-alarm-outline',
                  selectedIconName: 'ios-alarm',
                  defaultSelected: true,
                  onPress: () => {console.log('243')},
                  renderedContent: this._renderContent('#414A8C', 'Blue Tab')
              },
              {
                  title: '我的',
                  iconName:'ios-person-outline',
                  selectedIconName:'ios-person',
                  badge: me.state.personCount,
                  onPress: () => {
                      me.setState({
                          personCount: me.state.personCount + 1
                      })
                  },
                  renderedContent: this._renderContent('green', 'Blue Tab')
              }
          ]
      };

    return (
          <TabBar dataSource={TabBarModel} />
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 22,
  },
});

AppRegistry.registerComponent('Path', () => Path);
// AppRegistry.registerComponent('Path', () => TabBarExample2);
// AppRegistry.registerComponent('Path', () => TabBarExample);
