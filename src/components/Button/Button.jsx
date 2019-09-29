import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = ({children, className, ...rest}) => {
    return (
        <button className={classNames("button", className)} {...rest}>
            {children}
        </button>
    )
}

export default Button;