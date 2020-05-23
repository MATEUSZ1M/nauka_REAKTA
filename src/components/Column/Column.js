import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
// import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
  };

  static defaultProps = { cards: [] };

  render() {
    const { title, icon, cards } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map((cardsData) => (
          <Card key={cardsData.id} {...cardsData} />
        ))}
      </section>
    );
  }
}

export default Column;
