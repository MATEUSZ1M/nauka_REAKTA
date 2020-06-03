import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import styles from './SearchResults.scss';
import { Link } from 'react-router-dom';

const SearchResults = ({ cards }) => {
  return (
    <Container>
      <section >
        <div className={styles.component}>
          {cards.map((cardData) => (
            <div key={cardData.id}>
              <Link className={styles.link} to={`/list/${cardData.listId}`}>
                <Card  key={cardData.id} {...cardData} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;
