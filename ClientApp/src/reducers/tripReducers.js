import {
    GET_ALL_TRIP_REQUEST,
    GET_ALL_TRIP_SUCCESS,
    GET_ALL_TRIP_ERROR
} from "../actions/TripActions";



const INITIAL_STATE ={
    loading:false,
    hasError:false,
    error:null,
    data:[]
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_ALL_TRIP_REQUEST:
            return{
                ...state,
                 loading:true
                };
        case GET_ALL_TRIP_SUCCESS:
            return {
                ...state,
                loading:false,
                hasError:false,
                data:action.payload
            };
        case GET_ALL_TRIP_ERROR:
            return{
                 ...state,
                 loading:false,
                 hasError:true,
                 error:action.payload
                };
        default:
                return state;
    }
}