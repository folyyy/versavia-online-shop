import React, { Component } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../layout/Item.css'


export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    getData = () => {
        let data = this.props.match.params.id;
        let dataObject = { data };
        fetch('/api/getProductById', {
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
                this.props.history.push('/home')
              } else {
              this.setState({ list })
              }
            })
    } 

  componentDidMount() {
    this.getData();
}
    render() {
        var { list } = this.state;
        return (
            <div>
                <Header />
                    <div className="itemPage">
                    {list.map((item) => {
                        return (
                        <div key={item.code}>
                            <div className="productWrapper">
                                <img src={`/images/${item.image}`} alt=""></img>
                            </div>
                            <div className="infoWrapper">
                                <h2>{item.name}</h2>
                                <p id="itemPrice">{item.productprice}</p>
                                <p id="itemCategory">{item.category}</p>
                                <input id="itemCartInput" type="submit" value="Добавить в корзину"></input>
                            </div> 
                        </div>
                        );
                    })}
                        <p id="hashtag">#</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Item
