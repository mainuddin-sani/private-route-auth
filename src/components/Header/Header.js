import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './header.css'
const Header = () => {
    const {user} = useFirebase({});
    return (
        <div>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <span>{user.displayName}</span>
                    <button>LogOut</button>
                </li>
            </ul>
        </div>
    );
};

export default Header;