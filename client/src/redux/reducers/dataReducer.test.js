import dataReducer from './dataReducer';
import data from './data.js';

describe('Data reducer tests', () => {
    it('Has a default state', () => {
        expect(dataReducer(undefined, { type: 'default state' })).toEqual({
            shows: [],
            results: [],
            show: {},
            query: ''
        });
    });
    it('Sets shows in the state correctly: "SET_SHOWS"', () => {
        expect(dataReducer(undefined, { type: 'SET_SHOWS', payload: data.shows })).toEqual({
            shows: data.shows,
            results: [],
            show: {},
            query: ''
        });
    });
    it('Sets results in state correctly: "SET_RESULTS"', () => {
        expect(dataReducer(undefined, { type: 'SET_RESULTS', payload: data.shows })).toEqual({
            shows: [],
            results: data.shows,
            show: {},
            query: ''
        });
    });
    it('Returns results from the state correctly: "GET_RESULTS"', () => {
        const newState = dataReducer(undefined, { type: 'SET_RESULTS', payload: data.shows });
        expect(dataReducer(newState, { type: 'GET_RESULTS' })).toEqual({
            shows: [],
            results: data.shows,
            show: {},
            query: ''
        });
    });
    it('Sets the query search params correctly in the state: "SET_QUERY"', () => {
        expect(dataReducer(undefined, { type: 'SET_QUERY', payload: data.query })).toEqual({
            shows: [],
            results: [],
            show: {},
            query: 'Breaking bad'
        });
    });
});