import React from 'react';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';
import Jumbotron from '../Jumbotron/Jumbotron';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image={infoData.image} />
    <Jumbotron>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Jumbotron>
  </Container>
);

export default Info;
