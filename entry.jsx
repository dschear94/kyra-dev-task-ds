import React from 'react';
import ReactDOM from 'react-dom';
import VideoIndex from './frontend/video_index';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<VideoIndex />, root);
});
