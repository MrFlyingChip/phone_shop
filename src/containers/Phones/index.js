import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ShopActions from "../../actions/ShopActions";
import Phone from "../../components/Phone";
import './styles.css'

class Phones extends Component {
    componentWillMount() {
        this.props.actions.fetchAllPhones();
    }

    render() {
       const phonesList = this.props.shop.phones || [];
       const phones = phonesList.map(function (item) {
            return <Phone phone={item} key={item.id} cart={false}/>
       });
       const isLoaded = this.props.shop.isLoaded;
        return (
            <div className={'phones'}>
                {(isLoaded) ? phones : <p>Loading...</p>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Phones)