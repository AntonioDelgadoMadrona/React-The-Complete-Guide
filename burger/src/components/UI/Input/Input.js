import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const Input = props => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className={classes.Error}>Please enter a valid value!</p>
    }

    switch (props.elementType) {
        case 'input':
            inputElement = (
                <input
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                    {...props.elementConfig}
                />
            )
            break;
        case 'textarea':
            inputElement = (
                <textarea
                    className={inputClasses}
                    value={props.value}
                    onChange={props.changed}
                    {...props.elementConfig}
                />
            )
            break;
        case 'select':
            inputElement = (
                <select
                    className={inputClasses}
                    value={props.value}
                    onChange={props.changed}
                    {...props.elementConfig}
                >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = (
                <input
                    className={inputClasses}
                    value={props.value}
                    onChange={props.changed}
                    {...props.elementConfig}
                />
            )
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
};

Input.propTypes = {

};

export default Input;
