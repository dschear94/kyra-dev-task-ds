import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
} from 'react-router-dom';
import VideoIndexContainer from './video_index/video_index_container';
import GraphContainer from './graph/graph_container'

const App = () => (
    <div >
        <Route exact path="/"><VideoIndexContainer/></Route>
        <Route exact path="/graph"><GraphContainer/></Route>
    </div>
);

export default App;