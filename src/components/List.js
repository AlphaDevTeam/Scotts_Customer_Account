import React, { Component } from 'react';
import { ScrollView,View } from 'react-native';
import Detail from './Detail';
import DetailSummary from './DetailSummary';


class List extends Component {
  state = { albums: [] };

  componentWillMount() {
    var server = "192.168.43.234";
    var serverPort = "3000";
    var customerID = this.props.CustomerID;
    serverURL ='http://' + server + ':' + serverPort + '/api/CustomerTransaction?CustomerID=' + customerID;
    console.log('Connecting .....' + serverURL);
   fetch(serverURL)
   //fetch('https://facebook.github.io/react-native/movies.json')
   //fetch('https://rallycoding.herokuapp.com/api/music_albums')
   .then((response) => response.json())
   .then((responseJson) => {
        this.setState({ albums: responseJson.results });
        console.log(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <View>
        <DetailSummary key={album.ID} album={album} />
      </View>
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      </View>
    );
  }
}

export default List;
