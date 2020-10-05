import axios from 'axios';
import { API_BASE } from '../../../env/index';

import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
} from './actionTypes';

// CHECK TOKEN AND LOAD USER
export const getPosts = () => async (dispatch, getState) => {
  // POSTS LOADING
  dispatch({
    type: GET_POSTS_LOADING,
  });

  // HEADERS
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .get(`${API_BASE}/posts/`, config)
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_POSTS_ERROR,
        payload: error.response,
      });
    });
};

export const addPost = (name, description) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = {
    name: name,
    description: description,
  };

  await axios
    .post(`${API_BASE}/posts/`, body, config)
    .then((response) => {
      dispatch({
        type: ADD_POST,
        payload: response.data.body.post,
      });
      dispatch(getPosts());
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deletePost = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await axios
    .delete(`${API_BASE}/posts/${id}`, config)
    .then((response) => {
      dispatch({
        type: DELETE_POST,
        payload: response.data.body.post,
      });
      dispatch(getPosts());
    })
    .catch((error) => {
      console.log(error);
    });
};
