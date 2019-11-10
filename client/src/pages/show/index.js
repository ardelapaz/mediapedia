import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Show from '../../components/show/index.js';

export class showPage extends Component {
    render() {
        const show = this.props.location.state.show;
        return (
            <Jumbotron style={{ backgroundColor: '#111', marginTop: '15vh' }}>
                <Show show={show} />
            </Jumbotron>
        )
    }
}

export default showPage
