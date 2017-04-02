
import React, { Component } from 'react';
import DetailSummary from './DetailSummary';
import DetailSummaryHeader from './DetailSummaryHeader';
import FetchDataDisplay from './FetchDataDisplay';
import CardSection from './CardSection';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

var server = "192.168.43.234";
//var server = "192.168.1.3";
var serverPort = "3000";
var customerID = "0";
const API_Customer = 'http://' + server + ':' + serverPort + '/api/Customer?Inactive=2';

const API_CUSTOMER_CREDIT_LIMIT = 'http://' + server + ':' + serverPort +
                                  '/api/fetchWithParam/Sum(CreditLimit)/Customer/resultValue?CustomerID='

const API_CUSTOMER_TRN_CHEQUES_IN_FLOAT =  'http://' + server + ':' + serverPort +
                                            '/api/fetchWithParam/Sum(Amount)/ReceivedCheques/resultValue?Status=1&CustomerID='

const API_CUSTOMER_TRN_CHEQUES_IN_HAND =  'http://' + server + ':' + serverPort +
                                           '/api/fetchWithParam/Sum(Amount)/ReceivedCheques/resultValue?Status=0|3&CustomerID='


const API_CUSTOMER_BALANCE = 'http://' + server + ':' + serverPort +
                             '/api/fetchWithParam/Sum(BalanceAmount)/CustomerBalance/resultValue?CustomerID='



const API_Cust_Acct = 'http://' + server + ':' + serverPort + '/api/chequesInFloat?CustomerID=' ;


class HeaderDetails extends Component {

  constructor(props){
    super(props);
    console.log('constructor .....');
    this.state = {dataSet:[]} ;

  }

  componentDidMount() {

    serverURL = this.props.source;
    customerID = this.props.customerID;

  }


  render() {

    return (
      <View >
        <View style={styles.headerContentStyle}>
          <CardSection>
            <FetchDataDisplay displayValue="Total Limit" key={API_CUSTOMER_CREDIT_LIMIT + customerID} source={API_CUSTOMER_CREDIT_LIMIT + customerID}/>
            <FetchDataDisplay displayValue="Cheques In Float" key= {API_CUSTOMER_TRN_CHEQUES_IN_FLOAT + customerID} source={API_CUSTOMER_TRN_CHEQUES_IN_FLOAT + customerID}/>
            <FetchDataDisplay displayValue="Cheques In Hand" key= {API_CUSTOMER_TRN_CHEQUES_IN_HAND + customerID} source={API_CUSTOMER_TRN_CHEQUES_IN_HAND + customerID}/>
            <FetchDataDisplay displayValue="Customer Balance" key= {API_CUSTOMER_BALANCE + customerID} source={API_CUSTOMER_BALANCE + customerID}/>
          </CardSection>
        </View>

      </View>

    );

  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: 5,
  },
  detailsContentStyle: {
    flex: 1,
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
    fontSize: 18
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

export default HeaderDetails;
