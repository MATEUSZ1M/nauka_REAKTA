import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';
import PropTypes from 'prop-types';
import FaqList from '../FaqList/FaqList';

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
          <FaqList />
        </Container>
      </div>
    );
  }
}

export default Faq;
