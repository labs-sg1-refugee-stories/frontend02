import * as type from "actions/types";

const initialState = {
  stories: [],
  comments: [],
  adminStories: [],
  singleStory: null,
  storiesOffset: 0,
  storiesLimit: 10,
  storiesCount: 0,
};

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_DATA_START:
      return { ...state };
    case type.GET_DATA_SUCCESS:
      return { ...state, adminStories: action.payload.data };
    case type.GET_DATA_FAILURE:
      return { ...state };

    case type.GET_STORY_START:
      return { ...state };
    case type.GET_STORY_SUCCESS:
      return { ...state, singleStory: action.payload.data };
    case type.GET_STORY_FAILURE:
      return { ...state };

    case type.GET_COMMENTS_START:
      return { ...state };
    case type.GET_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case type.GET_COMMENTS_FAILURE:
      return { ...state };

    case type.ADD_POST_START:
      return { ...state };
    case type.ADD_POST_SUCCESS:
      return {
        ...state,
        adminStories: [...state.adminStories, action.payload.data],
      };
    case type.ADD_POST_FAILURE:
      return { ...state };

    case type.ADD_COMMENT_START:
      return { ...state };
    case type.ADD_COMMENT_SUCCESS:
      return { ...state };
    case type.ADD_COMMENT_FAILURE:
      return { ...state };

    case type.REJECT_STORY_START:
      return { ...state };
    case type.REJECT_STORY_SUCCESS:
      return {
        ...state,
        adminStories: state.adminStories.filter(
          story => story.id != action.payload
        ),
      };
    case type.REJECT_STORY_FAILURE:
      return { ...state };

    case type.APPROVED_STORIES_START:
      return { ...state };
    case type.APPROVED_STORIES_SUCCESS:
      return {
        ...state,
        stories: action.payload.data.stories,
        storiesOffset: action.payload.data.meta.offset,
        storiesCount: action.payload.data.meta.count,
        storiesLimit: action.payload.data.meta.limit,
      };
    case type.APPROVED_STORIES_FAILURE:
      return { ...state };

    case type.ACCEPT_STORIES_START:
      return { ...state };
    case type.ACCEPT_STORIES_SUCCESS:
      return {
        ...state,
        adminStories: state.adminStories.filter(
          story => story.id != action.payload
        ),
      };
    case type.ACCEPT_STORIES_FAILURE:
      return { ...state };

    case type.LOGIN_START:
      return { ...state };
    case type.LOGIN_SUCCESS:
      return { ...state };
    case type.LOGIN_FAILURE:
      return { ...state };

    case type.DELETE_STORY_START:
      return { ...state };
    case type.DELETE_STORY_SUCCESS:
      return {
        ...state,
        stories: state.stories.filter(story => story.id != action.payload),
      };
    case type.DELETE_STORY_FAILURE:
      return { ...state };

    default:
      return state;
  }
};
