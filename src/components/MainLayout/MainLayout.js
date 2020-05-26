import React from 'react';
import PropsTypes from 'prop-types';
import Header from '../Header/Header';
// eslint-disable-next-line
const MainLayout = ({ children }) => <div>
  <Header />
  {children}</div>;

MainLayout.propsTypes = {
  children: PropsTypes.node,
};

export default MainLayout;
