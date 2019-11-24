import React, { Component } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../layout/Cart.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.getData();
        this.state = {
            item: [],
        }
    }

    getData = () => {
        let data = Cookies.get('_ga');
        let dataObject = { data }
        fetch('/api/getCartItems', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dataObject)
          }).then(function(response) {
            return response.json();
          }).then(list => {
              this.setState({ list })
            })
    }

    decreaseQty(inputId) {
        var quantity = document.getElementById(inputId).value;
        if (quantity <= 1) {
            return;
        } else {
        quantity--;
        document.getElementById(inputId).value = quantity;

        var data = this.state.list.find(item => item.id === inputId);
        data.quantity = quantity;
        var dataObject = { data }
        fetch('/api/changeItemQty', {
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
                window.location.reload();
              } 
        })
    }
}

    increaseQty(inputId) {
        var quantity = document.getElementById(inputId).value;
        quantity++;
        document.getElementById(inputId).value = quantity;

        var data = this.state.list.find(item => item.id === inputId);
        data.quantity = quantity;
        var dataObject = { data }
        fetch('/api/changeItemQty', {
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
                window.location.reload();
              } 
        })
    }

    cartItemDelete(inputId) {
        var data = this.state.list.find(item => item.id === inputId);
        var dataObject = { data }
        fetch('/api/cartItemDelete', {
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
                window.location.reload();
              }
        })
    }

    render() {
        var { list } = this.state;
        var sum = 0;
        return (
            <div>
                <Header />
                    <div className="cartPage">
                        <table className="cartTable">
                            <thead>
                                <tr>
                                    <td className="name">Товар</td>
                                    <td className="size">Размер</td>
                                    <td className="quantity">Количество</td>
                                    <td className="price">Цена</td>
                                </tr>
                            </thead>
                            { list ? ( 
                            list.map((item) => {
                                sum = sum + parseFloat(item.price) * item.quantity;
                                return(
                                <tbody key={item.id}>
                                    <tr>
                                    <td className="name">
                                        <a href="null"><img src={`/images/${item.image}`} alt=""></img></a>
                                        <h3>Versavia</h3>
                                        <p>{item.name}</p>
                                    </td>
                                    <td className="size">
                                        {item.size}
                                    </td>
                                    <td className="quantity">
                                        <button className="decrease" onClick={() => {this.decreaseQty(item.id)}}>-</button>
                                        <input readOnly id={item.id} type="text" name="cartItemQuantity" value={item.quantity}></input>
                                        <button className="increase" onClick={() => {this.increaseQty(item.id)}}>+</button>
                                    </td>
                                    <td className="price">
                                        {item.price}₽
                                    </td>
                                    <td>
                                    <img className="cartItemDelete" src="/images/close.png" alt="" onClick={() => {this.cartItemDelete(item.id)}}></img>
                                    </td>
                                    </tr>
                                </tbody>
                                );
                            })
                            ) : (
                                <tbody></tbody>
                            )
                        }
                        </table>
                        <div className="bottom">
                            <div className="promo">
                                <p>
                                    <input id="promoInput" placeholder="Введите промокод" name="text" type="text"></input>
                                    <input id="promoSubmit" type="submit" value="Применить"></input>
                                </p>
                            </div>
                            <div className="conc">
                                <p>
                                    <span id="concText">Сумма к оплате</span>
                                    <span id="concSum">{sum} ₽</span>
                                    <Link to={{pathname: `/checkout`, totalSum: sum}}><input id="checkoutButton" type="submit" value="Оформить заказ" onClick={() => {this.doCheckout()}}></input></Link>
                                </p>
                            </div>
                        </div>
                    <p id="hashtag">#</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Cart
