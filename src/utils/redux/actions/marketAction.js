import * as types from '../actions/actionTypes';

export const addProductInCart = (id) => ({
    type: types.CHANGE_PRODUCT_STATUS,
    id,
});

export const clearCart = () => ({
    type: types.CLEAR_CART,
});