import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignUpFormModal />
            </>
        );
    }

    return (
        <div className='navbar'>
            <NavLink exact to="/" className='nav-home'>Home</NavLink>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;
