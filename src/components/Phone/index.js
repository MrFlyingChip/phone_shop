import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as ShopActions from "../../actions/ShopActions";
import './styles.css';

export class Phone extends Component {

    addToCart(){
        this.props.actions.addToCart(this.props.phone)
    }

    isInCart(phone){
        const cart = this.props.shop.cart || [];
        let inCart = false;
        cart.forEach(function (item) {
            if(item.id === phone.id){
                inCart = true;
            }
        })
        return inCart;
    }

    canBuyPhone(phone){
        return phone.countProducts > 0;
    }

    render() {
        const phone = this.props.phone || {};
        return (
            <div className="phone">
                <p className={'phone-name'}>{phone.productName}</p>
                <div className={'phone-image'} style={{backgroundImage: 'url(' + phone.image + ')'}}></div>
                <div className={'phone-info-holder'}>
                    <p className={'phone-info'}>{phone.brandName}</p>
                    <p className={'phone-info'}>OS: {phone.operationSystem}</p>
                    <p className={'phone-info'}>NumCards: {phone.numSimCard}</p>
                    <p className={'phone-price'}>{phone.priceUAH}₴</p>
                    {(this.canBuyPhone(phone)) ?
                        (!this.isInCart(phone)) ?
                            <button onClick={this.addToCart.bind(this)} className={'buy-button available'}>Buy now</button>
                            : <button className={'buy-button in-cart'}>In cart</button>
                        : <button className={'buy-button not-available'}>Not available</button>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shop: state.shop
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ShopActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone)