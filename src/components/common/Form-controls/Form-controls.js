import React from 'react';
import classes from './Form-controls.module.css';

const FormControl = ({meta, children}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={classes.formControl + ' ' + (hasError && classes.hasError)}>
            {children}
            <span className={classes.errorMessage}>{hasError && meta.error}</span>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, innerText, ...restProps} = props;
    return (
        <FormControl {...props}> <span className={classes.innerText}>{innerText}</span>
        <textarea className={!!innerText && classes.wideTextarea} {...input} {...restProps}/> </FormControl>
    )
}
export const Input = (props) => {
    const {input, meta, innerText, ...restProps} = props;
    return (
        <FormControl {...props}> <span className={classes.innerText}>{innerText}</span>
        <input className={!!innerText && classes.wideInput}{...input} {...restProps}/> </FormControl>
    )
}
