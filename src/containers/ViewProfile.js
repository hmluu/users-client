import React, { Component } from 'react';
import Profile from '../components/Profile';
import { getOne } from '../API';

class ViewProfile extends Component {
  state = {
    isSelected: false,
    isLoading: true,
    profile: {}
  };

  componentDidMount(){
    const { id } = this.props.match.params;
    getOne(id)
      .then(profile => {
        this.setState({
          profile,
          isLoading: false,
          isSelected: true
        });
      });
  }
  render() {
    return this.state.isLoading ?
      <h2>Loading Profile...</h2> :
      <Profile profile={this.state.profile}/>
  }
}

export default ViewProfile;
