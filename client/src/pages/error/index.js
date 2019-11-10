import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import { Button, } from 'react-bootstrap';


export class NotFound extends Component {
    render() {
        return (
            <div className='error-div'>
                <p className='error-text'>
                    Oops! Whatever you're looking for does not exist.
				</p>
                <Button component={Link} to='/' color='secondary' variant='contained'>
                    Click here to go back home
				</Button>
            </div>
        );
    }
}
export default (NotFound);