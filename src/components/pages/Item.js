import React, { Component } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../layout/Item.css'


export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: props.location.parameters.id || "id unknown",
                category: props.location.parameters.category || "category unknown",
                name: props.location.parameters.name || "name unknown",
                image: props.location.parameters.image || "image unknown",
                price: props.location.parameters.price || "price unknown",
            }
        }
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <Header />
                    <div className="itemPage">
                        <div className="productWrapper">
                            <img src={`/images/${this.state.item.image}`} alt=""></img>
                        </div>
                        <div className="infoWrapper">
                            <h2>{this.state.item.name}</h2>
                            <p id="itemPrice">{this.state.item.price}</p>
                            <p id="itemCategory">{this.state.item.category}</p>
                            <input id="itemCartInput" type="submit" value="Добавить в корзину"></input>
                        </div>
                        <p id="hashtag">#</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Item
