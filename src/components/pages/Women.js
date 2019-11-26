import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CategoryBody from '../layout/CategoryBody.js';

class Women extends Component {
  render() {
    return (
    <div>
        <Header />
        <CategoryBody reqName="outputWomen"/>
        <Footer />
    </div>
    );
  }
}
export default Women;