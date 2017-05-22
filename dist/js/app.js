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

        $scope.currentTime = 0;
        $scope.duration = 0;

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

        $scope.setTriangleHeight = function(index) {
            var pos = $scope.productCards[index].position.top + $scope.productCards[index].height;
            alert(pos);
        };

        /*$scope.showLibrary = function() {
            $scope.showLibrary = true;
        };
        $scope.hideLibrary = function() {
            $scope.showLibrary = false;
        };*/


        $scope.isProductAdded = function(item ,selectedCardIndex) {
            //return $scope.productCards[selectedCardIndex].products.indexOf(item.Id) != -1;
            //return $.inArray(item.Id, $scope.productCards[selectedCardIndex].products[0]) >= 0;
                if ($scope.productCards.indexOf(item.Id) == -1){
                    return false;
                }
                else {
                    return true;
                }
        };

        // Array to store the products in the library
        $scope.libraryProducts = [{
                Id: '1',
                productTitle: 'Smördeg',
                imageURL: '../assets/images/Smordeg-01.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Budget #Familj #Barn",
                category: "Eatables"
            },
            {
                Id: '2',
                productTitle: 'Smördeg Eko',
                imageURL: '../assets/images/Smordeg2-01.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Eko #Klimatsmart #Närodlat",
                category: "Eatables"
            },
            {
                Id: '3',
                productTitle: 'Smördeg Lyx',
                imageURL: '../assets/images/Smordeg3.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Finsmakare #Kvalitet",
                category: "Eatables"
            },
            {
                Id: '4',
                productTitle: 'Ägg Fri.',
                imageURL: '../assets/images/Ägg - Frigående.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Djurvän",
                category: "Eatables"
            },
            {
                Id: '5',
                productTitle: 'Ägg',
                imageURL: '../assets/images/Ägg-Vanlig.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Budget",
                category: "Eatables"
            },
            {
                Id: '6',
                productTitle: 'Ägg Eko',
                imageURL: '../assets/images/Ägg-eko.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Eko #Klimatsmart #Närodlat",
                category: "Eatables"
            },
            {
                Id: '7',
                productTitle: 'Kniv Japansk',
                imageURL: '../assets/images/Kniv-Avancerad.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Kvalitet",
                category: "Tools"
            },
            {
                Id: '8',
                productTitle: 'Kniv Barn',
                imageURL: '../assets/images/Kniv-Barn.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Barn",
                category: "Tools"
            },
            {
                Id: '9',
                productTitle: 'Kniv Stor',
                imageURL: '../assets/images/Kniv-Större-01.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Matlagare",
                category: "Tools"
            },
            {
                Id: '10',
                productTitle: 'Förkläde Brun',
                imageURL: '../assets/images/Förkläde-läder-01.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Trend #Modern",
                category: "Others"
            },
            {
                Id: '11',
                productTitle: 'Förkläde Tyg',
                imageURL: '../assets/images/Förkläde-Tyg.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Klassisk",
                category: "Others"
            },
            {
                Id: '12',
                productTitle: 'Äggklocka',
                imageURL: '../assets/images/Äggklocka.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Traditionell",
                category: "Others"
            },
            {
                Id: '13',
                productTitle: 'Pensel Silikon',
                imageURL: '../assets/images/pensel-silicon.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Modern",
                category: "Tools"
            },
            {
                Id: '14',
                productTitle: 'Kavel rund',
                imageURL: '../assets/images/kavel-rund.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Modern",
                category: "Tools"
            },
            {
                Id: '15',
                productTitle: 'Kavel Barn',
                imageURL: '../assets/images/kavel-barn.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Barn",
                category: "Tools"
            },
            {
                Id: '16',
                productTitle: 'Kavel',
                imageURL: '../assets/images/Kavel.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Traditionell",
                category: "Tools"
            },
            {
                Id: '17',
                productTitle: 'Gjutjärn',
                imageURL: '../assets/images/stekpanna-gjutjärn.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Traditionell",
                category: "Tools"
            },
            {
                Id: '18',
                productTitle: 'Stekpanna',
                imageURL: '../assets/images/Stekpanna.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Modern #Familj",
                category: "Tools"
            },
            {
                Id: '19',
                productTitle: 'Multipensel',
                imageURL: '../assets/images/pensel-med-kniv.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Familj #Multi",
                category: "Tools"
            },
            {
                Id: '20',
                productTitle: 'Pensel Trä',
                imageURL: '../assets/images/pensel-trä.png',
                link: "http:www...",
                specialOffer: "20% Sale",
                buttonText: "Buy now",
                targetGroup: "#Traditionell #Miljövänlig",
                category: "Tools"
            }

        ];

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

        /*
        $scope.setCollapsed = function(index){
          for (var i = 0; i < $scope.productCards[index].products.length; i++) {
            if(i == ($scope.productCards[index].products.length-1)){

              sProductCollapsed=true;
            }
            else{

              isProductCollapsed=false;
            }
          }
        };
*/
        // Add productCard to the end of the array
        var addProductCard = function() {
            $scope.productCards.push({
                cardTitle: 'Product Card ' + cardCounter,
                imageURL: '../assets/images/placeholder.png',
                products: []
            });
            cardCounter++;
            $scope.selectedCard = $scope.productCards.length - 1;

            /*
                        $scope.productCards.reverse();
                        $scope.productCards[0].scrollIntoView({block: "end"});
            */
        };

        //Add product to a product card
        var addProduct = function(index, item) {
            productCounter = $scope.productCards[index].products.length + 1;
            $scope.productCards[index].products.push({
                Id: item.Id,
                productTitle: item.productTitle,
                link: item.link,
                specialOffer: item.specialOffer,
                buttonText: item.buttonText,
                targetGroup: item.targetGroup,
                imageURL: item.imageURL,
                category: item.category,

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


    .filter('toMinSec', function() {
        return function(input) {
            var minutes = parseInt(input / 60, 10);
            var seconds = Math.floor(input % 60);
            if (seconds < 10) {
                return minutes + ':0' + seconds;
            } else {
                return minutes + ':' + seconds;
            }
        }
    })

    /*.directive('popover', function ($compile) {
      return {
              restrict: 'A',
              scope: true,
              link: function (scope, elem, attrs) {
                  $(elem).on('isOpen', function () {
                      var positionTop = parseInt($('.product-card').position().top + 30);
                      var positionLeft = parseInt($(this).position().left + $(this).width - 20);

                      $('.product-card-hightlight').css('top', positionTop + 'px');

                  });
              }
          };
    })*/

    //Directive to append jQueryUI draggable/resizable-functionality to the timeslot sliders
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


                // set up slider on load
                angular.element(document).ready(function() {

                    $(".product-bar").resizable({
                        maxHeight: 20,
                        minHeight: 20,
                        handles: 'e, w'
                    });
                    $(".product-bar").draggable({
                        containment: ".product-timeline",
                        axis: "x",
                        drag: function(event, ui) {
                            $(this).find('.seg-start').text(positionToTime($(this).css('left')));
                            $(this).find('.seg-end ').text(positionToTime(parseInt($(this).css('left')) + parseInt($(this).css('width'))));
                        }
                    });
                    $(".product-bar").resizable("disable");
                    $(".product-bar").click(function() {
                        if ($(this).hasClass("edit-resize")) {
                            $(".product-bar").removeClass("edit-resize");
                            $(".product-bar").resizable("disable");

                            $(this).removeClass("edit-resize");
                            $(this).resizable("disable");
                        } else {
                            $(".product-bar").removeClass("edit-resize");
                            $(".product-bar").resizable("disable");

                            $(this).addClass("edit-resize");
                            $(this).resizable("enable");
                        }
                    });

                    $('.del-seg').click(function() {
                        $(this).parent().remove();
                    });
                });
            }
        };
    })

    .directive('someVideo', function($window, $timeout) {
        return {
            scope: {
                videoCurrentTime: "=videoCurrentTime"
            },
            controller: function($scope, $element) {

                $scope.onTimeUpdate = function() {
                    var currTime = $element[0].currentTime;
                    if (currTime - $scope.videoCurrentTime > 2 || $scope.videoCurrentTime - currTime > 2) {

                        $element[0].currentTime = $scope.videoCurrentTime;
                    }


                    $scope.$apply(function() {
                        $scope.videoCurrentTime = $element[0].currentTime;
                    });
                }
            },
            link: function(scope, elm) {
                // Use this $watch to restart the video if it has ended
                scope.$watch('videoCurrentTime', function(newVal) {

                    if (elm[0].ended) {
                        // Do a second check because the last 'timeupdate'
                        // after the video stops causes a hiccup.
                        if (elm[0].currentTime !== newVal) {
                            elm[0].currentTime = newVal;
                            elm[0].play();
                        }
                    }
                });
                // Otherwise keep any model syncing here.
                elm.bind('timeupdate', scope.onTimeUpdate);
            }
        }
    })

    //Directive for the time marker draggable

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

                var currentPos = parseInt($('.marker').css('left'));
                var totalWidth = parseInt($('.timeline').css('width'));
                var newPos = currentPos / totalWidth * 100;

                var options = {
                    containment: ".product-timeline",
                    axis: "x",
                    start: function(event, ui) {
                        posLeftArray = [];
                        if ($(this).hasClass("group")) {
                            $(".group").each(function(i) {

                                //thiscssleft = $(this).css('left', newPos);
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

                // set up marker on load
                angular.element(document).ready(function() {
                    scope.$marker = $(element).draggable(options);
                });
            }
        };

    })
    //Directive to append a new timeslot when user uses the add timeslot button
    .directive('addTimeslot', function() {
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

                // set up slider on add-timeslot-click
                var addBtn = document.getElementsByClassName('add-timeslot');
                angular.element(addBtn).click(function() {

                    //$(elem).click(function() {
                    //$('.add-timeslot').click(function() {

                var currentPos = parseInt($('.marker').css('left'));
                var totalWidth = parseInt($('.timeline').css('width'));
                var newPos = currentPos / totalWidth * 100;

                var $div = $("<div>", {
                    "class": "product-bar ui-widget-content"
                });
                var $segStart = $("<span>", {
                    "class": "seg-start"
                }).text('hh:mm:ss');
                var $segEnd = $("<span>", {
                    "class": "seg-end"
                }).text('hh:mm:ss');
                var $delSeg = $("<span>", {
                    "class": "del-seg"
                }).html('<a href="#"></a></span>');
                $div.append($segStart, $segEnd, $delSeg);


                $div.css('left', newPos + '%');
                $div.css('position', 'absolute');
                $div.resizable({
                    maxHeight: 20,
                    minHeight: 20,
                    handles: 'e, w'
                });
                $div.draggable({
                    containment: ".product-timeline",
                    axis: "x",
                    drag: function(event, ui) {
                        $(this).find('.seg-start').text(positionToTime($(this).css('left')));
                        $(this).find('.seg-end ').text(positionToTime(parseInt($(this).css('left')) + parseInt($(this).css('width'))));
                    }
                });
                $div.resizable("disable");

                    element.parent().parent().find('.product-timeline').append($div)
                    $div.find('.seg-start').text(positionToTime($div.css('left')));
                    $div.find('.seg-end ').text(positionToTime(parseInt($div.css('left')) + parseInt($div.css('width'))));

                    $div.click(function() {

                        if ($(this).hasClass("edit-resize")) {
                            $(".product-bar").removeClass("edit-resize");
                            $(".product-bar").resizable("disable");

                            $(this).removeClass("edit-resize");
                            $(this).resizable("disable");
                        } else {
                            $(".product-bar").removeClass("edit-resize");
                            $(".product-bar").resizable("disable");

                            $(this).addClass("edit-resize");
                            $(this).resizable("enable");
                        }
                    });

                    $delSeg.click(function() {
                        $(this).parent().remove();
                    });
                });
            }
        };

    });

    function convertSecondsToTime(sec) {
        totalSec = Math.round(sec);
        var hours = parseInt(totalSec / 3600) % 24;
        var minutes = parseInt(totalSec / 60) % 60;
        var seconds = totalSec % 60;

        var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        return result;
    }

    function positionToTime(position) {
        var totalDuration = 61;

        var totalWidth = parseInt($('.timeline').css('width'));

        var currentPos = parseInt(position);
        var percentage = currentPos / totalWidth;
        var newTime = totalDuration * percentage;

        return convertSecondsToTime(newTime);
    }

