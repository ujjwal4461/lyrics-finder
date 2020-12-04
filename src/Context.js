import React, { Component } from 'react';
import axios from 'axios';

const context = React.createContext();

const reducer = (state,action) => {
    if(action.TYPE === 'SEARCH_RESULTS'){
        console.log(action)
        return {
            track_list: action.data,
            title: "Search Results",
        }
    }
}

export class Provider extends Component {

    state={
        track_list: null,
        title:"Top Songs",
        appState : action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us &f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            this.setState({
                track_list: res.data.message.body.track_list,
            })
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export const Consumer = context.Consumer;
