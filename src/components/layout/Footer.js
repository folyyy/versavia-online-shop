import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <div className="newsletter">
                <h2>Рассылка</h2>
                <form action="/api/newsletterSub" method="post">
                <input id="newsletterInput" name="email" type="text" placeholder="Введите свой email адрес" required onInvalid={(e) => {e.target.setCustomValidity("Это поле является обязательным")}} onInput={(e) => {e.target.setCustomValidity("")}}></input><br></br>
                <button id="newsletterInputButton">Подписаться</button>
                </form>
            </div>
            <div className="support">
                <h2>Помощь</h2>
                <a href="/support">Свяжитесь с нами</a><br></br>
                <a href="/faq">Часто задаваемые вопросы</a>
            </div>
            <div className="social">
                <a href="/socialvk"><img style={{width: 32, height: 32}} src="/images/vk.png" alt=""></img></a>
                <a href="/socialinstagram"><img style={{width: 32, height: 32}} src="/images/instagram.png" alt=""></img></a>
                <a href="/socialyoutube"><img style={{width: 32, height: 32}} src="/images/youtube.png" alt=""></img></a>
            </div>
            <div className="paymentMethods">
                <img style={{width: 64, height: 32}} src="/images/visa.png" alt=""></img>
                <img style={{width: 64, height: 32}} src="/images/mastercard.png" alt=""></img>
                <img style={{width: 64, height: 32}} src="/images/mir.png" alt=""></img>
            </div>
            <br></br>
            <br></br>
            <div className="copyright">
                <p>Versavia, все права защищены &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
        )
    }
}

export default Footer
