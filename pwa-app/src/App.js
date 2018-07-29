import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import LandingPage from './Components/LandingPage';

class App extends React.Component {
  state = {
  loading: true
};

componentDidMount() {
  setTimeout(() => this.setState({ loading: false }), 2000);
}

render() {

  const { loading } = this.state;
  if(loading){
    return <div id="loader-wrapper">
    <div id="loader">

    </div>

</div>
}

  return(
    <Router>
      <div><LandingPage/>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/LandingPage' component={LandingPage}/>
        </Switch>
      </div>
   </Router>
    );
  }
}

export default App;
