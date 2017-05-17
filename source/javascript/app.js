// Declare the shoppableVideo module and its dependencies
var app = angular.module('shoppableVideo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.sortable']);
// Declare the AppCtrl controller
app
    .controller('AppCtrl', ['$scope', function($scope) {

        // Card counter, used for card naming
        var cardCounter = 1;

        // Product counter, used for product naming
        var productCounter = "";


        // Variable for the video title
        $scope.videoTitle = "";

        $scope.playPauseSrc = "../assets/images/play.png";
        $scope.muteSrc = "../assets/images/mute.png";

        //Play and pause
        $scope.toggleMute = function() {
          //  var playpause = document.getElementById("playpause");
            if (!video.mute) {
                video.mute = !video.mute;
                $scope.muteSrc = "../assets/images/speaker.png";
            } else {
                video.mute = video.mute;
                $scope.muteSrc = "../assets/images/mute.png";
            }
        };

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
        };

        // Array to store the productCards
        $scope.productCards = [];

        //Collapse variable for the product cards, true if collapsed
        $scope.isCollapsed = false;

        //Collaspse variable for the products, true if collapsed
        $scope.isProductCollapsed = false;

        //Tells ui-sortable what and how to sort products
        $scope.sortableProductOptions = {
            handle: '.product',
            // items: ' .panel:not(.panel-heading)'
            axis: 'y'
        };

        //Variable to toggle the active product card
        $scope.selectedCard = 0;

        //Function to toggle the active product card
        $scope.selectCard = function(index) {
            $scope.selectedCard = index;
        };


        $scope.showLibrary = "";

        /*$scope.showLibrary = function() {
            $scope.showLibrary = true;
        };
        $scope.hideLibrary = function() {
            $scope.showLibrary = false;
        };*/

        // Array to store the products in the library
        $scope.libraryProducts = [{
                productTitle: 'Smördeg',
                imageURL: '../assets/images/Smordeg-01.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Budget #Familj #Barn",
                category: "Eatables"
            },
            {
                productTitle: 'Smördeg Eko',
                imageURL: '../assets/images/Smordeg2-01.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Eko #Klimatsmart #Närodlat",
                category: "Eatables"
            },
            {
                productTitle: 'Smördeg Lyx',
                imageURL: '../assets/images/Smordeg3.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Finsmakare #Kvalitet",
                category: "Eatables"
            },
            {
                productTitle: 'Ägg Fri.',
                imageURL: '../assets/images/Ägg - Frigående.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Djurvän",
                category: "Eatables"
            },
            {
                productTitle: 'Ägg',
                imageURL: '../assets/images/Ägg-Vanlig.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Budget",
                category: "Eatables"
            },
            {
                productTitle: 'Ägg Eko',
                imageURL: '../assets/images/Ägg-eko.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Eko #Klimatsmart #Närodlat",
                category: "Eatables"
            },
            {
                productTitle: 'Kniv Japansk',
                imageURL: '../assets/images/Kniv-Avancerad.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Kvalitet",
                category: "Tools"
            },
            {
                productTitle: 'Kniv Barn',
                imageURL: '../assets/images/Kniv-Barn.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Barn",
                category: "Tools"
            },
            {
                productTitle: 'Kniv Stor',
                imageURL: '../assets/images/Kniv-Större-01.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Matlagare",
                category: "Tools"
            },
            {
                productTitle: 'Förkläde Brun',
                imageURL: '../assets/images/Förkläde-läder-01.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Trend #Modern",
                category: "Others"
            },
            {
                productTitle: 'Förkläde Tyg',
                imageURL: '../assets/images/Förkläde-Tyg.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Klassisk",
                category: "Others"
            },
            {
                productTitle: 'Äggklocka',
                imageURL: '../assets/images/Äggklocka.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Traditionell",
                category: "Others"
            },
            {
                productTitle: 'Pensel Silikon',
                imageURL: '../assets/images/pensel-silicon.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Modern",
                category: "Tools"
            },
            {
                productTitle: 'Kavel rund',
                imageURL: '../assets/images/kavel-rund.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Modern",
                category: "Tools"
            },
            {
                productTitle: 'Kavel Barn',
                imageURL: '../assets/images/kavel-barn.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Barn",
                category: "Tools"
            },
            {
                productTitle: 'Kavel',
                imageURL: '../assets/images/Kavel.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Traditionell",
                category: "Tools"
            },
            {
                productTitle: 'Gjutjärn',
                imageURL: '../assets/images/stekpanna-gjutjärn.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Traditionell",
                category: "Tools"
            },
            {
                productTitle: 'Stekpanna',
                imageURL: '../assets/images/Stekpanna.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Modern #Familj",
                category: "Tools"
            },
            {
                productTitle: 'Multipensel',
                imageURL: '../assets/images/pensel-med-kniv.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Multi",
                category: "Tools"
            },
            {
                productTitle: 'Pensel Trä',
                imageURL: '../assets/images/pensel-trä.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Traditionell #Miljövänlig",
                category: "Tools"
            }

        ];

        $scope.updateProduct=function(product, title){
          product.productTitle = title;
        }

        // Array that store all the categories that are used in the dropdown-list
        $scope.categories = [];
        angular.forEach($scope.libraryProducts, function(value, category) {
            if ($scope.categories.indexOf(value.category) == -1) {
                $scope.categories.push(value.category);
            }
        });

        //Tells ui-sortable what and how to sort product cards
        $scope.sortableCardOptions = {
            handle: '.product-card',
            // items: ' .panel:not(.panel-heading)'
            axis: 'y'
        };

        // Add productCard to the end of the array
        var addProductCard = function() {
            $scope.productCards.push({
                cardTitle: 'Product Card ' + cardCounter,
                imageURL: '../assets/images/placeholder.png',
                products: []
            });
            cardCounter++;
            $scope.selectedCard = $scope.productCards.length - 1;
        };

        //Add product to a product card
        var addProduct = function(index, item) {
            productCounter = $scope.productCards[index].products.length + 1;
            $scope.productCards[index].products.push({
                productTitle: item.productTitle,
                link: item.link,
                specialOffer: item.specialOffer,
                buttonText: item.buttonText,
                targetGroup: item.targetGroup,
                imageURL: item.imageURL,
                category: item.category
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
    .directive('popoverhtml', function ($compile) {
      return {
              restrict: 'A',
              scope: true,
              link: function (scope, el, attrs) {
                  $(el).popover({
                      trigger: 'click',
                      html: true,
                      content: attrs.popoverHtml,
                      placement: attrs.popoverPlacement
                  });
              }
          };
    })
    .directive('slider', function() {
        return {
            restrict: 'A',
            scope: true,
            /*controller: function ($scope, $element, $attrs) {
            $scope.onSlide = function (e, ui) {
              $scope.model = ui.value;
              // or set it on the model
              // DataModel.model = ui.value;
              // add to angular digest cycle
              $scope.$digest();
            };
        },*/
            link: function(scope, element, attrs) {

                var options = {
                    containment: ".product-timeline",
                    axis: "x",
                    drag: function(event, ui) {
                        $(this).find('.seg-start').text(positionToTime($(this).css('left')));
                        $(this).find('.seg-end ').text(positionToTime(parseInt($(this).css('left')) + parseInt($(this).css('width'))));
                    }
                };

                // set up slider on load
                angular.element(document).ready(function() {
                    scope.$slider = $(element).draggable(options);
                });
            }
        };
    })
    .directive('marker', function() {
        return {
            restrict: 'A',
            scope: true,
            controller: function($scope, $element, $attrs) {
                $scope.onDrag = function(e, ui) {
                    $scope.markerValue = ui.value;
                    // or set it on the model
                    // DataModel.model = ui.value;
                    // add to angular digest cycle
                    $scope.$digest();
                };
            },
            link: function(scope, element, attrs) {

                var options = {
                    containment: ".product-timeline",
                    axis: "x",
                    start: function(event, ui) {
                        posLeftArray = [];
                        if ($(this).hasClass("group")) {
                            $(".group").each(function(i) {

                                thiscssleft = $(this).css('left');
                                if (thiscssleft == 'auto') thiscssleft = 0; // For IE

                                posLeftArray[i] = parseInt(thiscssleft);
                                //posLeftArray[i] = parseInt(markerValue);

                            });
                        }
                        beginleft = $(this).offset().left;
                    },
                    drag: function(event, ui) {
                        var leftdiff = $(this).offset().left - beginleft;

                        if ($(this).hasClass("group")) {
                            $(".group").each(function(i) {
                                $(this).css('left', posLeftArray[i] + leftdiff);
                            });
                        }
                    }
                };

                // set up slider on load
                angular.element(document).ready(function() {
                    scope.$marker = $(element).draggable(options);
                });
            }
        };

    })
    .directive('addTimeline', function() {
        return {
            restrict: 'A',
            scope: true,
            /*controller: function ($scope, $element, $attrs) {
            $scope.onSlide = function (e, ui) {
              $scope.model = ui.value;
              // or set it on the model
              // DataModel.model = ui.value;
              // add to angular digest cycle
              $scope.$digest();
            };
        },*/
            link: function(scope, element, attrs) {

                var options = {
                    containment: ".product-timeline",
                    axis: "x",
                    drag: function(event, ui) {
                        $(this).find('.seg-start').text(positionToTime($(this).css('left')));
                        $(this).find('.seg-end ').text(positionToTime(parseInt($(this).css('left')) + parseInt($(this).css('width'))));
                    }
                };

                // set up slider on load
                angular.element(document).ready(function() {
                    scope.$slider = $(element).draggable(options);
                });
            }
        };

    });
