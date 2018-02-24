import React, { Component } from 'react';

export default class ItemProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitActive: false,
            quantityProduct: 1
        };

    }

    addQuantityProduct(){
        let x = this.state.quantityProduct;
        x++;
        this.setState({quantityProduct: x})
    }

    delQuantityProduct(){
        if(this.state.quantityProduct > 0){
            let x = this.state.quantityProduct;
            x--;
            this.setState({quantityProduct: x})
        }else{
            this.setState({quantityProduct: 0})
        }
    }

    render() {

        const productId = this.props.data.productId,
            code = this.props.data.code,
            title = this.props.data.title,
            description = this.props.data.description,
            primaryImageUrl = this.props.data.primaryImageUrl.substring(0, this.props.data.primaryImageUrl.length - 4) + '_220x220_1.jpg',
            assocProducts = this.props.data.assocProducts.split(';'),
            weight = this.props.data.weight,
            unit = this.props.data.unit,
            unitFull = this.props.data.unitFull,
            unitAlt = this.props.data.unitAlt,
            unitRatioAlt = this.props.data.unitRatioAlt,
            unitFullAlt = this.props.data.unitFullAlt,
            priceRetail = this.props.data.priceRetail.toFixed(2),
            priceRetailAlt = this.props.data.priceRetailAlt.toFixed(2),
            priceGold = this.props.data.priceGold.toFixed(2),
            priceGoldAlt = this.props.data.priceGoldAlt.toFixed(2),
            bonusAmount = this.props.data.bonusAmount,
            hasAlternateUnit = this.props.data.hasAlternateUnit,
            isActive = this.props.data.isActive,
            modified = this.state.modified;

        return (
            <div className={"device_notebooks " + "article "}>
                <div className="column_right column_right_products_container">
                    <div className="product_area">
                        <div className="production_section">
                            <div className="production_page pg_0">
                                <div className="product product_horizontal">
                                    <span className="product_code">Код: {code}</span>

                                    <div className="product_status_tooltip_container">
                                        <span className="product_status">Наличие: {weight}</span>
                                    </div>

                                    <div className="product_photo">
                                        <a className="url--link product__link">
                                            <img alt="product_photo" src={primaryImageUrl}/>
                                        </a>
                                    </div>

                                    <div className="product_description">
                                        <a className="product__link">
                                            {title}
                                        </a>
                                    </div>

                                    <div className="product_tags hidden-sm">
                                        <p>Могут понадобиться:</p>
                                        <a className="url__link"> {assocProducts[0]},</a>
                                        <a className="url__link"> {assocProducts[1]}</a>
                                        <a className="url__link"> {assocProducts[2]}</a>
                                        <a className="url__link"> {assocProducts[3]}</a>
                                        <a className="url__link"> {assocProducts[4]}</a>
                                        <a className="url__link"> {assocProducts[5]}</a>
                                    </div>

                                    <div className="product_units">
                                        <div className="unit--wrapper">
                                            <div className={"unit--select " + (this.state.unitActive === true ? "":"unit--active")} onClick={() => this.setState({unitActive: false})}>
                                                <p className="ng-binding">За {unitAlt}</p>
                                            </div>
                                            <div className={"unit--select " + (this.state.unitActive === false ? "":"unit--active")} onClick={() => this.setState({unitActive: true})}>
                                                <p className="ng-binding">За упаковку</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="product_price_club_card">

                                            <span className="product_price_club_card_text">
                                                По карте<br/>клуба
                                            </span>
                                        <span className="goldPrice">{(this.state.unitActive === false ? priceGoldAlt:priceGold)}</span>
                                        <span className="rouble__i black__i"> Р</span>

                                    </p>

                                    <p className="product_price_default">
                                        <span className="retailPrice">{(this.state.unitActive === false ? priceRetailAlt:priceRetail)}</span>
                                        <span className="rouble__i black__i"> Р</span>
                                    </p>

                                    <div className="product_price_points">
                                        <p className="no-binding">Можно купить за {bonusAmount} баллов</p>
                                    </div>

                                    <div className="list--unit-padd"/>

                                    <div className="list--unit-desc">
                                        <div className="unit--info">
                                            <div className="unit--desc-i"/>
                                            <div className="unit--desc-t">
                                                <p>
                                                    <span className="ng-binding">Продается {unitFull}ми:</span>
                                                    <span className="unit--infoInn">1 {unit} = {unitRatioAlt} {unitAlt}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product__wrapper">
                                        <div className="product_count_wrapped">
                                            <div className="stepper">
                                                <input className="product__count stepper-input" type="text" readOnly={true} value={this.state.quantityProduct}/>
                                                <span className="stepper-arrow up" onClick={() => this.addQuantityProduct()}/>
                                                <span className="stepper-arrow down" onClick={() => this.delQuantityProduct()}/>
                                            </div>
                                        </div>

                                        <span className="btn btn_cart" id={productId}>
                                                <span className="ic ic_cart">K</span>
                                                <span className="ng-binding">В корзину</span>
                                            </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}