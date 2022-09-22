import axios from "axios";

export const GET_ALL_TRIP_REQUEST ='GET_ALL_TRIP_REQUEST';
export const GET_ALL_TRIP_SUCCESS ='GET_ALL_TRIP_SUCCESS';
export const GET_ALL_TRIP_ERROR ='GET_ALL_TRIP_ERROR';


const getTripsSuccess = payload =>({

    type:GET_ALL_TRIP_SUCCESS,
    payload

});

const getTripsError = payload =>({

    type:GET_ALL_TRIP_ERROR,
    payload

});

export const getAllTrips = () => dispatch =>{
    dispatch({ type:GET_ALL_TRIP_REQUEST})
    return axios.get('https://localhost:7041/api/Trip/GetTrips').then(res=>{
        const response = res.data;
        dispatch(getTripsSuccess(response));
    }).catch(error=>{
        dispatch(getTripsError("Something went wrong"));
        return Promise.reject({});
    })
}