import React, { Component } from 'react';
import {Consumer} from '../Context';
import Track from './Track';

class TopSongs extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {
                        value => {
                            const {title, track_list} = value;
                            if (track_list === undefined || track_list === null || track_list.length === 0){
                                return (
                                    <React.Fragment>
                                    <h4 className="center style={{margin-top:20%}}">Loding</h4>
                                    <div className="progress">
                                        <div className="indeterminate"></div>
                                    </div>
                                    </React.Fragment>)
                            }
                            return (
                                <div>
                                    <h4 className="center">{title}</h4>
                                    <div className="row ">
                                        {
                                            track_list.map(item =>
                                                <Track key={item.track.id} item={item.track}/>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    }
                </Consumer>
            </div>
        )
    }
}

export default TopSongs
