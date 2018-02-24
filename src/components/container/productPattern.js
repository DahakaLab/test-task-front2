import React, { Component } from 'react';
import ItemProduct from './itemProduct.js';

export default class Product extends Component {
    render() {
        const data = this.props.data;
        let productTemplate = [];

        if (data.length > 0) {

            for(let i = 0; i < 20; i++) {
                productTemplate[i] =
                    <div key={i}>
                        <ItemProduct data={this.props.data[i]}/>
                    </div>
            }

        } else {
            productTemplate = <p>Записей по продуктам нет.</p>;
        }

        return (
            <div className="content_view_text">
                {productTemplate}
            </div>
        );
    }
}