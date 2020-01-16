import React from 'react';
import { Provider } from 'react-redux';
import VideoIndexContainer from './video_index/video_index_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <VideoIndexContainer />
    </Provider>
);

export default Root;
