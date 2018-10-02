import React, { Component } from 'react';

class Profiles extends Component {
  state = {
    profiles: [{
      id: 1,
      first: "John",
      last: "Roberts",
      age: 51,
      location: "Chicago, IL",
      description: "John is a retired YouTuber"
    },
    {
      id: 2,
      first: "Frita",
      last: "Waters",
      age: 27,
      location: "Phoenix, AZ",
      description: "Frita loves the desert, cheese, and turtles."
    },
    {
      id: 3,
      first: "Bart",
      last: "Simpson",
      age: 24,
      location: "Springfield, IL",
      description: "Bart skateboards everywhere."
    }],
    displayedProfile: null,
  };
  
  showInfo = (profile) => {
    this.setState({
      displayedProfile: profile,

    })
  }

  render() {
    return (
    <div className="userList">
      <ul>
        <h2>List Of Users</h2>
        {this.state.profiles.map(profile => {
            return <li onClick={() => this.showInfo(profile)} key={profile.id}>{profile.first} {profile.last}</li>
          })}
      </ul>
    <div>
        {this.state.displayedProfile ? <section key={this.state.displayedProfile.id}>
          {this.state.displayedProfile.first} {this.state.displayedProfile.last} {this.state.displayedProfile.age} {this.state.displayedProfile.location} {this.state.displayedProfile.description}
         </section> : 'Select A Profile'}
    </div>
    </div>
     
    )
  }
}


export default Profiles;