$(".marker").draggable({
    axis: 'x',
    containment: 'product-timeline',
    start: function (event, ui) {
        posTopArray = [];
        posLeftArray = [];
        if ($(this).hasClass("group")) {
            $(".group").each(function (i) {
                thiscsstop = $(this).css('top');
                if (thiscsstop == 'auto') thiscsstop = 0; // For IE

                thiscssleft = $(this).css('left');
                if (thiscssleft == 'auto') thiscssleft = 0; // For IE

                posTopArray[i] = parseInt(thiscsstop);
                posLeftArray[i] = parseInt(thiscssleft);
            });
        }

        begintop = $(this).offset().top;
        beginleft = $(this).offset().left;
    },
    drag: function (event, ui) {
        var topdiff = $(this).offset().top - begintop;
        var leftdiff = $(this).offset().left - beginleft;

        if ($(this).hasClass("group")) {
            $(".group").each(function (i) {
                $(this).css('top', posTopArray[i] + topdiff);
                $(this).css('left', posLeftArray[i] + leftdiff);
            });
        }
    }
});

/* Scrolling shadows by "mindstorm". https://codepen.io/mindstorm/pen/EbiyJ*/


var scrollShadow = (function() {
  var elem, width, height, offset,
    shadowTop, shadowBottom,
    timeout;

  function initShadows() {
    shadowTop = $("<div>")
      .addClass("shadow-top")
      .insertAfter(elem);
    shadowBottom = $("<div>")
      .addClass("shadow-bottom")
      .insertAfter(elem);
  }

  function calcPosition() {
    width = elem.outerWidth();
    height = elem.outerHeight();
    offset = elem.position();

    // update
    shadowTop.css({
      width: width + "px",
      top: elem.offset.top + "px",
      left: elem.offset.left + "px"
    });
    shadowBottom.css({
      width: width + "px",
      top: (elem.offset.top + height - 20) + "px",
      left: elem.offset.left + "px"
    });
  }

  function addScrollListener() {
    elem.off("scroll.shadow");
    elem.on("scroll.shadow", function() {
      if (elem.scrollTop() > 0) {
        shadowTop.fadeIn(200);
      } else {
        shadowTop.fadeOut(200);
      }
      if (elem.scrollTop() + height >= elem[0].scrollHeight) {
        shadowBottom.fadeOut(200);
      } else {
        shadowBottom.fadeIn(200);
      }
    });
  }

  function addResizeListener() {
    $(window).on("resize.shadow", function() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        calcPosition();
        elem.trigger("scroll.shadow");
      }, 10);
    });
  }

  return {
    init: function(par) {
      elem = $(par);
      initShadows();
      calcPosition();
      addScrollListener();
      addResizeListener();
      elem.trigger("scroll.shadow");
    },
    update: calcPosition
  };

}());

