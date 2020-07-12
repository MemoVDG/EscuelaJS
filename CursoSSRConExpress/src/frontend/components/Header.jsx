import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/profile.png';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user } = props;
  // Validamos si user tiene elementos
  const hasUser = Object.keys(user).length > 0;

  // Manejo del logout con REDUX
  const handleLogOut = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      {/* Agregamos LINK para poder ir a home al dar a la imagen, es parecido al
			tag a pero Link evita que se recarge la pagina y solo se mueva al component
			asi como visualmente se ve mas fluido
		*/}
      <Link to='/'>
        <img src={logo} className='header__img' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt='profile' />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && (
            <li>
              <a href='/'>{user.name}</a>
            </li>
          )}
          {hasUser ? (
            <li>
              <a href='#logout' onClick={handleLogOut}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

// Validaciones en donde le decimos que es lo que va a recibir nuestro component

Header.propTypes = {
  user: PropTypes.Object,
  logoutRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
