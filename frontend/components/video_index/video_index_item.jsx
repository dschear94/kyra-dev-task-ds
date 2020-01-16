import React from 'react';
// import { gapi } from 'gapi-script';
// import { fetchVideos } from '../../util/google_api_util'

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {

    }

    render() {
        const { item } = this.props;
        const videoId = item.snippet.resourceId.videoId;
        return (
            <li >
                {/* <iframe width="50px" height="auto" src={`https://www.youtube.com/embed/${videoId}`}></iframe> */}
                <div>{item.snippet.title}</div>
                <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.description}/>
            </li >
        );
    }
}

export default VideoIndexItem;
