import {FETCH_ALL_PHONES, ADD_TO_CART, REMOVE_FROM_CART, CHECK_COOKIE, RELOAD_COOKIE} from "../constants/Shop";

let initialState = {
    phones: [],
    cart: [],
    isLoaded: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_PHONES:
            return {...state, phones: action.payload, isLoaded: action.isLoaded};
        case ADD_TO_CART:
            return {...state, cart: action.payload};
        case REMOVE_FROM_CART:
            return {...state, cart: action.payload};
        case CHECK_COOKIE:
            return {...state, cart: action.payload};
        case RELOAD_COOKIE:
            return {...state, cart: action.payload};
        default:
            return state;
    }
}