import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <header>
            <nav>
                <div id="mainlogo">
                  <a href="/" alt=""><img src="/images/Versavia100x100.png" alt=""></img></a>
                </div>
                  <ul className="category">
                    <li><a href="/new" alt="">Новинки</a></li>
                    <li><a href="index.html/men/" alt="">Мужское</a><br></br>
                      <div className="subCategory">
                        <ul className="subSubCategory"><a id="subSubCategory" href="index.html/men/outerwear" alt="">Верхняя одежда</a>
                            <li><a href="/men/outerwear/windbreakers" alt="">Ветровки</a></li>
                            <li><a href="index.html/men/outerwear/jackets" alt="">Куртки</a></li>
                            <li><a href="index.html/men/outerwear/summer" alt="">Летние</a></li>
                            <li><a href="index.html/men/outerwear/parka" alt="">Парки</a></li>
                            <li><a href="index.html/men/outerwear/coat" alt="">Пальто</a></li>
                        </ul>
                          <ul className="subSubCategory"><a id="subSubCategory" href="index.html/men/clothes" alt="">Одежда</a>
                            <li><a href="index.html/men/clothes/pants" alt="">Брюки</a></li>
                            <li><a href="index.html/men/clothes/jeans" alt="">Джинсы</a></li>
                            <li><a href="index.html/men/clothes/longslives" alt="">Лонгсливы</a></li>
                            <li><a href="index.html/men/clothes/polo" alt="">Поло</a></li>
                            <li><a href="index.html/men/clothes/shirts" alt="">Рубашки</a></li>
                            <li><a href="index.html/men/clothes/hoodies" alt="">Толстовки</a></li>
                            <li><a href="index.html/men/clothes/tshirts" alt="">Футболки</a></li>
                            <li><a href="index.html/men/clothes/shorts" alt="">Шорты</a></li>
                         </ul>
                          <ul className="subSubCategory"><a id="subSubCategory" href="index.html/men/accesories" alt="">Аксессуары</a>
                            <li><a href="index.html/men/accesories/underwear" alt="">Нижнее белье</a></li>
                            <li><a href="index.html/men/accesories/socks" alt="">Носки</a></li>
                            <li><a href="index.html/men/accesories/gloves" alt="">Перчатки</a></li>
                            <li><a href="index.html/men/accesories/hats" alt="">Шапки</a></li>
                            <li><a href="index.html/men/accesories/scarfs" alt="">Шарфы</a></li>
                          </ul>
                      </div>
                    </li>
        
                    <li><a href="index.html/women/" alt="">Женское</a><br></br>
                      <div className="subCategory">
                        <ul className="subSubCategory"><a id="subSubCategory" href="index.html/women/outerwear" alt="">Верхняя одежда</a>
                            <li><a href="index.html/women/outerwear/windbreakers" alt="">Ветровки</a></li>
                            <li><a href="index.html/women/outerwear/jackets" alt="">Куртки</a></li>
                            <li><a href="index.html/women/outerwear/summer" alt="">Летние</a></li>
                            <li><a href="index.html/women/outerwear/parka" alt="">Парки</a></li>
                            <li><a href="index.html/women/outerwear/coat" alt="">Пальто</a></li>
                            <li><a href="index.html/women/outerwear/furcoats" alt="">Шубы</a></li>
                        </ul>
                        <ul className="subSubCategory"><a id="subSubCategory" href="index.html/women/clothes" alt="">Одежда</a>
                            <li><a href="index.html/women/clothes/pants" alt="">Брюки</a></li>
                            <li><a href="index.html/women/clothes/jeans" alt="">Джинсы</a></li>
                            <li><a href="index.html/women/clothes/longslives" alt="">Лонгсливы</a></li>
                            <li><a href="index.html/women/clothes/polo" alt="">Поло</a></li>
                            <li><a href="index.html/women/clothes/shirts" alt="">Рубашки</a></li>
                            <li><a href="index.html/women/clothes/hoodies" alt="">Толстовки</a></li>
                            <li><a href="index.html/women/clothes/tshirts" alt="">Футболки</a></li>
                            <li><a href="index.html/women/clothes/shorts" alt="">Шорты</a></li>
                         </ul>
                        <ul className="subSubCategory"><a id="subSubCategory" href="index.html/women/accesories" alt="">Аксессуары</a>
                            <li><a href="index.html/women/accesories/underwear" alt="">Нижнее белье</a></li>
                            <li><a href="index.html/women/accesories/socks" alt="">Носки</a></li>
                            <li><a href="index.html/women/accesories/gloves" alt="">Перчатки</a></li>
                            <li><a href="index.html/women/accesories/hats" alt="">Шапки</a></li>
                            <li><a href="index.html/women/accesories/scarfs" alt="">Шарфы</a></li>
                          </ul>
                      </div>
                    </li>
        
                    <li><a href="index.html/sale/" alt="">Распродажа</a><br></br>
                      <div className="subCategory">
                        <ul className="subSubCategory"><a id="subSubCategory" href="index.html/sale/outerwear" alt="">Верхняя одежда</a>
                            <li><a href="index.html/sale/outerwear/windbreakers" alt="">Ветровки</a></li>
                            <li><a href="index.html/sale/outerwear/jackets" alt="">Куртки</a></li>
                            <li><a href="index.html/sale/outerwear/summer" alt="">Летние</a></li>
                            <li><a href="index.html/sale/outerwear/parka" alt="">Парки</a></li>
                            <li><a href="index.html/sale/outerwear/coat" alt="">Пальто</a></li>
                            <li><a href="index.html/sale/outerwear/furcoats" alt="">Шубы</a></li>
                        </ul>
                        <ul className="subSubCategory"><a id="subSubCategory" href="index.html/sale/clothes" alt="">Одежда</a>
                            <li><a href="index.html/sale/clothes/pants" alt="">Брюки</a></li>
                            <li><a href="index.html/sale/clothes/jeans" alt="">Джинсы</a></li>
                            <li><a href="index.html/sale/clothes/longslives" alt="">Лонгсливы</a></li>
                            <li><a href="index.html/sale/clothes/polo" alt="">Поло</a></li>
                            <li><a href="index.html/sale/clothes/shirts" alt="">Рубашки</a></li>
                            <li><a href="index.html/sale/clothes/hoodies" alt="">Толстовки</a></li>
                            <li><a href="index.html/sale/clothes/tshirts" alt="">Футболки</a></li>
                            <li><a href="index.html/sale/clothes/shorts" alt="">Шорты</a></li>
                         </ul>
                        <ul className="subSubCategory"><a id="subSubCategory" href="index.html/sale/accesories" alt="">Аксессуары</a>
                            <li><a href="index.html/sale/accesories/underwear" alt="">Нижнее белье</a></li>
                            <li><a href="index.html/sale/accesories/socks" alt="">Носки</a></li>
                            <li><a href="index.html/sale/accesories/gloves" alt="">Перчатки</a></li>
                            <li><a href="index.html/sale/accesories/hats" alt="">Шапки</a></li>
                            <li><a href="index.html/sale/accesories/scarfs" alt="">Шарфы</a></li>
                          </ul>
                      </div>
                    </li>
                  </ul>
                <div className="right">
                    <input id="searchInput" placeholder="Поиск" name="text" type="text"></input>
                    <a href="index.html/checkout" alt=""><img src="/images/cart32x32.png" alt=""></img></a>
                    <a href="index.html/profile" alt=""><img src="/images/profile32x32.png" alt=""></img></a> 
                    
                </div>
              </nav>
              </header>
        )
    }

}

export default Header
