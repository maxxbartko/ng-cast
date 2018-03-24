angular.module('video-player')

  .component('videoPlayer', {
    controller: function() {
      console.log(this.videos[0])
    },
    bindings: {
      videos: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
