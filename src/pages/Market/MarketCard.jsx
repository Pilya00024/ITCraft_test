import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import routeNames from '../../utils/routeNames';

const MarketCard = ({name, description, inCart, onClick}) => {
    return (
        <div className="market__card">
            <div className="market__card-name">{name}</div>
            <div className="market__card-description">{description}</div>
            {
                inCart ? (
                    <Button><Link to={routeNames.cart}>Go to cart</Link></Button>
                ) : (
                    <Button onClick={onClick}>
                        Add to cart
                    </Button>
                )
            }
        </div>
    )
}
    

export default MarketCard;