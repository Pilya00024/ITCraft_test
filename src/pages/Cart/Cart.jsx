import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routeNames from '../../utils/routeNames';
import CartCard from './CartCard';
import { addProductInCart } from '../../utils/redux/actions/marketAction'
import './Cart.scss';

class Cart extends Component {

    removeProduct = (id) => {
        const { addProductInCart } = this.props;
        addProductInCart(id);
    }


    render() {
        const { marketList } = this.props;
        const cartList = !!marketList.length && marketList.filter(product => product.inCart);

        return(
            <div className="cart">
                <div className="cart__title">Cart</div>
                <div className="cartList">
                    {!!cartList.length ? (
                        <>
                            {
                               cartList.map(({id, name, description}) => (
                                    <CartCard
                                        key={id}
                                        name={name}
                                        description={description}
                                        onClick={() => this.removeProduct(id)}
                                    />
                               )) 
                            }
                        </>
                    ) : (
                        <div className="cart__empty">
                            Nothing added to cart" and "add some at <Link to={routeNames.market}>market</Link>.
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    marketList: state.marketList,
});

export default connect(mapStateToProps, { addProductInCart })(Cart);