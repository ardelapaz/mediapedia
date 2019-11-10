import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';


export class home extends Component {
    render() {
        return (
            <div>
                <Jumbotron id="landing">
                    <div className='landing'>
                        <h2>Welcome to MediaPedia</h2>
                        <h3>Your number one source for all things media</h3>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default home
