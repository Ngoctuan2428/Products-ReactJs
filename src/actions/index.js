import * as types from '../constants/ActionType';

export const addToCart = (product, quantity) => ({
    type: types.ADD_TO_CART,
    product,
    quantity
});

export const changeMessage = message => ({
    type: types.CHANGE_MESSAGE,
    message
});

export const deleteProductInCart = product =>({
    type: types.DELETE_PRODUCT_IN_CART,
    product
});

export const updateProductInCart = (product, quantity) =>({
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
});