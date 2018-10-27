import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import * as ShopActions from "../../actions/ShopActions";
import './styles.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <nav className={'nav'}>
                        <div className={"nav-item"}>
                            <Link to='/phones' activeClassName='active'>Phones</Link>
                        </div>
                        <div className={"nav-item"}>
                            <Link to='/cart' activeClassName='active'>Cart </Link><span className={'cartCount'}>({this.props.shop.cart.length})</span>
                        </div>
                    </nav>
                </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)