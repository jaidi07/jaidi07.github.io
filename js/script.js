// ajax==
// $.ajax({
//   url: 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCkXmLjEr95LVtGuIm3l2dPg&key=AIzaSyAy1VRmbcdENnppWzvnzNV4j631b78PiDU',
//   success: result =>{
//     const ytProfilePic = result['items'][0]['snippet']['thumbnails']['medium']['url'];
//     const ytName = result['items'][0]['snippet']['title'];
//     const ytSubs = result['items'][0]['statistics']['subscriberCount'];
//     const ytDetails = document.querySelector('#ytDetails');
//     ytDetails.innerHTML = `<div class="col-md-4">
//                               <img src="${ytProfilePic}" width="200" class="rounded-circle img-thumbnail">
//                             </div>
//                             <div class="col-md-8">
//                               <h5>${ytName}</h5>
//                               <p>${ytSubs} Subscribers.</p>
//                             </div>`
    
    
//   },
//   error: (err)=>{
//     console.log(err.responseText);
//   }
// })

// $.ajax({
//   url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAy1VRmbcdENnppWzvnzNV4j631b78PiDU&channelId=UCkXmLjEr95LVtGuIm3l2dPg&maxResults=1&order=date&part=snippet',
//   success: result =>{
//     const lastVideo = result['items'][0]['id']['videoId'];
//     const ytVideo = document.querySelector('#ytVideo');
//     ytVideo.innerHTML = ` <div class="col">
//                             <div class="embed-responsive embed-responsive-16by9">
//                               <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${lastVideo}?rel=8" allowfullscreen></iframe>
//                             </div>
//                           </div>`
    
//   },
//   error: (err)=>{
//     console.log(err.responseText);
//   }
// })





// const accessToken = 'IGQVJXWWNESm5SWVFqUXJacDlpQjJPR0JqaGNhUjh2QlFDNHJzZAFFFbURVOGRRWE5oLWltbUtFbDMtd1FHVmdGTXZAjWUsxVFYtYy1QNzVra3VvQzFiTVJRVnp4UmdkdWRERGh1dFFJU1VGTzNpWU81aQZDZD';


// fetch==
fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCkXmLjEr95LVtGuIm3l2dPg&key=AIzaSyAy1VRmbcdENnppWzvnzNV4j631b78PiDU')
  .then(response=>response.json())
  .then(response =>{
    const ytProfilePic = response['items'][0]['snippet']['thumbnails']['medium']['url'];
    const ytName = response['items'][0]['snippet']['title'];
    const ytSubs = response['items'][0]['statistics']['subscriberCount'];
    const ytDetails = document.querySelector('#ytDetails');
    ytDetails.innerHTML = `<div class="col-md-4">
                              <img src="${ytProfilePic}" width="200" class="rounded-circle img-thumbnail">
                            </div>
                            <div class="col-md-8">
                              <h5>${ytName}</h5>
                              <p>${ytSubs} Subscribers.</p>
                            </div>`
    
    
  })

fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAy1VRmbcdENnppWzvnzNV4j631b78PiDU&channelId=UCkXmLjEr95LVtGuIm3l2dPg&maxResults=1&order=date&part=snippet')
  .then(response=>response.json())
  .then(response =>{
      const lastVideo = response['items'][0]['id']['videoId'];
      const ytVideo = document.querySelector('#ytVideo');
      ytVideo.innerHTML = ` <div class="col">
                              <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${lastVideo}?rel=8" allowfullscreen></iframe>
                              </div>
                            </div>`
      
    })