import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../layout/Admin.css'

class New extends Component {
  constructor(props) {
    super(props);
    this.outputDB();
    this.state = {
        list: [],
    }
}
  outputDB = async () => {
      const response = await fetch('/api/outputNew')
      const data = await response.json()
      this.setState({list: data})
}

  addProductMenu() {
    console.log("add");
    document.getElementById('databaseAddProduct').hidden=false;
    
}
  updateProductMenu() {
    console.log("update");
    document.getElementById('databaseUpdateProduct').hidden=false;
}
  deleteProductMenu() {
    console.log("delete");
    document.getElementById('databaseDeleteProduct').hidden=false;
}

  render() {
    const {list} = this.state;
    console.log(list);
    return (
    <div>
        <Header />
        <div className="adminBody">
            <div className="productsOutput">
              {list.map((item) => {
                return (
                  <div key={item.code}>
                  <h3>Артикул: {item.code}</h3>
                  <p>Дата: {item.date} | Название:{item.name} | Категория: {item.category} | Изображение: {item.image} | Пол: {item.gender} | Описание: {item.description} 
                  | Страна-производитель: {item.country} | Материал: {item.material} | Цена: {item.productprice} | XS: {item.xs} | S: {item.s} | M: {item.m}
                  | L: {item.l} | XL: {item.xl} | XXL: {item.xxl} | onSale: {JSON.stringify(item.onSale)}</p>
                  </div>
                );
              })}
            </div>

            <input id="databaseAddProductButton" type="submit" value="Добавить товар" onClick={() => {this.addProductMenu()} }></input>
            <input id="databaseUpdateProductButton" type="submit" value="Обновить товар" onClick={() => {this.updateProductMenu()} }></input>
            <input id="databaseDeleteProductButton" type="submit" value="Удалить товар" onClick={() => {this.deleteProductMenu()} }></input>

            <form action="/api/addProduct" method="POST" hidden id="databaseAddProduct">
            <input placeholder="Артикул" name="code" type="text"></input>
            <input placeholder="Название" name="name" type="text"></input>
            <input placeholder="Категория" name="category" type="text"></input>
            <input placeholder="Изображение" name="image" type="text"></input>
            <input placeholder="Пол" name="gender" type="text"></input>
            <input placeholder="Описание" name="description" type="text"></input>
            <input placeholder="Страна-производитель" name="country" type="text"></input>
            <input placeholder="Материал" name="material" type="text"></input>
            <input placeholder="Цена" name="price" type="text"></input>
            <input placeholder="XS" name="xs" type="text"></input>
            <input placeholder="S" name="s" type="text"></input>
            <input placeholder="M" name="m" type="text"></input>
            <input placeholder="L" name="l" type="text"></input>
            <input placeholder="XL" name="xl" type="text"></input>
            <input placeholder="XXL" name="xxl" type="text"></input>
            <input placeholder="onSale" name="onSale" type="text"></input>
            <input type="submit" value="Отправить" />
            </form>


            <form action="/api/updateProduct" method="POST" hidden id="databaseUpdateProduct">
            <input placeholder="Введите артикул модели" name="code" type="text"></input>
            <input placeholder="Введите новое значение" name="newValue" type="text"></input>
            <select name="param">
            <option defaultValue value="name">Название</option>
            <option value="category">Категория</option>
            <option value="image">Изображение</option>
            <option value="gender">Пол</option>
            <option value="description">Описание</option>
            <option value="country">Страна-производитель</option>
            <option value="material">Материал</option>
            <option value="productprice">Цена</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            <option value="onSale">onSale</option>
            </select>
            <button>Отправить</button>
            </form>
              
            <form action="/api/deleteProduct" method="POST" hidden id="databaseDeleteProduct">
            <input placeholder="Артикул" name="code" type="text"></input>
            <button>Отправить</button>
            </form>
        </div>
        <Footer />
    </div>
    );
  }
}
export default New;