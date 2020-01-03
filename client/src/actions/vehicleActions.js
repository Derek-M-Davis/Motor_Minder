import axios from 'axios';
import {GET_VEHICLES, ADD_VEHICLE, DELETE_VEHICLE, VEHICLES_LOADING} from './types';

export const getVehicles = () => dispatch => {
   dispatch(setVehiclesLoading());
   axios
    .get('/api/vehicles')
    .then(res => 
        dispatch({
            type: GET_VEHICLES,
            payload: res.data
        })
    )
};

export const addVehicle = (vehicle) => dispatch => {
  axios
  .post('/api/vehicles', vehicle)
  .then(res => 
    dispatch({
        type: ADD_VEHICLE,
        payload: res.data
    }))
};

export const deleteVehicle = (id) => dispatch => {
    axios
    .delete(`/api/vehicles/${id}`)
    .then(res => dispatch({
        type: DELETE_VEHICLE,
        payload: id
        })
    )
};

export const setVehiclesLoading = () => {
    return {
        type: VEHICLES_LOADING
    };
};