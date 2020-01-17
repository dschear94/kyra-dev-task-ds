import { connect } from 'react-redux';
import Graph from './graph'
import {
    fetchVideos,
} from '../../actions/video_actions';
import { clientLoad } from '../../util/google_api_util'

const msp = (state) => {
    return {
        videos: state.entities.videos,
        token: state.entities.token
    }
};


const mdp = dispatch => ({
    fetchVideos: (token = "") => dispatch(fetchVideos(token)),
    clientLoad: () => clientLoad(),
});

export default connect(msp, mdp)(Graph);