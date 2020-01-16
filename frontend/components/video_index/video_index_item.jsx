import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return (
            <li >
                <div className="imageContainer">
                    <div>
                        <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target='_blank'>
                            <div className="vidTitle">{item.snippet.title}</div>
                        </a>
                    </div>
                    <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target='_blank'>
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.description}/>
                    </a>
                </div>
            </li >
        );
    }
}

export default VideoIndexItem;
