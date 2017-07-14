import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	username: '',
    	password: '',
    	errors: {
    		username: false,
    		password: false
    	}
    }
  }

  validate() {
  	if(this.validateFields())
  		console.log('Yay!');
  	else
  		alert('Ningún campo puede quedar vacío.');
  }

  validateFields() {
  	let errors = 0;

  	if(this.state.username === '') {
  	  this.setState({errors: {...this.state.errors, username: true}});
  	  errors++;
  	} 
  	else
  	  this.setState({errors: {...this.state.errors, username: false}});

  	if(this.state.password === '') {
  	  this.setState({errors: {...this.state.errors, password: true}});
  	  errors++;
  	}
  	else
  	  this.setState({errors: {...this.state.errors, password: false}});

  	if(errors != 0)
  	  return false;
  	else
  	  return true;
  }

  render() {
    return (
      <div className="LoginForm">
        <div className="LoginForm-header">
          <h2>Login</h2>
          <input type="text" placeholder="Usuario" value={this.state.username} onChange={(event) => {this.setState({username: event.target.value})}} />
          <br />
          <input type="password" placeholder="Contraseña" value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}} />
          <br />
          <button type="button" onClick={() => this.validate()}>Iniciar Sesión</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;