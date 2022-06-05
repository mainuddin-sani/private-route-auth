import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {googleLoginUser} = useFirebase({});
    return (
        <div>
            <h1>Login</h1>
            <button onClick={googleLoginUser}>Google login</button>
        </div>
    );
};

export default Login;