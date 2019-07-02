import axios from "utils/axiosBase";
import axiosWithAuth from "utils/axiosWithAuth";
import * as type from "./types";

export const getData = () => dispatch => {
  dispatch({ type: type.GET_DATA_START });
  return axios
    .get("/admin/stories")
    .then(res => {
      dispatch({ type: type.GET_DATA_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};

export const getStory = id => dispatch => {
  dispatch({ type: type.GET_STORY_START });
  return axios
    .get(`/stories/${id}`)
    .then(res => {
      dispatch({ type: type.GET_STORY_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};

export const getComments = id => dispatch => {
  dispatch({ type: type.GET_COMMENTS_START });
  return axios
    .get(`/comments`)
    .then(res => {
      // Only show comments with storyID matching id
      const filteredComments = res.data.filter(
        comment => comment.storyId === Number(id)
      );
      dispatch({ type: type.GET_COMMENTS_SUCCESS, payload: filteredComments });
    })
    .catch(err => console.log(err));
};

export const addPost = newPost => dispatch => {
  dispatch({ type: type.ADD_POST_START });

  const fd = new FormData();
  // FormData object (fd) is used to upload image data to server
  // Text data will be passed as params on req.query
  fd.append("photoUrl", newPost.photoUrl);
  fd.append("authorUrl", newPost.authorUrl);

  // Deletes image data properties so that newPost only has text fields on query string
  delete newPost.photoUrl;
  delete newPost.authorUrl;
  delete newPost.photo;
  delete newPost.author;
  // Calls server ... upload middleware will prcess fd and return cloudinary urls of images
  axios
    .post(`/admin/stories`, fd, { params: newPost })
    .then(res => {
      dispatch({ type: type.ADD_POST_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};

export const addComment = newComment => dispatch => {
  dispatch({ type: type.ADD_COMMENT_START });
  axios
    .post("/comments", newComment)
    .then(res => {
      dispatch({ type: type.ADD_COMMENT_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};

export const rejectStory = id => dispatch => {
  dispatch({ type: type.REJECT_STORY_START, payload: id });
  axios
    .delete(`/admin/stories/reject/${id}`)
    .then(res => {
      dispatch({ type: type.REJECT_STORY_SUCCESS, payload: id });
    })
    .catch(err => console.log(err));
};
export const deleteStory = id => dispatch => {
  dispatch({ type: type.DELETE_STORY_START, payload: id });

  axios
    .delete(`/stories/${id}`)
    .then(res => {
      dispatch({ type: type.DELETE_STORY_SUCCESS, payload: id });
    })
    .catch(err => console.log(err));
};

export const acceptStory = story => dispatch => {
  dispatch({ type: type.ACCEPT_STORIES_START });
  axios
    .post(`/admin/stories/approve/${story.id}`, story)
    .then(res => {
      dispatch({ type: type.ACCEPT_STORIES_SUCCESS, payload: story.id });
    })
    .catch(err => console.log(err));
};

//accepted stories
export const getApprovedStories = (offset = 0) => dispatch => {
  dispatch({ type: type.APPROVED_STORIES_START });
  return axios
    .get(`/stories?offset=${offset}`)
    .then(res => {
      dispatch({ type: type.APPROVED_STORIES_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};

export const login = newCredentials => dispatch => {
  dispatch({ type: type.LOGIN_START });
  return axiosWithAuth
    .post("/login", newCredentials)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      console.log(res);
      dispatch({ type: type.LOGIN_SUCCESS, payload: res });
    })
    .catch(err => console.log(err));
};
