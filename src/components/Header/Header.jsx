import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routeNames from '../../utils/routeNames';
import { logOutUser } from '../../utils/redux/actions/actionUsers';
import { clearCart } from '../../utils/redux/actions/marketAction';
import './Header.scss';

class Header extends Component {

    logOut = () => {
        const { logOutUser, clearCart } = this.props;
        clearCart();
        logOutUser();
    };

    render() {
        const {isAuthorization, marketList } = this.props;
        const cartList = !!marketList.length && marketList.filter(product => product.inCart);
        return (
            <header className="header">
                <NavLink to={'/'} className="header__logo">IT Craft</NavLink>
                {isAuthorization && (
                    <div className="header__nav-bar">
                        <NavLink to={routeNames.market} className="header__nav-bar__link">Market</NavLink>
                        <NavLink to={routeNames.cart} className="header__nav-bar__link">
                            Cart
                            {!!cartList.length && (<span className="header__cart-counter">{cartList.length}</span>)}
                        </NavLink>
                        <button className="header__nav-bar__link" onClick={this.logOut}>Log out</button>
                    </div>
                )}
            </header>
        )
    }
}

const mapStatetoProps = state => ({
    isAuthorization: state.currentUser.isAuthorization,
    marketList: state.marketList,
})

export default connect(mapStatetoProps, { logOutUser, clearCart })(Header);