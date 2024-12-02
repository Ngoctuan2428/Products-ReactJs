import React, { Component } from 'react';
import Products from '../components/Products';
import Product from "../components/Product";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addToCart, changeMessage } from '../actions/index';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts = (products) => {
        var elmProducts = [];
        if (products) {
            elmProducts = products.map(
                product => {
                    return <Product
                        key={product.id}
                        product={product}
                        onAddToCart={this.props.onAddToCart}
                        onChangeMessage={this.props.onChangeMessage}
                    />
                }
            );
        }
        return elmProducts;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    onAddToCart: product => dispatch(addToCart(product)),
    onChangeMessage: message => dispatch(changeMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);