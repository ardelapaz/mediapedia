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
        return (
            <div className='discovery-container'>
                {shows.map((show, index) => {
                    return <ShowPreview show={show} key={index} />
                })}
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.data
});


export default connect(mapStateToProps, { getShows })(Discovery);
