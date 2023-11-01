/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import classes from './Input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  isError = false,
  helperText,
  ...props
}) => {
  return (
    <div className={classes.input_container}>
      <input
        className={`${classes.input} ${isError ? classes.input_error : ''}`}
        {...props}
      />
      {/* isError+helperText=true -> show helper_text */}
      {isError && helperText && (
        <div className={classes.input_helper_text}>{helperText}</div>
      )}
    </div>
  );
};
