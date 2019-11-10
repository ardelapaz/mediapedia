import {
    SET_SHOWS,
    SET_RESULTS,
    GET_RESULTS,
    SET_QUERY
} from '../types';

const initialState = {
    shows: [],
    results: [],
    show: {},
    query: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SHOWS:
            return {
                ...state,
                shows: action.payload,
            };
        case SET_RESULTS:
            return {
                ...state,
                results: action.payload,
            }
        case GET_RESULTS:
            return {
                ...state
            }
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }
        default:
            return state;
    }
}