import React from 'react';
import classNames from 'classnames';
import './Input.scss';

const Input = ({isError, className, errorText, ...rest}) => {
    return (
        <div className={classNames("input-box", className, {"input-box_error": isError})}>
            <input  className="input" {...rest}/>
            {isError && <span className="input-error">{errorText}</span>}
        </div>
    )
}

export default Input;