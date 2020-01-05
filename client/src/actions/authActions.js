import axios from 'axios';
import {returnErrors} from './errorActions';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

// Check Token and load user
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING});

    axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ 
            type: AUTH_ERROR
        });
    });
};

// Setup Config/Headers and Token
export const tokenConfig = getState => {
    // Get Token from local storage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // If token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config
};