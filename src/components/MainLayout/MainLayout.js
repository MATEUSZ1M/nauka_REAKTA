import React from 'react';
import PropsTypes from 'prop-types';

// eslint-disable-next-line
const MainLayout = ({ children }) => <div>{children}</div>;

MainLayout.propsTypes = {
  children: PropsTypes.node,
};

export default MainLayout;
