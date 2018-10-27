import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ShopActions from "../../actions/ShopActions";
import './styles.css';
import Header from "../../components/Header";

class App extends Component {
    componentWillMount() {
        this.props.actions.fetchAllPhones();
        this.props.actions.checkCookie();
    }

  render() {
        return (
            <div className="root">
                <Header/>
                {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
