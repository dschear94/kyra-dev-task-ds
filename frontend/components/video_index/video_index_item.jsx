import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {

    }

    render() {
        const { item } = this.props;
        return (
            <li >
                <div>{item.snippet.title}</div>
                <div className="imageContainer">
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.description}/>
                </div>
            </li >
        );
    }
}

export default VideoIndexItem;
