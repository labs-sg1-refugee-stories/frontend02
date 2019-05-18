import axios from 'axios'

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

// add axios with auth

export const getData = () => (dispatch) =>{
    dispatch({type:GET_DATA_START})
    return axios
    .get('https://jsonplaceholder.typicode.com/todos/')
    .then(res => {
       
        dispatch({type: GET_DATA_SUCCESS, payload: res})
    })
    .catch(err => console.log(err))
}


export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const addPost = (newPost) => (dispatch) =>{
    dispatch({type:ADD_POST_START})
    return axios
    .post('??????', newPost)
    .then(res => {
       
        dispatch({type: ADD_POST_SUCCESS, payload: res})
    })
    .catch(err => console.log(err))
    
}