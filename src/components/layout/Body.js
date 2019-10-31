import React, { Component } from 'react'
import './Body.css'

export class Body extends Component {
    render() {
        return (
            <div className="homeWebSections">

                <div className="homeWebMainSection">
                    <img src="./images/homewebimg.jpg" alt=""></img>
                    <h1>Актуальные предложения</h1>
                    <div className="homeWebButtons">
                        <a className="homeWebButtonsWomen" href="/women/all" alt="">Женщины</a>
                        <a className="homeWebButtonsMen" href="/men/all" alt="">Мужчины</a>
                    </div>
                </div>


                <div className="homeWebSecondSection">
                        <img id="homewebleftimg" src="./images/homewebleftimg.jpg" alt=""></img>
                        <img id="homewebrightimg" src="./images/homewebrightimg.jpg" alt=""></img>  
                        <h1 id="homewebleftH1">Женская одежда</h1>
                        <h1 id="homewebrightH1">Мужская одежда</h1>
                        <a id="homewebleftButton" href="/women/all" alt="">Женщины</a> 
                        <a id="homewebrightButton" href="/men/all" alt="">Мужчины</a>      
                </div>
                    <p id="hashtag">#</p>
            </div>
        )
    }
}

export default Body
