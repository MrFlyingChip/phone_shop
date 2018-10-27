import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as ShopActions from "../../actions/ShopActions";
import './styles.css';

export class PhoneTableItem extends Component {
    constructor(props) {
        super(props);
        this.state = {amount: 1};
    }

    removeFromCart(){
        this.props.actions.removeFromCart(this.props.phone)
    }

    addAmount(){
        const phone = this.props.phone || {};
        const quantityInput = window.document.getElementById('quantity' + phone.id);
        let quantity = 0;
        if(quantityInput) {
            quantity = this.state.amount;
            if (quantity < phone.countProducts) {
                quantity++;
                quantityInput.value = quantity;
                this.setState({amount: quantity});
            }
        }
    }

    removeAmount(){
        const phone = this.props.phone || {};
        const quantityInput = window.document.getElementById('quantity' + phone.id);
        let quantity = 0;
        if(quantityInput) {
            quantity = this.state.amount;
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                this.setState({amount: quantity});
            }
        }
    }

    render() {
        const phone = this.props.phone || {};
        const quantity = this.state.amount;
        const sum = quantity * phone.priceUAH || 0;
        return (
            <div className="phone-table-item">
                <p className={'phone-table-item-name'}>{phone.productName}</p>
                <div className={'phone-table-item-image'} style={{backgroundImage: 'url(' + phone.image + ')'}}></div>
                <p className={'phone-table-item-price'}>{phone.priceUAH}₴</p>
                <button onClick={this.removeAmount.bind(this)} className={'add-amount-btn'}>-</button>
                <input type={'number'} min={0} id={'quantity' + phone.id} defaultValue={1} className={'quantity-input'} readOnly={true}/>
                <button onClick={this.addAmount.bind(this)} className={'add-amount-btn'}>+</button>
                <p className={'order-sum'}>{sum}</p>
                <button onClick={this.removeFromCart.bind(this)} className={'remove-btn'}>Remove</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhoneTableItem)