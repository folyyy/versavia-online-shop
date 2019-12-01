import React, { Component } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../layout/Checkout.css'
import Cookies from 'js-cookie'

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            deliveryType: "none",
            currSum: this.props.location.totalSum,
            totalSum: this.props.location.totalSum
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (!this.state.totalSum) {
            this.props.history.push('/cart');
        }
    }

    async handleClick(oldType, newType) {
        var deliveryPrice = 0;
        if (deliveryPrice === 0) {
            document.getElementById("deliveryAddress").style.display = "block"
            document.getElementById("steps").innerHTML = "Способ получения > Адрес доставки"
        }
        await this.setState({
            deliveryType: newType
        })
        document.getElementById(oldType).style.visibility = "hidden"
        document.getElementById(newType).style.visibility = "visible"
        document.getElementById(oldType + "Span").style.border = "2px solid #cacaca"
        document.getElementById(newType + "Span").style.border = "2px solid rgb(255, 120, 40)"
        if (this.state.deliveryType === "Moscow") {
            deliveryPrice = 300
            await this.setState({
                totalSum: parseFloat(this.state.currSum) + deliveryPrice
            })
        } else if (this.state.deliveryType === "Regional") {
            deliveryPrice = 600
            await this.setState({
                totalSum: parseFloat(this.state.currSum) + deliveryPrice
            })
        }
        document.getElementById("deliveryPrice").innerHTML = "Стоимость доставки: " + deliveryPrice + " ₽"
        document.getElementById("totalPrice").innerHTML = "Итого: " + this.state.totalSum + " ₽"
        document.getElementById("typeOfDelivery").value = this.state.deliveryType
        document.getElementById("endPrice").value = this.state.totalSum
        document.getElementById("userId").value = Cookies.get('_ga')
    }

    render() {
        return (
            <div>
                <Header />
                    <div className="checkoutPage">
                        <div className="steps">
                            <p id="steps">Способ получения</p>
                        </div>
                        <div className="deliveryControl">
                            <div className="deliveryType">
                                <h2>Способ получения</h2>
                                <span id="MoscowSpan"onClick={() => this.handleClick("Regional", "Moscow")}>
                                    <img id="Moscow" src="/images/mark.png" alt=""></img>
                                    <h3>Доставка по Москве</h3> Срок доставки: 1-3 дня. В пределах МКАД или до ближайшего метро. Оплата наличными или банковским переводом.
                                </span>
                                <span id="RegionalSpan" onClick={() => this.handleClick("Moscow","Regional")}>
                                    <img id="Regional" src="/images/mark.png" alt=""></img>
                                    <h3>Региональная доставка</h3> Срок отправки: 1-2 дня. Почтой или курьерскими службами. Оплата наличными при получении или банковским переводом.
                                </span>
                            </div>
                            <div id="deliveryAddress">
                                <br></br>
                                <h2>Адрес доставки</h2>
                                <form action="/api/doCheckout" method="POST" id="doCheckout">
                                    <label htmlFor="firstName">Имя</label>
                                    <input id="firstName" name="firstName" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <label htmlFor="lastName">Фамилия</label>
                                    <input id="lastName" name="lastName" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <label htmlFor="phoneNumber">Телефон</label>
                                    <input id="phoneNumber" name="phoneNumber" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <label htmlFor="email">E-Mail</label>
                                    <input id="email" name="email" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <label htmlFor="city">Город</label>
                                    <input id="city" name="city" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <label htmlFor="address">Улица</label>
                                    <input id="address" name="address" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <label htmlFor="building">Дом</label>
                                    <input id="building" name="building" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <label htmlFor="housing">Корпус</label>
                                    <input id="housing" name="housing" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <label htmlFor="apartment">Квартира</label>
                                    <input id="apartment" name="apartment" type="text" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input>
                                    <input id="typeOfDelivery" name="deliveryType" type="text" hidden></input>
                                    <input id="endPrice" name="totalSum" type="text" hidden></input>
                                    <input id="userId" name="userId" type="text" hidden></input>
                                    <p id="rule">(*) Все поля обязательны для заполнения</p>
                                    <h4 id="currPrice">Стоимость товаров: {this.state.currSum} ₽</h4>
                                    <h4 id="deliveryPrice">Стоимость доставки: 0 ₽</h4>
                                    <h2 id="totalPrice">Итого: {this.state.totalSum} ₽</h2>
                                    <button id="checkoutButton1">Оформить заказ</button>
                                </form>
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
