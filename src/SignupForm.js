import React, { Component } from 'react';
import './SignupForm.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        name: false,
        lastName: false,
        username: false,
        email: false,
        password: false,
        confirmPassword: false
      }
    }
  }

  validar() {
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailOk = email.exec(this.state.email);
    
    if(emailOk) {
      this.setState({errors: {...this.state.errors, email: false}}, () => {console.log(this.state.errors.email)});
      console.log('Yay');
    }
    else {
      this.setState({errors: {...this.state.errors, email: true}}, () => {console.log(this.state.errors.email)});
      console.log('Nay');
    }
  }

  render() {
    return (
      <div className="SignupForm">
        <div className="SignupForm-header">
          <h2>Signup</h2>
          <input type="text" placeholder="Nombre" value={this.state.name} onChange={(event) => {this.setState({name: event.target.value})}} />
          <br />
          <input type="text" placeholder="Apellido" value={this.state.lastName} onChange={(event) => {this.setState({lastName: event.target.value})}} />
          <br />
          <input type="text" placeholder="Username" value={this.state.username} onChange={(event) => {this.setState({username: event.target.value})}} />
          <br />
          <input type="email" placeholder="Correo" value={this.state.email} onChange={(event) => {this.setState({email: event.target.value})}} />
          <br />
          <input type="password" placeholder="Contraseña" value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}} />
          <br />
          <input type="password" placeholder="Repetir contraseña" value={this.state.confirmPassword} onChange={(event) => {this.setState({confirmPassword: event.target.value})}} />
          <br />
          <button type="button" onClick={() => this.validar()} >Registrarse</button>
        </div>
      </div>
    );
  }
}

export default SignupForm;