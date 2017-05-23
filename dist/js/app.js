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
            var vid = document.getElementById("video");

            if (vid.muted) {
                vid.muted = false;
                $scope.muteSrc = "../assets/images/speaker.png";
            } else {
                vid.muted = true;
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


        //Returns true if library product exists in the selected productcard
        $scope.isProductAdded = function(item, selectedCardIndex) {

            var arrLen = $scope.productCards[selectedCardIndex].products.length;

            for (var i = 0; i < arrLen; i++) {
                return $scope.productCards[selectedCardIndex].products[i].Id === item.Id;
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

        $scope.scrollToRight = function() {
            var element = angular.element(document.querySelector('#letters'));
            var x = element.scrollLeft()+140;
            element.scrollLeft(x);
        };

        $scope.scrollToLeft = function() {
            var element = angular.element(document.querySelector('#letters'));
            var x = element.scrollLeft()-140;
            element.scrollLeft(x);
        };

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

    .directive('scrollToLast', ['$location', '$anchorScroll', function($location, $anchorScroll) {

        function linkFn(scope, element, attrs) {
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
    .directive('closeOthers', function () {
      return {
              restrict: 'A',
              scope: true,
              link: function (scope, elem, attrs) {

                    var lanopt = $(".card-container");
                    lanopt.on("show.bs.collapse",".collapse", function(){
                    lanopt.find(".collapse.in").collapse("hide");
                  });

              }
          };
    })
    //Directive to append jQueryUI draggable/resizable-functionality to the timeslot sliders on load
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

                // Causes "Na — jquery.min.js:2215TypeError: undefined is not an object (evaluating 'b.ownerDocument.defaultView'"
                //var self = this;

                var currentPos = parseInt($('.marker').css('left'));
                var totalWidth = parseInt($('.timeline').css('width'));
                var newPos = currentPos / totalWidth * 100;
                // set up timeslot slider on doc ready
                angular.element(document).ready(function() {

                    //scope.appendTimeslot = function() {

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

                    $(".product-bar").unbind('click');
                    $(".product-bar").on('click', function() {
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

                    $('.del-seg').on('click', function() {
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

                                thiscssleft = $(this).css('left');
                                if (thiscssleft == 'auto') thiscssleft = 0; // For IE

                                posLeftArray[i] = parseInt(thiscssleft);

                            });
                        }
                        beginleft = $(this).offset().left;

                    },
                    drag: function(event, ui) {
                        var leftdiff = $(this).offset().left - beginleft;

                        if ($(this).hasClass("group")) {
                            $(".group").each(function(i) {
                                //$(this).css('left', posLeftArray[i] + leftdiff);
                                $(this).css('left', posLeftArray[0] + leftdiff);
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
                //var addBtn = document.getElementsByClassName('add-timeslot');
                //angular.element(addBtn).click(function() {

                scope.addTimeslot = function() {
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
                };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcm9sbGluZy1zaGFkb3dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3R2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlY2xhcmUgdGhlIHNob3BwYWJsZVZpZGVvIG1vZHVsZSBhbmQgaXRzIGRlcGVuZGVuY2llc1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaG9wcGFibGVWaWRlbycsIFsnbmdBbmltYXRlJywgJ25nU2FuaXRpemUnLCAndWkuYm9vdHN0cmFwJywgJ3VpLnNvcnRhYmxlJ10pO1xuLy8gRGVjbGFyZSB0aGUgQXBwQ3RybCBjb250cm9sbGVyXG5hcHBcbiAgICAuY29udHJvbGxlcignQXBwQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgICAgICAgLy8gQ2FyZCBjb3VudGVyLCB1c2VkIGZvciBjYXJkIG5hbWluZ1xuICAgICAgICB2YXIgY2FyZENvdW50ZXIgPSAxO1xuXG4gICAgICAgIC8vIFByb2R1Y3QgY291bnRlciwgdXNlZCBmb3IgcHJvZHVjdCBuYW1pbmdcbiAgICAgICAgdmFyIHByb2R1Y3RDb3VudGVyID0gXCJcIjtcblxuXG4gICAgICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAgICAgJHNjb3BlLnZpZGVvVGl0bGUgPSBcIlwiO1xuXG4gICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGxheS5wbmdcIjtcbiAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvc3BlYWtlci5wbmdcIjtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVNdXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKTtcblxuICAgICAgICAgICAgaWYgKHZpZC5tdXRlZCkge1xuICAgICAgICAgICAgICAgIHZpZC5tdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRzY29wZS5tdXRlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3NwZWFrZXIucG5nXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZC5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVQbGF5UGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAodmlkZW8ucGF1c2VkIHx8IHZpZGVvLmVuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgJHNjb3BlLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgJHNjb3BlLmR1cmF0aW9uID0gMDtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdENhcmRzXG4gICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMgPSBbXTtcblxuICAgICAgICAvL0NvbGxhcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdCBjYXJkcywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9Db2xsYXNwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0cywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdENvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vVGVsbHMgdWktc29ydGFibGUgd2hhdCBhbmQgaG93IHRvIHNvcnQgcHJvZHVjdHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlUHJvZHVjdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vVmFyaWFibGUgdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSAwO1xuXG4gICAgICAgIC8vRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXJkID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSBpbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSBcIlwiO1xuXG4gICAgICAgICRzY29wZS5zZXRUcmlhbmdsZUhlaWdodCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucG9zaXRpb24udG9wICsgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0uaGVpZ2h0O1xuICAgICAgICAgICAgYWxlcnQocG9zKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKiRzY29wZS5zaG93TGlicmFyeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnNob3dMaWJyYXJ5ID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmhpZGVMaWJyYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSBmYWxzZTtcbiAgICAgICAgfTsqL1xuXG5cbiAgICAgICAgLy9SZXR1cm5zIHRydWUgaWYgbGlicmFyeSBwcm9kdWN0IGV4aXN0cyBpbiB0aGUgc2VsZWN0ZWQgcHJvZHVjdGNhcmRcbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdEFkZGVkID0gZnVuY3Rpb24oaXRlbSwgc2VsZWN0ZWRDYXJkSW5kZXgpIHtcblxuICAgICAgICAgICAgdmFyIGFyckxlbiA9ICRzY29wZS5wcm9kdWN0Q2FyZHNbc2VsZWN0ZWRDYXJkSW5kZXhdLnByb2R1Y3RzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUucHJvZHVjdENhcmRzW3NlbGVjdGVkQ2FyZEluZGV4XS5wcm9kdWN0c1tpXS5JZCA9PT0gaXRlbS5JZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpYnJhcnlcbiAgICAgICAgJHNjb3BlLmxpYnJhcnlQcm9kdWN0cyA9IFt7XG4gICAgICAgICAgICAgICAgSWQ6ICcxJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTbcO2cmRlZycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWctMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0J1ZGdldCAjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzInLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNFa28gI0tsaW1hdHNtYXJ0ICNOw6Ryb2RsYXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZpbnNtYWthcmUgI0t2YWxpdGV0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzQnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRnJpLicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2cgLSBGcmlnw6VlbmRlLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNEanVydsOkblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc1JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1WYW5saWcucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjQnVkZ2V0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzYnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0VrbyAjS2xpbWF0c21hcnQgI07DpHJvZGxhdFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc3JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IEphcGFuc2snLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUF2YW5jZXJhZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS3ZhbGl0ZXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnOCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1CYXJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGYW1pbGogI0Jhcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnOScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBTdG9yJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1TdMO2cnJlLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNNYXRsYWdhcmVcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTAnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmVuZCAjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnRsO2cmtsw6RkZSBUeWcnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLVR5Zy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS2xhc3Npc2tcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzEyJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdna2xvY2thJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZ2tsb2NrYS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE0JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBydW5kJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtcnVuZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE1JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtYmFybi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE2JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmFkaXRpb25lbGxcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0dqdXRqw6RybicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3N0ZWtwYW5uYS1nanV0asOkcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE4JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTdGVrcGFubmEnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9TdGVrcGFubmEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI01vZGVybiAjRmFtaWxqXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE5JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdNdWx0aXBlbnNlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1tZWQta25pdi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNNdWx0aVwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcyMCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFRyw6QnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtdHLDpC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsICNNaWxqw7Z2w6RubGlnXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gQXJyYXkgdGhhdCBzdG9yZSBhbGwgdGhlIGNhdGVnb3JpZXMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgZHJvcGRvd24tbGlzdFxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IFtdO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmxpYnJhcnlQcm9kdWN0cywgZnVuY3Rpb24odmFsdWUsIGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5jYXRlZ29yeSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5wdXNoKHZhbHVlLmNhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydCBwcm9kdWN0IGNhcmRzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZUNhcmRPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qXG4gICAgICAgICRzY29wZS5zZXRDb2xsYXBzZWQgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaSA9PSAoJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoLTEpKXtcblxuICAgICAgICAgICAgICBzUHJvZHVjdENvbGxhcHNlZD10cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICBpc1Byb2R1Y3RDb2xsYXBzZWQ9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuKi9cbiAgICAgICAgLy8gQWRkIHByb2R1Y3RDYXJkIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgIHZhciBhZGRQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGU6ICdQcm9kdWN0IENhcmQgJyArIGNhcmRDb3VudGVyLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXJkQ291bnRlcisrO1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2FyZCA9ICRzY29wZS5wcm9kdWN0Q2FyZHMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1swXS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6IFwiZW5kXCJ9KTtcbiAgICAgICAgICAgICovXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9BZGQgcHJvZHVjdCB0byBhIHByb2R1Y3QgY2FyZFxuICAgICAgICB2YXIgYWRkUHJvZHVjdCA9IGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICBwcm9kdWN0Q291bnRlciA9ICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBJZDogaXRlbS5JZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6IGl0ZW0ucHJvZHVjdFRpdGxlLFxuICAgICAgICAgICAgICAgIGxpbms6IGl0ZW0ubGluayxcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IGl0ZW0uc3BlY2lhbE9mZmVyLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IGl0ZW0uYnV0dG9uVGV4dCxcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogaXRlbS50YXJnZXRHcm91cCxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogaXRlbS5pbWFnZVVSTCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgY2FyZCBieSBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgY2FyZENvdW50ZXItLTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBieSBpbmRleCBhbmQgcHJvZHVjdCBjYXJkIGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0ID0gZnVuY3Rpb24ocHJvZHVjdENhcmRJbmRleCwgZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW3Byb2R1Y3RDYXJkSW5kZXhdLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9WaWRlbyBjb250cm9sbGVyXG4gICAgICAgIC8vVm9sdW1lXG5cbiAgICAgICAgdmFyIHNldFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG1lZGlhQ2xpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9cIik7XG4gICAgICAgICAgICBtZWRpYUNsaXAudm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVcIikudmFsdWU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vUHJvZ3Jlc3NiYXJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHVwZGF0ZVByb2dyZXNzLCBmYWxzZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gMDtcbiAgICAgICAgICAgIGlmICh2aWRlby5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IoKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gdmFsdWUgKyBcIiVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICRzY29wZS5zY3JvbGxUb1JpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGV0dGVycycpKTtcbiAgICAgICAgICAgIHZhciB4ID0gZWxlbWVudC5zY3JvbGxMZWZ0KCkrMTQwO1xuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0KHgpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5zY3JvbGxUb0xlZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZXR0ZXJzJykpO1xuICAgICAgICAgICAgdmFyIHggPSBlbGVtZW50LnNjcm9sbExlZnQoKS0xNDA7XG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQoeCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgc2NvcGUgZnVuY3Rpb25zXG4gICAgICAgICRzY29wZS5zZXRWb2x1bWUgPSBzZXRWb2x1bWU7XG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0Q2FyZCA9IGFkZFByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdCA9IGFkZFByb2R1Y3Q7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0Q2FyZCA9IHJlbW92ZVByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdCA9IHJlbW92ZVByb2R1Y3Q7XG5cbiAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkIDUgcHJvZHVjdENhcmRzXG4gICAgICAgIC8qZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGFkZFByb2R1Y3RDYXJkKCk7XG4gICAgICAgIH0qL1xuXG4gICAgfV0pXG5cbiAgICAuZGlyZWN0aXZlKCdzY3JvbGxUb0xhc3QnLCBbJyRsb2NhdGlvbicsICckYW5jaG9yU2Nyb2xsJywgZnVuY3Rpb24oJGxvY2F0aW9uLCAkYW5jaG9yU2Nyb2xsKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gbGlua0ZuKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgJGxvY2F0aW9uLmhhc2goYXR0cnMuc2Nyb2xsVG9MYXN0KTtcbiAgICAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBsaW5rRm5cbiAgICAgICAgfTtcbiAgICB9XSlcblxuICAgIC5maWx0ZXIoJ3RvTWluU2VjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludChpbnB1dCAvIDYwLCAxMCk7XG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoaW5wdXQgJSA2MCk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKyAnOjAnICsgc2Vjb25kcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvKi5kaXJlY3RpdmUoJ3BvcG92ZXInLCBmdW5jdGlvbiAoJGNvbXBpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgICAkKGVsZW0pLm9uKCdpc09wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uVG9wID0gcGFyc2VJbnQoJCgnLnByb2R1Y3QtY2FyZCcpLnBvc2l0aW9uKCkudG9wICsgMzApO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbkxlZnQgPSBwYXJzZUludCgkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArICQodGhpcykud2lkdGggLSAyMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1jYXJkLWhpZ2h0bGlnaHQnKS5jc3MoJ3RvcCcsIHBvc2l0aW9uVG9wICsgJ3B4Jyk7XG5cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICB9KSovXG4gICAgLmRpcmVjdGl2ZSgnY2xvc2VPdGhlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYW5vcHQgPSAkKFwiLmNhcmQtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBsYW5vcHQub24oXCJzaG93LmJzLmNvbGxhcHNlXCIsXCIuY29sbGFwc2VcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbGFub3B0LmZpbmQoXCIuY29sbGFwc2UuaW5cIikuY29sbGFwc2UoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgfSlcbiAgICAvL0RpcmVjdGl2ZSB0byBhcHBlbmQgalF1ZXJ5VUkgZHJhZ2dhYmxlL3Jlc2l6YWJsZS1mdW5jdGlvbmFsaXR5IHRvIHRoZSB0aW1lc2xvdCBzbGlkZXJzIG9uIGxvYWRcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBDYXVzZXMgXCJOYSDigJQganF1ZXJ5Lm1pbi5qczoyMjE1VHlwZUVycm9yOiB1bmRlZmluZWQgaXMgbm90IGFuIG9iamVjdCAoZXZhbHVhdGluZyAnYi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3J1wiXG4gICAgICAgICAgICAgICAgLy92YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgdGltZXNsb3Qgc2xpZGVyIG9uIGRvYyByZWFkeVxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zY29wZS5hcHBlbmRUaW1lc2xvdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnVuYmluZCgnY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmRlbC1zZWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSlcblxuICAgIC5kaXJlY3RpdmUoJ3NvbWVWaWRlbycsIGZ1bmN0aW9uKCR3aW5kb3csICR0aW1lb3V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHZpZGVvQ3VycmVudFRpbWU6IFwiPXZpZGVvQ3VycmVudFRpbWVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQpIHtcblxuICAgICAgICAgICAgICAgICRzY29wZS5vblRpbWVVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gJGVsZW1lbnRbMF0uY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyVGltZSAtICRzY29wZS52aWRlb0N1cnJlbnRUaW1lID4gMiB8fCAkc2NvcGUudmlkZW9DdXJyZW50VGltZSAtIGN1cnJUaW1lID4gMikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudFswXS5jdXJyZW50VGltZSA9ICRzY29wZS52aWRlb0N1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZpZGVvQ3VycmVudFRpbWUgPSAkZWxlbWVudFswXS5jdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbG0pIHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgdGhpcyAkd2F0Y2ggdG8gcmVzdGFydCB0aGUgdmlkZW8gaWYgaXQgaGFzIGVuZGVkXG4gICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCd2aWRlb0N1cnJlbnRUaW1lJywgZnVuY3Rpb24obmV3VmFsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsbVswXS5lbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gYSBzZWNvbmQgY2hlY2sgYmVjYXVzZSB0aGUgbGFzdCAndGltZXVwZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFmdGVyIHRoZSB2aWRlbyBzdG9wcyBjYXVzZXMgYSBoaWNjdXAuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxtWzBdLmN1cnJlbnRUaW1lICE9PSBuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG1bMF0uY3VycmVudFRpbWUgPSBuZXdWYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtWzBdLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBrZWVwIGFueSBtb2RlbCBzeW5jaW5nIGhlcmUuXG4gICAgICAgICAgICAgICAgZWxtLmJpbmQoJ3RpbWV1cGRhdGUnLCBzY29wZS5vblRpbWVVcGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vRGlyZWN0aXZlIGZvciB0aGUgdGltZSBtYXJrZXIgZHJhZ2dhYmxlXG4gICAgLmRpcmVjdGl2ZSgnbWFya2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUub25EcmFnID0gZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1hcmtlclZhbHVlID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXlbaV0gPSBwYXJzZUludCh0aGlzY3NzbGVmdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2lubGVmdCA9ICQodGhpcykub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vJCh0aGlzKS5jc3MoJ2xlZnQnLCBwb3NMZWZ0QXJyYXlbaV0gKyBsZWZ0ZGlmZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5WzBdICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBtYXJrZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRtYXJrZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pXG4gICAgLy9EaXJlY3RpdmUgdG8gYXBwZW5kIGEgbmV3IHRpbWVzbG90IHdoZW4gdXNlciB1c2VzIHRoZSBhZGQgdGltZXNsb3QgYnV0dG9uXG4gICAgLmRpcmVjdGl2ZSgnYWRkVGltZXNsb3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGFkZC10aW1lc2xvdC1jbGlja1xuICAgICAgICAgICAgICAgIC8vdmFyIGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkZC10aW1lc2xvdCcpO1xuICAgICAgICAgICAgICAgIC8vYW5ndWxhci5lbGVtZW50KGFkZEJ0bikuY2xpY2soZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5hZGRUaW1lc2xvdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyQoZWxlbSkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnLmFkZC10aW1lc2xvdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyICRkaXYgPSAkKFwiPGRpdj5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtYmFyIHVpLXdpZGdldC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkc2VnU3RhcnQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgJHNlZ0VuZCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1lbmRcIlxuICAgICAgICAgICAgICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGRlbFNlZyA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImRlbC1zZWdcIlxuICAgICAgICAgICAgICAgICAgICB9KS5odG1sKCc8YSBocmVmPVwiI1wiPjwvYT48L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgICRkaXYuYXBwZW5kKCRzZWdTdGFydCwgJHNlZ0VuZCwgJGRlbFNlZyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAkZGl2LmNzcygnbGVmdCcsIG5ld1BvcyArICclJyk7XG4gICAgICAgICAgICAgICAgICAgICRkaXYuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAkZGl2LnJlc2l6YWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJGRpdi5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkZGl2LnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcucHJvZHVjdC10aW1lbGluZScpLmFwcGVuZCgkZGl2KVxuICAgICAgICAgICAgICAgICAgICAkZGl2LmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCRkaXYuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGRpdi5jbGljayhmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkZGVsU2VnLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pO1xuXG5mdW5jdGlvbiBjb252ZXJ0U2Vjb25kc1RvVGltZShzZWMpIHtcbiAgICB0b3RhbFNlYyA9IE1hdGgucm91bmQoc2VjKTtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDM2MDApICUgMjQ7XG4gICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDYwKSAlIDYwO1xuICAgIHZhciBzZWNvbmRzID0gdG90YWxTZWMgJSA2MDtcblxuICAgIHZhciByZXN1bHQgPSAoaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycykgKyBcIjpcIiArIChtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzKSArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9UaW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSA2MTtcblxuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcblxuICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQocG9zaXRpb24pO1xuICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgIHJldHVybiBjb252ZXJ0U2Vjb25kc1RvVGltZShuZXdUaW1lKTtcbn1cbiIsIi8qIFNjcm9sbGluZyBzaGFkb3dzIGJ5IFwibWluZHN0b3JtXCIuIGh0dHBzOi8vY29kZXBlbi5pby9taW5kc3Rvcm0vcGVuL0ViaXlKKi9cblxuXG52YXIgc2Nyb2xsU2hhZG93ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgZWxlbSwgd2lkdGgsIGhlaWdodCwgb2Zmc2V0LFxuICAgIHNoYWRvd1RvcCwgc2hhZG93Qm90dG9tLFxuICAgIHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gaW5pdFNoYWRvd3MoKSB7XG4gICAgc2hhZG93VG9wID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctdG9wXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gICAgc2hhZG93Qm90dG9tID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctYm90dG9tXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjUG9zaXRpb24oKSB7XG4gICAgd2lkdGggPSBlbGVtLm91dGVyV2lkdGgoKTtcbiAgICBoZWlnaHQgPSBlbGVtLm91dGVySGVpZ2h0KCk7XG4gICAgb2Zmc2V0ID0gZWxlbS5wb3NpdGlvbigpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgc2hhZG93VG9wLmNzcyh7XG4gICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICB0b3A6IGVsZW0ub2Zmc2V0LnRvcCArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgICBzaGFkb3dCb3R0b20uY3NzKHtcbiAgICAgIHdpZHRoOiB3aWR0aCArIFwicHhcIixcbiAgICAgIHRvcDogKGVsZW0ub2Zmc2V0LnRvcCArIGhlaWdodCAtIDIwKSArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbExpc3RlbmVyKCkge1xuICAgIGVsZW0ub2ZmKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICBlbGVtLm9uKFwic2Nyb2xsLnNoYWRvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpID4gMCkge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZUluKDIwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZU91dCgyMDApO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wKCkgKyBoZWlnaHQgPj0gZWxlbVswXS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVPdXQoMjAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoYWRvd0JvdHRvbS5mYWRlSW4oMjAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICQod2luZG93KS5vbihcInJlc2l6ZS5zaGFkb3dcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICB9LCAxMCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKHBhcikge1xuICAgICAgZWxlbSA9ICQocGFyKTtcbiAgICAgIGluaXRTaGFkb3dzKCk7XG4gICAgICBjYWxjUG9zaXRpb24oKTtcbiAgICAgIGFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICBhZGRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogY2FsY1Bvc2l0aW9uXG4gIH07XG5cbn0oKSk7XG5cbi8vIHN0YXJ0XG5zY3JvbGxTaGFkb3cuaW5pdChcIi5jb250YWluZXJcIik7XG4iXX0=
