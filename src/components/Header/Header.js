import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './header.css'
const Header = () => {
    const {user, googleSignOut} = useFirebase();
    console.log(user);
    return (
        <div>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    
                    <Link to='/register'>Register</Link>
                    <span>{user?.displayName}</span>
                    {
                        user?.uid 
                        ? 
                        <button onClick={googleSignOut}>LogOut</button>
                        : 
                        <Link to='/login'>Login</Link>
                    }
                    
                </li>
            </ul>
        </div>
    );
};

export default Header;