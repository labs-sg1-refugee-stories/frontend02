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
  //temp data until routes arrive to fill admin stories
  adminStories: [
    {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
    },
    {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
    },
    {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
    }
  ]
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
