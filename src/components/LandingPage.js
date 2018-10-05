import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => (
<div className="jumbotron">
  <p className="display-4">Click 'View Profiles' to see the list of users!</p>
  
  <p className="lead">
    <Link to="/profiles" className="btn btn-primary btn-lg" href="" role="button">View Profiles</Link>
  </p>
</div>
)

export default LandingPage;