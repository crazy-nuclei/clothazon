import React from 'react';
import './checkoutItem.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, deletetItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, deletetItem }) => {

    const { imageUrl, name, quantity, price } = cartItem;
    return <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => deletetItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity} </span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
    </div>
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    deletetItem: cartItem => dispatch(deletetItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);