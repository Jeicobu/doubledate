import React from 'react';

import Button from './basic-components/Button.js';
import Input from './basic-components/Input.js';

class LoginForm extends React.Component {
    render () {
        return (
            <div>
                <div className="loginForm">
                    <Input customClassNames={["loginName"]} placeholder='Login' />
                    <Input customClassNames={["loginPass"]} placeholder='Password' />
                    <a href="#">Reset password</a>
                    <Button customClassNames="loginSubmit"/>
                </div>
                <a href="#">Not a member? Register here</a>
            </div>
        )
    }
}

export default LoginForm;