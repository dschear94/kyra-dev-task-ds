import React from 'react';
import VideoIndexItem from './video_index_item'
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);

        this.fetchVideos = this.fetchVideos.bind(this);

        this.state = {
            time: new Date(Date.now()).toString()
        }
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
        this.setState({
            time: new Date(Date.now()).toString()
        })
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
                    <h1 className="header2" onClick={this.fetchVideos} title="Click to Refresh">PAQ Videos</h1>
                </div>
                    <p>
                        Last Refresh: {this.state.time}
                    </p>
                    <p>
                        Video Count: {videos.length}
                    </p>
                    <div className="vidLink">
                        <Link to="/graph">Graph</Link>
                    </div>
                <ul>
                    {output}
                </ul>
            </div>
        );
    }
}

export default VideoIndex;
