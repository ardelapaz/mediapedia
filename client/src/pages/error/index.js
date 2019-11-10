import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import { Button, } from 'react-bootstrap';


export class NotFound extends Component {
    render() {
        return (
            <div className='error-div'>
                <h2 className='error-text'>
                    Oops! Whatever you're looking for does not exist.
				</h2>
                <br />
                <Button href='/' color='white' variant='outline-dark'>
                    Click here to go back home
				</Button>
            </div>
        );
    }
}
export default (NotFound);