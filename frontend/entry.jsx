import React from 'react';
import ReactDOM from 'react-dom';
import VideoIndex from './components/video_index/video_index';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("yo");
    ReactDOM.render(<VideoIndex/>, root);
});
