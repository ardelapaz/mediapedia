import React from 'react';
import { mount } from "enzyme";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Discovery } from './index.js';
import data from './data.js';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Discovery page', () => {
    let wrapper;
    beforeEach(() => {
        const getShows = jest.fn();
        wrapper = mount(<Provider store={store}>
            <BrowserRouter>
                <Discovery data={data} getShows={getShows} />
            </BrowserRouter>
        </Provider>);
    })
    it('Renders the discovery component', () => {
        expect(wrapper.find(Discovery).length).toEqual(1);
    });
    it('Renders the correct amount of <ShowPreviews />', () => {
        expect(wrapper.find(Discovery).find('.card-wrapper').length).toEqual(20);
    });
});