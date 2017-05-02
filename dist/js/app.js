// Declare the shoppableVideo module and its dependency 'ui.bootstrap'
var app = angular.module('shoppableVideo', ['ui.bootstrap']);
// Declare the AppCtrl controller
app
  .controller('AppCtrl', ['$scope', function ($scope) {

    // Tab counter
    var counter = 1;
    // Array to store the tabs
    $scope.tabs = [];

    // Add tab to the end of the array
var addTab = function () {
  $scope.tabs.push({ title: 'Tab ' + counter, content: 'Tab ' + counter });
  counter++;
  $scope.tabs[$scope.tabs.length - 1].active = true;
};

// Remove tab by index
var removeTab = function (event, index) {
  event.preventDefault();
  event.stopPropagation();
  $scope.tabs.splice(index, 1);
  counter--;
};

// Initialize the scope functions
$scope.addTab    = addTab;
$scope.removeTab = removeTab;

// For demonstration add 10 tabs
for (var i = 0; i < 10; i++) {
  addTab();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNsYXJlIHRoZSBjaHJvbWVUYWJzQXBwIG1vZHVsZSBhbmQgaXRzIGRlcGVuZGVuY3kgJ3VpLmJvb3RzdHJhcCdcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnY2hyb21lVGFic0FwcCcsIFsndWkuYm9vdHN0cmFwJ10pO1xuLy8gRGVjbGFyZSB0aGUgQXBwQ3RybCBjb250cm9sbGVyXG5hcHBcbiAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcblxuICAgIC8vIFRhYiBjb3VudGVyXG4gICAgdmFyIGNvdW50ZXIgPSAxO1xuICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSB0YWJzXG4gICAgJHNjb3BlLnRhYnMgPSBbXTtcblxuICAgIC8vIEFkZCB0YWIgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXlcbnZhciBhZGRUYWIgPSBmdW5jdGlvbiAoKSB7XG4gICRzY29wZS50YWJzLnB1c2goeyB0aXRsZTogJ1RhYiAnICsgY291bnRlciwgY29udGVudDogJ1RhYiAnICsgY291bnRlciB9KTtcbiAgY291bnRlcisrO1xuICAkc2NvcGUudGFic1skc2NvcGUudGFicy5sZW5ndGggLSAxXS5hY3RpdmUgPSB0cnVlO1xufTtcblxuLy8gUmVtb3ZlIHRhYiBieSBpbmRleFxudmFyIHJlbW92ZVRhYiA9IGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICRzY29wZS50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gIGNvdW50ZXItLTtcbn07XG5cbi8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xuJHNjb3BlLmFkZFRhYiAgICA9IGFkZFRhYjtcbiRzY29wZS5yZW1vdmVUYWIgPSByZW1vdmVUYWI7XG5cbi8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCAxMCB0YWJzXG5mb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgYWRkVGFiKCk7XG59XG5cbiAgfV0pXG4gIC5kaXJlY3RpdmUoJ3RhYkhpZ2hsaWdodCcsIFtmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBIZXJlIGlzIHRoZSBtYWpvciBqUXVlcnkgdXNhZ2Ugd2hlcmUgd2UgYWRkIHRoZSBldmVudFxuICAgICAgICAvLyBsaXN0ZW5lcnMgbW91c2Vtb3ZlIGFuZCBtb3VzZW91dCBvbiB0aGUgdGFicyB0byBpbml0YWxpemVcbiAgICAgICAgLy8gdGhlIG1vdmluZyBoaWdobGlnaHQgZm9yIHRoZSBpbmFjdGl2ZSB0YWJzXG4gICAgICAgIHZhciB4LCB5LCBpbml0aWFsX2JhY2tncm91bmQgPSAnI2MzZDVlNic7XG5cbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gQWRkIGhpZ2hsaWdodCBlZmZlY3Qgb24gaW5hY3RpdmUgdGFic1xuICAgICAgICAgICAgaWYoIWVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4ID0gZS5wYWdlWCAtIHRoaXMub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgeSA9IGUucGFnZVkgLSB0aGlzLm9mZnNldFRvcDtcblxuICAgICAgICAgICAgICAvLyBTZXQgdGhlIGJhY2tncm91bmQgd2hlbiBtb3VzZSBtb3ZlcyBvdmVyIGluYWN0aXZlIHRhYnNcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAnLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSlcbiAgICAgICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJy13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pXG4gICAgICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBpbml0YWwgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFiXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pO1xuIl19
