import React, { Component } from 'react';
import ShowPreview from '../../components/showPreview/index.js';

import { connect } from 'react-redux';
import { getShows } from '../../redux/actions/dataActions';

export class Discovery extends Component {
    componentDidMount() {
        this.props.getShows();
    }
    render() {
        const { shows } = this.props.data;
        let noResultsMarkup = (
            <div className='no-results-div'>
                <h2 className='no-results'>Something went wrong when fetching shows</h2>
            </div>
        )
        return (
            <div className='discovery-container'>
                {shows ? shows.map((show, index) => {
                    return <ShowPreview show={show} key={index} />
                }) : noResultsMarkup}
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.data
});


export default connect(mapStateToProps, { getShows })(Discovery);
