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
} from "../../../constants/ActionTypes";

//this is the initial state which is the redux states called.
const initialState = {
    loading: false,
    error: null,
    list: [],
    photos: [],
    results: [],
    selectedItem: [],
    selectedPhoto: [],
    selectedResult: [],
    games: []
};

//this is the list reducer.
const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                list: action.payload.athletes,
            };
        case FETCH_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_PHOTO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                photos: action.payload.photos,
            };
        case FETCH_PHOTO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_LIST_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_LIST_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                selectedItem: action.payload.athlete,
            };
        case FETCH_LIST_ITEM_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_PHOTO_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PHOTO_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                selectedPhoto: action.payload.photo,
            };
        case FETCH_PHOTO_ITEM_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_RESULT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_RESULT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                results: action.payload.totalScore,
            };
        case FETCH_RESULT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_RESULT_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_RESULT_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                selectedResult: action.payload.result,
            };
        case FETCH_RESULT_ITEM_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_GAME_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_GAME_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                games: action.payload.games,
            };
        case FETCH_GAME_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default ListReducer;
