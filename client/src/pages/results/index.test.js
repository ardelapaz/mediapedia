import React from 'react';
import { mount } from "enzyme";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Results } from './index.js';
import data from './data.js';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Results page', () => {
    let wrapper;
    beforeEach(() => {
        const getResults = jest.fn();
        wrapper = mount(<Provider store={store}>
            <BrowserRouter>
                <Results data={data} getResults={getResults} query={data} />
            </BrowserRouter>
        </Provider>);
    })
    it('Renders the Results component', () => {
        expect(wrapper.find(Results).length).toEqual(1);
    });
    it('Renders the results text div', () => {
        expect(wrapper.find(Results).find('h1').text()).toEqual('Search results for \"Test query\"');
    });
    it('Renders the correct amount of <ShowPreviews />', () => {
        expect(wrapper.find(Results).find('.card-wrapper').length).toEqual(20);
    });
    it('Renders a "No results found" prompt if no results are found', () => {
        const getResults = jest.fn();
        const res = {};
        res.results = [];
        const customWrapper = mount(<Provider store={store}>
            <BrowserRouter>
                <Results data={res} getResults={getResults} query={data} />
            </BrowserRouter>
        </Provider>);
        expect(customWrapper.find(Results).find('.no-results-div').length).toEqual(1);
        expect(customWrapper.find(Results).find('.no-results').length).toEqual(1);
    });
});