import React from 'react';
import { mount } from "enzyme";
import { BrowserRouter } from 'react-router-dom';

import Home from './index.js';

describe('Home page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<BrowserRouter>
            <Home />
        </BrowserRouter>);
    })
    it('Renders the Home page', () => {
        expect(wrapper.find(Home).length).toEqual(1);
    });
    it('Renders the home jumbotron', () => {
        expect(wrapper.find(Home).find('.jumbotron').length).toEqual(1);
    });
    it('Renders the div behind the front page text', () => {
        expect(wrapper.find(Home).find('.landing').length).toEqual(1);
    });
    it('Renders the "Welcome to MediaPedia" text', () => {
        expect(wrapper.find(Home).find('h2').text()).toEqual('Welcome to MediaPedia');
    });
    it('Renders the slogan', () => {
        expect(wrapper.find(Home).find('h3').text()).toEqual('Your number one source for all things media');
    });
});