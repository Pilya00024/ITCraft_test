import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarketCard from './MarketCard';
import { addProductInCart } from '../../utils/redux/actions/marketAction'
import './Market.scss';

class Market extends Component {

    handleChose = (id) => {
        const { addProductInCart } = this.props;
        addProductInCart(id);
    }

    render() {
        const { marketList } = this.props;
        return (
            <div className="market">
                <div className="market__title">Market</div>
                <div className="market__list">
                    {
                        marketList.map((item) => (
                            <MarketCard
                                key={item.id}
                                {...item}
                                onClick={() => this.handleChose(item.id)}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    marketList: state.marketList,
});

export default connect(mapStateToProps, { addProductInCart })(Market);