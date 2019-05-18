import axios from 'axios'

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getData = () => (dispatch) =>{
    dispatch({type:GET_DATA_START})
    return axios
    .get('https://jsonplaceholder.typicode.com/todos/')
    .then(res => {
       
        dispatch({type: GET_DATA_SUCCESS, payload: res})
    })
    .catch(err => console.log(err))
}