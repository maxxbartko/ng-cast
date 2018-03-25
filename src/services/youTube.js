angular.module('video-player')
  .service('youTube', function($http, $window) {
    this.search = (query, callback) => {
      console.log('it runs');
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          maxResults: 5,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true', 
          q: query,
          key: $window.YOUTUBE_API_KEY
        }
      }).then(function callback(response) {
          console.log('success!');
          // return response.items;
      }).catch(function({data}) {
        console.log(':(');
      })
    }
});