import React, { useState } from 'react';

import PasswordShowIcon from '../../../../assets/password-show.svg';
import PasswordHideIcon from '../../../../assets/password-hide.svg';

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
        >
          {showPassword ? (
            <img
              className={classes.image_password_container}
              src={PasswordShowIcon}
              alt="Hide Password Icon"
            />
          ) : (
            <img
              className={classes.image_password_container}
              src={PasswordShowIcon}
              alt="Show Password Icon"
            />
          )}
        </div>
      )}
    </div>
  );
};
