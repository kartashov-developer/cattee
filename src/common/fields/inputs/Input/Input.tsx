import React from 'react';

import classes from './Input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = (
  { isError = false, helperText, ...props },
) => {
  // isError true ->  className add 'input_error'
  const className = isError
    ? `${classes.input} ${classes.input_error}`
    : classes.input;

  return (
    <>
      <input
        className={`${classes.input} ${isError
          ? classes.input_error
          : ''}`}
        {...props}
      />

      {/* isError+helperText=true -> show helper_text */}
      {isError && helperText && (
        <div className={classes.input_helper_text}>
          {helperText}
        </div>
      )}
    </>
  );
};
