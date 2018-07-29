import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
class LandingPage extends React.Component {

  render(){
    return(
      <div>
          <Link to ={'/Login'}>
          <button>LoginPage</button>
        </Link>
      </div>
    );
  }
}
export default LandingPage;
