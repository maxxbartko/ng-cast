angular.module('video-player')
  .controller('AppCtrl', function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = function() {}
    
    this.onClick = (video) => {
      this.currentVideo = video;
      searchYoutube({}, successCallback, errorCallback);
    };
})     
  
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });