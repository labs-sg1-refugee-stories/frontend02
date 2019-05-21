import axios from "axios";

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

// add axios with auth

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA_START });
  return axios
    .get("https://refugee-stories-api.herokuapp.com/stories")

    .then(res => {
      dispatch({ type: GET_DATA_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};

export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const addPost = newPost => dispatch => {
  dispatch({ type: ADD_POST_START });
  axios
    .post("https://refugee-stories-api.herokuapp.com/stories", newPost)
    .then(res => {
      dispatch({ type: ADD_POST_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};

export const REJECT_STORY_START = "REJECT_STORY_START";
export const REJECT_STORY_SUCCESS = "REJECT_STORY_SUCCESS";
export const REJECT_STORY_FAILURE = "REJECT_STORY_FAILURE";

export const rejectStory = id => dispatch => {
  dispatch({type: REJECT_STORY_START, payload: id })

  axios
    .delete(`https://refugee-stories-api.herokuapp.com/stories/${id}`)
    .then(res => {
      console.log("return from delete", res)
      dispatch({ type: REJECT_STORY_SUCCESS, payload: id });
   
    })
    .catch(err => console.log(err));
};

export const ACCEPT_STORY_START = "ACCEPT_STORY_START";
export const ACCEPT_STORY_SUCCESS = "ACCEPT_STORY_SUCCESS";
export const ACCEPT_STORY_FAILURE = "ACCEPT_STORY_FAILURE";

export const acceptStory = id => dispatch => {
  dispatch({ type: ACCEPT_STORY_START });
  return axios
    .post(`https://refugee-stories-api.herokuapp.com/stories/approved:${id}`)
    .then(res => {
      console.log("accept", res)
      dispatch({ type: ACCEPT_STORY_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};
