// Declare the shoppableVideo module and its dependency 'ui.bootstrap'
var app = angular.module('shoppableVideo', ['ui.bootstrap']);
// Declare the AppCtrl controller
app
    .controller('AppCtrl', ['$scope', function($scope) {

        // Card counter
        var cardCounter = 1;

        var productCounter = "";

        // Variable for the video title
        $scope.videoTitle = "";


        // Array to store the productCards
        $scope.productCards = [];


        //Collapse variable for the product cards, true if collapsed
        $scope.isCollapsed = false;

        //Collaspse variable for the products, true if collapsed
        $scope.isProductCollapsed = false;

        // Add productCard to the end of the array
        var addProductCard = function() {
            $scope.productCards.push({
                cardTitle: 'Product Card ' + cardCounter,
                imageURL: '../assets/images/placeholder.png',
                products: []
            });
            cardCounter++;
            $scope.productCards[$scope.productCards.length - 1].active = true;
        };

        //Add product to a product card
        var addProduct = function(index) {
            productCounter = $scope.productCards[index].products.length + 1;
            $scope.productCards[index].products.push({
                productTitle: 'Product ' + productCounter ,
                link: 'https://www...',
                specialOffer: '20%',
                buttonText: 'Buy now baby',
                targetGroup: 'Rich people',
                imageURL: '../assets/images/placeholder.png'
            });
        };

        // Remove product card by index
        var removeProductCard = function(event, index) {
            event.preventDefault();
            event.stopPropagation();
            $scope.productCards.splice(index, 1);
            cardCounter--;
        };

        // Remove product by index and product card index
        var removeProduct = function(productCardIndex, event, index) {
            event.preventDefault();
            event.stopPropagation();
            $scope.productCards[productCardIndex].products.splice(index, 1);
        };

        // Initialize the scope functions
        $scope.addProductCard = addProductCard;
        $scope.addProduct = addProduct;
        $scope.removeProductCard = removeProductCard;
        $scope.removeProduct = removeProduct;

        // For demonstration add 5 productCards
        /*for (var i = 0; i < 5; i++) {
            addProductCard();
        }*/


    }])
    .directive('tabHighlight', [function() {

        return {
            restrict: 'A',
            link: function(scope, element) {
                // Here is the major jQuery usage where we add the event
                // listeners mousemove and mouseout on the tabs to initalize
                // the moving highlight for the inactive tabs
                var x, y, initial_background = '#c3d5e6';

                element
                    .removeAttr('style')
                    .mousemove(function(e) {
                        // Add highlight effect on inactive tabs
                        if (!element.hasClass('active')) {
                            x = e.pageX - this.offsetLeft;
                            y = e.pageY - this.offsetTop;

                            // Set the background when mouse moves over inactive tabs
                            element
                                .css({
                                    background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background
                                })
                                .css({
                                    background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background
                                })
                                .css({
                                    background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background
                                });
                        }
                    })
                    .click(function() {
                        // Return the inital background color of the tab
                        element.removeAttr('style');
                    });
            }
        };
    }]);
