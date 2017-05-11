// Declare the shoppableVideo module and its dependency 'ui.bootstrap'
var app = angular.module('shoppableVideo', ['ui.bootstrap']);
// Declare the AppCtrl controller
app
    .controller('AppCtrl', ['$scope', function($scope) {

        // Card counter
        var counter = 1;

        // Variable for the video title
        $scope.videoTitle = "";


        // Array to store the productCards
        $scope.productCards = [];

        // Array to store the products
        $scope.products = [];

        //Collapse variable
        $scope.isCollapsed = false;

        $scope.playPauseSrc = "../assets/images/play.png";
        $scope.muteSrc = "../assets/images/mute.png";


        //Play and pause
        $scope.togglePlayPause = function() {
          //  var playpause = document.getElementById("playpause");
            if (video.paused || video.ended) {
                video.play();
                $scope.playPauseSrc = "../assets/images/pause.png";
            } else {
                video.pause();
                $scope.playPauseSrc = "../assets/images/play.png";
            }
        }

        // Add productCard to the end of the array
        var addProductCard = function() {
            $scope.productCards.push({
                title: 'Product Card ' + counter,
                content: 'Product Card ' + counter,
                imageURL: '../assets/images/placeholder.png'
            });
            counter++;
            $scope.productCards[$scope.productCards.length - 1].active = true;
        };

        // Remove product card by index
        var removeProductCard = function(event, index) {
            event.preventDefault();
            event.stopPropagation();
            $scope.productCards.splice(index, 1);
            counter--;
        };

        // Initialize the scope functions
        $scope.addProductCard = addProductCard;
        $scope.removeProductCard = removeProductCard;

        // For demonstration add 5 productCards
        for (var i = 0; i < 5; i++) {
            addProductCard();
        }
    }]);


//Video controller





//Volume
function setVolume() {
    var volume = document.getElementById("volume");
    video.volume = volume.value;
}
//Mute
function toggleMute() {
    video.muted = !video.muted;
}
//Progressbar
video.addEventListener('timeupdate', updateProgress, false);

function updateProgress() {
    var progress = document.getElementById("progress");
    var value = 0;
    if (video.currentTime > 0) {
        value = Math.floor((100 / video.duration) * video.currentTime);
    }
    progress.style.width = value + "%";
}


var seekBar = document.getElementById("progress");


// Update the seek bar as the video plays
video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;
});
