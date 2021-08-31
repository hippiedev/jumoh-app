import React from 'react';
import classes from './Button.module.css';

function Button(props) {
    const {children} = props
    return (
        <button className={classes.Button} style={{
            background: props.primary ? '#FF4500' : '##000080',
            ...props
            }}>
            {children}
        </button>
    )
}

export default Button
