import React from 'react';
import { mount } from "enzyme";
import { BrowserRouter } from 'react-router-dom';
import posterPlaceholder from '../../poster-placeholder.png';


import ShowPreview from './index.js';

describe('<ShowPreview />', () => {
    let wrapper;
    beforeEach(() => {
        const show = {
            original_name: 'Show title',
            poster_path: '/poster_path.jpg',
            overview: 'This is a shows default overview'
        }
        wrapper = mount(<BrowserRouter>
            <ShowPreview show={show} />
        </BrowserRouter>);
    })
    it('Renders the ShowPreview component', () => {
        expect(wrapper.find(ShowPreview).length).toEqual(1);
    });
    it('Renders a card image', () => {
        expect(wrapper.find(ShowPreview).find('.card-image').length).toEqual(1);
        expect(wrapper.find(ShowPreview).instance().props.show.poster_path).toEqual('/poster_path.jpg');
    });
    it('Replaces card image with placeholder image if poster_path is null', () => {
        const customShow = {
            original_name: 'Custom show',
            poster_path: null,
            overview: 'Custom show overview'
        }
        const customWrapper = mount(<BrowserRouter>
            <ShowPreview show={customShow} />
        </BrowserRouter>);
        expect(customWrapper.find(ShowPreview).find('img').prop('src')).toEqual(posterPlaceholder);
    });
    it('Replaces show overview with "No overview available" if the show has no overview', () => {
        const customShow = {
            original_name: 'Custom show',
            poster_path: '/poster_path.jpg',
            overview: ""
        }
        const customWrapper = mount(<BrowserRouter>
            <ShowPreview show={customShow} />
        </BrowserRouter>);
        expect(customWrapper.find(ShowPreview).find('p').text()).toEqual('No overview available');
    });
    it('Renders "View Show" button', () => {
        expect(wrapper.find(ShowPreview).find('button').length).toEqual(1);
    })
});