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
    displayedProfile: false,
  };
  
  showInfo = (profile) => {
    this.setState({
      profiles: [this.state.profiles, profile],
      displayedProfile: true,
    })
  }

  render() {
    return (
      <div className="userList">
      <ul>
        <h2>List Of Users</h2>
          {this.state.profiles.map(profile => {
            if (!this.state.displayedProfile) 
              return <li onClick={() => this.showInfo(profile)} key={profile.id}>{profile.first} {profile.last}</li>
              return <section key={profile} >
                      {profile.first} {profile.last} {profile.age} {profile.location} {profile.description}
                    </section>
          })}
        </ul>
    </div>
     
    )
  }
}


export default Profiles;