import React from 'react';
import { mount } from "enzyme";
import { BrowserRouter } from 'react-router-dom';

import Show from './index.js';

describe('Show page', () => {
    let wrapper;
    beforeEach(() => {
        // Show is sent through router's state. Location is this.props.location.state.show
        let location = {};
        location.state = {};
        location.state.show = {
            original_name: 'Show title',
            poster_path: '/poster_path.jpg',
            overview: 'This is a shows default overview',
            origin_country: ["US"],
            first_air_date: '2012-10-10'
        }
        wrapper = mount(<BrowserRouter>
            <Show location={location} />
        </BrowserRouter>);
    })
    it('Renders the Show page', () => {
        expect(wrapper.find(Show).length).toEqual(1);
    });
    it('Renders the div behind the show component', () => {
        expect(wrapper.find(Show).find('.jumbotron').length).toEqual(1);
    });
});