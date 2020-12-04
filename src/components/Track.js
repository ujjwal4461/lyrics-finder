import React from 'react';
import {Link} from 'react-router-dom';

export default function Track(props) {
    const {item}=props;
    return (
        <React.Fragment>
                <div className="col s12 m6" key={item.id}>
                <div className="card ">
                    <div className="card-content ">
                    <span className="card-title">{item.track_name}</span>
                    <p>
                        <span>{item.album_name}</span><br/>
                        <span>{item.artist_name}</span>
                    </p>
                    </div>
                    <div className="card-action center blue white-text">
                    <Link to={'/'+item.track_id}>View Lyrics</Link>
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}
