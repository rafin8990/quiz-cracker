import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div>Quiz Cracker</div>
          <div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/statictics'}>Statictics</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/about'}>About</Link>
          </div>
        </div>
    );
};

export default Header;