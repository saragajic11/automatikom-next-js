import {request} from './HTTP';
import HttpMethod from "../Constants/Base/HttpMethod";

/** OAUTH **/

export async function login(username, password) {

    clearUserData();

    let data = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        grant_type: 'password',
        username: username,
        password: password
    };

    return await request('/oauth/v2/token', data, HttpMethod.POST).then((response) => {

            if (!response || !response.ok) {
                return response;
            }

            setTokenToLocalStorage(response.data.token, response.data.token);

            return request('/api/users/current').then((response) => {

                if(response.data.user) {
                    setUserToLocalStorage({
                        ...response.data.user
                    });
                }

                return response;
            });
        }
    );
}

export function logout() {
    clearUserData();
}

export function lock() {
    clearUserDataLock();
}

/** LOCAL STORAGE  **/

export function setUserToLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserFromLocalStorage() {

    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export function setTokenToLocalStorage(access_token, refresh_token) {
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, access_token);
    localStorage.setItem(process.env.REACT_APP_REFRESH_TOKEN_KEY, refresh_token);
}

export function getRefreshToken() {
    return localStorage.getItem(process.env.REACT_APP_REFRESH_TOKEN_KEY);
}

export function getToken() {
    return localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
}

export function clearUserData() {
    localStorage.removeItem('user');
    clearUserDataLock();
}

export function clearUserDataLock() {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
    localStorage.removeItem(process.env.REACT_APP_REFRESH_TOKEN_KEY);
}

export function isUserLoggedIn() {
    return getUserFromLocalStorage() != null && getToken();
}

export function isUserLocked() {
    return getUserFromLocalStorage() && !getToken();
}
