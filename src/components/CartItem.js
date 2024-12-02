import React, { Component } from 'react';
import * as Message from '../constants/Message';

class CartItem extends Component {
    render() {
        var { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.image} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateCartItem(item.product, item.quantity - 1)}
                        >
                            <a href="#">—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateCartItem(item.product, item.quantity + 1)}
                        >
                            <a href="#">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={()=> this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    showTotal = (price, quantity) => {
        return price*quantity;
    }

    onDelete = product => {
        this.props.onDeleteProductInCart(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateCartItem = (product, quantity) => {
        if(quantity > 0){     
            this.props.onUpdateCartItem(product, quantity);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }
}

export default CartItem;