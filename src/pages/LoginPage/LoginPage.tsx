import React, { useState } from 'react';
import './LoginPage.css';

import { Input } from '../../common/fields';

export function LoginPage() {
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  return (
    <div className="login-page">
      <div className="login-page_container">
        <div>header</div>
        <div className="login-page_form_container">
          <div>
            <Input
              placeholder='username'
              value={formValues.username}
            />
            <div>validation</div>
          </div>
          <div>
            <Input
              placeholder='123'
              value={formValues.password}
            />
          </div>
          <div>
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
