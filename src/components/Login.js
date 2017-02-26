import React,{Component} from 'react';
import { Text, View, Image, Linking,StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class Login extends Component {

  render() {
    return (
      <Card>
          <View style={styles.detailsContentStyle}>
            <CardSection>
              <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>Login</Text>
                <Text>Username</Text>
                <Text>Password </Text>
                <Button>Login</Button>
              </View>
            </CardSection>
          </View>
        </Card>
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
