import React, { Component } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../layout/Purchases.css'

export class Purchases extends Component {
    constructor(props) {
        super(props);
        this.outputDB();
        this.state = {
            list: [],
        }
    }
      outputDB = () => {
          fetch('/api/outputPurchasesDB')
          .then(res => res.json())
          .then(list => this.setState({ list }))
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
                        <div key={item.id}>
                        <h3>ID: {item.id}</h3>
                        <p>userId: {item.userId} | status:{item.status} | products: {item.products} | deliveryType: {item.deliveryType} | firstName: {item.firstName} 
                        | lastName: {item.lastName} | phoneNumber: {item.phoneNumber} | email: {item.email} | city: {item.city} | address: {item.address} | building: {item.building} 
                        | housing: {item.housing} | apartment: {item.apartment} | totalSum: {item.totalSum} | dateOfPurchase: {item.dateOfPurchase} 
                        | dateOfDelivery: {item.dateOfDelivery}
                        </p>
                        </div>
                        );
                    })}
                    </div>

                    <input id="databaseUpdateProductButton" type="submit" value="Обновить данные в покупке" onClick={() => {this.updateProductMenu()} }></input>
                    <input id="databaseDeleteProductButton" type="submit" value="Удаить покупку" onClick={() => {this.deleteProductMenu()} }></input>
    
                    <form action="/api/updatePurchase" method="POST" hidden id="databaseUpdateProduct">
                    <input placeholder="Введите ID покупки" name="code" type="text"></input>
                    <input placeholder="Введите новое значение" name="newValue" type="text"></input>
                    <select name="param">
                    <option defaultValue value="name">userId</option>
                    <option value="status">status</option>
                    <option value="products">products</option>
                    <option value="deliveryType">deliveryType</option>
                    <option value="firstName">firstName</option>
                    <option value="lastName">lastName</option>
                    <option value="phoneNumber">phoneNumber</option>
                    <option value="email">email</option>
                    <option value="city">city</option>
                    <option value="address">address</option>
                    <option value="building">building</option>
                    <option value="housing">housing</option>
                    <option value="apartment">apartment</option>
                    <option value="totalSum">totalSum</option>
                    <option value="dateOfPurchase">dateOfPurchase</option>
                    <option value="dateOfDelivery">dateOfDelivery</option>
                    </select>
                    <button>Отправить</button>
                    </form>
                    
                    <form action="/api/deletePurchase" method="POST" hidden id="databaseDeleteProduct">
                    <input placeholder="ID покупки" name="id" type="text"></input>
                    <button>Отправить</button>
                    </form>
                </div>
            <Footer />
        </div>
        )
    }
}

export default Purchases
