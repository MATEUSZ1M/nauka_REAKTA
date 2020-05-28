import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Jumbotron from '../Jumbotron/Jumbotron';
import styles from './Faq.scss';

class Faq extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
  };

  render() {
    return (
      <div>
        <Container>
          <Hero titleText={faqData.title} image={faqData.image} />
          <Jumbotron>
            <h3 className={styles.logo}>Common questions:</h3>
            <ul className={styles.list}>
              <li>Lorem ipsum?</li>
              <li>Lorem ipsum?</li>
              <li>Lorem ipsum?</li>
              <li>Lorem ipsum?</li>
              <li>Lorem ipsum?</li>
              <li>Lorem ipsum?</li>
              <li>Lorem ipsum?</li>
            </ul>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Faq;
