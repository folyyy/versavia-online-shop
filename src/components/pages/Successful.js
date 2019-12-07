import React, { Component } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import '../layout/Successful.css'

export class Successful extends Component {
    render() {
        return (
            <div>
            <Header />
            <div className="successfullPage">
                <img src="images/Versavia800x800.jpg" alt=""></img>
                <h3>Уважаемый покупатель, ваш заказ был успешно принят и отправлен на обработку. В скором времени, мы отправим вам сообщение с подтверждением покупки. Спасибо за покупки в Versavia!</h3>
                <p id="hashtag">#</p>
            </div>
            <Footer />
            </div>
        )
    }
}

export default Successful
