import React from 'react';
import classNames from 'classnames';
import './Input.scss';

const Input = ({isError, ...rest}) => {
    return (
        <div className={classNames("input-box", {"input-box_error": isError})}>
            <input {...rest}/>
        </div>
    )
}

export default Input;