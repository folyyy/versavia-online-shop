import React, { Component } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CategoryBody from '../layout/CategoryBody.js';
export class Item extends Component {
    render() {
        return (
            <div>
                <Header />
                <CategoryBody />
                <Footer />
            </div>
        )
    }
}

export default Item
