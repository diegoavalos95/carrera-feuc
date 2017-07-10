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

  validar() {
  	if(this.state.username === '')
  	  this.setState({errors: {...this.state.errors, username: true}}, () => {alert('El campo de usuario no puede estar vacío.')});

  	if(this.state.password === '')
  	  this.setState({errors: {...this.state.errors, password: true}}, () => {alert('La campo de contraseña no puede estar vacío.')});
  }

  render() {
    return (
      <div className="LoginForm">
        <div className="LoginForm-header">
          <h2>Login</h2>
          <input type="text" value={this.state.username} onChange={(event) => {this.setState({username: event.target.value})}} />
          <br />
          <input type="password" value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}} />
          <br />
          <button type="button" onClick={() => this.validar()}>Iniciar Sesión</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;