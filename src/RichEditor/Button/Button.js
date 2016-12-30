import React, {PropTypes} from 'react';
import './Button.css';
import {Icon} from 'react-fa';

const Button = (props) => {
    const _onToggle = (e) => {
        e.preventDefault();

        props.onToggle(props.style);
    }

    let className = 'button';
    if (props.active) {
        className += ' activeButton';
    }

    return (
        <span className={className} onMouseDown={_onToggle}>
            {props.icon && <Icon name={props.icon}/>}
            {props.label && <span>{props.label}</span>}
        </span>
    );
}

Button.propTypes = {
    style: PropTypes.string.isRequired,
    active: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.string,
    onToggle: PropTypes.func.isRequired
};

export default Button;