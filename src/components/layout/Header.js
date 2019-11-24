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
                    <li><a href="/men" alt="">Мужское</a><br></br>
                      <div className="subCategory">
                        <ul className="subSubCategory"><a id="subSubCategory" href="/men/outerwear" alt="">Верхняя одежда</a>
                            <li><a href="/men/outerwear/windbreakers" alt="">Ветровки</a></li>
                            <li><a href="/men/outerwear/jackets" alt="">Куртки</a></li>
                            <li><a href="/men/outerwear/summer" alt="">Летние</a></li>
                            <li><a href="/men/outerwear/parka" alt="">Парки</a></li>
                            <li><a href="/men/outerwear/coat" alt="">Пальто</a></li>
                        </ul>
                          <ul className="subSubCategory"><a id="subSubCategory" href="/men/clothes" alt="">Одежда</a>
                            <li><a href="/men/clothes/pants" alt="">Брюки</a></li>
                            <li><a href="/men/clothes/jeans" alt="">Джинсы</a></li>
                            <li><a href="/men/clothes/longslives" alt="">Лонгсливы</a></li>
                            <li><a href="/men/clothes/polo" alt="">Поло</a></li>
                            <li><a href="/men/clothes/shirts" alt="">Рубашки</a></li>
                            <li><a href="/men/clothes/hoodies" alt="">Толстовки</a></li>
                            <li><a href="/men/clothes/tshirts" alt="">Футболки</a></li>
                            <li><a href="/men/clothes/shorts" alt="">Шорты</a></li>
                         </ul>
                          <ul className="subSubCategory"><a id="subSubCategory" href="/men/accesories" alt="">Аксессуары</a>
                            <li><a href="/men/accesories/underwear" alt="">Нижнее белье</a></li>
                            <li><a href="/men/accesories/socks" alt="">Носки</a></li>
                            <li><a href="/men/accesories/gloves" alt="">Перчатки</a></li>
                            <li><a href="/men/accesories/hats" alt="">Шапки</a></li>
                            <li><a href="/men/accesories/scarfs" alt="">Шарфы</a></li>
                          </ul>
                      </div>
                    </li>
        
                    <li><a href="/women/" alt="">Женское</a><br></br>
                      <div className="subCategory">
                        <ul className="subSubCategory"><a id="subSubCategory" href="/women/outerwear" alt="">Верхняя одежда</a>
                            <li><a href="/women/outerwear/windbreakers" alt="">Ветровки</a></li>
                            <li><a href="/women/outerwear/jackets" alt="">Куртки</a></li>
                            <li><a href="/women/outerwear/summer" alt="">Летние</a></li>
                            <li><a href="/women/outerwear/parka" alt="">Парки</a></li>
                            <li><a href="/women/outerwear/coat" alt="">Пальто</a></li>
                            <li><a href="/women/outerwear/furcoats" alt="">Шубы</a></li>
                        </ul>
                        <ul className="subSubCategory"><a id="subSubCategory" href="/women/clothes" alt="">Одежда</a>
                            <li><a href="/women/clothes/pants" alt="">Брюки</a></li>
                            <li><a href="/women/clothes/jeans" alt="">Джинсы</a></li>
                            <li><a href="/women/clothes/longslives" alt="">Лонгсливы</a></li>
                            <li><a href="/women/clothes/polo" alt="">Поло</a></li>
                            <li><a href="/women/clothes/shirts" alt="">Рубашки</a></li>
                            <li><a href="/women/clothes/hoodies" alt="">Толстовки</a></li>
                            <li><a href="/women/clothes/tshirts" alt="">Футболки</a></li>
                            <li><a href="/women/clothes/shorts" alt="">Шорты</a></li>
                         </ul>
                        <ul className="subSubCategory"><a id="subSubCategory" href="/women/accesories" alt="">Аксессуары</a>
                            <li><a href="/women/accesories/underwear" alt="">Нижнее белье</a></li>
                            <li><a href="/women/accesories/socks" alt="">Носки</a></li>
                            <li><a href="/women/accesories/gloves" alt="">Перчатки</a></li>
                            <li><a href="/women/accesories/hats" alt="">Шапки</a></li>
                            <li><a href="/women/accesories/scarfs" alt="">Шарфы</a></li>
                          </ul>
                      </div>
                    </li>
        
                    <li><a href="/sale/" alt="">Распродажа</a><br></br>
                      <div className="subCategory">
                        <ul className="subSubCategory"><a id="subSubCategory" href="/sale/outerwear" alt="">Верхняя одежда</a>
                            <li><a href="/sale/outerwear/windbreakers" alt="">Ветровки</a></li>
                            <li><a href="/sale/outerwear/jackets" alt="">Куртки</a></li>
                            <li><a href="/sale/outerwear/summer" alt="">Летние</a></li>
                            <li><a href="/sale/outerwear/parka" alt="">Парки</a></li>
                            <li><a href="/sale/outerwear/coat" alt="">Пальто</a></li>
                            <li><a href="/sale/outerwear/furcoats" alt="">Шубы</a></li>
                        </ul>
                        <ul className="subSubCategory"><a id="subSubCategory" href="/sale/clothes" alt="">Одежда</a>
                            <li><a href="/sale/clothes/pants" alt="">Брюки</a></li>
                            <li><a href="/sale/clothes/jeans" alt="">Джинсы</a></li>
                            <li><a href="/sale/clothes/longslives" alt="">Лонгсливы</a></li>
                            <li><a href="/sale/clothes/polo" alt="">Поло</a></li>
                            <li><a href="/sale/clothes/shirts" alt="">Рубашки</a></li>
                            <li><a href="/sale/clothes/hoodies" alt="">Толстовки</a></li>
                            <li><a href="/sale/clothes/tshirts" alt="">Футболки</a></li>
                            <li><a href="/sale/clothes/shorts" alt="">Шорты</a></li>
                         </ul>
                        <ul className="subSubCategory"><a id="subSubCategory" href="/sale/accesories" alt="">Аксессуары</a>
                            <li><a href="/sale/accesories/underwear" alt="">Нижнее белье</a></li>
                            <li><a href="/sale/accesories/socks" alt="">Носки</a></li>
                            <li><a href="/sale/accesories/gloves" alt="">Перчатки</a></li>
                            <li><a href="/sale/accesories/hats" alt="">Шапки</a></li>
                            <li><a href="/sale/accesories/scarfs" alt="">Шарфы</a></li>
                          </ul>
                      </div>
                    </li>
                  </ul>
                <div className="right">
                    <input id="searchInput" placeholder="Поиск" name="text" type="text"></input>
                    <a href="/cart" alt=""><img src="/images/cart32x32.png" alt=""></img></a>
                </div>
              </nav>
              </header>
        )
    }

}

export default Header
