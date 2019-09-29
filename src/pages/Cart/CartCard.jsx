import React from 'react';
import Button from '../../components/Button/Button';

const CartCard = ({name, onClick, index}) => {
    return (
        <div className="cart__card">
            <div className="cart__card-index">{index}.</div>
            <div className="cart__card-name">{name}</div>
            <Button className="cart__card-button" onClick={onClick}>
                Remove
            </Button>
        </div>
    )
}

export default CartCard;