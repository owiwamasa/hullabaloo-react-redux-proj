import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch } from 'react-redux'
import './LoginForm.css'


const LoginForm = () => {
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

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
                    <div className='login-h3-container'>
                        <h3 className='login-h3'>Log In</h3>
                    </div>
                    <div className='errors-container'>
                        <ul className='errors'>
                            {errors && errors.map((err, idx) => (
                                <li key={idx}>{err}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='login-inputs'>
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
                            >
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
                            >
                            </input>
                        </div>
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

export default LoginForm
