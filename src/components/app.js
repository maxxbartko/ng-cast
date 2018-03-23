angular.module('video-player', [])

.component('app', {
  controller: () => {
    this.data = window.exampleVideoData
  },
  templateUrl: 'src/templates/app.html'
});
