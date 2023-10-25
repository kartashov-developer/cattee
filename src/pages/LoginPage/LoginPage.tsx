import React, { useState } from 'react';

import { Input } from '../../common/fields';
import { Button } from '../../common/buttons';

import classes from './LoginPage.module.css';

const validateIsEmpty = (value: string) => {
  if (!value) {
    return 'Field required';
  }

  if (value.length < 3) {
    return 'Username must be at least 3 characters';
  }

  return null;
};

const validateUsername = (value: string) => {
  return validateIsEmpty(value);
};

const validatePassword = (value: string) => {
  validateIsEmpty(value);
};

const loginFormValidateSchema = {
  username: validateUsername,
  password: validatePassword,
};

const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
  return loginFormValidateSchema[name](value);
};

interface FormErrors {
  username: string | null;
  password: string | null;
}

export function LoginPage() {
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    username: null,
    password: null,
  });

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.container_header}>CATTEE</div>
        <div className={classes.container_form}>
          <div className={classes.container_form_input}>
            {/* Username Input */}
            <Input
              placeholder="Username"
              value={formValues.username ?? null}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const username = event.target.value;
                setFormValues({ ...formValues, username });
                const error = validateLoginForm('username', username);
                setFormErrors({ ...formErrors, username: error });
              }}
              {...(!!formErrors.username && {
                isError: !!formErrors.username,
                helperText: formErrors.username,
              })}
            />
            {/* Password Input */}
            <Input
              placeholder="Password"
              value={formValues.password ?? null}
              type="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;
                setFormValues({ ...formValues, password });
                const error = validateLoginForm('password', password);
                setFormErrors({ ...formErrors, password: error });
              }}
              {...(!!formErrors.password && {
                isError: !!formErrors.password,
                helperText: formErrors.password,
              })}
            />
          </div>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>

        <div className={classes.signup_container}>
          Create new account
        </div>
      </div>
    </div>
  );
}
