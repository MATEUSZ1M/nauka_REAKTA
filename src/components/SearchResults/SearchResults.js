import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import styles from './SearchResults.scss';
import { Link } from 'react-router-dom';
import { search } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const SearchResults = ({ cards }) => {
  return (
    <div>
      <Container>
        <Hero titleText={search.title} image={search.image} />
        <div className={styles.component}>
          {cards.map((cardData) => (
            <div key={cardData.id}>
              <Link className={styles.link} to={`/list/${cardData.listId}`}>
                <Card key={cardData.id} {...cardData} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;
