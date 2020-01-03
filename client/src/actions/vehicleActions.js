import {GET_VEHICLES, ADD_VEHICLE, DELETE_VEHICLE, VEHICLES_LOADING} from './types';

export const getVehicles = () => {
    return {
        type: GET_VEHICLES
    };
};

export const addVehicle = (item) => {
    return {
        type: ADD_VEHICLE,
        payload: item
    };
};

export const deleteVehicle = (id) => {
    return {
        type: DELETE_VEHICLE,
        payload: id
    };
};

export const setVehiclesLoading = () => {
    return {
        type: VEHICLES_LOADING
    };
};