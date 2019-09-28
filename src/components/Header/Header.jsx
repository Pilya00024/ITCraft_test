import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routeNames from '../../utils/routeNames';
import './Header.scss';

class Header extends Component {
    render() {
        const {isAuthorization, marketList } = this.props;
        const cartList = !!marketList.length && marketList.filter(product => product.inCart);
        return (
            <header className="header">
                <div className="header__logo">IT Craft</div>
                {isAuthorization && (
                    <div>
                        <NavLink to={routeNames.market}>Market</NavLink>
                        <NavLink to={routeNames.cart}>
                            Cart
                            <span className="counter">{cartList.length}</span>
                        </NavLink>
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

export default connect(mapStatetoProps, null)(Header);