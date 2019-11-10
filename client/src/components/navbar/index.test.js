import React from 'react';
import { mount } from "enzyme";

import { Navigation } from './index.js';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Navigation />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Navigation />
            </Provider>);
    })
    it('Renders the nav bar', () => {
        expect(wrapper.find(Navigation).length).toEqual(1);
    });
    it('Renders three clickable tabs: "Mediapedia", Home, and Discover', () => {
        expect(wrapper.find(Navigation).find('a').length).toEqual(3);
    })
    it('Search bar updates state on text input', () => {
        const input = wrapper.find('input').at(0);
        input.instance().value = 'hello';
        input.simulate('change');
        expect(wrapper.find(Navigation).instance().state.search).toEqual('hello');
    });
    it('Renders search button', () => {
        expect(wrapper.find(Navigation).find('button').length).toEqual(1);
    });
});