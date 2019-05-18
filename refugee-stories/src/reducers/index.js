import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "../actions";

const initialState = {
  stories: []
};

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return { ...state};
    case GET_DATA_SUCCESS:
      return { ...state, stories: action.payload.data };

    default:
      return state;
  }
};
