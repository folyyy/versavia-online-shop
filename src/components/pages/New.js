import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CategoryBody from '../layout/CategoryBody.js';

class New extends Component {
  render() {
    return (
    <div>
        <Header />
        <CategoryBody reqName="outputNew"/>
        <Footer />
    </div>
    );
  }
}
export default New;