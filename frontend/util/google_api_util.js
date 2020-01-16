export const clientLoad = () => {
    gapi.load("client", () => {

        gapi.client.setApiKey(window.access['apikey']);

        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(console.log("GAPI client loaded for API"), function (err) { console.error("Error loading GAPI client for API", err); });
    })
}

export const ajaxFetch = (token) => {
    return $.ajax({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=50&pageToken=${token}&part=snippet&playlistId=UUvO6uJUVJQ6SrATfsWR5_aA&key=${window.access['apikey']}`
    });
}