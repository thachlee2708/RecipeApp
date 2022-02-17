import React from 'react';
import HomeScreen from './HomeScreen';
export default HomeContainer = ({navigation}) => {
  const homeProps = {navigation};
  return <HomeScreen {...homeProps} />;
};
