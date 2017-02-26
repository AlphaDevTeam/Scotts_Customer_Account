
import React, { Component } from 'react';
import DetailSummary from './DetailSummary';
import DetailSummaryHeader from './DetailSummaryHeader';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

class TestComp extends Component {

  constructor(props){
    super(props);
    console.log('constructor .....');
    this.state = {dataSet:[]} ;
  }

  componentDidMount() {

    serverURL = this.props.source;
    //serverURL = 'http://192.168.43.234:3000/api/CustomerTransaction?CustomerID=123';
    console.log('Connecting .....' + serverURL);
    fetch(serverURL).then((response) => response.json()).then((responseJson) => {
          console.log("res :" +  responseJson.results);
          this.setState({dataSet: responseJson.results});
    }).catch((error) => {
      console.error(error);
    });
  }

  renderAlbums() {
    //console.log(this.state.dataSet);
    var contents = this.state.dataSet.map(function (item) {
      //console.log("item : " + JSON.stringify(item));
        return (
          <DetailSummary key={item.ID.toString()} album={item} />
        );
     });
     return contents;
  }

  render() {

    return (
      <View>
        <Text>Customer Balance : 00000</Text>
        <ScrollView>
          { this.renderAlbums() }
        </ScrollView>
      </View>

    );

  }
}
export default TestComp;
