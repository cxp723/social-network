import React from "react";
import classes from "./Form-controls.module.css";
import cn from "classnames";
import { Field } from "redux-form";

type MetaType = {
  error: string;
  touched: boolean;
};
type PropsType = {
  meta: MetaType;
};
type InputPropsType = {
  name: string;
  placeholder?: string;
  type?: string;
};
const FormControl: React.FC<PropsType> = ({ meta, children }) => {
  const hasError = !!meta.error && meta.touched;
  return (
    <div className={cn(classes.formControl, hasError && classes.hasError)}>
      {children}
      <span className={classes.errorMessage}>{hasError && meta.error}</span>
    </div>
  );
};

type FieldPropsType = {
  input: InputPropsType;
  meta: MetaType;
  innerText: string;
};
export const createField = (
  name: string,
  placeholder: string,
  type?: string | React.ReactNode,
  innerText?: string
): React.ReactNode => {
  return <Field />;
};
export const Textarea: React.FC<FieldPropsType> = ({
  input,
  meta,
  innerText,
  ...restProps
}) => {
  return (
    <FormControl meta={meta}>
      <span className={classes.innerText}>{innerText}</span>
      <textarea
        className={!!innerText ? classes.wideTextarea : undefined}
        {...input}
        {...restProps}
      />
    </FormControl>
  );
};
export const Input: React.FC<FieldPropsType> = ({
  input,
  meta,
  innerText,
  ...restProps
}) => {
  return (
    <FormControl meta={meta}>
      <span className={classes.innerText}>{innerText}</span>
      <input
        className={!!innerText ? classes.wideInput : undefined}
        {...input}
        {...restProps}
      />
    </FormControl>
  );
};
