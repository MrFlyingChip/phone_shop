import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ShopActions from "../../actions/ShopActions";
import PhoneTableItem from "../../components/PhoneTableItem";
import './styles.css';

class Cart extends Component {

    render() {
        const phonesList = this.props.shop.cart || [];
        const phones = phonesList.map(function (item) {
            return <PhoneTableItem phone={item} key={item.id}/>
        });
        return (
            <div className={'phones-cart'}>
                {phones}
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
        actions: bindActionCreators({...ShopActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)