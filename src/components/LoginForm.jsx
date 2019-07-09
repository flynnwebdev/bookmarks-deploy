import React, { useState, useContext } from 'react'
import { BookmarkContext } from '../providers/BookmarkProvider';
import { state, setState } from './State'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = state
    const { fetchBookmarks } = useContext(BookmarkContext)

    const doLogin = (e) => {
        e.preventDefault()
        login(email, password).then((res) => {
            fetchBookmarks()
        })
    }

    const emailChanged = (event) => {
        setEmail(event.target.value)
    }

    const passwordChanged = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={doLogin} method="post">
                <fieldset>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={email} onChange={emailChanged} />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} onChange={passwordChanged} />
                </fieldset>
                <button>Login</button>
            </form>
        </div>
    )
}
