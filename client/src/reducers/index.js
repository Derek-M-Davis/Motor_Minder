import  {combineReducers} from 'redux';
import vehicleReducer from './vehicleReducer';

export default combineReducers({
    vehicle: vehicleReducer
})