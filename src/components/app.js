angular.module('video-player', [])
  .component('app', {
    controller: () => {
      this.videos = exampleVideoData;
      console.log(this.videos);
    },
    templateUrl: 'src/templates/app.html'
  });