import axios from 'axios';
import {GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING} from './types';
import { tokenConfig} from './authActions';
import { returnErrors} from './errorActions';

export const getNotes = () => dispatch => {
   dispatch(setNotesLoading());
   axios
    .get('/api/notes')
    .then(res => 
        dispatch({
            type: GET_NOTES,
            payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addNote = (note) => (dispatch, getState) => {
  axios
  .post('/api/notes', note, tokenConfig(getState))
  .then(res => 
    dispatch({
        type: ADD_NOTE,
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

export const deleteNote = (id) => (dispatch, getState) => {
    axios
    .delete(`/api/notes/${id}`, tokenConfig(getState))
    .then(res => 
        dispatch({
            type: DELETE_NOTE,
            payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setNotesLoading = () => {
    return {
        type: NOTES_LOADING
    };
};