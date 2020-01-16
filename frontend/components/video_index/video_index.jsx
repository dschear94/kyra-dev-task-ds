import React from 'react';
// import { gapi } from 'gapi-script';
// import { fetchVideos } from '../../util/google_api_util'
import VideoIndexItem from './video_index_item'

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);

        // this.gapiAuth = this.gapiAuth.bind(this);
        // this.state = {
        //     videos: []
        // };

        this.fetchVideos = this.fetchVideos.bind(this);
    }

    componentDidMount() {
        // this.props = gapiLoadAndFetch();
        // console.log(this.props);
        this.props.clientLoad();
    }

    componentDidUpdate(prevProps) {
        const { token } = this.props;

        if (prevProps.token !== this.props.token) {
            return this.props.fetchVideos(token);
        }
        
    }
    
    gapiAuth() {
    }

    fetchVideos() {
        return this.props.fetchVideos();
    }

    render() {
        const { videos } = this.props;

        // const list = (<ul>

        //     {videos.map(video => {
        //         <VideoIndexItem video={video} />
        //     })}
        // </ul>);
        let output = videos.map(item => 
            <VideoIndexItem key={item.snippet.resourceId.videoId} item={item}/>
        );


        return (
            <div>
                <h1>PAQ Video Index</h1>
                <button onClick={this.fetchVideos}>Refresh List</button>
                {/* <button onClick={this.props.clientLoad}>Client Load</button> */}
                <ul>
                    {output}
                </ul>
            </div>
        );
    }
}

export default VideoIndex;
