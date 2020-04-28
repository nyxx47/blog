import { SET_STORY } from './type'
import Router from 'next/router'

const setStory = (story) => {
    return (dispatch) => {
      dispatch({type: SET_STORY, payload: story})
      console.log("SET STORY")
    };
  };

  export default {
      setStory
  }