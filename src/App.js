import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Root = () => <p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome, jeje.</h2>
          <Router>
            <div>
              <p>
                <Link to="/">Home</Link><br />
                <Link to="/login">Login</Link><br />
                <Link to="/signup">Signup</Link>
              </p>

              <Route exact path="/" component={Root}/>
              <Route path="/login" component={LoginForm}/>
              <Route path="/signup" component={SignupForm}/>
            </div>
          </Router>
        </div>
        
      </div>
    );
  }
}

export default App;
