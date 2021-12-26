import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILED,
    FETCH_PHOTO_REQUEST,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILED,
    FETCH_LIST_ITEM_REQUEST,
    FETCH_LIST_ITEM_SUCCESS,
    FETCH_LIST_ITEM_FAILED,
    FETCH_PHOTO_ITEM_REQUEST,
    FETCH_PHOTO_ITEM_SUCCESS,
    FETCH_PHOTO_ITEM_FAILED,
    FETCH_RESULT_REQUEST,
    FETCH_RESULT_SUCCESS,
    FETCH_RESULT_FAILED,
    FETCH_RESULT_ITEM_REQUEST,
    FETCH_RESULT_ITEM_SUCCESS,
    FETCH_RESULT_ITEM_FAILED,
    FETCH_GAME_REQUEST,
    FETCH_GAME_SUCCESS,
    FETCH_GAME_FAILED,
    API_URL
} from "../../../constants/ActionTypes";

import axios from "axios";

//this is the request function to start redux state
export const getListRequest = () => ({
    type: FETCH_LIST_REQUEST
});

//this is the failed function if the response has any error
export const getListFailed = error => ({
    type: FETCH_LIST_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getListSuccess = data => ({
    type: FETCH_LIST_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const getPhotoRequest = () => ({
    type: FETCH_PHOTO_REQUEST
});

//this is the failed function if the response has any error
export const getPhotoFailed = error => ({
    type: FETCH_PHOTO_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getPhotoSuccess = data => ({
    type: FETCH_PHOTO_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const getSelectedItemRequest = () => ({
    type: FETCH_LIST_ITEM_REQUEST
});

//this is the failed function if the response has any error
export const getSelectedItemFailed = error => ({
    type: FETCH_LIST_ITEM_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getSelectedItemSuccess = data => ({
    type: FETCH_LIST_ITEM_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const getSelectedPhotoRequest = () => ({
    type: FETCH_PHOTO_ITEM_REQUEST
});

//this is the failed function if the response has any error
export const getSelectedPhotoFailed = error => ({
    type: FETCH_PHOTO_ITEM_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getSelectedPhotoSuccess = data => ({
    type: FETCH_PHOTO_ITEM_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const getResultRequest = () => ({
    type: FETCH_RESULT_REQUEST
});

//this is the failed function if the response has any error
export const getResultFailed = error => ({
    type: FETCH_RESULT_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getResultSuccess = data => ({
    type: FETCH_RESULT_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const getResultItemRequest = () => ({
    type: FETCH_RESULT_ITEM_REQUEST
});

//this is the failed function if the response has any error
export const getResultItemFailed = error => ({
    type: FETCH_RESULT_ITEM_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getResultItemSuccess = data => ({
    type: FETCH_RESULT_ITEM_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const getGameRequest = () => ({
    type: FETCH_GAME_REQUEST
});

//this is the failed function if the response has any error
export const getGameFailed = error => ({
    type: FETCH_GAME_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getGameSuccess = data => ({
    type: FETCH_GAME_SUCCESS,
    payload: data
});

//this is the list function to get lists.
export const getList = () => {

    return dispatch => {
        dispatch(getListRequest());

        axios.get(`${API_URL}/athletes`).then((response) => {
            dispatch(getListSuccess(response.data.results));
        }).catch((error) => {
            dispatch(getListFailed(error.response.data));
        });
    }
};

export const getPhoto = () => {

    return dispatch => {
        dispatch(getPhotoRequest());

        axios.get(`${API_URL}/photos`).then((response) => {
            dispatch(getPhotoSuccess(response.data.results));
        }).catch((error) => {
            dispatch(getPhotoFailed(error.response.data));
        });
    }
};

export const getGame = () => {

    return dispatch => {
        dispatch(getGameRequest());

        axios.get(`${API_URL}/games`).then((response) => {
            dispatch(getGameSuccess(response.data.results));
        }).catch((error) => {
            dispatch(getGameFailed(error.response.data));
        });
    }
};

export const getSelectedItem = (id) => {

    return dispatch => {
        dispatch(getSelectedItemRequest());

        axios.get(`${API_URL}/athlete/${id}`).then((response) => {
            dispatch(getSelectedItemSuccess(response.data.results));
        }).catch((error) => {
            dispatch(getSelectedItemFailed(error.response.data));
        });
    }
};

export const getSelectedPhoto = (id) => {

    return dispatch => {
        dispatch(getSelectedPhotoRequest());

        axios.get(`${API_URL}/photo/${id}`).then((response) => {
            dispatch(getSelectedPhotoSuccess(response.data.results));
        }).catch((error) => {
            dispatch(getSelectedPhotoFailed(error.response.data));
        });
    }
};

export const getResult = () => {

    return dispatch => {
        dispatch(getResultRequest());

        axios.get(`${API_URL}/results`).then((response) => {
            dispatch(getResultSuccess(response.data.results));
        }).catch((error) => {
            dispatch(getResultFailed(error.response.data));
        });
    }
};

export const getResultItem = (id) => {

    return dispatch => {
        dispatch(getResultItemRequest());

        axios.get(`${API_URL}/result/${id}`).then((response) => {
            dispatch(getResultItemSuccess(response.data.results));
        }).catch((error) => {
            dispatch(getResultItemFailed(error.response.data));
        });
    }
};

