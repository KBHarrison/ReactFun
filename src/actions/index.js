import { FETCH_COMMENTS, SAVE_COMMENT, CHANGE_AUTH } from './types';
import axios from 'axios'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments')
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedin) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedin
    }
}