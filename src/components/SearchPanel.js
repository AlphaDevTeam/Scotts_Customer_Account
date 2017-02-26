import Autocomplete from 'react-native-autocomplete-input';
import Comp from './TestComp';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

var server = "192.168.43.234";
//var server = "192.168.1.5";
var serverPort = "3000";
var customerID = "0";
const API_Customer = 'http://' + server + ':' + serverPort + '/api/Customer?Inactive=2';
const API_Cust_Acct = 'http://' + server + ':' + serverPort + '/api/CustomerTransaction?CustomerID=' ;

class SearchPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerInfos: [],
      dataSet: [],
      query: '',
      custID:0
    };


  }

  componentDidMount() {
    //console.log(API);
    fetch(API_Customer).then(res => res.json()).then((json) => {
      //console.log(json);
      this.setState({ customerInfos: json.results });
      //console.log(this.state.customerInfos);
    });
  }

  findFilm(query) {
    if (query === '') {
      return [];
    }

    const { customerInfos } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    //console.log(customerInfos);
    //console.log(regex);
    return customerInfos.filter(customerInfo => customerInfo.FirstName.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const customerInfos = this.findFilm(query);
    //console.log("Got : " + customerInfos);
    console.log("GotState : " + this.state.CustID);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View>
          <Autocomplete
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.autocompleteContainer}
            data={customerInfos.length === 1 && comp(query, customerInfos[0].FirstName) ? [] : customerInfos}
            defaultValue={query}
            onChangeText={text => this.setState({ query: text })}
            placeholder="Enter Customer Name"
            renderItem={({ FirstName, CustomerID }) => (
              <TouchableOpacity onPress={() => this.setState({ custID: CustomerID, query: FirstName  })}>
                <Text style={styles.itemText}>
                  {CustomerID} - {FirstName}
                </Text>
              </TouchableOpacity>
            )}
          />
            <View style={styles.container}>
              <Comp  key={this.state.custID} source={API_Cust_Acct + this.state.custID}/>
            </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    zIndex: 1
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  listStyle:{
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2
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
