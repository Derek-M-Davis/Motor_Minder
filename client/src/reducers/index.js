import  {combineReducers} from 'redux';
import vehicleReducer from './vehicleReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
    vehicle: vehicleReducer,
    error: errorReducer,
    auth: authReducer
})