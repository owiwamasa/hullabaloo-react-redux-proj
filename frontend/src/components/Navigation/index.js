import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import * as sessionActions from '../../store/session'
import logo from '../../images/comedy-heads.png'

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
            <div className='nav-nonuser'>
                <button id='demo-btn' onClick={demoLogin}>Demo</button>
                <LoginFormModal />
                <SignUpFormModal />
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
