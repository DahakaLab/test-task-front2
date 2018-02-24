import React, { Component } from 'react';
import allProductData from "../../data/products.json";
import Product from "./productPattern";

export default class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            allProductDataState: allProductData
        };

    }


    render(){
        return(
            <div className="sub_category_page container">
                <Product data={this.state.allProductDataState}/>
            </div>
        )
    }
}