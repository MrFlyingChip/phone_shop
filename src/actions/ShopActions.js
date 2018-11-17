import {IMAGE_URL, API_URL, FETCH_ALL_PHONES, ADD_TO_CART, REMOVE_FROM_CART, CHECK_COOKIE, RELOAD_COOKIE} from "../constants/Shop";
import fetch from 'cross-fetch'

export function fetchAllPhones() {
    return(dispatch)=>{
        dispatch(requestPhones());

        fetch(API_URL + 'getphones')
            .then(res => res.json())
            .then(
                (result) => {
                    let phones = result;
                    phones.forEach(function (item) {
                        item['image'] = IMAGE_URL + '/phones/' + item.id + '.jpg';
                    });
                    dispatch(receivePhones(phones));
                },
                (error) => {
                    let phones = [];
                    dispatch(receivePhones(phones));
                }
            );
    };
}

export function requestPhones() {
    return (dispatch) => {
        dispatch({
            type: FETCH_ALL_PHONES,
            payload: [],
            isLoaded: false
        });
    }
}

export function receivePhones(phones) {
    return (dispatch) => {
        dispatch({
            type: FETCH_ALL_PHONES,
            payload: phones,
            isLoaded: true
        });
    }
}

export function addToCart(phone) {
    return (dispatch, getState) => {
        const cart = getState().shop.cart;
        cart.push(phone);
        window.localStorage.setItem('rr_cart', JSON.stringify(cart));
        dispatch({
            type: ADD_TO_CART,
            payload: cart
        });
    }
}

export function reloadCartCookie() {
    return (dispatch, getState) => {
        const cart = getState().shop.cart;
        window.localStorage.setItem('rr_cart', JSON.stringify(cart));
        dispatch({
            type: RELOAD_COOKIE,
            payload: cart
        });
    }
}

export function removeFromCart(phone) {
    return (dispatch, getState) => {
        let cart = getState().shop.cart;
        cart = cart.filter(function (item) {
            return item.id !== phone.id
        });
        window.localStorage.setItem('rr_cart', JSON.stringify(cart));
        dispatch({
            type: REMOVE_FROM_CART,
            payload: cart
        });
    }
}

export function checkCookie() {
    return (dispatch, getState) => {
        let cart = JSON.parse(window.localStorage.getItem('rr_cart')) || [];
        dispatch({
            type: CHECK_COOKIE,
            payload: cart
        });
    }
}
