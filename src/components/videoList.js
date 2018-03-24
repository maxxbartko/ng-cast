angular.module('video-player')
  .component('videoList', {
  // STATELESS COMPONENTS
  // specifies what data is coming in
  // basically all bindings
  // expects specific name of input
  
    bindings: {
      videos: '<'
    }, // and templates
    controller: function () {
  
    },
    templateUrl: 'src/templates/videoList.html'
  });