import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import './SignUpForm.css'

function SignUpFormModal() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()

        setErrors([])
        return dispatch(sessionActions.signup({ username, email, password, profilePic }))
            .catch(async (res) => {
                const data = await res.json()
                if (password !== confirmPassword) data.errors.push('Passwords must match.')
                if (data && data.errors) setErrors(data.errors)
            })
    }

    return (
        <div className='signup-form-div'>
            <form onSubmit={onSubmit}>
                <div className='signup-content'>
                    <div className='signup-h3-container'>
                        <h3 className='signup-h3'>Sign Up</h3>
                    </div>
                    <div>
                        <div className='errors-container'>
                            <ul className='errors'>
                                {errors && errors.map((err, idx) => (
                                    <li key={idx}>{err}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='signup-inputs'>
                        <div>
                            <div className='signup-username-input'>
                                <label
                                    className='signup-label'
                                    htmlFor='username'>
                                    Username:
                                </label>
                                <input
                                    className='signup-input'
                                    name='username'
                                    type='text'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='signup-email-input'>
                                <label
                                    className='signup-label'
                                    htmlFor='email'>
                                    Email:
                                </label>
                                <input
                                    className='signup-input'
                                    name='email'
                                    type='text'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='signup-password-input'>
                                <label
                                    className='signup-label'
                                    htmlFor='password'>
                                    Password:
                                </label>
                                <input
                                    className='signup-input'
                                    name='password'
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='signup-confirm-password-input'>
                                <label
                                    className='signup-label'
                                    htmlFor='confirm-password'>
                                    Confirm Password:
                                </label>
                                <input
                                    className='signup-input'
                                    name='confirm-password'
                                    type='password'
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='signup-profile-pic-input'>
                                <label
                                    className='signup-label'
                                    htmlFor='profilePic'>
                                    Profile Picture:
                                </label>
                                <input
                                    className='signup-input'
                                    name='profilePic'
                                    type='text'
                                    placeholder='Optional'
                                    value={profilePic}
                                    onChange={e => setProfilePic(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='signup-btn-div'>
                        <button className='signup-btn'
                            type='submit'
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUpFormModal
