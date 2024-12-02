import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var index = -1;
    var {product} = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product);
            var cartAdd = [...state];
            if(index !== -1){
                cartAdd[index] = {
                    ...cartAdd[index],
                    quantity: cartAdd[index].quantity + 1
                }
            }
            else {
                cartAdd.push({
                    product,
                    quantity: 1
                });
            }
            localStorage.setItem('cart', JSON.stringify(cartAdd));
            return cartAdd;
        case types.DELETE_PRODUCT_IN_CART:
            var cartDel = [...state];
            index = findIndex(state, product);
            if(index !== -1){
                cartDel.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(cartDel));
            return cartDel;
        case types.UPDATE_PRODUCT_IN_CART:
            var cartUpdate = [...state];
            index = findIndex(state, product);
            if(index !== -1){
               cartUpdate[index] = {
                   ...cartUpdate[index],
                   quantity: action.quantity
               }
            }
            localStorage.setItem('cart', JSON.stringify(cartUpdate));
            return cartUpdate;
        default:
            return state;
    }
};

var findIndex = (cart, product) => {
    var index = -1;
    if(cart.length > 0){
        for(var i = 0; i < cart.length; i++)
            if( cart[i].product.id === product.id){
                index = i;
                break;
            }
    }
    return index;
}

export default cart;