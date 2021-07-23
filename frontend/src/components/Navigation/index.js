import { NavLink, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import * as sessionActions from '../../store/session'
import logo from '../../images/comedy-heads.png'
import './Navigation.css'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
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

    const goToLanding = () => {
        history.push('/')
    }

    const demoLogin = () => {
        return dispatch(sessionActions.login({ credential: 'Demo', password: 'password' }))
    }


    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <div className='nav-nonuser-menu'>
                <button className='nonuser-btn' onClick={openMenu}>
                    <i className='far fa-user' />
                    <i className="fas fa-caret-down" />
                </button>
                {showMenu &&
                    <div className='nonuser-dropdown'>
                        <div className='dropdown-demo'>
                            <button id='demo-btn' onClick={demoLogin}>Demo</button>
                        </div>
                        <div className='dropdown-signup'>
                            <SignUpFormModal />
                        </div>
                        <div className='dropdown-login'>
                            <LoginFormModal />
                        </div>
                    </div>}
            </div>
        );
    }

    return (
        <div className='navbar'>
            <button className='logo-btn' onClick={() => goToLanding()} >
                <img className='navbar-logo' src={logo} alt='logo' />
            </button>
            <div className='nav-home-n-search'>
                <NavLink to="/home" className='nav-home'>Hullabaloo</NavLink>
            </div>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;
