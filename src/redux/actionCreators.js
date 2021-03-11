import axios from "axios";
import { token } from "../token";

//                      getPosts

export function getPosts() {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
      };
    
    return async dispatch => {
        let {data} = await axios.get(`https://academy-training.appssquare.com/api/posts`, config)
        dispatch({type:"GETPOSTS", payload:data});
    }
}


//                    addPost
export function addPost() {

    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
      };

      return async (dispatch, post) => {
        let {data} = await axios.post(`https://academy-training.appssquare.com/api/posts`, post, config)
        dispatch({type:"ADDPOST", payload:data});
    }
};

//                        editPost
export function editPost () {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
      };
      return async (dispatch, post, id) => {
        let {data} = await axios.put(`https://academy-training.appssquare.com/api/posts/${id}`, post, config)
        dispatch({type:"EDITPOST", payload:data});
    }
};

//                             deletePost

export function deletePost() {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
      };

      return async (dispatch, id) => {
        let {data} = await axios.delete(`https://academy-training.appssquare.com/api/posts/${id}`, config)
        dispatch({type:"DELETEPOST", payload:data});
    }
}