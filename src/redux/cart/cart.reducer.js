import { cartActionTypes } from './cart.types';
import { addItemToCart, clearItemFromCart, deleteItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }

        case cartActionTypes.DELETE_ITEM:
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;




