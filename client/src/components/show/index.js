import React, { Component } from 'react';
import dayjs from 'dayjs';
import posterPlaceholder from '../../poster-placeholder.png';

export class show extends Component {
    render() {
        const { show } = this.props;
        let src;
        if (show.poster_path === null) {
            if (show.overview === "") {
                src = posterPlaceholder;
                show.overview = "No overview available"
            } else {
                src = posterPlaceholder;
            }
        } else if (show.overview === "") {
            if (show.poster_path === null) {
                src = posterPlaceholder;
                show.overview = "No overview available"
            } else {
                show.overview = "No overview available"
                src = `https://image.tmdb.org/t/p/w342/${show.poster_path}`;
            }
        } else {
            src = `https://image.tmdb.org/t/p/w342/${show.poster_path}`;
        }
        return (
            <div className='show-container'>
                <div className='show-left'>
                    <img src={src} alt='Poster' />
                </div>
                <div className='show-right'>
                    <div className='show-right-title'>
                        <h2>{show.original_name}</h2>
                    </div>
                    <div className='show-right-overview'>
                        <h3>Show Overview</h3>
                        <p className='overview'>{show.overview}</p>
                    </div>
                    <div className='show-right-info'>
                        <h4>Additional information</h4>
                        <p className='aired-date'>First aired on {dayjs(show.first_air_date).format('MMMM D, YYYY')}</p>
                        <p className='country'>Country of origin: {show.origin_country[0]}</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default show
