import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

// const title = this.props;

const Card = ({title}) => (<div className={styles.component}>{title}</div>);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
