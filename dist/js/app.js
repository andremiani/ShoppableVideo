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
        $scope.muteSrc = "../assets/images/speaker.png";

        //Play and pause
        $scope.toggleMute = function() {
<<<<<<< HEAD
          var vid = document.getElementById("video");

            if (vid.muted) {
                vid.muted=false;
=======
            //  var playpause = document.getElementById("playpause");
            if (!video.mute) {
                video.mute = !video.mute;
>>>>>>> a8f546b568ffecee1e7c5e33029558cfaf5badab
                $scope.muteSrc = "../assets/images/speaker.png";
            }
            else {
                vid.muted=true;
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

        var setVolume = function() {
          var mediaClip = document.getElementById("video");
          mediaClip.volume = document.getElementById("volume").value;

        }

        //Mute

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
        $scope.setVolume = setVolume;
        $scope.addProductCard = addProductCard;
        $scope.addProduct = addProduct;
        $scope.removeProductCard = removeProductCard;
        $scope.removeProduct = removeProduct;

        // For demonstration add 5 productCards
        /*for (var i = 0; i < 5; i++) {
            addProductCard();
        }*/

    }])

<<<<<<< HEAD
    .directive('scrollToLast', ['$location', '$anchorScroll', function($location, $anchorScroll){

  function linkFn(scope, element, attrs){
      $location.hash(attrs.scrollToLast);
      $anchorScroll();
  }

  return {
    restrict: 'AE',
    scope: {

    },
    link: linkFn
  };
}])

