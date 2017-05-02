// Declare the shoppableVideo module and its dependency 'ui.bootstrap'
var app = angular.module('shoppableVideo', ['ui.bootstrap']);
// Declare the AppCtrl controller
app
  .controller('AppCtrl', ['$scope', function ($scope) {

    // Card counter
    var counter = 1;

    // Variable for the video title
    $scope.videoTitle = "";


    // Array to store the productCards
    $scope.productCards = [];

    // Array to store the products
    $scope.products = [];

    //Collapse variable
    $scope.isCollapsed = true;

    // Add productCard to the end of the array
var addProductCard = function () {
  $scope.productCards.push({ title: 'Product Card ' + counter, content: 'Product Card ' + counter, imageURL: '../assets/images/placeholder.png' });
  counter++;
  $scope.productCards[$scope.productCards.length - 1].active = true;
};

// Remove product card by index
var removeProductCard = function (event, index) {
  event.preventDefault();
  event.stopPropagation();
  $scope.productCards.splice(index, 1);
  counter--;
};

// Initialize the scope functions
$scope.addProductCard    = addProductCard;
$scope.removeProductCard = removeProductCard;

// For demonstration add 5 productCards
for (var i = 0; i < 5; i++) {
  addProductCard();
}

  }])
  .directive('tabHighlight', [function () {

    return {
      restrict: 'A',
      link: function (scope, element) {
        // Here is the major jQuery usage where we add the event
        // listeners mousemove and mouseout on the tabs to initalize
        // the moving highlight for the inactive tabs
        var x, y, initial_background = '#c3d5e6';

        element
          .removeAttr('style')
          .mousemove(function (e) {
            // Add highlight effect on inactive tabs
            if(!element.hasClass('active'))
            {
              x = e.pageX - this.offsetLeft;
              y = e.pageY - this.offsetTop;

              // Set the background when mouse moves over inactive tabs
              element
                .css({ background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background });
            }
          })
          .click(function () {
            // Return the inital background color of the tab
            element.removeAttr('style');
          });
      }
    };
  }]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jeSAndWkuYm9vdHN0cmFwJ1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaG9wcGFibGVWaWRlbycsIFsndWkuYm9vdHN0cmFwJ10pO1xuLy8gRGVjbGFyZSB0aGUgQXBwQ3RybCBjb250cm9sbGVyXG5hcHBcbiAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcblxuICAgIC8vIENhcmQgY291bnRlclxuICAgIHZhciBjb3VudGVyID0gMTtcblxuICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cblxuICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0Q2FyZHNcbiAgICAkc2NvcGUucHJvZHVjdENhcmRzID0gW107XG5cbiAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHNcbiAgICAkc2NvcGUucHJvZHVjdHMgPSBbXTtcblxuICAgIC8vQ29sbGFwc2UgdmFyaWFibGVcbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgLy8gQWRkIHByb2R1Y3RDYXJkIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5XG52YXIgYWRkUHJvZHVjdENhcmQgPSBmdW5jdGlvbiAoKSB7XG4gICRzY29wZS5wcm9kdWN0Q2FyZHMucHVzaCh7IHRpdGxlOiAnUHJvZHVjdCBDYXJkICcgKyBjb3VudGVyLCBjb250ZW50OiAnUHJvZHVjdCBDYXJkICcgKyBjb3VudGVyLCBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJyB9KTtcbiAgY291bnRlcisrO1xuICAkc2NvcGUucHJvZHVjdENhcmRzWyRzY29wZS5wcm9kdWN0Q2FyZHMubGVuZ3RoIC0gMV0uYWN0aXZlID0gdHJ1ZTtcbn07XG5cbi8vIFJlbW92ZSBwcm9kdWN0IGNhcmQgYnkgaW5kZXhcbnZhciByZW1vdmVQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICRzY29wZS5wcm9kdWN0Q2FyZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgY291bnRlci0tO1xufTtcblxuLy8gSW5pdGlhbGl6ZSB0aGUgc2NvcGUgZnVuY3Rpb25zXG4kc2NvcGUuYWRkUHJvZHVjdENhcmQgICAgPSBhZGRQcm9kdWN0Q2FyZDtcbiRzY29wZS5yZW1vdmVQcm9kdWN0Q2FyZCA9IHJlbW92ZVByb2R1Y3RDYXJkO1xuXG4vLyBGb3IgZGVtb25zdHJhdGlvbiBhZGQgNSBwcm9kdWN0Q2FyZHNcbmZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gIGFkZFByb2R1Y3RDYXJkKCk7XG59XG5cbiAgfV0pXG4gIC5kaXJlY3RpdmUoJ3RhYkhpZ2hsaWdodCcsIFtmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBIZXJlIGlzIHRoZSBtYWpvciBqUXVlcnkgdXNhZ2Ugd2hlcmUgd2UgYWRkIHRoZSBldmVudFxuICAgICAgICAvLyBsaXN0ZW5lcnMgbW91c2Vtb3ZlIGFuZCBtb3VzZW91dCBvbiB0aGUgdGFicyB0byBpbml0YWxpemVcbiAgICAgICAgLy8gdGhlIG1vdmluZyBoaWdobGlnaHQgZm9yIHRoZSBpbmFjdGl2ZSB0YWJzXG4gICAgICAgIHZhciB4LCB5LCBpbml0aWFsX2JhY2tncm91bmQgPSAnI2MzZDVlNic7XG5cbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gQWRkIGhpZ2hsaWdodCBlZmZlY3Qgb24gaW5hY3RpdmUgdGFic1xuICAgICAgICAgICAgaWYoIWVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4ID0gZS5wYWdlWCAtIHRoaXMub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgeSA9IGUucGFnZVkgLSB0aGlzLm9mZnNldFRvcDtcblxuICAgICAgICAgICAgICAvLyBTZXQgdGhlIGJhY2tncm91bmQgd2hlbiBtb3VzZSBtb3ZlcyBvdmVyIGluYWN0aXZlIHRhYnNcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAnLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSlcbiAgICAgICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJy13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pXG4gICAgICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBpbml0YWwgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFiXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pO1xuIl19
