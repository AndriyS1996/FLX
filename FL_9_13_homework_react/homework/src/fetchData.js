import React, { Component } from 'react';
import ListRander from './listRender';

class FetchMozartTracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracksInfo: [],
      isLoading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(response => response.json())
      .then(data => this.setState({ tracksInfo: data, isLoading: false, error: null }))
      .catch(error => this.setState({error, isLoading: false}) )
  }
  render() {
    const { tracksInfo, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
  
    if (isLoading) {
      return (
        <div>
            <p>Loading ...</p>
        </div>
        )
    }
      console.log(tracksInfo);
      return <ListRander data={tracksInfo} />
  }
}

export default FetchMozartTracks;
