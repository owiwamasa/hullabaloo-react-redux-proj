import { NavLink, useHistory } from 'react-router-dom';
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
    const history = useHistory()


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
                </div>
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
