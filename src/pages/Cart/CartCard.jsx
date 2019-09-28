import React from 'react';
import Button from '../../components/Button/Button';

const CartCard = ({name, description, onClick}) => {
    return (
        <div className="cart__card">
            <div className="cart__card-name">{name}</div>
            <div className="cart__card-description">{description}</div>
            <Button onClick={onClick}>
                Remove
            </Button>
        </div>
    )
}

export default CartCard;