export const fetchVideos = (pageToken = "", results = []) => {

    

    const requestOptions = {
        playlistId: "UUvO6uJUVJQ6SrATfsWR5_aA",
        part: 'snippet',
        maxResults: 50,
        pageToken: pageToken,
    };

    // debugger

    const request = gapi.client.youtube.playlistItems.list(requestOptions);

    request.execute(response => {
        results = results.concat(response.items);
        if (response.nextPageToken) {
            fetchVideos(response.nextPageToken, results);  
        } else {
            {results};
        }
    });
}

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

// ^^^^^^^^^^^^ working code






// // Form submit and change channel
// channelForm.addEventListener('submit', e => {
//     e.preventDefault();

//     const channel = channelInput.value;

//     getChannel(channel);
// });

// // Load auth2 library
// function handleClientLoad() {
//     gapi.load('client:auth2', initClient);
// }

// // Init API client library and set up sign in listeners
// function initClient() {
//     gapi.client
//         .init({
//             discoveryDocs: DISCOVERY_DOCS,
//             clientId: CLIENT_ID,
//             scope: SCOPES
//         })
//         .then(() => {
//             // Listen for sign in state changes
//             gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
//             // Handle initial sign in state
//             updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//             authorizeButton.onclick = handleAuthClick;
//             signoutButton.onclick = handleSignoutClick;
//         });
// }

// // Update UI sign in state changes
// function updateSigninStatus(isSignedIn) {
//     if (isSignedIn) {
//         authorizeButton.style.display = 'none';
//         signoutButton.style.display = 'block';
//         content.style.display = 'block';
//         videoContainer.style.display = 'block';
//         getChannel(defaultChannel);
//     } else {
//         authorizeButton.style.display = 'block';
//         signoutButton.style.display = 'none';
//         content.style.display = 'none';
//         videoContainer.style.display = 'none';
//     }
// }

// // Handle login
// function handleAuthClick() {
//     gapi.auth2.getAuthInstance().signIn();
// }

// // Handle logout
// function handleSignoutClick() {
//     gapi.auth2.getAuthInstance().signOut();
// }

// // Display channel data
// function showChannelData(data) {
//     const channelData = document.getElementById('channel-data');
//     channelData.innerHTML = data;
// }

// // Get channel from API
// function getChannel(channel) {
//     gapi.client.youtube.channels
//         .list({
//             part: 'snippet,contentDetails,statistics',
//             forUsername: channel
//         })
//         .then(response => {
//             // console.log(response);
//             const channel = response.result.items[0];

//             const output = `
//         <ul class="collection">
//           <li class="collection-item">Title: ${channel.snippet.title}</li>
//           <li class="collection-item">ID: ${channel.id}</li>
//           <li class="collection-item">Subscribers: ${numberWithCommas(
//                 channel.statistics.subscriberCount
//             )}</li>
//           <li class="collection-item">Views: ${numberWithCommas(
//                 channel.statistics.viewCount
//             )}</li>
//           <li class="collection-item">Videos: ${numberWithCommas(
//                 channel.statistics.videoCount
//             )}</li>
//         </ul>
//         <p>${channel.snippet.description}</p>
//         <hr>
//         <a class="btn grey darken-2" target="_blank" href="https://youtube.com/${
//                 channel.snippet.customUrl
//                 }">Visit Channel</a>
//       `;
//             showChannelData(output);

//             const playlistId = channel.contentDetails.relatedPlaylists.uploads;
//             requestVideoPlaylist(playlistId);
//         })
//         .catch(err => alert('No Channel By That Name'));
// }

// // Add commas to number
// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// function requestVideoPlaylist(playlistId) {
//     const requestOptions = {
//         playlistId: playlistId,
//         part: 'snippet',
//         maxResults: 10
//     };

//     const request = gapi.client.youtube.playlistItems.list(requestOptions);

//     request.execute(response => {
//         // console.log(response);
//         const playListItems = response.result.items;
//         if (playListItems) {
//             let output = '<br><h4 class="center-align">Latest Videos</h4>';

//             // Loop through videos and append output
//             playListItems.forEach(item => {
//                 const videoId = item.snippet.resourceId.videoId;

//                 output += `
//           <div class="col s3">
//           <iframe width="100%" height="auto" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//           </div>
//         `;
//             });

//             // Output videos
//             videoContainer.innerHTML = output;
//         } else {
//             videoContainer.innerHTML = 'No Uploaded Videos';
//         }
//     });
// }