import React from 'react';
// import { gapi } from 'gapi-script';
// import { fetchVideos } from '../../util/google_api_util'

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const videoId = this.props.item.snippet.resourceId.videoId;
        return (
            <li >
                <iframe width="100%" height="auto" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </li >
        );
    }
}

export default VideoIndexItem;
