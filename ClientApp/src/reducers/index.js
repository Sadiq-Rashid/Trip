import {combinedReducers}  from 'redux';
import tripReducers from './tripReducers';


const rootReducer = combinedReducers({
    trips:tripReducers
});




export default rootReducer;