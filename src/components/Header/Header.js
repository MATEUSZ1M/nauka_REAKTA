import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  render() {
    const { icon } = settings.header;

    return (

      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              <Icon name={icon} />
            </Link>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/info" >
              Info
            </NavLink>
            <NavLink exact to="/faq" >
              FAQ
            </NavLink>
            <Search />
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
