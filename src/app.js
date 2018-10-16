import React from 'react';
import { render } from 'react-dom';
import Song from './shoe';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyWebApi = new SpotifyWebApi({
  clientId: '83885fa4c9384bebbe01f891ed4204c4',
  clientSecret: '7680b9c440fd4164abd785a42833c870'
});
spotifyWebApi.setAccessToken(
  'BQAzmVLe96umDNHH58YpCn7UTjTiq-gWyRfZap6kxjQCbC_T3viUCc7YABf3v5NxqzRFn9v6KhOca7LCJb8'
);

class App extends React.Component {
  componentDidMount() {
    const tracksResponse = spotifyWebApi.searchTracks('Bad Bunny');
    tracksResponse.then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <h1> Shoe Store </h1>
        <Song name="Yeezy Boost 350" shape="Sneaker" color="white" />
        <Song name="Jordan 1" shape="Sneaker" color="red" />
        <Song name="Gucci Canvas" shape="simple sole" color="green" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
