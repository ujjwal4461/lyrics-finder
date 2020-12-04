import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from '../Context';

class SearchSongs extends Component {
    state={
        songTitle: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e,appState) => {
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.songTitle}&page_size=3&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            console.log(res.data.message.body.track_list);
            appState({
                TYPE: 'SEARCH_RESULTS',
                data: res.data.message.body.track_list,
            })
            this.setState({songTitle: ''})
        })
        .catch(err => console.log(err))
        console.log(this.state.songTitle);
    }


    render(){
    return (
        <div>
            <Consumer>
                { value => {
                    const {appState} = value;
                    return(
                        <div className="card blue-grey darken-1">
                        <div className="card-content white-text center">
                        <span className="card-title"><h4>Search for a Song</h4></span>
                            <form onSubmit={(e)=> this.handleSubmit(e,appState)}>
                                <input placeholder="Song Title" name="songTitle" onChange={this.handleChange} id="songTitle" value={this.state.songTitle}></input>   
                                <button className="btn blue waves-effect waves-light" type="submit" name="action">Search</button>             
                            </form>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        </div>
        )
    }
}

export default SearchSongs;