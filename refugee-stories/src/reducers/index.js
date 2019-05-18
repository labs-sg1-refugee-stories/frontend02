import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
} from "../actions";

const initialState = {
  stories: [],
  adminStories: []
};

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return { ...state };
    case GET_DATA_SUCCESS:
      return { ...state, stories: action.payload.data };
    case GET_DATA_FAILURE:
        return {...state};

    case ADD_POST_START:
      return { ...state };
    case ADD_POST_SUCCESS:
      return { ...state, adminStories: action.payload.data };
    case ADD_POST_FAILURE:
        return {...state};

    default:
      return state;
  }
};
