import React, { Component } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../layout/Cart.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

export class Cart extends Component {
    constructor(props) {
        super(props)
        this.getData()
        this.state = {
            item: [],
            cookie: Cookies.get('_ga')
        }
    }

    getData = async () => {
        const data = Cookies.get('_ga')
        const dataObject = { data }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dataObject)
        }
        const response = await fetch('/api/getCartItems', options)
        const json = await response.json()
        this.setState({list: json})
    }

    decreaseQty = async (inputId) => {
        var quantity = document.getElementById(inputId).value
        if (quantity <= 1) {
            return
        } else {
            quantity--
            document.getElementById(inputId).value = quantity

            var data = this.state.list.find(item => item.id === inputId)
            data.quantity = quantity
            var dataObject = { data }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(dataObject)
            }
            const response = await fetch('/api/changeItemQty', options)
            const json = await response.json()
            if (json.length === 0) {
                window.location.reload()
            }
    }
}

    increaseQty = async (inputId) => {
        var quantity = document.getElementById(inputId).value
        quantity++
        document.getElementById(inputId).value = quantity

        var data = this.state.list.find(item => item.id === inputId)
        data.quantity = quantity
        var dataObject = { data }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dataObject)
        }
        const response = await fetch('/api/changeItemQty', options)
        const json = await response.json()
        if (json.length === 0) {
            window.location.reload()
        }
    }

    cartItemDelete = async (inputId) => {
        var data = this.state.list.find(item => item.id === inputId)
        var dataObject = { data }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(dataObject)
        }
        const response = await fetch('/api/cartItemDelete', options)
        const json = await response.json()
        if (json.length === 0) {
            window.location.reload()
        }
    }

    render() {
        var { list } = this.state
        var sum = 0
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
                                sum = (sum + parseFloat(item.price) * item.quantity) - item.promocode
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
                                )
                            })
                            ) : (
                                <tbody></tbody>
                            )
                        }
                        </table>
                        <div className="bottom">
                            <div className="promo">
                                    <p></p>
                                    <form action="/api/addPromocode" method="POST">
                                    <input id="promoInput" placeholder="Введите промокод" name="promocode" type="text"></input>
                                    <input id="userId" name="userId" type="text" value={this.state.cookie} readOnly hidden></input>
                                    <button id="promoSubmit">Применить</button>
                                    </form>
                            </div>
                            <div className="conc">
                                <p>
                                    <span id="concText">Сумма к оплате</span>
                                    <span id="concSum">{sum} ₽</span>
                                    <Link to={{pathname: `/checkout`, totalSum: sum}}><input id="checkoutButton" type="submit" value="Оформить заказ"></input></Link>
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
