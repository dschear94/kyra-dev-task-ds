import React from 'react';
// import { gapi } from 'gapi-script';
import {gapiLoadAndFetch} from '../../util/google_api_util'

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    
    gapiAuth() {
        gapiLoadAndFetch();
    }

    fetchVideos() {
    }

    render() {
        return (
            <div>
                <h1>PAQ Video Index</h1>
                <button onClick={this.gapiAuth}>Refresh List</button>
            </div>
        );
    }
}

export default VideoIndex;
