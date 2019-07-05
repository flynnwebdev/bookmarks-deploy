import React, { useState, useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { BookmarkContext } from '../providers/BookmarkProvider';

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(AuthContext)
    const { fetchBookmarks } = useContext(BookmarkContext)

    const doLogin = () => {
        login(email, password).then(() => {
            fetchBookmarks()
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={doLogin}>
                <fieldset>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={email} onChange={() => setEmail(this.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} onChange={() => setPassword(this.value)} />
                </fieldset>
                <button>Login</button>
            </form>
        </div>
    )
}
