import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

var server = "192.168.1.2";
var serverPort = "3000";
var customerID = "841";
const API = 'http://' + server + ':' + serverPort + '/api/Customer?Inactive=1';

class SearchPanel extends Component {
  static renderFilm(customerInfo) {
    const { CustomerID, FirstName } = customerInfo;

    return (
      <View>
        <Text style={styles.titleText}>{CustomerID} - {FirstName}</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      customerInfos: [],
      query: ''
    };
  }

  componentDidMount() {
    console.log(API);
    fetch(API).then(res => res.json()).then((json) => {
      console.log(json);
      this.setState({ customerInfos: json.results });
      console.log(this.state.customerInfos);
    });
  }

  findFilm(query) {
    if (query === '') {
      return [];
    }

    const { customerInfos } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    console.log(customerInfos);
    console.log(regex);
    return customerInfos.filter(customerInfo => customerInfo.FirstName.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const customerInfos = this.findFilm(query);
    console.log("Got : " + customerInfos);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.container}>
       <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.viewStyle}
          data={customerInfos.length === 1 && comp(query, customerInfos[0].FirstName) ? [] : customerInfos}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter Customer Name"
          renderItem={({ FirstName, CustomerID }) => (
            <TouchableOpacity onPress={() => this.setState({ query: FirstName })}>
              <Text style={styles.itemText}>
                {CustomerID} - {FirstName}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {customerInfos.length > 0 ? (
            SearchPanel.renderFilm(customerInfos[0])
          ) : (
            <Text style={styles.infoText}>
              Enter Title of a Star Wars movie
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 25
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
});

export default SearchPanel;
