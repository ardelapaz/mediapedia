import React, { Component } from 'react'
import { connect } from 'react-redux';

import ShowPreview from '../../components/showPreview/index.js';
import { getResults } from '../../redux/actions/dataActions.js';



export class Results extends Component {
    componentDidMount() {
        this.props.getResults();
    }
    render() {
        const { results } = this.props.data;
        const { query } = this.props.data;

        let noResultsMarkup = (
            <div className='no-results-div'>
                <h2 className='no-results'>No results found for "{query}"</h2>
            </div>
        )
        return (
            <div>
                <div className='results'>
                    <h1>Search results for "{query}"</h1>
                </div>
                <div className='discovery-container'>
                    {results.length > 0 ? results.map((result, index) => {
                        return <ShowPreview show={result} key={index} />
                    }) : noResultsMarkup}
                </div >
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
});


export default connect(mapStateToProps, { getResults })(Results);
