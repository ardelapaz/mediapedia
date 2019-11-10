import React from 'react';
import { mount } from "enzyme";
import { BrowserRouter } from 'react-router-dom';
import posterPlaceholder from '../../poster-placeholder.png';


import Show from './index.js';

describe('<Show />', () => {
    let wrapper;
    beforeEach(() => {
        const show = {
            original_name: 'Show title',
            poster_path: '/poster_path.jpg',
            overview: 'This is a shows default overview',
            origin_country: ["US"],
            first_air_date: '2012-10-10'
        }
        wrapper = mount(<BrowserRouter>
            <Show show={show} />
        </BrowserRouter>);
    })
    it('Renders the Show component', () => {
        expect(wrapper.find(Show).length).toEqual(1);
    });
    it('Renders a poster image', () => {
        expect(wrapper.find(Show).find('img').length).toEqual(1);
        expect(wrapper.find(Show).instance().props.show.poster_path).toEqual('/poster_path.jpg');
    });
    it('Replaces card image with placeholder image if poster_path is null', () => {
        const customShow = {
            original_name: 'Custom show',
            poster_path: null,
            overview: 'Custom show overview',
            origin_country: ["US"],
            first_air_date: '2012-10-10'
        }
        const customWrapper = mount(<BrowserRouter>
            <Show show={customShow} />
        </BrowserRouter>);
        expect(customWrapper.find(Show).find('img').prop('src')).toEqual(posterPlaceholder);
    });
    it('Replaces show overview with "No overview available" if the show has no overview', () => {
        const customShow = {
            original_name: 'Custom show',
            poster_path: '/poster_path.jpg',
            overview: "",
            origin_country: ["US"],
            first_air_date: '2012-10-10'
        }
        const customWrapper = mount(<BrowserRouter>
            <Show show={customShow} />
        </BrowserRouter>);
        expect(customWrapper.find(Show).find('.overview').text()).toEqual('No overview available');
    });
    it('Renders the correct amount of divs', () => {
        expect(wrapper.find(Show).find('div').length).toEqual(6);
    });
    it('Formats the date correctly', () => {
        expect(wrapper.find(Show).find('.aired-date').text()).toEqual('First aired on October 10, 2012');
    });
    it('Formats the origin country', () => {
        expect(wrapper.find(Show).find('.country').text()).toEqual('Country of origin: US');
    });
});