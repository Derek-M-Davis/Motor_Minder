import  {combineReducers} from 'redux';
import vehicleReducer from './vehicleReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import noteReducer from './noteReducer';



export default combineReducers({
    vehicle: vehicleReducer,
    error: errorReducer,
    auth: authReducer,
    note: noteReducer
})