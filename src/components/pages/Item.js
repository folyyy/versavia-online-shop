import React, { Component } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../layout/Item.css';
import Cookies from 'js-cookie'

export class Item extends Component {
    constructor(props) {
        super(props);
        this.getData();
        this.state = {
            list: [],
            userId: Cookies.get('_ga'),
            size: 'XS'
        }
    }

    addToCart() {
        let data = this.state;
        let dataObject = { data };
        fetch('/api/addToCartDb', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dataObject)
          });
    }

    getData = () => {
        let data = this.props.match.params.id;
        let dataObject = { data };
        fetch('/api/getProductById', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dataObject)
          }).then(function(response) {
            return response.json();
          }).then(list => {
              if (list.length === 0) {
                this.props.history.push('/home')
              } else {
              this.setState({ list })
              }
            })
    } 

    render() {
        var { list } = this.state;
        return (
            <div>
                <Header />
                    <div className="itemPage">
                    {list.map((item) => {
                        return (
                        <div key={item.code}>
                            <div className="productWrapper">
                                <img src={`/images/${item.image}`} alt=""></img>
                            </div>
                            <div className="infoWrapper">
                                <h2>{item.name}</h2>
                                <p id="itemPrice">{item.productprice} ₽</p>
                                <p id="itemCategory">{item.category}</p>
                                <select className="selectSize" name="size" onChange={(e) => this.setState({size: e.target.value})}>
                                    <option value="none" defaultValue disabled hidden>Размер</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                                <br></br>
                                <input id="itemCartInput" type="submit" value="Добавить в корзину" onClick={() => {this.addToCart()}}></input>
                            </div> 
                        </div>
                        );
                    })}
                        <p id="hashtag">#</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Item
