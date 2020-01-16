import * as APIUtil from '../util/google_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

export const receiveVideos = (videos) => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
};

export const fetchVideos = (token) => dispatch => {
    // return APIUtil.fetchVideos().then(videos => (
    //     dispatch(receiveVideos(videos))
    // ));
    return APIUtil.ajaxFetch(token).then(videos => {
        (dispatch(receiveVideos(videos)))
    })
}