
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

var displayValue = "";
class FetchDataDisplay extends Component {

  constructor(props){
    super(props);
    console.log('constructor .....' + this.props.displayValue);
    this.state = {dataSet:[],displayValue123: 'initState'} ;
  }

  componentDidMount() {

    serverURL = this.props.source;

    //serverURL = 'http://192.168.43.234:3000/api/CustomerTransaction?CustomerID=123';
    console.log('Connecting .....' + serverURL);
    fetch(serverURL).then((response) => response.json()).then((responseJson) => {
          console.log("res :" +  responseJson.results);
          this.setState({dataSet: responseJson.results,displayValue123: this.props.displayValue});
    }).catch((error) => {
      console.error(error);
    });
  }

  renderDetails() {
    console.log(this.state.displayValue123);
    var valueToDisplay = this.state.displayValue123;
    var contents = this.state.dataSet.map(function (item) {
      console.log("item : " + JSON.stringify(item));
        return (
          <View>
            <Text style={styles.headerTextStyle}>{valueToDisplay}</Text>
            <Text >{item.resultValue}</Text>
          </View>
        );
     });
     return contents;
  }

  render() {

    return (
      <View style={styles.headerContentStyle}>
        { this.renderDetails() }
      </View>

    );

  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
  },
  detailsContentStyle: {
     flex: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 5,
    backgroundColor:'white'
  },
  subContentStyle: {
    width: 200
  },
  headerTextStyle: {
    fontSize: 12
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default FetchDataDisplay;
