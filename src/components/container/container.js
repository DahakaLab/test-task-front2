import React, { Component } from 'react';
import allProductData from "../../data/products.json";
import Product from "./productPattern";

export default class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            allProductDataState: allProductData,
            page: [0,20]
        };
    }

    render(){
        return(
            <div className="sub_category_page container">

                <div className="page_link_container">

                    <button onClick={() => this.setState({page: [0,20]})}>1 страница</button>
                    <button onClick={() => this.setState({page: [20,40]})}>2 страница</button>
                    <button onClick={() => this.setState({page: [40,60]})}>3 страница</button>
                    <button onClick={() => this.setState({page: [60,80]})}>4 страница</button>
                    <button onClick={() => this.setState({page: [80,100]})}>5 страница</button>

                </div>

                <Product data={this.state.allProductDataState} dataPage={this.state.page}/>

                <div className="page_link_container">

                    <button onClick={() => this.setState({page: [0,20]})}>1 страница</button>
                    <button onClick={() => this.setState({page: [20,40]})}>2 страница</button>
                    <button onClick={() => this.setState({page: [40,60]})}>3 страница</button>
                    <button onClick={() => this.setState({page: [60,80]})}>4 страница</button>
                    <button onClick={() => this.setState({page: [80,100]})}>5 страница</button>

                </div>

            </div>
        )
    }
}