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
  
  APPROVED_STORIES_START,
  APPROVED_STORIES_SUCCESS,
  APPROVED_STORIES_FAILURE,

  ACCEPT_STORIES_START,
  ACCEPT_STORIES_SUCCESS,
  ACCEPT_STORIES_FAILURE,

  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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
      return { ...state, adminStories: action.payload.data };
    case GET_DATA_FAILURE:
      return { ...state };

    case ADD_POST_START:
      return { ...state };
    case ADD_POST_SUCCESS:
      return { ...state, adminStories: [...state.adminStories, action.payload.data] };
    case ADD_POST_FAILURE:
      return { ...state };
    
    case REJECT_STORY_START:
      return {...state };
    case REJECT_STORY_SUCCESS:
      return { ...state,
       adminStories: state.adminStories.filter(story => story.id != action.payload) };
    case REJECT_STORY_FAILURE:
      return { ...state };

    case APPROVED_STORIES_START:
      return { ...state };
    case APPROVED_STORIES_SUCCESS:
      return { ...state, stories: action.payload.data };
    case APPROVED_STORIES_FAILURE:
      return { ...state };
    
    case ACCEPT_STORIES_START:
      return { ...state };
    case ACCEPT_STORIES_SUCCESS: 
      return {...state,
    adminStories: state.adminStories.filter(story => story.id != action.payload) } ;
    case ACCEPT_STORIES_FAILURE:
      return { ...state };

    case LOGIN_START:
      return { ...state };
    case LOGIN_SUCCESS: 
      return {...state };
    case LOGIN_FAILURE: 
      return { ...state };
    
    default:
      return state;
  }
};
