import React from 'react'
import { login, logout } from '../modules/Auth'

export let state
export let setState

export default function withState(WrappedComponent) {
    return class App extends React.Component {
        state = {
            token: null,
            login,
            logout
        }
        render() {
            state = this.state
            setState = (newState) => this.setState({ ...this.state, ...newState })

            console.log(state)

            return <WrappedComponent {...this.props} />
        }
    }
}
