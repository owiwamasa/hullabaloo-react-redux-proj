import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './LoginForm.css'


const LoginFormPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    if (sessionUser) return <Redirect to='/' />

    const onSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }

    return (
        <div className='login-form-div'>
            <form onSubmit={onSubmit}>
                <div className='login-content'>
                    <h3 className='login-h3'>Log In</h3>
                    <ul className='errors'>
                        {errors && errors.map((err, idx) => (
                            <li key={idx}>{err}</li>
                        ))}
                    </ul>
                    <div className='login-credentials-input'>
                        <label
                            className='login-label'
                            htmlFor='credential'>
                            Username:
                        </label>
                        <input
                            className='login-input'
                            type='text'
                            name='credential'
                            value={credential}
                            onChange={e => setCredential(e.target.value)}
                            required>
                        </input>
                    </div>
                    <div className='login-password-input'>
                        <label
                            className='login-label'
                            htmlFor='password'>
                            Password:
                        </label>
                        <input
                            className='login-input'
                            type='password'
                            name='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required>
                        </input>
                    </div>
                    <div className='login-submit-btn'>
                        <button
                            className='login-btn'
                            type='submit'
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginFormPage
