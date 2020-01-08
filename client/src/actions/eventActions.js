import axios from 'axios';
import {GET_EVENTS, ADD_EVENT, DELETE_EVENT, EVENTS_LOADING} from './types';
import { tokenConfig} from './authActions';
import { returnErrors} from './errorActions';

export const getEvents = () => dispatch => {
   dispatch(setEventsLoading());
   axios
    .get('/api/vehicles/events')
    .then(res => 
        dispatch({
            type: GET_EVENTS,
            payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addEvent = (event) => (dispatch, getState) => {
  axios
  .post('/api/vehicles/events', event, tokenConfig(getState))
  .then(res => 
    dispatch({
        type: ADD_EVENT,
        payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// export const editEvent = (event) => (dispatch, getState) => {
//     axios
//     .put('/api/vehicles/events/${id}', event, tokenConfig(getState))
//     .then(res => 
//       dispatch({
//           type: EDIT_EVENT,
//           payload: res.data
//       }))
//       .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
//   };

export const deleteEvent = (id) => (dispatch, getState) => {
    axios
    .delete(`/api/vehicles/events/${id}`, tokenConfig(getState))
    .then(res => 
        dispatch({
            type: DELETE_EVENT,
            payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setEventsLoading = () => {
    return {
        type: EVENTS_LOADING
    };
};