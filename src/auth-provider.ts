import {User} from "./screens/project-lilst/search-panel";
const apiUrl = process.env.REACT_APP_API_URL

const localStorageKey = '__auth_provider_token__';

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}:{user:User}) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = (param: { username: string, password: string}) => {
    return  fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(param)
    }).then(async response => {
        if(response.ok){
            return handleUserResponse(await response.json())
        }
        return Promise.reject(param)
    })
}

export const register = (param: { username: string, password: string}) => {
    return  fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(param)
    }).then(async response => {
        if(response.ok){
            return handleUserResponse(await response.json())
        }
        return Promise.reject(param)
    })
}
export const logout = async () => window.localStorage.removeItem(localStorageKey)
