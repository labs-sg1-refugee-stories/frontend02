import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,

  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,

  REJECT_STORY_START,
  REJECT_STORY_SUCCESS,
  REJECT_STORY_FAILURE,
  
  ACCEPT_STORY_START,
  ACCEPT_STORY_SUCCESS,
  ACCEPT_STORY_FAILURE,
} from "../actions";

const initialState = {
  stories: [],
  //temp data until routes arrive to fill admin stories
  adminStories: []
};

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return { ...state };
    case GET_DATA_SUCCESS:
      return { ...state, stories: action.payload.data };
    case GET_DATA_FAILURE:
      return { ...state };

    case ADD_POST_START:
      return { ...state };
    case ADD_POST_SUCCESS:
      return { ...state, stories: [...state.stories, action.payload.data] };
    case ADD_POST_FAILURE:
      return { ...state };
    
    case REJECT_STORY_START:
      return { ...state, };
    case REJECT_STORY_SUCCESS:
      return { ...state, error: action.payload.data };
    case REJECT_STORY_FAILURE:
      return { ...state };

    case ACCEPT_STORY_START:
      return { ...state };
    case ACCEPT_STORY_SUCCESS:
      return { ...state, stories: action.payload.data };
    case ACCEPT_STORY_FAILURE:
      return { ...state };

    

    default:
      return state;
  }
};
