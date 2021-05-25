
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
            }
            else return cartItem;
        })
    }

    return [
        ...cartItems,
        {
            ...cartItemToAdd,
            quantity: 1
        }
    ]

}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDelete.id);

    if (existingCartItem.quantity > 1) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToDelete.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity - 1
                }
            }
            else return cartItem;
        })
    }
    else return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id);
}