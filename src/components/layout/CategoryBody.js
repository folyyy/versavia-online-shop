import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './CategoryBody.css'

export class CategoryBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }
    render() {
        const {list} = this.state;
        return (
            <div className="categorySection">
                {/* <h1>List of Items</h1> */}
                {list.length ? (
                <div>
                    {list.map((item) => {
                        return(
                        <div key={item.id}>
                            <div className="product" id={item.id}>
                                <Link to = {{
                                    pathname: `/item/${item.id}`,
                                    parameters: {
                                        id: item.id,
                                        category: item.category,
                                        name: item.name,
                                        image: item.image,
                                        price: item.price
                                    }
                                }}><img style={{width: 256, height: 256}} src={"/images/"+item.image} alt=""></img></Link>
                            {/* <Link to={`/item/${item.id}`} params={{ testvalue: "hello" }}><img style={{width: 256, height: 256}} src={"/images/"+item.image} alt=""></img></Link> */}
                            {/* <a href={`/item/${item.id}`}><img style={{width: 256, height: 256}} src={"/images/"+item.image} alt=""></img></a> */}
                                <a className="catLink" href="/category/"><p>{item.category}</p></a>
                                <h2>{item.name}</h2>
                                <span>{item.price}</span>
                            </div>
                        </div>
                        );
                    })}
                </div>
                ) : (
                <div>
                    <h2>No List Items Found</h2>
                </div>
                    )
                }
                <p id="hashtag">#</p>
            </div>
        )
    }
}

export default CategoryBody;
