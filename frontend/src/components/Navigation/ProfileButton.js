import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory()

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/home')
    };

    return (
        <div className='profile-menu'>
            <button className='profile-btn' onClick={openMenu}>
                <i className='far fa-user' />
                <i className="fas fa-caret-down" />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className='dropdown-my-page'>
                        <button className='my-page-btn' onClick={logout}>{`${user.username}'s Page`}</button>
                    </li>
                    <li className='dropdown-logout'>
                        <button className='logout-btn' onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default ProfileButton;
