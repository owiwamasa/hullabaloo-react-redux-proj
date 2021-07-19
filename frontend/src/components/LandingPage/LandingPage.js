import { useHistory } from 'react-router-dom'
import './LandingPage.css'
import logo from '../../images/comedy-heads.png'


function LandingPage() {
    const history = useHistory()

    const goToHome = () => {
        history.push('/home')
    }

    return (
        <button className='landing-container' onClick={() => goToHome()}>
            <div className='landing-welcome'>Hullabaloo</div>
            <img className='landing-logo' src={logo} alt='logo' />
            <div className='landing-subtitle'>Discover comedy podcasts <br></br> and create your own!!</div>
        </button>
    )
}

export default LandingPage
