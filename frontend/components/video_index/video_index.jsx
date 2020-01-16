import React from 'react';
import VideoIndexItem from './video_index_item'

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);

        this.fetchVideos = this.fetchVideos.bind(this);
    }

    componentDidMount() {
        this.props.clientLoad();
        this.props.fetchVideos();
    }

    componentDidUpdate(prevProps) {
        const { token } = this.props;

        if (prevProps.token !== this.props.token) {
            return this.props.fetchVideos(token);
        }
        
    }

    fetchVideos() {
        return this.props.fetchVideos();
    }

    render() {
        const { videos } = this.props;

        let output = videos.map(item => 
            <VideoIndexItem key={item.snippet.resourceId.videoId} item={item}/>
        );

        return (
            <div className="index">
                <div className="header">
                    <h1 onClick={this.fetchVideos} title="Click to Refresh">PAQ Video List </h1>
                </div>
                <ul>
                    {output}
                </ul>
            </div>
        );
    }
}

export default VideoIndex;
