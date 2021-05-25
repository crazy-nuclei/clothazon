import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((aQ, cartItem) => aQ + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((aQ, cartItem) => aQ + cartItem.quantity * cartItem.price, 0)
);