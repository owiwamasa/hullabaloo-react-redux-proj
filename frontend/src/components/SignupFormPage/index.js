import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as sessionActions from '../../store/session'
import './SignupForm.css'

function SignupFormPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const sessionUser = useSelector((state => state.session.user))

    if (sessionUser) return <Redirect to='/' />

    const onSubmit = (e) => {
        e.preventDefault()
        const errors = []

        if (password === confirmPassword) {
            setErrors([])
            return dispatch(sessionActions.signup({ username, email, password }))
                .catch(async (res) => {
                    const data = await res.json()
                    if (data && data.errors) setErrors(errors)
                })
        }
        return setErrors(['Passwords must match'])
    }

    return (
        <div className='signup-form-div'>
            <form onSubmit={onSubmit}>
                <div className='signup-content'>
                    <h3 className='signup-h3'>Sign Up</h3>
                    <div>
                        <ul className='signup-errors'>
                            {errors && errors.map((err, idx) => (
                                <li key={idx}>{err}</li>
                            ))}
                        </ul>
                    </div>
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
                            required
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
                            required
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
                            required
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
                            required
                        >
                        </input>
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

export default SignupFormPage
