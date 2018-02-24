import React, { Component } from 'react';
import ItemProduct from './itemProduct.js';

export default class Product extends Component {
    render() {
        const data = this.props.data;
        let productTamplate;

        if (data.length > 0) {
            productTamplate = this.props.data.map(function (item, index) {
                return (
                    <div key={index}>
                        <ItemProduct data={item}/>
                    </div>
                );
            });
        } else {
            productTamplate = <p>Записей по продуктам нет.</p>;
        }

        return (
            <div className="content_view_text">
                {productTamplate}
            </div>
        );
    }
}