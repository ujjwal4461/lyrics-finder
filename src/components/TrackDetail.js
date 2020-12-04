import React, { Component } from 'react';
import axios from 'axios';

class TrackDetail extends Component {
    state = {
        track_id:null,
        track_name: null,
        album_name: null,
        artist_name: null,
        lyrics: null,
    }
    componentDidMount(){
        let id = this.props.match.params.track_id;
        this.setState({
            track_id: this.props.match.params.track_id,
        })
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`)
          .then(res => {
              this.setState({
                  lyrics: res.data.message.body.lyrics.lyrics_body.slice(0,-70),
              })
            })
          .catch(err => console.log(err))
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`)
          .then(res => {
              this.setState({
                  track_name : res.data.message.body.track.track_name,
                  album_name : res.data.message.body.track.album_name,
                  artist_name : res.data.message.body.track.artist_name,
              })
            })
          .catch(err=> console.log(err))
    }

    render() {
        const {track_name,album_name,artist_name,lyrics} = this.state;
        if(!track_name || !album_name || !artist_name || !lyrics){
            return <h4>Loding....</h4>
        }
        else{
            return (
            <React.Fragment>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>{this.state.track_name}</h4></li>
                    <li className="collection-header"><h5>Album Name: {this.state.album_name}</h5></li>
                    <li className="collection-header"><h5>Artist Name: {this.state.artist_name}</h5></li>
                    <li className="collection-item"><div><pre>{this.state.lyrics}</pre></div></li>
                </ul>
            </React.Fragment>
            )
        }
    }
}

export default TrackDetail

