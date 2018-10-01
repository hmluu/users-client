import React, { Component } from 'react';

class Profiles extends Component {
  state = {
    isLoading: true,
    profiles: []
  };

  componentDidMount() {
    const API_URL = "http://localhost:3000/api/v1/profiles"
    fetch(API_URL)
      .then(res => res.json())
      .then(profiles => {
        this.setState({
          profiles,
          isLoading: false
        })
      });
  }

  render() {
    return (
      <div>
      <h2>Names</h2>
      {this.state.isLoading ? <h2>Loading Profiles...</h2> : this.state.profiles.map(profile => (
        <li key={profile.id}>{profile.first} {profile.last}</li>
      ))}
      
      </div>
    )
  }
}

export default Profiles;