import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              <Icon name="bug" ActiveClassName="active" />
            </Link>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/info" ActiveClassName="active">
              Info
            </NavLink>
            <NavLink exact to="/faq" ActiveClassName="active">
              FAQ
            </NavLink>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
