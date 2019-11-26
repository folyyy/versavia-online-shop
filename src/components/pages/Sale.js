import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CategoryBody from '../layout/CategoryBody.js';

class Sale extends Component {
  render() {
    return (
    <div>
        <Header />
        <CategoryBody reqName="outputSale"/>
        <Footer />
    </div>
    );
  }
}
export default Sale;