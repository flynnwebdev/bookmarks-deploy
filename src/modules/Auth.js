import {
    api,
    setJwt
} from '../api'
import {
    setState
} from '../components/State'

export const login = async (email, password) => {
    const result = await api.post('/auth/login', {
        email,
        password
    })
    setState({
        token: result.data.token
    })
    setJwt(result.data.token)
}

export const logout = () => {
    api.get('/auth/logout').then(() => {
        setState({
            token: null
        })
        setJwt(null)
    })
}