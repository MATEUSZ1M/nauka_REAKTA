import React from 'react';
import styles from './Jumbotron.scss';
import PropTypes from 'prop-types';

const Jumbotron = ({children}) => <div className={styles.component}>{children}</div>;

Jumbotron.propTypes = {
  children: PropTypes.node,
};

export default Jumbotron;
