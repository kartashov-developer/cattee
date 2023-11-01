import React, { useState } from 'react';

import classes from './Input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  isError = false,
  helperText,
  type = 'text',
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordToggle = value && type === 'password';

  return (
    <div className={classes.input_container}>
      <input
        className={`${classes.input} ${isError ? classes.input_error : ''}`}
        value={value}
        type={showPasswordToggle && showPassword ? 'text' : type}
        {...props}
      />
      {/* isError+helperText=true -> show helper_text */}
      {isError && helperText && (
        <div className={classes.input_helper_text}>{helperText}</div>
      )}
      {/* TODO: aria-hidden */}
      {showPasswordToggle && (
        <div
          className={classes.password_toggle_container}
          onClick={() => setShowPassword(!showPassword)}
          aria-hidden="true"
        >
          {showPassword ? 'hide' : 'show'}
        </div>
      )}
    </div>
  );
};
