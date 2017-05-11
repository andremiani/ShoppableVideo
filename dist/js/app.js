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

    // Array to store the products in the library
    $scope.libraryProducts = [
      {
        title: 'Smördeg',
        image: '../assets/images/Smordeg-01.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Smördeg Eko',
        image: '../assets/images/Smordeg2-01.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Smördeg Lyx',
        image: '../assets/images/Smordeg3.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Ägg Frigående',
        image: '../assets/images/Ägg - Frigående.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Ägg',
        image: '../assets/images/Ägg-Vanlig.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Ägg Eko',
        image: '../assets/images/Ägg-eko.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Kniv Japansk',
        image: '../assets/images/Kniv-Avancerad.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kniv Barn',
        image: '../assets/images/Kniv-Barn.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kniv Stor',
        image: '../assets/images/Kniv-Större-01.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Förkläde Brun',
        image: '../assets/images/Förkläde-läder-01.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Others"
      },
      {
        title: 'Förkläde Tyg',
        image: '../assets/images/Förkläde-Tyg.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Others"
      },
      {
        title: 'Äggklocka',
        image: '../assets/images/Äggklocka.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Others"
      },
      {
        title: 'Pensel Silikon',
        image: '../assets/images/pensel-silicon.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kavel rund',
        image: '../assets/images/kavel-rund.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kavel Barn',
        image: '../assets/images/kavel-barn.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kavel',
        image: '../assets/images/Kavel.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Gjutjärn',
        image: '../assets/images/stekpanna-gjutjärn.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Stekpanna',
        image: '../assets/images/Stekpanna.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Pensel m. kniv',
        image: '../assets/images/pensel-med-kniv.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Pensel Trä',
        image: '../assets/images/pensel-trä.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      }

    ];

    // Array that store all the categories that are used in the dropdown-list
    $scope.categories = []
    angular.forEach($scope.libraryProducts, function(value, category){
        if($scope.categories.indexOf(value.category) == -1)
        {
            $scope.categories.push(value.category);
        }
    });

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlY2xhcmUgdGhlIHNob3BwYWJsZVZpZGVvIG1vZHVsZSBhbmQgaXRzIGRlcGVuZGVuY3kgJ3VpLmJvb3RzdHJhcCdcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc2hvcHBhYmxlVmlkZW8nLCBbJ3VpLmJvb3RzdHJhcCddKTtcbi8vIERlY2xhcmUgdGhlIEFwcEN0cmwgY29udHJvbGxlclxuYXBwXG4gIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG5cbiAgICAvLyBDYXJkIGNvdW50ZXJcbiAgICB2YXIgY291bnRlciA9IDE7XG5cbiAgICAvLyBWYXJpYWJsZSBmb3IgdGhlIHZpZGVvIHRpdGxlXG4gICAgJHNjb3BlLnZpZGVvVGl0bGUgPSBcIlwiO1xuXG5cbiAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdENhcmRzXG4gICAgJHNjb3BlLnByb2R1Y3RDYXJkcyA9IFtdO1xuXG4gICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RzXG4gICAgJHNjb3BlLnByb2R1Y3RzID0gW107XG5cbiAgICAvL0NvbGxhcHNlIHZhcmlhYmxlXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpYnJhcnlcbiAgICAkc2NvcGUubGlicmFyeVByb2R1Y3RzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ1Ntw7ZyZGVnJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWctMDEucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9TbW9yZGVnMi0wMS5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWczLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfDhGdnIEZyaWfDpWVuZGUnLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZyAtIEZyaWfDpWVuZGUucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ8OEZ2cnLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1WYW5saWcucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2ctZWtvLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdLbml2IEphcGFuc2snLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1BdmFuY2VyYWQucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0tuaXYgQmFybicsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUJhcm4ucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0tuaXYgU3RvcicsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LVN0w7ZycmUtMDEucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLWzDpGRlci0wMS5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0bDtnJrbMOkZGUgVHlnJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtVHlnLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnw4RnZ2tsb2NrYScsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdna2xvY2thLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLXNpbGljb24ucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0thdmVsIHJ1bmQnLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtcnVuZC5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnS2F2ZWwgQmFybicsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9rYXZlbC1iYXJuLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdLYXZlbCcsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9LYXZlbC5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnR2p1dGrDpHJuJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL3N0ZWtwYW5uYS1nanV0asOkcm4ucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1N0ZWtwYW5uYScsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9TdGVrcGFubmEucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1BlbnNlbCBtLiBrbml2JyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1tZWQta25pdi5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnUGVuc2VsIFRyw6QnLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLXRyw6QucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICB9XG5cbiAgICBdO1xuXG4gICAgLy8gQXJyYXkgdGhhdCBzdG9yZSBhbGwgdGhlIGNhdGVnb3JpZXMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgZHJvcGRvd24tbGlzdFxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gW11cbiAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmxpYnJhcnlQcm9kdWN0cywgZnVuY3Rpb24odmFsdWUsIGNhdGVnb3J5KXtcbiAgICAgICAgaWYoJHNjb3BlLmNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5jYXRlZ29yeSkgPT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLnB1c2godmFsdWUuY2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgcHJvZHVjdENhcmQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXlcbnZhciBhZGRQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgJHNjb3BlLnByb2R1Y3RDYXJkcy5wdXNoKHsgdGl0bGU6ICdQcm9kdWN0IENhcmQgJyArIGNvdW50ZXIsIGNvbnRlbnQ6ICdQcm9kdWN0IENhcmQgJyArIGNvdW50ZXIsIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnIH0pO1xuICBjb3VudGVyKys7XG4gICRzY29wZS5wcm9kdWN0Q2FyZHNbJHNjb3BlLnByb2R1Y3RDYXJkcy5sZW5ndGggLSAxXS5hY3RpdmUgPSB0cnVlO1xufTtcblxuLy8gUmVtb3ZlIHByb2R1Y3QgY2FyZCBieSBpbmRleFxudmFyIHJlbW92ZVByb2R1Y3RDYXJkID0gZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgJHNjb3BlLnByb2R1Y3RDYXJkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBjb3VudGVyLS07XG59O1xuXG4vLyBJbml0aWFsaXplIHRoZSBzY29wZSBmdW5jdGlvbnNcbiRzY29wZS5hZGRQcm9kdWN0Q2FyZCAgICA9IGFkZFByb2R1Y3RDYXJkO1xuJHNjb3BlLnJlbW92ZVByb2R1Y3RDYXJkID0gcmVtb3ZlUHJvZHVjdENhcmQ7XG5cbi8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCA1IHByb2R1Y3RDYXJkc1xuZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgYWRkUHJvZHVjdENhcmQoKTtcbn1cblxuICB9XSlcbiAgLmRpcmVjdGl2ZSgndGFiSGlnaGxpZ2h0JywgW2Z1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIEhlcmUgaXMgdGhlIG1ham9yIGpRdWVyeSB1c2FnZSB3aGVyZSB3ZSBhZGQgdGhlIGV2ZW50XG4gICAgICAgIC8vIGxpc3RlbmVycyBtb3VzZW1vdmUgYW5kIG1vdXNlb3V0IG9uIHRoZSB0YWJzIHRvIGluaXRhbGl6ZVxuICAgICAgICAvLyB0aGUgbW92aW5nIGhpZ2hsaWdodCBmb3IgdGhlIGluYWN0aXZlIHRhYnNcbiAgICAgICAgdmFyIHgsIHksIGluaXRpYWxfYmFja2dyb3VuZCA9ICcjYzNkNWU2JztcblxuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBBZGQgaGlnaGxpZ2h0IGVmZmVjdCBvbiBpbmFjdGl2ZSB0YWJzXG4gICAgICAgICAgICBpZighZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHggPSBlLnBhZ2VYIC0gdGhpcy5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICB5ID0gZS5wYWdlWSAtIHRoaXMub2Zmc2V0VG9wO1xuXG4gICAgICAgICAgICAgIC8vIFNldCB0aGUgYmFja2dyb3VuZCB3aGVuIG1vdXNlIG1vdmVzIG92ZXIgaW5hY3RpdmUgdGFic1xuICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICctbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KVxuICAgICAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAnLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSlcbiAgICAgICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGluaXRhbCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG4iXX0=
