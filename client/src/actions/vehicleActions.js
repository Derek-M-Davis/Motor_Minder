import axios from 'axios';
import {GET_VEHICLES, ADD_VEHICLE, DELETE_VEHICLE, VEHICLES_LOADING} from './types';
import { tokenConfig} from './authActions';
import { returnErrors} from './errorActions';

export const getVehicles = () => dispatch => {
   dispatch(setVehiclesLoading());
   axios
    .get('/api/vehicles')
    .then(res => 
        dispatch({
            type: GET_VEHICLES,
            payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addVehicle = (vehicle) => (dispatch, getState) => {
  axios
  .post('/api/vehicles', vehicle, tokenConfig(getState))
  .then(res => 
    dispatch({
        type: ADD_VEHICLE,
        payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteVehicle = (id) => (dispatch, getState) => {
    axios
    .delete(`/api/vehicles/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: DELETE_VEHICLE,
        payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setVehiclesLoading = () => {
    return {
        type: VEHICLES_LOADING
    };
};