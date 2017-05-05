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
    $scope.isCollapsed = false;

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jeSAndWkuYm9vdHN0cmFwJ1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaG9wcGFibGVWaWRlbycsIFsndWkuYm9vdHN0cmFwJ10pO1xuLy8gRGVjbGFyZSB0aGUgQXBwQ3RybCBjb250cm9sbGVyXG5hcHBcbiAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcblxuICAgIC8vIENhcmQgY291bnRlclxuICAgIHZhciBjb3VudGVyID0gMTtcblxuICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cblxuICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0Q2FyZHNcbiAgICAkc2NvcGUucHJvZHVjdENhcmRzID0gW107XG5cbiAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHNcbiAgICAkc2NvcGUucHJvZHVjdHMgPSBbXTtcblxuICAgIC8vQ29sbGFwc2UgdmFyaWFibGVcbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgIC8vIEFkZCBwcm9kdWN0Q2FyZCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxudmFyIGFkZFByb2R1Y3RDYXJkID0gZnVuY3Rpb24gKCkge1xuICAkc2NvcGUucHJvZHVjdENhcmRzLnB1c2goeyB0aXRsZTogJ1Byb2R1Y3QgQ2FyZCAnICsgY291bnRlciwgY29udGVudDogJ1Byb2R1Y3QgQ2FyZCAnICsgY291bnRlciwgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZycgfSk7XG4gIGNvdW50ZXIrKztcbiAgJHNjb3BlLnByb2R1Y3RDYXJkc1skc2NvcGUucHJvZHVjdENhcmRzLmxlbmd0aCAtIDFdLmFjdGl2ZSA9IHRydWU7XG59O1xuXG4vLyBSZW1vdmUgcHJvZHVjdCBjYXJkIGJ5IGluZGV4XG52YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAkc2NvcGUucHJvZHVjdENhcmRzLnNwbGljZShpbmRleCwgMSk7XG4gIGNvdW50ZXItLTtcbn07XG5cbi8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xuJHNjb3BlLmFkZFByb2R1Y3RDYXJkICAgID0gYWRkUHJvZHVjdENhcmQ7XG4kc2NvcGUucmVtb3ZlUHJvZHVjdENhcmQgPSByZW1vdmVQcm9kdWN0Q2FyZDtcblxuLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkIDUgcHJvZHVjdENhcmRzXG5mb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICBhZGRQcm9kdWN0Q2FyZCgpO1xufVxuXG4gIH1dKVxuICAuZGlyZWN0aXZlKCd0YWJIaWdobGlnaHQnLCBbZnVuY3Rpb24gKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gSGVyZSBpcyB0aGUgbWFqb3IgalF1ZXJ5IHVzYWdlIHdoZXJlIHdlIGFkZCB0aGUgZXZlbnRcbiAgICAgICAgLy8gbGlzdGVuZXJzIG1vdXNlbW92ZSBhbmQgbW91c2VvdXQgb24gdGhlIHRhYnMgdG8gaW5pdGFsaXplXG4gICAgICAgIC8vIHRoZSBtb3ZpbmcgaGlnaGxpZ2h0IGZvciB0aGUgaW5hY3RpdmUgdGFic1xuICAgICAgICB2YXIgeCwgeSwgaW5pdGlhbF9iYWNrZ3JvdW5kID0gJyNjM2Q1ZTYnO1xuXG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgIC5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIEFkZCBoaWdobGlnaHQgZWZmZWN0IG9uIGluYWN0aXZlIHRhYnNcbiAgICAgICAgICAgIGlmKCFlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeCA9IGUucGFnZVggLSB0aGlzLm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgIHkgPSBlLnBhZ2VZIC0gdGhpcy5vZmZzZXRUb3A7XG5cbiAgICAgICAgICAgICAgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIHdoZW4gbW91c2UgbW92ZXMgb3ZlciBpbmFjdGl2ZSB0YWJzXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJy1tb3otcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pXG4gICAgICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICctd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KVxuICAgICAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgaW5pdGFsIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYlxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1dKTtcbiJdfQ==
