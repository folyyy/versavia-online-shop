import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './CategoryBody.css'

export class CategoryBody extends Component {
    constructor(props) {
        super(props);
        this.outputDB(props.reqName);
        this.state = {
            list: [],
        }
    }

    outputDB = (reqName) => {
        fetch('/api/' + reqName)
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }
    render() {
        const {list} = this.state;
        return (
            <div className="categorySection">
                {list.length ? (
                <div>
                    {list.map((item) => {
                        return(
                        <div key={item.code}>
                            <div className="product" id={item.code}>
                                <Link to = {{pathname: `/item/${item.code}`}}><img style={{width: 256, height: 256}} src={"/images/"+item.image} alt=""></img></Link>
                                <a className="catLink" href="/category/"><p>{item.category}</p></a>
                                <h2>{item.name}</h2>
                                <span>{item.productprice} ₽</span>
                            </div>
                        </div>
                        );
                    })}
                </div>
                ) : (
                <div>
                </div>
                    )
                }
                <p id="hashtag">#</p>
            </div>
        )
    }
}

export default CategoryBody;