// start
scrollShadow.init(".container");

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Nob3BwYWJsZVZpZGVvJywgWyduZ0FuaW1hdGUnLCAnbmdTYW5pdGl6ZScsICd1aS5ib290c3RyYXAnLCAndWkuc29ydGFibGUnXSk7XG4vLyBEZWNsYXJlIHRoZSBBcHBDdHJsIGNvbnRyb2xsZXJcbmFwcFxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgICAgICAvLyBDYXJkIGNvdW50ZXIsIHVzZWQgZm9yIGNhcmQgbmFtaW5nXG4gICAgICAgIHZhciBjYXJkQ291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gUHJvZHVjdCBjb3VudGVyLCB1c2VkIGZvciBwcm9kdWN0IG5hbWluZ1xuICAgICAgICB2YXIgcHJvZHVjdENvdW50ZXIgPSBcIlwiO1xuXG5cbiAgICAgICAgLy8gVmFyaWFibGUgZm9yIHRoZSB2aWRlbyB0aXRsZVxuICAgICAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cbiAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9tdXRlLnBuZ1wiO1xuXG4gICAgICAgIC8vUGxheSBhbmQgcGF1c2VcbiAgICAgICAgJHNjb3BlLnRvZ2dsZU11dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAoIXZpZGVvLm11dGUpIHtcbiAgICAgICAgICAgICAgICB2aWRlby5tdXRlID0gIXZpZGVvLm11dGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvc3BlYWtlci5wbmdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ubXV0ZSA9IHZpZGVvLm11dGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVQbGF5UGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAodmlkZW8ucGF1c2VkIHx8IHZpZGVvLmVuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICRzY29wZS5kdXJhdGlvbiA9IDA7XG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RDYXJkc1xuICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzID0gW107XG5cbiAgICAgICAgLy9Db2xsYXBzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3QgY2FyZHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vQ29sbGFzcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc1Byb2R1Y3RDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3RzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZVByb2R1Y3RPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vVmFyaWFibGUgdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSAwO1xuXG4gICAgICAgIC8vRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXJkID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSBpbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSBcIlwiO1xuXG4gICAgICAgICRzY29wZS5zZXRUcmlhbmdsZUhlaWdodCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucG9zaXRpb24udG9wICsgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0uaGVpZ2h0O1xuICAgICAgICAgICAgYWxlcnQocG9zKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKiRzY29wZS5zaG93TGlicmFyeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnNob3dMaWJyYXJ5ID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmhpZGVMaWJyYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSBmYWxzZTtcbiAgICAgICAgfTsqL1xuXG5cbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdEFkZGVkID0gZnVuY3Rpb24oaXRlbSAsc2VsZWN0ZWRDYXJkSW5kZXgpIHtcbiAgICAgICAgICAgIC8vcmV0dXJuICRzY29wZS5wcm9kdWN0Q2FyZHNbc2VsZWN0ZWRDYXJkSW5kZXhdLnByb2R1Y3RzLmluZGV4T2YoaXRlbS5JZCkgIT0gLTE7XG4gICAgICAgICAgICAvL3JldHVybiAkLmluQXJyYXkoaXRlbS5JZCwgJHNjb3BlLnByb2R1Y3RDYXJkc1tzZWxlY3RlZENhcmRJbmRleF0ucHJvZHVjdHNbMF0pID49IDA7XG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5wcm9kdWN0Q2FyZHMuaW5kZXhPZihpdGVtLklkKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpYnJhcnlcbiAgICAgICAgJHNjb3BlLmxpYnJhcnlQcm9kdWN0cyA9IFt7XG4gICAgICAgICAgICAgICAgSWQ6ICcxJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTbcO2cmRlZycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWctMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0J1ZGdldCAjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzInLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNFa28gI0tsaW1hdHNtYXJ0ICNOw6Ryb2RsYXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZpbnNtYWthcmUgI0t2YWxpdGV0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzQnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRnJpLicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2cgLSBGcmlnw6VlbmRlLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNEanVydsOkblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc1JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1WYW5saWcucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjQnVkZ2V0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzYnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0VrbyAjS2xpbWF0c21hcnQgI07DpHJvZGxhdFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc3JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IEphcGFuc2snLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUF2YW5jZXJhZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS3ZhbGl0ZXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnOCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1CYXJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGYW1pbGogI0Jhcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnOScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBTdG9yJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1TdMO2cnJlLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNNYXRsYWdhcmVcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTAnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmVuZCAjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnRsO2cmtsw6RkZSBUeWcnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLVR5Zy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS2xhc3Npc2tcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzEyJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdna2xvY2thJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZ2tsb2NrYS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE0JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBydW5kJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtcnVuZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE1JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtYmFybi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE2JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmFkaXRpb25lbGxcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0dqdXRqw6RybicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3N0ZWtwYW5uYS1nanV0asOkcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE4JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTdGVrcGFubmEnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9TdGVrcGFubmEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI01vZGVybiAjRmFtaWxqXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE5JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdNdWx0aXBlbnNlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1tZWQta25pdi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNNdWx0aVwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcyMCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFRyw6QnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtdHLDpC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsICNNaWxqw7Z2w6RubGlnXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gQXJyYXkgdGhhdCBzdG9yZSBhbGwgdGhlIGNhdGVnb3JpZXMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgZHJvcGRvd24tbGlzdFxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IFtdO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmxpYnJhcnlQcm9kdWN0cywgZnVuY3Rpb24odmFsdWUsIGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5jYXRlZ29yeSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5wdXNoKHZhbHVlLmNhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydCBwcm9kdWN0IGNhcmRzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZUNhcmRPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qXG4gICAgICAgICRzY29wZS5zZXRDb2xsYXBzZWQgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaSA9PSAoJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoLTEpKXtcblxuICAgICAgICAgICAgICBzUHJvZHVjdENvbGxhcHNlZD10cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICBpc1Byb2R1Y3RDb2xsYXBzZWQ9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuKi9cbiAgICAgICAgLy8gQWRkIHByb2R1Y3RDYXJkIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgIHZhciBhZGRQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGU6ICdQcm9kdWN0IENhcmQgJyArIGNhcmRDb3VudGVyLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXJkQ291bnRlcisrO1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2FyZCA9ICRzY29wZS5wcm9kdWN0Q2FyZHMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1swXS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6IFwiZW5kXCJ9KTtcbiAgICAgICAgICAgICovXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9BZGQgcHJvZHVjdCB0byBhIHByb2R1Y3QgY2FyZFxuICAgICAgICB2YXIgYWRkUHJvZHVjdCA9IGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICBwcm9kdWN0Q291bnRlciA9ICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBJZDogaXRlbS5JZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6IGl0ZW0ucHJvZHVjdFRpdGxlLFxuICAgICAgICAgICAgICAgIGxpbms6IGl0ZW0ubGluayxcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IGl0ZW0uc3BlY2lhbE9mZmVyLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IGl0ZW0uYnV0dG9uVGV4dCxcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogaXRlbS50YXJnZXRHcm91cCxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogaXRlbS5pbWFnZVVSTCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgY2FyZCBieSBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgY2FyZENvdW50ZXItLTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBieSBpbmRleCBhbmQgcHJvZHVjdCBjYXJkIGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0ID0gZnVuY3Rpb24ocHJvZHVjdENhcmRJbmRleCwgZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW3Byb2R1Y3RDYXJkSW5kZXhdLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9WaWRlbyBjb250cm9sbGVyXG4gICAgICAgIC8vVm9sdW1lXG4gICAgICAgIGZ1bmN0aW9uIHNldFZvbHVtZSgpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZVwiKTtcbiAgICAgICAgICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL011dGVcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTXV0ZSgpIHtcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gIXZpZGVvLm11dGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vUHJvZ3Jlc3NiYXJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHVwZGF0ZVByb2dyZXNzLCBmYWxzZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gMDtcbiAgICAgICAgICAgIGlmICh2aWRlby5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IoKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gdmFsdWUgKyBcIiVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdENhcmQgPSBhZGRQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3QgPSBhZGRQcm9kdWN0O1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdENhcmQgPSByZW1vdmVQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3QgPSByZW1vdmVQcm9kdWN0O1xuXG4gICAgICAgIC8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCA1IHByb2R1Y3RDYXJkc1xuICAgICAgICAvKmZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB9Ki9cblxuICAgIH1dKVxuXG5cbiAgICAuZmlsdGVyKCd0b01pblNlYycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQoaW5wdXQgLyA2MCwgMTApO1xuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKGlucHV0ICUgNjApO1xuICAgICAgICAgICAgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaW51dGVzICsgJzowJyArIHNlY29uZHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaW51dGVzICsgJzonICsgc2Vjb25kcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKi5kaXJlY3RpdmUoJ3BvcG92ZXInLCBmdW5jdGlvbiAoJGNvbXBpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgICAkKGVsZW0pLm9uKCdpc09wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uVG9wID0gcGFyc2VJbnQoJCgnLnByb2R1Y3QtY2FyZCcpLnBvc2l0aW9uKCkudG9wICsgMzApO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbkxlZnQgPSBwYXJzZUludCgkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArICQodGhpcykud2lkdGggLSAyMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1jYXJkLWhpZ2h0bGlnaHQnKS5jc3MoJ3RvcCcsIHBvc2l0aW9uVG9wICsgJ3B4Jyk7XG5cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICB9KSovXG5cbiAgICAvL0RpcmVjdGl2ZSB0byBhcHBlbmQgalF1ZXJ5VUkgZHJhZ2dhYmxlL3Jlc2l6YWJsZS1mdW5jdGlvbmFsaXR5IHRvIHRoZSB0aW1lc2xvdCBzbGlkZXJzXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAvKmNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vblNsaWRlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sKi9cbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmRlbC1zZWcnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pXG5cbiAgICAuZGlyZWN0aXZlKCdzb21lVmlkZW8nLCBmdW5jdGlvbigkd2luZG93LCAkdGltZW91dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICB2aWRlb0N1cnJlbnRUaW1lOiBcIj12aWRlb0N1cnJlbnRUaW1lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUub25UaW1lVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyVGltZSA9ICRlbGVtZW50WzBdLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyclRpbWUgLSAkc2NvcGUudmlkZW9DdXJyZW50VGltZSA+IDIgfHwgJHNjb3BlLnZpZGVvQ3VycmVudFRpbWUgLSBjdXJyVGltZSA+IDIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnRbMF0uY3VycmVudFRpbWUgPSAkc2NvcGUudmlkZW9DdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52aWRlb0N1cnJlbnRUaW1lID0gJGVsZW1lbnRbMF0uY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxtKSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoaXMgJHdhdGNoIHRvIHJlc3RhcnQgdGhlIHZpZGVvIGlmIGl0IGhhcyBlbmRlZFxuICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgndmlkZW9DdXJyZW50VGltZScsIGZ1bmN0aW9uKG5ld1ZhbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbG1bMF0uZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIGEgc2Vjb25kIGNoZWNrIGJlY2F1c2UgdGhlIGxhc3QgJ3RpbWV1cGRhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgdmlkZW8gc3RvcHMgY2F1c2VzIGEgaGljY3VwLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsbVswXS5jdXJyZW50VGltZSAhPT0gbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtWzBdLmN1cnJlbnRUaW1lID0gbmV3VmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbVswXS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2Uga2VlcCBhbnkgbW9kZWwgc3luY2luZyBoZXJlLlxuICAgICAgICAgICAgICAgIGVsbS5iaW5kKCd0aW1ldXBkYXRlJywgc2NvcGUub25UaW1lVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvL0RpcmVjdGl2ZSBmb3IgdGhlIHRpbWUgbWFya2VyIGRyYWdnYWJsZVxuXG4gICAgLmRpcmVjdGl2ZSgnbWFya2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUub25EcmFnID0gZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1hcmtlclZhbHVlID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnLCBuZXdQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzbGVmdCA9PSAnYXV0bycpIHRoaXNjc3NsZWZ0ID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Bvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KG1hcmtlclZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5sZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBtYXJrZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRtYXJrZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pXG4gICAgLy9EaXJlY3RpdmUgdG8gYXBwZW5kIGEgbmV3IHRpbWVzbG90IHdoZW4gdXNlciB1c2VzIHRoZSBhZGQgdGltZXNsb3QgYnV0dG9uXG4gICAgLmRpcmVjdGl2ZSgnYWRkVGltZXNsb3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGFkZC10aW1lc2xvdC1jbGlja1xuICAgICAgICAgICAgICAgIHZhciBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGQtdGltZXNsb3QnKTtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoYWRkQnRuKS5jbGljayhmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyQoZWxlbSkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnLmFkZC10aW1lc2xvdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG5cbiAgICAgICAgICAgICAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICAgICAgICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICAgICAgICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICAgICAgICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICAgICAgICAgICAgICB9KS5odG1sKCc8YSBocmVmPVwiI1wiPjwvYT48L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgICAgICAgICAgICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICAgICAgICAgICAgICRkaXYuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJGRpdi5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnByb2R1Y3QtdGltZWxpbmUnKS5hcHBlbmQoJGRpdilcbiAgICAgICAgICAgICAgICAgICAgJGRpdi5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkZGl2LmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICRkaXYuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkZGl2LmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCRkaXYuY3NzKCd3aWR0aCcpKSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICRkaXYuY2xpY2soZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0U2Vjb25kc1RvVGltZShzZWMpIHtcbiAgICAgICAgdG90YWxTZWMgPSBNYXRoLnJvdW5kKHNlYyk7XG4gICAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gMzYwMCkgJSAyNDtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDYwKSAlIDYwO1xuICAgICAgICB2YXIgc2Vjb25kcyA9IHRvdGFsU2VjICUgNjA7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IChob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzKSArIFwiOlwiICsgKG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXMpICsgXCI6XCIgKyAoc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zaXRpb25Ub1RpbWUocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHRvdGFsRHVyYXRpb24gPSA2MTtcblxuICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludChwb3NpdGlvbik7XG4gICAgICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgICAgIHZhciBuZXdUaW1lID0gdG90YWxEdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRTZWNvbmRzVG9UaW1lKG5ld1RpbWUpO1xuICAgIH1cbiIsIiQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgYXhpczogJ3gnLFxuICAgIGNvbnRhaW5tZW50OiAncHJvZHVjdC10aW1lbGluZScsXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgcG9zVG9wQXJyYXkgPSBbXTtcbiAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHRoaXNjc3N0b3AgPSAkKHRoaXMpLmNzcygndG9wJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3N0b3AgPT0gJ2F1dG8nKSB0aGlzY3NzdG9wID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgIHBvc1RvcEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc3RvcCk7XG4gICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiZWdpbnRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICBiZWdpbmxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgfSxcbiAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHZhciB0b3BkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBiZWdpbnRvcDtcbiAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCBwb3NUb3BBcnJheVtpXSArIHRvcGRpZmYpO1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIi8qIFNjcm9sbGluZyBzaGFkb3dzIGJ5IFwibWluZHN0b3JtXCIuIGh0dHBzOi8vY29kZXBlbi5pby9taW5kc3Rvcm0vcGVuL0ViaXlKKi9cblxuXG52YXIgc2Nyb2xsU2hhZG93ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgZWxlbSwgd2lkdGgsIGhlaWdodCwgb2Zmc2V0LFxuICAgIHNoYWRvd1RvcCwgc2hhZG93Qm90dG9tLFxuICAgIHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gaW5pdFNoYWRvd3MoKSB7XG4gICAgc2hhZG93VG9wID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctdG9wXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gICAgc2hhZG93Qm90dG9tID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctYm90dG9tXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjUG9zaXRpb24oKSB7XG4gICAgd2lkdGggPSBlbGVtLm91dGVyV2lkdGgoKTtcbiAgICBoZWlnaHQgPSBlbGVtLm91dGVySGVpZ2h0KCk7XG4gICAgb2Zmc2V0ID0gZWxlbS5wb3NpdGlvbigpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgc2hhZG93VG9wLmNzcyh7XG4gICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICB0b3A6IGVsZW0ub2Zmc2V0LnRvcCArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgICBzaGFkb3dCb3R0b20uY3NzKHtcbiAgICAgIHdpZHRoOiB3aWR0aCArIFwicHhcIixcbiAgICAgIHRvcDogKGVsZW0ub2Zmc2V0LnRvcCArIGhlaWdodCAtIDIwKSArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbExpc3RlbmVyKCkge1xuICAgIGVsZW0ub2ZmKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICBlbGVtLm9uKFwic2Nyb2xsLnNoYWRvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpID4gMCkge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZUluKDIwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZU91dCgyMDApO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wKCkgKyBoZWlnaHQgPj0gZWxlbVswXS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVPdXQoMjAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoYWRvd0JvdHRvbS5mYWRlSW4oMjAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICQod2luZG93KS5vbihcInJlc2l6ZS5zaGFkb3dcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICB9LCAxMCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKHBhcikge1xuICAgICAgZWxlbSA9ICQocGFyKTtcbiAgICAgIGluaXRTaGFkb3dzKCk7XG4gICAgICBjYWxjUG9zaXRpb24oKTtcbiAgICAgIGFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICBhZGRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogY2FsY1Bvc2l0aW9uXG4gIH07XG5cbn0oKSk7XG5cbi8vIHN0YXJ0XG5zY3JvbGxTaGFkb3cuaW5pdChcIi5jb250YWluZXJcIik7XG4iXX0=
