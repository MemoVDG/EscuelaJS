import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/login.scss';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Registrate</h2>
        <form
          action=''
          className='login__container--form'
          onSubmit={handleSubmit}
        >
          <input
            className='input'
            type='text'
            name='name'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            className='input'
            type='email'
            name='email'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            className='input'
            type='password'
            placeholder='Contraseña'
            name='password'
            onChange={handleInput}
          />
          <button className='button'>Registrate</button>
        </form>
        <Link to='/login'>Iniciar Sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
