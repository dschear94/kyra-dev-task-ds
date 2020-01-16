import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

// import App from './app';
import VideoIndexContainer from './video_index/video_index_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <VideoIndexContainer />
        </HashRouter>
    </Provider>
);

export default Root;
