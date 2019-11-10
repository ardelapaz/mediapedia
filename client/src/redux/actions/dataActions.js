import {
    SET_SHOWS,
    SET_RESULTS,
    GET_RESULTS,
    SET_QUERY
} from '../types';
import axios from 'axios';


// Get all waves

export const getShows = () => (dispatch) => {
    return axios
        .get('http://localhost:8000/discover')
        .then((res) => {
            dispatch({ type: SET_SHOWS, payload: res.data.results });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const searchShows = (searchForMe, history) => (dispatch) => {
    dispatch({ type: SET_QUERY, payload: searchForMe });
    return axios.post('http://localhost:8000/search', { searchForMe }).then(res => {
        dispatch({ type: SET_RESULTS, payload: res.data.results });
        history.push({ pathname: `/search/${searchForMe}`, state: { results: res.data.results } });
    }).catch((err) => {
        console.log(err);
    });
}

export const getResults = () => (dispatch) => {
    dispatch({ type: GET_RESULTS });
}
