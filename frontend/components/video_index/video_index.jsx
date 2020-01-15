import React from 'react';
import { gapi } from 'gapi-script';
// import 

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.gapiAuth();
    }

    gapiAuth() {
        // gapi
    }

    fetchVideos() {

        // const requestOptions = {
        //     playlistId: "UUvO6uJUVJQ6SrATfsWR5_aA",
        //     part: 'snippet',
        // };

        // const request = gapi.client.youtube.playlistItems.list(requestOptions);

        // request.execute(response => {
        //     console.log(response);
        // });

    }

    render() {
        return (
            <div>
                <h1>PAQ Video Index</h1>
                <button onClick={this.gapiAuth()}>Authenticate</button>
                <button onClick={this.fetchVideos()}>Refresh List</button>
            </div>
        );
    }
}

export default VideoIndex;
