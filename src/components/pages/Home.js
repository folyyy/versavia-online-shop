import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Body from '../layout/Body';

class Home extends Component {
  render() {
    return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    );
  }
}
export default Home;