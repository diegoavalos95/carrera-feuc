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

  validateFields() {
  	if(this.state.username === '') {
  	  this.setState({errors: {...this.state.errors, username: true}}, () => {alert('El campo de usuario no puede quedar vacío.')});
  	} else {
  	  this.setState({errors: {...this.state.errors, username: false}});
  	}

  	if(this.state.password === '') {
  	  this.setState({errors: {...this.state.errors, password: true}}, () => {alert('El campo de contraseña no puede quedar vacío.')});
  	} else {
  	  this.setState({errors: {...this.state.errors, password: false}});
  	}
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
          <button type="button" onClick={() => this.validateFields()}>Iniciar Sesión</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;