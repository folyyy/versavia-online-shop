import React, { Component } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import CategoryBody from '../layout/CategoryBody.js'

class Men extends Component {
  render() {
    return (
    <div>
        <Header />
        <CategoryBody reqName="outputMen"/>
        <Footer />
    </div>
    )
  }
}
export default Men