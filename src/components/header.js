// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import SearchPanel from './SearchPanel0';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle,subTextStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <Text style={subTextStyle}>{props.subText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
  subTextStyle: {
    fontSize: 15
  }
};

// Make the component available to other parts of the app
export default Header;
