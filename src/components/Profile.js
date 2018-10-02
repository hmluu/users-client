import React from 'react';

import { Link } from 'react-router-dom';
const Profile = ({ profile }) => (
  <div key={profile.id} className="eachProfile">
    <div className="eachCard">
      <h5 className="card-title">{profile.id}</h5>
      <p className="card-text">
        first: {profile.first}
        last: {profile.last}
        date of birth: {profile.date_of_birth}
        current location: {profile.current_location}
        description: {profile.description}
        </p>
    </div>
  </div>

);

export default Profile;

