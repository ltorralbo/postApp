import { ADD_POST, GET_POSTS, DELETE_POST } from '../actions/posts/actionTypes';

const initialState = {
  posts: [],
  loading: false,
  post: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
