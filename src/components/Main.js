import React, { Component } from 'react'
import TopSongs from './TopSongs';
import SearchSongs from './SearchSongs';

class Main extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <SearchSongs/>
                    <TopSongs/>
                </React.Fragment>
            </div>
        )
    }
}

export default Main
