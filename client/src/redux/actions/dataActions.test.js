import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import moxios from 'moxios';
import data from './data.js';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
    getShows,
    searchShows,
    getResults
} from './dataActions';
import { SET_SHOWS, SET_QUERY, SET_RESULTS, GET_RESULTS } from '../types';

describe('DataActions tests', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('getShows() action', () => {
        const { shows } = data;
        const expectedActions = [
            { type: SET_SHOWS, payload: shows }
        ];
        const res = { results: shows };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: res
            });
        });

        const initialState = {};
        const store = mockStore(initialState);

        return store.dispatch(getShows()).then(() => {
            const calledActions = store.getActions();
            expect(calledActions).toEqual(expectedActions);
        });
    });
    it('searchShows() action', () => {
        const { shows } = data;
        const keyword = 'Search keyword';
        const history = [];

        const expectedActions = [
            { type: SET_QUERY, payload: keyword },
            { type: SET_RESULTS, payload: shows }
        ];
        const res = { results: shows };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: res
            });
        });

        const initialState = {};
        const store = mockStore(initialState);

        return store.dispatch(searchShows(keyword, history)).then(() => {
            const calledActions = store.getActions();
            expect(calledActions).toEqual(expectedActions);
        });
    });
    it('getResults() action', () => {
        const { shows } = data;
        const expectedActions = [
            { type: GET_RESULTS }
        ];

        const initialState = { shows: [], show: {}, query: '', results: shows };
        const store = mockStore(initialState);

        store.dispatch(getResults());
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
    });
});