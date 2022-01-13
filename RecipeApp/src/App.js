import React from 'react';
import RootStack from './RootStack';
import SplashScreen from './screens/SplashScreen.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  hideSplashScreen = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const {isVisible} = this.state;

    return isVisible ? <SplashScreen /> : <RootStack />;
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.hideSplashScreen();
    }, 2000);
  }
}
