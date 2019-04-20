import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case actionTypes.POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    case actionTypes.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default postReducer;