=======

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
>>>>>>> a8f546b568ffecee1e7c5e33029558cfaf5badab
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
                }).html('<a href="#"><span class="hover-help">Delete segment</span></a></span>');
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

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JpcHQuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Nob3BwYWJsZVZpZGVvJywgWyduZ0FuaW1hdGUnLCAnbmdTYW5pdGl6ZScsICd1aS5ib290c3RyYXAnLCAndWkuc29ydGFibGUnXSk7XG4vLyBEZWNsYXJlIHRoZSBBcHBDdHJsIGNvbnRyb2xsZXJcbmFwcFxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgICAgICAvLyBDYXJkIGNvdW50ZXIsIHVzZWQgZm9yIGNhcmQgbmFtaW5nXG4gICAgICAgIHZhciBjYXJkQ291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gUHJvZHVjdCBjb3VudGVyLCB1c2VkIGZvciBwcm9kdWN0IG5hbWluZ1xuICAgICAgICB2YXIgcHJvZHVjdENvdW50ZXIgPSBcIlwiO1xuXG5cbiAgICAgICAgLy8gVmFyaWFibGUgZm9yIHRoZSB2aWRlbyB0aXRsZVxuICAgICAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cbiAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9zcGVha2VyLnBuZ1wiO1xuXG4gICAgICAgIC8vUGxheSBhbmQgcGF1c2VcbiAgICAgICAgJHNjb3BlLnRvZ2dsZU11dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKTtcblxuICAgICAgICAgICAgaWYgKHZpZC5tdXRlZCkge1xuICAgICAgICAgICAgICAgIHZpZC5tdXRlZD1mYWxzZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9zcGVha2VyLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkLm11dGVkPXRydWU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVQbGF5UGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAodmlkZW8ucGF1c2VkIHx8IHZpZGVvLmVuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0Q2FyZHNcbiAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcyA9IFtdO1xuXG4gICAgICAgIC8vQ29sbGFwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0IGNhcmRzLCB0cnVlIGlmIGNvbGxhcHNlZFxuICAgICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL0NvbGxhc3BzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3RzLCB0cnVlIGlmIGNvbGxhcHNlZFxuICAgICAgICAkc2NvcGUuaXNQcm9kdWN0Q29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydCBwcm9kdWN0c1xuICAgICAgICAkc2NvcGUuc29ydGFibGVQcm9kdWN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhhbmRsZTogJy5wcm9kdWN0JyxcbiAgICAgICAgICAgIC8vIGl0ZW1zOiAnIC5wYW5lbDpub3QoLnBhbmVsLWhlYWRpbmcpJ1xuICAgICAgICAgICAgYXhpczogJ3knXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9WYXJpYWJsZSB0byB0b2dnbGUgdGhlIGFjdGl2ZSBwcm9kdWN0IGNhcmRcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2FyZCA9IDA7XG5cbiAgICAgICAgLy9GdW5jdGlvbiB0byB0b2dnbGUgdGhlIGFjdGl2ZSBwcm9kdWN0IGNhcmRcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhcmQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2FyZCA9IGluZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5zaG93TGlicmFyeSA9IFwiXCI7XG5cbiAgICAgICAgJHNjb3BlLnNldFRyaWFuZ2xlSGVpZ2h0ID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICAgICAgdmFyIHBvcyA9ICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnBvc2l0aW9uLnRvcCArICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLmhlaWdodDtcbiAgICAgICAgICAgIGFsZXJ0KHBvcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyokc2NvcGUuc2hvd0xpYnJhcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5zaG93TGlicmFyeSA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5oaWRlTGlicmFyeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnNob3dMaWJyYXJ5ID0gZmFsc2U7XG4gICAgICAgIH07Ki9cblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpYnJhcnlcbiAgICAgICAgJHNjb3BlLmxpYnJhcnlQcm9kdWN0cyA9IFt7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9TbW9yZGVnLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNCdWRnZXQgI0ZhbWlsaiAjQmFyblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcgRWtvJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzItMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0VrbyAjS2xpbWF0c21hcnQgI07DpHJvZGxhdFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZpbnNtYWthcmUgI0t2YWxpdGV0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnIEZyaS4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnIC0gRnJpZ8OlZW5kZS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRGp1cnbDpG5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLVZhbmxpZy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNCdWRnZXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0VrbyAjS2xpbWF0c21hcnQgI07DpHJvZGxhdFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBKYXBhbnNrJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1BdmFuY2VyYWQucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0t2YWxpdGV0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IEJhcm4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUJhcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjQmFyblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBTdG9yJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1TdMO2cnJlLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNNYXRsYWdhcmVcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmVuZCAjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnRsO2cmtsw6RkZSBUeWcnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLVR5Zy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS2xhc3Npc2tcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdna2xvY2thJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZ2tsb2NrYS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBydW5kJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtcnVuZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtYmFybi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmFkaXRpb25lbGxcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0dqdXRqw6RybicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3N0ZWtwYW5uYS1nanV0asOkcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTdGVrcGFubmEnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9TdGVrcGFubmEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI01vZGVybiAjRmFtaWxqXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdNdWx0aXBlbnNlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1tZWQta25pdi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNNdWx0aVwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFRyw6QnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtdHLDpC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsICNNaWxqw7Z2w6RubGlnXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cblxuICAgICAgICAvLyBBcnJheSB0aGF0IHN0b3JlIGFsbCB0aGUgY2F0ZWdvcmllcyB0aGF0IGFyZSB1c2VkIGluIHRoZSBkcm9wZG93bi1saXN0XG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gW107XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubGlicmFyeVByb2R1Y3RzLCBmdW5jdGlvbih2YWx1ZSwgY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllcy5pbmRleE9mKHZhbHVlLmNhdGVnb3J5KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLnB1c2godmFsdWUuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3QgY2FyZHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlQ2FyZE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIC8vIGl0ZW1zOiAnIC5wYW5lbDpub3QoLnBhbmVsLWhlYWRpbmcpJ1xuICAgICAgICAgICAgYXhpczogJ3knXG4gICAgICAgIH07XG5cbiAgICAgICAgLypcbiAgICAgICAgJHNjb3BlLnNldENvbGxhcHNlZCA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihpID09ICgkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGgtMSkpe1xuXG4gICAgICAgICAgICAgIHNQcm9kdWN0Q29sbGFwc2VkPXRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgIGlzUHJvZHVjdENvbGxhcHNlZD1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4qL1xuICAgICAgICAvLyBBZGQgcHJvZHVjdENhcmQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgdmFyIGFkZFByb2R1Y3RDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNhcmRUaXRsZTogJ1Byb2R1Y3QgQ2FyZCAnICsgY2FyZENvdW50ZXIsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhcmRDb3VudGVyKys7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXJkID0gJHNjb3BlLnByb2R1Y3RDYXJkcy5sZW5ndGggLSAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vQWRkIHByb2R1Y3QgdG8gYSBwcm9kdWN0IGNhcmRcbiAgICAgICAgdmFyIGFkZFByb2R1Y3QgPSBmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgcHJvZHVjdENvdW50ZXIgPSAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGggKyAxO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiBpdGVtLnByb2R1Y3RUaXRsZSxcbiAgICAgICAgICAgICAgICBsaW5rOiBpdGVtLmxpbmssXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBpdGVtLnNwZWNpYWxPZmZlcixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBpdGVtLmJ1dHRvblRleHQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IGl0ZW0udGFyZ2V0R3JvdXAsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6IGl0ZW0uaW1hZ2VVUkwsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksXG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGNhcmQgYnkgaW5kZXhcbiAgICAgICAgdmFyIHJlbW92ZVByb2R1Y3RDYXJkID0gZnVuY3Rpb24oZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIGNhcmRDb3VudGVyLS07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgYnkgaW5kZXggYW5kIHByb2R1Y3QgY2FyZCBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdCA9IGZ1bmN0aW9uKHByb2R1Y3RDYXJkSW5kZXgsIGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1twcm9kdWN0Q2FyZEluZGV4XS5wcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy9WaWRlbyBjb250cm9sbGVyXG4gICAgICAgIC8vVm9sdW1lXG5cbiAgICAgICAgdmFyIHNldFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBtZWRpYUNsaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpO1xuICAgICAgICAgIG1lZGlhQ2xpcC52b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZVwiKS52YWx1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy9NdXRlXG5cbiAgICAgICAgLy9Qcm9ncmVzc2JhclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdXBkYXRlUHJvZ3Jlc3MsIGZhbHNlKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICAgICAgaWYgKHZpZGVvLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5mbG9vcigoMTAwIC8gdmlkZW8uZHVyYXRpb24pICogdmlkZW8uY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB2YWx1ZSArIFwiJVwiO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBzY29wZSBmdW5jdGlvbnNcbiAgICAgICAgJHNjb3BlLnNldFZvbHVtZSA9IHNldFZvbHVtZTtcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3RDYXJkID0gYWRkUHJvZHVjdENhcmQ7XG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0ID0gYWRkUHJvZHVjdDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3RDYXJkID0gcmVtb3ZlUHJvZHVjdENhcmQ7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0ID0gcmVtb3ZlUHJvZHVjdDtcblxuICAgICAgICAvLyBGb3IgZGVtb25zdHJhdGlvbiBhZGQgNSBwcm9kdWN0Q2FyZHNcbiAgICAgICAgLypmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYWRkUHJvZHVjdENhcmQoKTtcbiAgICAgICAgfSovXG5cbiAgICB9XSlcblxuICAgIC5kaXJlY3RpdmUoJ3Njcm9sbFRvTGFzdCcsIFsnJGxvY2F0aW9uJywgJyRhbmNob3JTY3JvbGwnLCBmdW5jdGlvbigkbG9jYXRpb24sICRhbmNob3JTY3JvbGwpe1xuXG4gIGZ1bmN0aW9uIGxpbmtGbihzY29wZSwgZWxlbWVudCwgYXR0cnMpe1xuICAgICAgJGxvY2F0aW9uLmhhc2goYXR0cnMuc2Nyb2xsVG9MYXN0KTtcbiAgICAgICRhbmNob3JTY3JvbGwoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgc2NvcGU6IHtcblxuICAgIH0sXG4gICAgbGluazogbGlua0ZuXG4gIH07XG59XSlcblxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgLypjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAkc2NvcGUub25TbGlkZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCovXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRzbGlkZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoJ21hcmtlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm9uRHJhZyA9IGZ1bmN0aW9uKGUsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5tYXJrZXJWYWx1ZSA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXlbaV0gPSBwYXJzZUludCh0aGlzY3NzbGVmdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQobWFya2VyVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbmxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2xlZnQnLCBwb3NMZWZ0QXJyYXlbaV0gKyBsZWZ0ZGlmZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHNsaWRlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJG1hcmtlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKCdhZGRUaW1lbGluZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgLypjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAkc2NvcGUub25TbGlkZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCovXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRzbGlkZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pO1xuIiwiJChcIi5tYXJrZXJcIikuZHJhZ2dhYmxlKHtcbiAgICBheGlzOiAneCcsXG4gICAgY29udGFpbm1lbnQ6ICdwcm9kdWN0LXRpbWVsaW5lJyxcbiAgICBzdGFydDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICBwb3NUb3BBcnJheSA9IFtdO1xuICAgICAgICBwb3NMZWZ0QXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgdGhpc2Nzc3RvcCA9ICQodGhpcykuY3NzKCd0b3AnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpc2Nzc3RvcCA9PSAnYXV0bycpIHRoaXNjc3N0b3AgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgIHRoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpc2Nzc2xlZnQgPT0gJ2F1dG8nKSB0aGlzY3NzbGVmdCA9IDA7IC8vIEZvciBJRVxuXG4gICAgICAgICAgICAgICAgcG9zVG9wQXJyYXlbaV0gPSBwYXJzZUludCh0aGlzY3NzdG9wKTtcbiAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXlbaV0gPSBwYXJzZUludCh0aGlzY3NzbGVmdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJlZ2ludG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgIGJlZ2lubGVmdCA9ICQodGhpcykub2Zmc2V0KCkubGVmdDtcbiAgICB9LFxuICAgIGRyYWc6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgdmFyIHRvcGRpZmYgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIGJlZ2ludG9wO1xuICAgICAgICB2YXIgbGVmdGRpZmYgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQgLSBiZWdpbmxlZnQ7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIHBvc1RvcEFycmF5W2ldICsgdG9wZGlmZik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2xlZnQnLCBwb3NMZWZ0QXJyYXlbaV0gKyBsZWZ0ZGlmZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiLy8galF1ZXJ5IGZ1bmN0aW9ucyBmcm9tIFNNXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICQoJy52aWV3LW9wdGlvbnMgLmxpc3QnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnZpZXctb3B0aW9ucyBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcuaXRlbXMnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdncmlkJykuZmFkZUluKDIwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy52aWV3LW9wdGlvbnMgLmdyaWQnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnZpZXctb3B0aW9ucyBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcuaXRlbXMnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdncmlkJykuZmFkZUluKDIwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy5tb2RhbCAuaXRlbS10aHVtYicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2xvbmUoKS5hcHBlbmRUbygnLml0ZW1zLmFkZGVkJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuYWRkLXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG5cbiAgICAgICAgdmFyICRkaXYgPSAkKFwiPGRpdj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtYmFyIHVpLXdpZGdldC1jb250ZW50XCJcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciAkc2VnU3RhcnQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctc3RhcnRcIlxuICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICB2YXIgJHNlZ0VuZCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1lbmRcIlxuICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICB2YXIgJGRlbFNlZyA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcImRlbC1zZWdcIlxuICAgICAgICB9KS5odG1sKCc8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiaG92ZXItaGVscFwiPkRlbGV0ZSBzZWdtZW50PC9zcGFuPjwvYT48L3NwYW4+Jyk7XG4gICAgICAgICRkaXYuYXBwZW5kKCRzZWdTdGFydCwgJHNlZ0VuZCwgJGRlbFNlZyk7XG5cblxuICAgICAgICAkZGl2LmNzcygnbGVmdCcsIG5ld1BvcyArICclJyk7XG4gICAgICAgICRkaXYuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAkZGl2LnJlc2l6YWJsZSh7XG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgICAgICB9KTtcbiAgICAgICAgJGRpdi5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkZGl2LnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cblxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIucHJvZHVjdC10aW1lbGluZVwiKS5hcHBlbmQoJGRpdik7XG4gICAgICAgICRkaXYuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJGRpdi5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAkZGl2LmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJGRpdi5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkZGl2LmNzcygnd2lkdGgnKSkpKTtcblxuICAgICAgICAkZGl2LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkZGVsU2VnLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIudGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCJcbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZSh7XG4gICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5kZWwtc2VnJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZWRpdC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcucHJvZHVjdC1lZGl0LXByb21wdCcpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZGVsZXRlLXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3VGltZSA9IHRvdGFsRHVyYXRpb24gKiBwZXJjZW50YWdlO1xuXG4gICAgICAgICAgICAkKCcuY3VycmVudCcpLnRleHQoY29udmVydFNlY29uZHNUb1RpbWUobmV3VGltZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSAxNTE7XG59KTtcblxuZnVuY3Rpb24gY29udmVydFNlY29uZHNUb1RpbWUoc2VjKSB7XG4gICAgdG90YWxTZWMgPSBNYXRoLnJvdW5kKHNlYyk7XG4gICAgdmFyIGhvdXJzID0gcGFyc2VJbnQodG90YWxTZWMgLyAzNjAwKSAlIDI0O1xuICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQodG90YWxTZWMgLyA2MCkgJSA2MDtcbiAgICB2YXIgc2Vjb25kcyA9IHRvdGFsU2VjICUgNjA7XG5cbiAgICB2YXIgcmVzdWx0ID0gKGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnMpICsgXCI6XCIgKyAobWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcykgKyBcIjpcIiArIChzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvblRvVGltZShwb3NpdGlvbikge1xuICAgIHZhciB0b3RhbER1cmF0aW9uID0gMTUxO1xuXG4gICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuXG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludChwb3NpdGlvbik7XG4gICAgdmFyIHBlcmNlbnRhZ2UgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aDtcbiAgICB2YXIgbmV3VGltZSA9IHRvdGFsRHVyYXRpb24gKiBwZXJjZW50YWdlO1xuXG4gICAgcmV0dXJuIGNvbnZlcnRTZWNvbmRzVG9UaW1lKG5ld1RpbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRUaW1lbGluZSgpIHtcbiAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgIHZhciAkZGl2ID0gJChcIjxkaXY+XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtYmFyIHVpLXdpZGdldC1jb250ZW50XCJcbiAgICB9KTtcbiAgICB2YXIgJHNlZ1N0YXJ0ID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJzZWctc3RhcnRcIlxuICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgdmFyICRzZWdFbmQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1lbmRcIlxuICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgdmFyICRkZWxTZWcgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcImRlbC1zZWdcIlxuICAgIH0pLmh0bWwoJzxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJob3Zlci1oZWxwXCI+RGVsZXRlIHNlZ21lbnQ8L3NwYW4+PC9hPjwvc3Bhbj4nKTtcbiAgICAkZGl2LmFwcGVuZCgkc2VnU3RhcnQsICRzZWdFbmQsICRkZWxTZWcpO1xuXG5cbiAgICAkZGl2LmNzcygnbGVmdCcsIG5ld1BvcyArICclJyk7XG4gICAgJGRpdi5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgJGRpdi5yZXNpemFibGUoe1xuICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICB9KTtcbiAgICAkZGl2LmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkZGl2LnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cblxuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5wcm9kdWN0LXRpbWVsaW5lXCIpLmFwcGVuZCgkZGl2KTtcbiAgICAkZGl2LmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCRkaXYuY3NzKCdsZWZ0JykpKTtcbiAgICAkZGl2LmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJGRpdi5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkZGl2LmNzcygnd2lkdGgnKSkpKTtcblxuICAgICRkaXYuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICB9XG4iLCIvKiBTY3JvbGxpbmcgc2hhZG93cyBieSBcIm1pbmRzdG9ybVwiLiBodHRwczovL2NvZGVwZW4uaW8vbWluZHN0b3JtL3Blbi9FYml5SiovXG5cblxudmFyIHNjcm9sbFNoYWRvdyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGVsZW0sIHdpZHRoLCBoZWlnaHQsIG9mZnNldCxcbiAgICBzaGFkb3dUb3AsIHNoYWRvd0JvdHRvbSxcbiAgICB0aW1lb3V0O1xuXG4gIGZ1bmN0aW9uIGluaXRTaGFkb3dzKCkge1xuICAgIHNoYWRvd1RvcCA9ICQoXCI8ZGl2PlwiKVxuICAgICAgLmFkZENsYXNzKFwic2hhZG93LXRvcFwiKVxuICAgICAgLmluc2VydEFmdGVyKGVsZW0pO1xuICAgIHNoYWRvd0JvdHRvbSA9ICQoXCI8ZGl2PlwiKVxuICAgICAgLmFkZENsYXNzKFwic2hhZG93LWJvdHRvbVwiKVxuICAgICAgLmluc2VydEFmdGVyKGVsZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY1Bvc2l0aW9uKCkge1xuICAgIHdpZHRoID0gZWxlbS5vdXRlcldpZHRoKCk7XG4gICAgaGVpZ2h0ID0gZWxlbS5vdXRlckhlaWdodCgpO1xuICAgIG9mZnNldCA9IGVsZW0ucG9zaXRpb24oKTtcblxuICAgIC8vIHVwZGF0ZVxuICAgIHNoYWRvd1RvcC5jc3Moe1xuICAgICAgd2lkdGg6IHdpZHRoICsgXCJweFwiLFxuICAgICAgdG9wOiBlbGVtLm9mZnNldC50b3AgKyBcInB4XCIsXG4gICAgICBsZWZ0OiBlbGVtLm9mZnNldC5sZWZ0ICsgXCJweFwiXG4gICAgfSk7XG4gICAgc2hhZG93Qm90dG9tLmNzcyh7XG4gICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICB0b3A6IChlbGVtLm9mZnNldC50b3AgKyBoZWlnaHQgLSAyMCkgKyBcInB4XCIsXG4gICAgICBsZWZ0OiBlbGVtLm9mZnNldC5sZWZ0ICsgXCJweFwiXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICBlbGVtLm9mZihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgZWxlbS5vbihcInNjcm9sbC5zaGFkb3dcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZWxlbS5zY3JvbGxUb3AoKSA+IDApIHtcbiAgICAgICAgc2hhZG93VG9wLmZhZGVJbigyMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hhZG93VG9wLmZhZGVPdXQoMjAwKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpICsgaGVpZ2h0ID49IGVsZW1bMF0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHNoYWRvd0JvdHRvbS5mYWRlT3V0KDIwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGFkb3dCb3R0b20uZmFkZUluKDIwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAkKHdpbmRvdykub24oXCJyZXNpemUuc2hhZG93XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGNQb3NpdGlvbigpO1xuICAgICAgICBlbGVtLnRyaWdnZXIoXCJzY3JvbGwuc2hhZG93XCIpO1xuICAgICAgfSwgMTApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBmdW5jdGlvbihwYXIpIHtcbiAgICAgIGVsZW0gPSAkKHBhcik7XG4gICAgICBpbml0U2hhZG93cygpO1xuICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICBhZGRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgYWRkUmVzaXplTGlzdGVuZXIoKTtcbiAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgfSxcbiAgICB1cGRhdGU6IGNhbGNQb3NpdGlvblxuICB9O1xuXG59KCkpO1xuXG4vLyBzdGFydFxuc2Nyb2xsU2hhZG93LmluaXQoXCIuY29udGFpbmVyXCIpO1xuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Nob3BwYWJsZVZpZGVvJywgWyduZ0FuaW1hdGUnLCAnbmdTYW5pdGl6ZScsICd1aS5ib290c3RyYXAnLCAndWkuc29ydGFibGUnXSk7XG4vLyBEZWNsYXJlIHRoZSBBcHBDdHJsIGNvbnRyb2xsZXJcbmFwcFxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgICAgICAvLyBDYXJkIGNvdW50ZXIsIHVzZWQgZm9yIGNhcmQgbmFtaW5nXG4gICAgICAgIHZhciBjYXJkQ291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gUHJvZHVjdCBjb3VudGVyLCB1c2VkIGZvciBwcm9kdWN0IG5hbWluZ1xuICAgICAgICB2YXIgcHJvZHVjdENvdW50ZXIgPSBcIlwiO1xuXG5cbiAgICAgICAgLy8gVmFyaWFibGUgZm9yIHRoZSB2aWRlbyB0aXRsZVxuICAgICAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cbiAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9tdXRlLnBuZ1wiO1xuXG4gICAgICAgIC8vUGxheSBhbmQgcGF1c2VcbiAgICAgICAgJHNjb3BlLnRvZ2dsZU11dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAoIXZpZGVvLm11dGUpIHtcbiAgICAgICAgICAgICAgICB2aWRlby5tdXRlID0gIXZpZGVvLm11dGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvc3BlYWtlci5wbmdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ubXV0ZSA9IHZpZGVvLm11dGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVQbGF5UGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAodmlkZW8ucGF1c2VkIHx8IHZpZGVvLmVuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICRzY29wZS5kdXJhdGlvbiA9IDA7XG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RDYXJkc1xuICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzID0gW107XG5cbiAgICAgICAgLy9Db2xsYXBzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3QgY2FyZHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vQ29sbGFzcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc1Byb2R1Y3RDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3RzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZVByb2R1Y3RPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vVmFyaWFibGUgdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSAwO1xuXG4gICAgICAgIC8vRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXJkID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSBpbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSBcIlwiO1xuXG4gICAgICAgICRzY29wZS5zZXRUcmlhbmdsZUhlaWdodCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucG9zaXRpb24udG9wICsgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0uaGVpZ2h0O1xuICAgICAgICAgICAgYWxlcnQocG9zKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKiRzY29wZS5zaG93TGlicmFyeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnNob3dMaWJyYXJ5ID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmhpZGVMaWJyYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSBmYWxzZTtcbiAgICAgICAgfTsqL1xuXG5cbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdEFkZGVkID0gZnVuY3Rpb24oaXRlbSAsc2VsZWN0ZWRDYXJkSW5kZXgpIHtcbiAgICAgICAgICAgIC8vcmV0dXJuICRzY29wZS5wcm9kdWN0Q2FyZHNbc2VsZWN0ZWRDYXJkSW5kZXhdLnByb2R1Y3RzLmluZGV4T2YoaXRlbS5JZCkgIT0gLTE7XG4gICAgICAgICAgICAvL3JldHVybiAkLmluQXJyYXkoaXRlbS5JZCwgJHNjb3BlLnByb2R1Y3RDYXJkc1tzZWxlY3RlZENhcmRJbmRleF0ucHJvZHVjdHNbMF0pID49IDA7XG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5wcm9kdWN0Q2FyZHMuaW5kZXhPZihpdGVtLklkKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpYnJhcnlcbiAgICAgICAgJHNjb3BlLmxpYnJhcnlQcm9kdWN0cyA9IFt7XG4gICAgICAgICAgICAgICAgSWQ6ICcxJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTbcO2cmRlZycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWctMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0J1ZGdldCAjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzInLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNFa28gI0tsaW1hdHNtYXJ0ICNOw6Ryb2RsYXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZpbnNtYWthcmUgI0t2YWxpdGV0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzQnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRnJpLicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2cgLSBGcmlnw6VlbmRlLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNEanVydsOkblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc1JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1WYW5saWcucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjQnVkZ2V0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzYnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0VrbyAjS2xpbWF0c21hcnQgI07DpHJvZGxhdFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc3JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IEphcGFuc2snLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUF2YW5jZXJhZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS3ZhbGl0ZXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnOCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1CYXJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGYW1pbGogI0Jhcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnOScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBTdG9yJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1TdMO2cnJlLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNNYXRsYWdhcmVcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTAnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmVuZCAjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnRsO2cmtsw6RkZSBUeWcnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLVR5Zy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS2xhc3Npc2tcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzEyJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdna2xvY2thJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZ2tsb2NrYS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE0JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBydW5kJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtcnVuZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE1JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtYmFybi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE2JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmFkaXRpb25lbGxcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0dqdXRqw6RybicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3N0ZWtwYW5uYS1nanV0asOkcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE4JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTdGVrcGFubmEnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9TdGVrcGFubmEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI01vZGVybiAjRmFtaWxqXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE5JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdNdWx0aXBlbnNlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1tZWQta25pdi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNNdWx0aVwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcyMCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFRyw6QnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtdHLDpC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsICNNaWxqw7Z2w6RubGlnXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gQXJyYXkgdGhhdCBzdG9yZSBhbGwgdGhlIGNhdGVnb3JpZXMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgZHJvcGRvd24tbGlzdFxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IFtdO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmxpYnJhcnlQcm9kdWN0cywgZnVuY3Rpb24odmFsdWUsIGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5jYXRlZ29yeSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5wdXNoKHZhbHVlLmNhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydCBwcm9kdWN0IGNhcmRzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZUNhcmRPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qXG4gICAgICAgICRzY29wZS5zZXRDb2xsYXBzZWQgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaSA9PSAoJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoLTEpKXtcblxuICAgICAgICAgICAgICBzUHJvZHVjdENvbGxhcHNlZD10cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICBpc1Byb2R1Y3RDb2xsYXBzZWQ9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuKi9cbiAgICAgICAgLy8gQWRkIHByb2R1Y3RDYXJkIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgIHZhciBhZGRQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGU6ICdQcm9kdWN0IENhcmQgJyArIGNhcmRDb3VudGVyLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXJkQ291bnRlcisrO1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2FyZCA9ICRzY29wZS5wcm9kdWN0Q2FyZHMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1swXS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6IFwiZW5kXCJ9KTtcbiAgICAgICAgICAgICovXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9BZGQgcHJvZHVjdCB0byBhIHByb2R1Y3QgY2FyZFxuICAgICAgICB2YXIgYWRkUHJvZHVjdCA9IGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICBwcm9kdWN0Q291bnRlciA9ICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBJZDogaXRlbS5JZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6IGl0ZW0ucHJvZHVjdFRpdGxlLFxuICAgICAgICAgICAgICAgIGxpbms6IGl0ZW0ubGluayxcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IGl0ZW0uc3BlY2lhbE9mZmVyLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IGl0ZW0uYnV0dG9uVGV4dCxcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogaXRlbS50YXJnZXRHcm91cCxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogaXRlbS5pbWFnZVVSTCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgY2FyZCBieSBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgY2FyZENvdW50ZXItLTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBieSBpbmRleCBhbmQgcHJvZHVjdCBjYXJkIGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0ID0gZnVuY3Rpb24ocHJvZHVjdENhcmRJbmRleCwgZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW3Byb2R1Y3RDYXJkSW5kZXhdLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9WaWRlbyBjb250cm9sbGVyXG4gICAgICAgIC8vVm9sdW1lXG4gICAgICAgIGZ1bmN0aW9uIHNldFZvbHVtZSgpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZVwiKTtcbiAgICAgICAgICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL011dGVcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTXV0ZSgpIHtcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gIXZpZGVvLm11dGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vUHJvZ3Jlc3NiYXJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHVwZGF0ZVByb2dyZXNzLCBmYWxzZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gMDtcbiAgICAgICAgICAgIGlmICh2aWRlby5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IoKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gdmFsdWUgKyBcIiVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdENhcmQgPSBhZGRQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3QgPSBhZGRQcm9kdWN0O1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdENhcmQgPSByZW1vdmVQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3QgPSByZW1vdmVQcm9kdWN0O1xuXG4gICAgICAgIC8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCA1IHByb2R1Y3RDYXJkc1xuICAgICAgICAvKmZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB9Ki9cblxuICAgIH1dKVxuXG5cbiAgICAuZmlsdGVyKCd0b01pblNlYycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQoaW5wdXQgLyA2MCwgMTApO1xuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKGlucHV0ICUgNjApO1xuICAgICAgICAgICAgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaW51dGVzICsgJzowJyArIHNlY29uZHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaW51dGVzICsgJzonICsgc2Vjb25kcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKi5kaXJlY3RpdmUoJ3BvcG92ZXInLCBmdW5jdGlvbiAoJGNvbXBpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgICAkKGVsZW0pLm9uKCdpc09wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uVG9wID0gcGFyc2VJbnQoJCgnLnByb2R1Y3QtY2FyZCcpLnBvc2l0aW9uKCkudG9wICsgMzApO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbkxlZnQgPSBwYXJzZUludCgkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArICQodGhpcykud2lkdGggLSAyMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1jYXJkLWhpZ2h0bGlnaHQnKS5jc3MoJ3RvcCcsIHBvc2l0aW9uVG9wICsgJ3B4Jyk7XG5cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICB9KSovXG5cbiAgICAvL0RpcmVjdGl2ZSB0byBhcHBlbmQgalF1ZXJ5VUkgZHJhZ2dhYmxlL3Jlc2l6YWJsZS1mdW5jdGlvbmFsaXR5IHRvIHRoZSB0aW1lc2xvdCBzbGlkZXJzXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAvKmNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vblNsaWRlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sKi9cbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmRlbC1zZWcnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pXG5cbiAgICAuZGlyZWN0aXZlKCdzb21lVmlkZW8nLCBmdW5jdGlvbigkd2luZG93LCAkdGltZW91dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICB2aWRlb0N1cnJlbnRUaW1lOiBcIj12aWRlb0N1cnJlbnRUaW1lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUub25UaW1lVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyVGltZSA9ICRlbGVtZW50WzBdLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyclRpbWUgLSAkc2NvcGUudmlkZW9DdXJyZW50VGltZSA+IDIgfHwgJHNjb3BlLnZpZGVvQ3VycmVudFRpbWUgLSBjdXJyVGltZSA+IDIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnRbMF0uY3VycmVudFRpbWUgPSAkc2NvcGUudmlkZW9DdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52aWRlb0N1cnJlbnRUaW1lID0gJGVsZW1lbnRbMF0uY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxtKSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoaXMgJHdhdGNoIHRvIHJlc3RhcnQgdGhlIHZpZGVvIGlmIGl0IGhhcyBlbmRlZFxuICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgndmlkZW9DdXJyZW50VGltZScsIGZ1bmN0aW9uKG5ld1ZhbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbG1bMF0uZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIGEgc2Vjb25kIGNoZWNrIGJlY2F1c2UgdGhlIGxhc3QgJ3RpbWV1cGRhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgdmlkZW8gc3RvcHMgY2F1c2VzIGEgaGljY3VwLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsbVswXS5jdXJyZW50VGltZSAhPT0gbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtWzBdLmN1cnJlbnRUaW1lID0gbmV3VmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbVswXS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2Uga2VlcCBhbnkgbW9kZWwgc3luY2luZyBoZXJlLlxuICAgICAgICAgICAgICAgIGVsbS5iaW5kKCd0aW1ldXBkYXRlJywgc2NvcGUub25UaW1lVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvL0RpcmVjdGl2ZSBmb3IgdGhlIHRpbWUgbWFya2VyIGRyYWdnYWJsZVxuXG4gICAgLmRpcmVjdGl2ZSgnbWFya2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUub25EcmFnID0gZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1hcmtlclZhbHVlID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnLCBuZXdQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzbGVmdCA9PSAnYXV0bycpIHRoaXNjc3NsZWZ0ID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Bvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KG1hcmtlclZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5sZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBtYXJrZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRtYXJrZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pXG4gICAgLy9EaXJlY3RpdmUgdG8gYXBwZW5kIGEgbmV3IHRpbWVzbG90IHdoZW4gdXNlciB1c2VzIHRoZSBhZGQgdGltZXNsb3QgYnV0dG9uXG4gICAgLmRpcmVjdGl2ZSgnYWRkVGltZXNsb3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGFkZC10aW1lc2xvdC1jbGlja1xuICAgICAgICAgICAgICAgIHZhciBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGQtdGltZXNsb3QnKTtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoYWRkQnRuKS5jbGljayhmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyQoZWxlbSkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnLmFkZC10aW1lc2xvdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG5cbiAgICAgICAgICAgICAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICAgICAgICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICAgICAgICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICAgICAgICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICAgICAgICAgICAgICB9KS5odG1sKCc8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiaG92ZXItaGVscFwiPkRlbGV0ZSBzZWdtZW50PC9zcGFuPjwvYT48L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgICAgICAgICAgICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICAgICAgICAgICAgICRkaXYuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJGRpdi5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnByb2R1Y3QtdGltZWxpbmUnKS5hcHBlbmQoJGRpdilcbiAgICAgICAgICAgICAgICAgICAgJGRpdi5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkZGl2LmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICRkaXYuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkZGl2LmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCRkaXYuY3NzKCd3aWR0aCcpKSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICRkaXYuY2xpY2soZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0U2Vjb25kc1RvVGltZShzZWMpIHtcbiAgICAgICAgdG90YWxTZWMgPSBNYXRoLnJvdW5kKHNlYyk7XG4gICAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gMzYwMCkgJSAyNDtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDYwKSAlIDYwO1xuICAgICAgICB2YXIgc2Vjb25kcyA9IHRvdGFsU2VjICUgNjA7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IChob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzKSArIFwiOlwiICsgKG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXMpICsgXCI6XCIgKyAoc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zaXRpb25Ub1RpbWUocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHRvdGFsRHVyYXRpb24gPSA2MTtcblxuICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludChwb3NpdGlvbik7XG4gICAgICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgICAgIHZhciBuZXdUaW1lID0gdG90YWxEdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRTZWNvbmRzVG9UaW1lKG5ld1RpbWUpO1xuICAgIH1cbiIsIiQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgYXhpczogJ3gnLFxuICAgIGNvbnRhaW5tZW50OiAncHJvZHVjdC10aW1lbGluZScsXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgcG9zVG9wQXJyYXkgPSBbXTtcbiAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHRoaXNjc3N0b3AgPSAkKHRoaXMpLmNzcygndG9wJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3N0b3AgPT0gJ2F1dG8nKSB0aGlzY3NzdG9wID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgIHBvc1RvcEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc3RvcCk7XG4gICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiZWdpbnRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICBiZWdpbmxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgfSxcbiAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHZhciB0b3BkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBiZWdpbnRvcDtcbiAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCBwb3NUb3BBcnJheVtpXSArIHRvcGRpZmYpO1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIi8qIFNjcm9sbGluZyBzaGFkb3dzIGJ5IFwibWluZHN0b3JtXCIuIGh0dHBzOi8vY29kZXBlbi5pby9taW5kc3Rvcm0vcGVuL0ViaXlKKi9cblxuXG52YXIgc2Nyb2xsU2hhZG93ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgZWxlbSwgd2lkdGgsIGhlaWdodCwgb2Zmc2V0LFxuICAgIHNoYWRvd1RvcCwgc2hhZG93Qm90dG9tLFxuICAgIHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gaW5pdFNoYWRvd3MoKSB7XG4gICAgc2hhZG93VG9wID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctdG9wXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gICAgc2hhZG93Qm90dG9tID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctYm90dG9tXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjUG9zaXRpb24oKSB7XG4gICAgd2lkdGggPSBlbGVtLm91dGVyV2lkdGgoKTtcbiAgICBoZWlnaHQgPSBlbGVtLm91dGVySGVpZ2h0KCk7XG4gICAgb2Zmc2V0ID0gZWxlbS5wb3NpdGlvbigpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgc2hhZG93VG9wLmNzcyh7XG4gICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICB0b3A6IGVsZW0ub2Zmc2V0LnRvcCArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgICBzaGFkb3dCb3R0b20uY3NzKHtcbiAgICAgIHdpZHRoOiB3aWR0aCArIFwicHhcIixcbiAgICAgIHRvcDogKGVsZW0ub2Zmc2V0LnRvcCArIGhlaWdodCAtIDIwKSArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbExpc3RlbmVyKCkge1xuICAgIGVsZW0ub2ZmKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICBlbGVtLm9uKFwic2Nyb2xsLnNoYWRvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpID4gMCkge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZUluKDIwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZU91dCgyMDApO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wKCkgKyBoZWlnaHQgPj0gZWxlbVswXS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVPdXQoMjAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoYWRvd0JvdHRvbS5mYWRlSW4oMjAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICQod2luZG93KS5vbihcInJlc2l6ZS5zaGFkb3dcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICB9LCAxMCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKHBhcikge1xuICAgICAgZWxlbSA9ICQocGFyKTtcbiAgICAgIGluaXRTaGFkb3dzKCk7XG4gICAgICBjYWxjUG9zaXRpb24oKTtcbiAgICAgIGFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICBhZGRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogY2FsY1Bvc2l0aW9uXG4gIH07XG5cbn0oKSk7XG5cbi8vIHN0YXJ0XG5zY3JvbGxTaGFkb3cuaW5pdChcIi5jb250YWluZXJcIik7XG4iXX0=
>>>>>>> a8f546b568ffecee1e7c5e33029558cfaf5badab
