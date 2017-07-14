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

  validate() {
    if(this.validateFields()) {
      this.validateEmail();
      if(this.validatePassword())
        this.validatePasswords();
      else
        alert('La contraseña debe contener al menos 8 caracteres, 1 mayúscula y 1 número.');
    }
    else {
      alert('Ningún campo puede quedar vacío.');
    }
  }

  validateEmail() {
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailOk = email.exec(this.state.email);
    
    if(emailOk) {
      this.setState({errors: {...this.state.errors, email: false}}, () => {console.log(this.state.errors.email)});
      console.log('Yay');
    }
    else {
      this.setState({errors: {...this.state.errors, email: true}}, () => {alert('El formato del correo es incorrecto.')});
      console.log('Nay');
    }
  }

  validatePassword() {
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordOk = password.exec(this.state.password);

    if(passwordOk) {
      this.setState({errors: {...this.state.errors, password: false}}, () => {console.log(this.state.errors.password)});
      console.log('Yay');
      return true;
    }
    else {
      this.setState({errors: {...this.state.errors, password: true}});
      console.log('Nay');
      return false;
    }
  }

  validatePasswords() {
    if(this.state.password !== this.state.confirmPassword)
      alert('Las contraseñas no coinciden.');
  }

  validateFields() {
    let errors = 0;

    if(this.state.name === '') {
      this.setState({errors: {...this.state.errors, name: true}});
      errors++;
    }
    else
      this.setState({errors: {...this.state.errors, name: false}});

    if(this.state.lastName === '') {
      this.setState({errors: {...this.state.errors, lastName: true}});
      errors++;
    }
    else
      this.setState({errors: {...this.state.errors, lastName: false}});

    if(this.state.username === '') {
      this.setState({errors: {...this.state.errors, username: true}});
      errors++;
    }
    else
      this.setState({errors: {...this.state.errors, username: false}});

    if(this.state.email === '') {
      this.setState({errors: {...this.state.errors, email: true}});
      errors++;
    }
    else 
      this.setState({errors: {...this.state.errors, email: false}});

    if(this.state.password === '') {
      this.setState({errors: {...this.state.errors, password: true}});
      errors++;
    }
    else
      this.setState({errors: {...this.state.errors, password: false}});

    if(this.state.confirmPassword === '') {
      this.setState({errors: {...this.state.errors, confirmPassword: true}});
      errors++;
    }
    else
      this.setState({errors: {...this.state.errors, confirmPassword: false}});

    if(errors != 0)
      return false;
    else
      return true;
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
          <button type="button" onClick={() => this.validate()} >Registrarse</button>
        </div>
      </div>
    );
  }
}

export default SignupForm;