import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';



const DetailSummary = ({ album }) => {
  //const { title, artist, thumbnail_image, image, url } = album;
  const { Description, TrnDate ,DrAmount,CrAmount,BalanceAmount,Terminal,AUser } = album;

  const {
    thumbnailStyle,
    headerContentStyle,
    subContentStyle,
    detailsContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  function formatDate(paramDate){
    var d = new Date(paramDate);
    //console.log(paramDate);
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    console.log(curr_date + "-" + curr_month + "-" + curr_year);
    return curr_year + "-" + curr_month + "-" + curr_date ;
  }

  return (
    <Card>
        <View style={detailsContentStyle}>
          <CardSection>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{Description}</Text>
              <Text>Date : {formatDate(TrnDate)}</Text>
              <Text>{Terminal} - {AUser} </Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={subContentStyle}>
              <Text>Dr   : {DrAmount}</Text>
              <Text>Cr   : {CrAmount}</Text>
              <Text style={headerTextStyle}>Balance : {BalanceAmount}</Text>
            </View>
          </CardSection>
        </View>

      </Card>


  );
};

const styles = {
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
};

export default DetailSummary;
