import React, { Component } from 'react';
import ItemProduct from './itemProduct.js';

export default class Product extends Component {
    render() {
        const data = this.props.data;
        let productTemplate;

        if (data.length > 0) {
            productTemplate = this.props.data.map(function (item, index) {
                return (
                    <div key={index}>
                        <ItemProduct data={item}/>
                    </div>
                );
            });
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