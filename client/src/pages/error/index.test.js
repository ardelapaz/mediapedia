import React from 'react';
import { mount } from "enzyme";
import { BrowserRouter } from 'react-router-dom';

import NotFound from './index.js';

describe('NotFound page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<BrowserRouter>
            <NotFound location={location} />
        </BrowserRouter>);
    })
    it('Renders the NotFound page', () => {
        expect(wrapper.find(NotFound).length).toEqual(1);
    });
    it('Renders the "Not found" text prompt', () => {
        expect(wrapper.find(NotFound).find('p').text()).toEqual("Oops! Whatever you're looking for does not exist.");
    });
    it('Renders the "Return Home" button', () => {
        expect(wrapper.find(NotFound).find('button').length).toEqual(1);
    });
});