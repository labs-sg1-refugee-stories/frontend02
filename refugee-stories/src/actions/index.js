import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth'


export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

// add axios with auth

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA_START });
  return axios
    .get("https://refugee-stories-api.herokuapp.com/admin/stories")

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
    .post("https://refugee-stories-api.herokuapp.com/admin/stories", newPost)
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
    .delete(`https://refugee-stories-api.herokuapp.com/admin/stories/reject/${id}`)
    .then(res => {
      console.log("return from delete", res)
      dispatch({ type: REJECT_STORY_SUCCESS, payload: id });
   
    })
    .catch(err => console.log(err));
};

export const ACCEPT_STORIES_START = "ACCEPT_STORIES_START";
export const ACCEPT_STORIES_SUCCESS = "ACCEPT_STORIES_SUCCESS";
export const ACCEPT_STORIES_FAILURE = "ACCEPT_STORIES_FAILURE";

export const acceptStory = story => dispatch => {
  console.log("acceptstory", story)
  dispatch({ type: ACCEPT_STORIES_START });
  axios
    .post(`https://refugee-stories-api.herokuapp.com/admin/stories/approve/${story.id}`, story)
    .then(res => {
      console.log("accept", res)
      dispatch({ type: ACCEPT_STORIES_SUCCESS, payload: story.id });
    })
    .catch(err => console.log(err));
};


//accepted stories
export const APPROVED_STORIES_START = "APPROVED_STORIES_START";
export const APPROVED_STORIES_SUCCESS = "APPROVED_STORIES_SUCCESS";
export const APPROVED_STORIES_FAILURE = "APPROVED_STORIES_FAILURE";

export const getApprovedStories = () => dispatch => {
  dispatch({ type: APPROVED_STORIES_START,  });
  return axios
    .get("https://refugee-stories-api.herokuapp.com/stories")

    .then(res => {
      dispatch({ type: APPROVED_STORIES_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (newCredentials) => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth
    .post("https://refugee-stories-api.herokuapp.com/stories")

    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};