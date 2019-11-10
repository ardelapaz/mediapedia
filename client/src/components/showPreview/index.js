import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import posterPlaceholder from '../../poster-placeholder.png';



export class showPreview extends Component {
    render() {
        const { show } = this.props;
        let src, quickRead;
        if (show.poster_path === null) {
            if (show.overview === "" || show.overview === null) {
                src = posterPlaceholder;
                quickRead = "No overview available"
            } else {
                src = posterPlaceholder;
                quickRead = show.overview.substring(0, 75) + "...";
            }
        } else if (show.overview === "" || show.overview === null) {
            if (show.poster_path === null) {
                src = posterPlaceholder;
                quickRead = "No overview available"
            } else {
                quickRead = "No overview available"
                src = `https://image.tmdb.org/t/p/w500/${show.poster_path}`;
            }
        } else {
            src = `https://image.tmdb.org/t/p/w500/${show.poster_path}`;
            quickRead = show.overview.substring(0, 75) + "...";
        }
        return (
            <div className='card-wrapper'>
                <Card style={{ width: '18rem', backgroundColor: '#111', height: 700 }}>
                    <div className='card-image' style={{ minHeight: 430 }}>
                        <Card.Img variant="top" src={src} />
                    </div>
                    <Card.Body style={{ height: 200 }}>
                        <Link to={{ pathname: `/show/${show.id}`, state: { show: show } }}>{show.original_name}</Link>
                        <Card.Text style={{ color: 'white' }}>
                            {quickRead}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Link to={{ pathname: `/show/${show.id}`, state: { show: show } }}>
                            <Button variant="outline-primary">View Show</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default showPreview
