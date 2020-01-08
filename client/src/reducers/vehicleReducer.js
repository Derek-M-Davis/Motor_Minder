import {GET_VEHICLES, ADD_VEHICLE, EDIT_VEHICLE, DELETE_VEHICLE, VEHICLES_LOADING} from '../actions/types';

const intialState ={
    vehicles: [],
    loading: false
};

export default function(state = intialState, action) {
    switch(action.type) {
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
                loading: false
            };
        case ADD_VEHICLE:
            return {
                ...state,
                vehicles: [action.payload, ...state.vehicles]
            };
        case EDIT_VEHICLE:
            return {
                ...state,
                vehicles: [action.payload, ...state.vehicles]
            };
        case DELETE_VEHICLE:
            return {
                ...state,
                vehicles: state.vehicles.filter(vehicle => vehicle._id !== action.payload)
            };
        case VEHICLES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    };
};