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

        $scope.markerTime = 0;
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
        video.addEventListener('timeupdate', updateProgress);

        function updateProgress() {
            var currentPos = video.currentTime;
            var maxduration = video.duration;
            var percentage = 100 * currentPos / maxduration;
            $('#progress').css('width', percentage + '%');
        }

        $scope.timeDrag = false;

        $scope.progressClick = function(e) {
            $scope.timeDrag = true;
            updatebar(e.pageX);
        };

        $scope.progressGo = function(e) {
            if ($scope.timeDrag) {
                $scope.timeDrag = false;
                updatebar(e.pageX);
            }
        }

        $scope.progressMove = function(e) {
            if ($scope.timeDrag) {
                updatebar(e.pageX);
            }
        }

        var updatebar = function(x) {
            var progress = $('#progressBar');
            var maxduration = video.duration;
            var position = x - progress.offset().left;
            var percentage = 100 * position / progress.width();

            //Check within range
            if (percentage > 100) {
                percentage = 100;
            }

            if (percentage < 0) {
                percentage = 0;
            }

            //Update progress bar and video currenttime
            $('#progress').css('width', percentage + '%');
            video.currentTime = ((maxduration * percentage) / 100);
        };

        $scope.scrollToRight = function() {
            var element = angular.element(document.querySelector('#letters'));
            var x = element.scrollLeft() + 140;
            element.scrollLeft(x);
        };

        $scope.scrollToLeft = function() {
            var element = angular.element(document.querySelector('#letters'));
            var x = element.scrollLeft() - 140;
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
                    $(".marker").draggable({
                        containmetn: ".product-timeline",
                        axis: "x",
                        drag: function(event, ui) {
                            $(this).find('.current').text(positionToTime($(this).css('left')));

                        }
                    })
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

    var result = /*(hours < 10 ? "0" + hours : hours) + ":" +*/ (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcm9sbGluZy1zaGFkb3dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcHlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Nob3BwYWJsZVZpZGVvJywgWyduZ0FuaW1hdGUnLCAnbmdTYW5pdGl6ZScsICd1aS5ib290c3RyYXAnLCAndWkuc29ydGFibGUnXSk7XG4vLyBEZWNsYXJlIHRoZSBBcHBDdHJsIGNvbnRyb2xsZXJcbmFwcFxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgICAgICAvLyBDYXJkIGNvdW50ZXIsIHVzZWQgZm9yIGNhcmQgbmFtaW5nXG4gICAgICAgIHZhciBjYXJkQ291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gUHJvZHVjdCBjb3VudGVyLCB1c2VkIGZvciBwcm9kdWN0IG5hbWluZ1xuICAgICAgICB2YXIgcHJvZHVjdENvdW50ZXIgPSBcIlwiO1xuXG5cbiAgICAgICAgLy8gVmFyaWFibGUgZm9yIHRoZSB2aWRlbyB0aXRsZVxuICAgICAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cbiAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9zcGVha2VyLnBuZ1wiO1xuXG4gICAgICAgIC8vUGxheSBhbmQgcGF1c2VcbiAgICAgICAgJHNjb3BlLnRvZ2dsZU11dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB2aWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpO1xuXG4gICAgICAgICAgICBpZiAodmlkLm11dGVkKSB7XG4gICAgICAgICAgICAgICAgdmlkLm11dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvc3BlYWtlci5wbmdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9tdXRlLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vUGxheSBhbmQgcGF1c2VcbiAgICAgICAgJHNjb3BlLnRvZ2dsZVBsYXlQYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gIHZhciBwbGF5cGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlwYXVzZVwiKTtcbiAgICAgICAgICAgIGlmICh2aWRlby5wYXVzZWQgfHwgdmlkZW8uZW5kZWQpIHtcbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wYXVzZS5wbmdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucGxheVBhdXNlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLm1hcmtlclRpbWUgPSAwO1xuICAgICAgICAkc2NvcGUuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAkc2NvcGUuZHVyYXRpb24gPSAwO1xuXG4gICAgICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0Q2FyZHNcbiAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcyA9IFtdO1xuXG4gICAgICAgIC8vQ29sbGFwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0IGNhcmRzLCB0cnVlIGlmIGNvbGxhcHNlZFxuICAgICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL0NvbGxhc3BzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3RzLCB0cnVlIGlmIGNvbGxhcHNlZFxuICAgICAgICAkc2NvcGUuaXNQcm9kdWN0Q29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydCBwcm9kdWN0c1xuICAgICAgICAkc2NvcGUuc29ydGFibGVQcm9kdWN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhhbmRsZTogJy5wcm9kdWN0JyxcbiAgICAgICAgICAgIC8vIGl0ZW1zOiAnIC5wYW5lbDpub3QoLnBhbmVsLWhlYWRpbmcpJ1xuICAgICAgICAgICAgYXhpczogJ3knXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9WYXJpYWJsZSB0byB0b2dnbGUgdGhlIGFjdGl2ZSBwcm9kdWN0IGNhcmRcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2FyZCA9IDA7XG5cbiAgICAgICAgLy9GdW5jdGlvbiB0byB0b2dnbGUgdGhlIGFjdGl2ZSBwcm9kdWN0IGNhcmRcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhcmQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2FyZCA9IGluZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5zaG93TGlicmFyeSA9IFwiXCI7XG5cbiAgICAgICAgJHNjb3BlLnNldFRyaWFuZ2xlSGVpZ2h0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wb3NpdGlvbi50b3AgKyAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5oZWlnaHQ7XG4gICAgICAgICAgICBhbGVydChwb3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qJHNjb3BlLnNob3dMaWJyYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuaGlkZUxpYnJhcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5zaG93TGlicmFyeSA9IGZhbHNlO1xuICAgICAgICB9OyovXG5cblxuICAgICAgICAvL1JldHVybnMgdHJ1ZSBpZiBsaWJyYXJ5IHByb2R1Y3QgZXhpc3RzIGluIHRoZSBzZWxlY3RlZCBwcm9kdWN0Y2FyZFxuICAgICAgICAkc2NvcGUuaXNQcm9kdWN0QWRkZWQgPSBmdW5jdGlvbihpdGVtLCBzZWxlY3RlZENhcmRJbmRleCkge1xuXG4gICAgICAgICAgICB2YXIgYXJyTGVuID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tzZWxlY3RlZENhcmRJbmRleF0ucHJvZHVjdHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyckxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5wcm9kdWN0Q2FyZHNbc2VsZWN0ZWRDYXJkSW5kZXhdLnByb2R1Y3RzW2ldLklkID09PSBpdGVtLklkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0cyBpbiB0aGUgbGlicmFyeVxuICAgICAgICAkc2NvcGUubGlicmFyeVByb2R1Y3RzID0gW3tcbiAgICAgICAgICAgICAgICBJZDogJzEnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZy0wMS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjQnVkZ2V0ICNGYW1pbGogI0Jhcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMicsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcgRWtvJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzItMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0VrbyAjS2xpbWF0c21hcnQgI07DpHJvZGxhdFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICczJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTbcO2cmRlZyBMeXgnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9TbW9yZGVnMy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmluc21ha2FyZSAjS3ZhbGl0ZXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnNCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnw4RnZyBGcmkuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZyAtIEZyaWfDpWVuZGUucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0RqdXJ2w6RuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzUnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLVZhbmxpZy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNCdWRnZXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnNicsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnw4RnZyBFa28nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLWVrby5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRWtvICNLbGltYXRzbWFydCAjTsOkcm9kbGF0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0tuaXYgSmFwYW5zaycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtQXZhbmNlcmFkLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNLdmFsaXRldFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc4JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IEJhcm4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUJhcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjQmFyblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc5JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IFN0b3InLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LVN0w7ZycmUtMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI01hdGxhZ2FyZVwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnRsO2cmtsw6RkZSBCcnVuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvRsO2cmtsw6RkZS1sw6RkZXItMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI1RyZW5kICNNb2Rlcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzExJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdGw7Zya2zDpGRlIFR5ZycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtVHlnLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNLbGFzc2lza1wiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTInLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2drbG9ja2EnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdna2xvY2thLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmFkaXRpb25lbGxcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzEzJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdQZW5zZWwgU2lsaWtvbicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1zaWxpY29uLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNNb2Rlcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTQnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0thdmVsIHJ1bmQnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9rYXZlbC1ydW5kLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNNb2Rlcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTUnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0thdmVsIEJhcm4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9rYXZlbC1iYXJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGYW1pbGogI0Jhcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTYnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0thdmVsJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS2F2ZWwucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI1RyYWRpdGlvbmVsbFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxNycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnR2p1dGrDpHJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvc3Rla3Bhbm5hLWdqdXRqw6Rybi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNUcmFkaXRpb25lbGxcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTgnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1N0ZWtwYW5uYScsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1N0ZWtwYW5uYS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuICNGYW1pbGpcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTknLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ011bHRpcGVuc2VsJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLW1lZC1rbml2LnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGYW1pbGogI011bHRpXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzIwJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdQZW5zZWwgVHLDpCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC10csOkLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmFkaXRpb25lbGwgI01pbGrDtnbDpG5saWdcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgXTtcblxuICAgICAgICAvLyBBcnJheSB0aGF0IHN0b3JlIGFsbCB0aGUgY2F0ZWdvcmllcyB0aGF0IGFyZSB1c2VkIGluIHRoZSBkcm9wZG93bi1saXN0XG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gW107XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubGlicmFyeVByb2R1Y3RzLCBmdW5jdGlvbih2YWx1ZSwgY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllcy5pbmRleE9mKHZhbHVlLmNhdGVnb3J5KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLnB1c2godmFsdWUuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3QgY2FyZHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlQ2FyZE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIC8vIGl0ZW1zOiAnIC5wYW5lbDpub3QoLnBhbmVsLWhlYWRpbmcpJ1xuICAgICAgICAgICAgYXhpczogJ3knXG4gICAgICAgIH07XG5cbiAgICAgICAgLypcbiAgICAgICAgJHNjb3BlLnNldENvbGxhcHNlZCA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihpID09ICgkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGgtMSkpe1xuXG4gICAgICAgICAgICAgIHNQcm9kdWN0Q29sbGFwc2VkPXRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgIGlzUHJvZHVjdENvbGxhcHNlZD1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4qL1xuICAgICAgICAvLyBBZGQgcHJvZHVjdENhcmQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgdmFyIGFkZFByb2R1Y3RDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNhcmRUaXRsZTogJ1Byb2R1Y3QgQ2FyZCAnICsgY2FyZENvdW50ZXIsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhcmRDb3VudGVyKys7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXJkID0gJHNjb3BlLnByb2R1Y3RDYXJkcy5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzWzBdLnNjcm9sbEludG9WaWV3KHtibG9jazogXCJlbmRcIn0pO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgfTtcblxuICAgICAgICAvL0FkZCBwcm9kdWN0IHRvIGEgcHJvZHVjdCBjYXJkXG4gICAgICAgIHZhciBhZGRQcm9kdWN0ID0gZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgIHByb2R1Y3RDb3VudGVyID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLnB1c2goe1xuICAgICAgICAgICAgICAgIElkOiBpdGVtLklkLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogaXRlbS5wcm9kdWN0VGl0bGUsXG4gICAgICAgICAgICAgICAgbGluazogaXRlbS5saW5rLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogaXRlbS5zcGVjaWFsT2ZmZXIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogaXRlbS5idXR0b25UZXh0LFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBpdGVtLnRhcmdldEdyb3VwLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiBpdGVtLmltYWdlVVJMLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5LFxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBjYXJkIGJ5IGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBjYXJkQ291bnRlci0tO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGJ5IGluZGV4IGFuZCBwcm9kdWN0IGNhcmQgaW5kZXhcbiAgICAgICAgdmFyIHJlbW92ZVByb2R1Y3QgPSBmdW5jdGlvbihwcm9kdWN0Q2FyZEluZGV4LCBldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbcHJvZHVjdENhcmRJbmRleF0ucHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL1ZpZGVvIGNvbnRyb2xsZXJcbiAgICAgICAgLy9Wb2x1bWVcblxuICAgICAgICB2YXIgc2V0Vm9sdW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbWVkaWFDbGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgIG1lZGlhQ2xpcC52b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZVwiKS52YWx1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy9Qcm9ncmVzc2JhclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdXBkYXRlUHJvZ3Jlc3MpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSB2aWRlby5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHZhciBtYXhkdXJhdGlvbiA9IHZpZGVvLmR1cmF0aW9uO1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSAxMDAgKiBjdXJyZW50UG9zIC8gbWF4ZHVyYXRpb247XG4gICAgICAgICAgICAkKCcjcHJvZ3Jlc3MnKS5jc3MoJ3dpZHRoJywgcGVyY2VudGFnZSArICclJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUudGltZURyYWcgPSBmYWxzZTtcblxuICAgICAgICAkc2NvcGUucHJvZ3Jlc3NDbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICRzY29wZS50aW1lRHJhZyA9IHRydWU7XG4gICAgICAgICAgICB1cGRhdGViYXIoZS5wYWdlWCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnByb2dyZXNzR28gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLnRpbWVEcmFnKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVEcmFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdXBkYXRlYmFyKGUucGFnZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJHNjb3BlLnByb2dyZXNzTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUudGltZURyYWcpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGViYXIoZS5wYWdlWCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXBkYXRlYmFyID0gZnVuY3Rpb24oeCkge1xuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gJCgnI3Byb2dyZXNzQmFyJyk7XG4gICAgICAgICAgICB2YXIgbWF4ZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHggLSBwcm9ncmVzcy5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSAxMDAgKiBwb3NpdGlvbiAvIHByb2dyZXNzLndpZHRoKCk7XG5cbiAgICAgICAgICAgIC8vQ2hlY2sgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBpZiAocGVyY2VudGFnZSA+IDEwMCkge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwZXJjZW50YWdlIDwgMCkge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1VwZGF0ZSBwcm9ncmVzcyBiYXIgYW5kIHZpZGVvIGN1cnJlbnR0aW1lXG4gICAgICAgICAgICAkKCcjcHJvZ3Jlc3MnKS5jc3MoJ3dpZHRoJywgcGVyY2VudGFnZSArICclJyk7XG4gICAgICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9ICgobWF4ZHVyYXRpb24gKiBwZXJjZW50YWdlKSAvIDEwMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnNjcm9sbFRvUmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZXR0ZXJzJykpO1xuICAgICAgICAgICAgdmFyIHggPSBlbGVtZW50LnNjcm9sbExlZnQoKSArIDE0MDtcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCh4KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2Nyb2xsVG9MZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGV0dGVycycpKTtcbiAgICAgICAgICAgIHZhciB4ID0gZWxlbWVudC5zY3JvbGxMZWZ0KCkgLSAxNDA7XG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQoeCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgc2NvcGUgZnVuY3Rpb25zXG4gICAgICAgICRzY29wZS5zZXRWb2x1bWUgPSBzZXRWb2x1bWU7XG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0Q2FyZCA9IGFkZFByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdCA9IGFkZFByb2R1Y3Q7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0Q2FyZCA9IHJlbW92ZVByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdCA9IHJlbW92ZVByb2R1Y3Q7XG5cbiAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkIDUgcHJvZHVjdENhcmRzXG4gICAgICAgIC8qZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGFkZFByb2R1Y3RDYXJkKCk7XG4gICAgICAgIH0qL1xuXG4gICAgfV0pXG5cbiAgICAuZGlyZWN0aXZlKCdzY3JvbGxUb0xhc3QnLCBbJyRsb2NhdGlvbicsICckYW5jaG9yU2Nyb2xsJywgZnVuY3Rpb24oJGxvY2F0aW9uLCAkYW5jaG9yU2Nyb2xsKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gbGlua0ZuKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgJGxvY2F0aW9uLmhhc2goYXR0cnMuc2Nyb2xsVG9MYXN0KTtcbiAgICAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBsaW5rRm5cbiAgICAgICAgfTtcbiAgICB9XSlcblxuICAgIC5maWx0ZXIoJ3RvTWluU2VjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludChpbnB1dCAvIDYwLCAxMCk7XG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoaW5wdXQgJSA2MCk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKyAnOjAnICsgc2Vjb25kcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvKi5kaXJlY3RpdmUoJ3BvcG92ZXInLCBmdW5jdGlvbiAoJGNvbXBpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgICAkKGVsZW0pLm9uKCdpc09wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uVG9wID0gcGFyc2VJbnQoJCgnLnByb2R1Y3QtY2FyZCcpLnBvc2l0aW9uKCkudG9wICsgMzApO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbkxlZnQgPSBwYXJzZUludCgkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCArICQodGhpcykud2lkdGggLSAyMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC1jYXJkLWhpZ2h0bGlnaHQnKS5jc3MoJ3RvcCcsIHBvc2l0aW9uVG9wICsgJ3B4Jyk7XG5cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICB9KSovXG4gICAgLmRpcmVjdGl2ZSgnY2xvc2VPdGhlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYW5vcHQgPSAkKFwiLmNhcmQtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBsYW5vcHQub24oXCJzaG93LmJzLmNvbGxhcHNlXCIsXCIuY29sbGFwc2VcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbGFub3B0LmZpbmQoXCIuY29sbGFwc2UuaW5cIikuY29sbGFwc2UoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgfSlcbiAgICAvL0RpcmVjdGl2ZSB0byBhcHBlbmQgalF1ZXJ5VUkgZHJhZ2dhYmxlL3Jlc2l6YWJsZS1mdW5jdGlvbmFsaXR5IHRvIHRoZSB0aW1lc2xvdCBzbGlkZXJzIG9uIGxvYWRcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBDYXVzZXMgXCJOYSDigJQganF1ZXJ5Lm1pbi5qczoyMjE1VHlwZUVycm9yOiB1bmRlZmluZWQgaXMgbm90IGFuIG9iamVjdCAoZXZhbHVhdGluZyAnYi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3J1wiXG4gICAgICAgICAgICAgICAgLy92YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgdGltZXNsb3Qgc2xpZGVyIG9uIGRvYyByZWFkeVxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zY29wZS5hcHBlbmRUaW1lc2xvdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlubWV0bjogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5jdXJyZW50JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikudW5iaW5kKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuZGVsLXNlZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KVxuXG4gICAgLmRpcmVjdGl2ZSgnc29tZVZpZGVvJywgZnVuY3Rpb24oJHdpbmRvdywgJHRpbWVvdXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgdmlkZW9DdXJyZW50VGltZTogXCI9dmlkZW9DdXJyZW50VGltZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCkge1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLm9uVGltZVVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyclRpbWUgPSAkZWxlbWVudFswXS5jdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJUaW1lIC0gJHNjb3BlLnZpZGVvQ3VycmVudFRpbWUgPiAyIHx8ICRzY29wZS52aWRlb0N1cnJlbnRUaW1lIC0gY3VyclRpbWUgPiAyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50WzBdLmN1cnJlbnRUaW1lID0gJHNjb3BlLnZpZGVvQ3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmlkZW9DdXJyZW50VGltZSA9ICRlbGVtZW50WzBdLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsbSkge1xuICAgICAgICAgICAgICAgIC8vIFVzZSB0aGlzICR3YXRjaCB0byByZXN0YXJ0IHRoZSB2aWRlbyBpZiBpdCBoYXMgZW5kZWRcbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goJ3ZpZGVvQ3VycmVudFRpbWUnLCBmdW5jdGlvbihuZXdWYWwpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxtWzBdLmVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBhIHNlY29uZCBjaGVjayBiZWNhdXNlIHRoZSBsYXN0ICd0aW1ldXBkYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIHZpZGVvIHN0b3BzIGNhdXNlcyBhIGhpY2N1cC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbG1bMF0uY3VycmVudFRpbWUgIT09IG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbVswXS5jdXJyZW50VGltZSA9IG5ld1ZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG1bMF0ucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGtlZXAgYW55IG1vZGVsIHN5bmNpbmcgaGVyZS5cbiAgICAgICAgICAgICAgICBlbG0uYmluZCgndGltZXVwZGF0ZScsIHNjb3BlLm9uVGltZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy9EaXJlY3RpdmUgZm9yIHRoZSB0aW1lIG1hcmtlciBkcmFnZ2FibGVcbiAgICAuZGlyZWN0aXZlKCdtYXJrZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgICAgICRzY29wZS5vbkRyYWcgPSBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubWFya2VyVmFsdWUgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICAgICAgICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BvcyA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoICogMTAwO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc2Nzc2xlZnQgPSAkKHRoaXMpLmNzcygnbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc2Nzc2xlZnQgPT0gJ2F1dG8nKSB0aGlzY3NzbGVmdCA9IDA7IC8vIEZvciBJRVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KHRoaXNjc3NsZWZ0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5sZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8kKHRoaXMpLmNzcygnbGVmdCcsIHBvc0xlZnRBcnJheVtpXSArIGxlZnRkaWZmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2xlZnQnLCBwb3NMZWZ0QXJyYXlbMF0gKyBsZWZ0ZGlmZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIG1hcmtlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJG1hcmtlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSlcbiAgICAvL0RpcmVjdGl2ZSB0byBhcHBlbmQgYSBuZXcgdGltZXNsb3Qgd2hlbiB1c2VyIHVzZXMgdGhlIGFkZCB0aW1lc2xvdCBidXR0b25cbiAgICAuZGlyZWN0aXZlKCdhZGRUaW1lc2xvdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgLypjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAkc2NvcGUub25TbGlkZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCovXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gYWRkLXRpbWVzbG90LWNsaWNrXG4gICAgICAgICAgICAgICAgLy92YXIgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRkLXRpbWVzbG90Jyk7XG4gICAgICAgICAgICAgICAgLy9hbmd1bGFyLmVsZW1lbnQoYWRkQnRuKS5jbGljayhmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmFkZFRpbWVzbG90ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vJChlbGVtKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCcuYWRkLXRpbWVzbG90JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1iYXIgdWktd2lkZ2V0LWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLWVuZFwiXG4gICAgICAgICAgICAgICAgICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiZGVsLXNlZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0pLmh0bWwoJzxhIGhyZWY9XCIjXCI+PC9hPjwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICAgICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICRkaXYuY3NzKCdsZWZ0JywgbmV3UG9zICsgJyUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGRpdi5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkZGl2LmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICRkaXYucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5wcm9kdWN0LXRpbWVsaW5lJykuYXBwZW5kKCRkaXYpXG4gICAgICAgICAgICAgICAgICAgICRkaXYuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJGRpdi5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICAgICAkZGl2LmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJGRpdi5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkZGl2LmNzcygnd2lkdGgnKSkpKTtcblxuICAgICAgICAgICAgICAgICAgICAkZGl2LmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICRkZWxTZWcuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRTZWNvbmRzVG9UaW1lKHNlYykge1xuICAgIHRvdGFsU2VjID0gTWF0aC5yb3VuZChzZWMpO1xuICAgIHZhciBob3VycyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gMzYwMCkgJSAyNDtcbiAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gNjApICUgNjA7XG4gICAgdmFyIHNlY29uZHMgPSB0b3RhbFNlYyAlIDYwO1xuXG4gICAgdmFyIHJlc3VsdCA9IC8qKGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnMpICsgXCI6XCIgKyovIChtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzKSArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9UaW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSA2MTtcblxuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcblxuICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQocG9zaXRpb24pO1xuICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgIHJldHVybiBjb252ZXJ0U2Vjb25kc1RvVGltZShuZXdUaW1lKTtcbn1cbiIsIi8qIFNjcm9sbGluZyBzaGFkb3dzIGJ5IFwibWluZHN0b3JtXCIuIGh0dHBzOi8vY29kZXBlbi5pby9taW5kc3Rvcm0vcGVuL0ViaXlKKi9cblxuXG52YXIgc2Nyb2xsU2hhZG93ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgZWxlbSwgd2lkdGgsIGhlaWdodCwgb2Zmc2V0LFxuICAgIHNoYWRvd1RvcCwgc2hhZG93Qm90dG9tLFxuICAgIHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gaW5pdFNoYWRvd3MoKSB7XG4gICAgc2hhZG93VG9wID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctdG9wXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gICAgc2hhZG93Qm90dG9tID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctYm90dG9tXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjUG9zaXRpb24oKSB7XG4gICAgd2lkdGggPSBlbGVtLm91dGVyV2lkdGgoKTtcbiAgICBoZWlnaHQgPSBlbGVtLm91dGVySGVpZ2h0KCk7XG4gICAgb2Zmc2V0ID0gZWxlbS5wb3NpdGlvbigpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgc2hhZG93VG9wLmNzcyh7XG4gICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICB0b3A6IGVsZW0ub2Zmc2V0LnRvcCArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgICBzaGFkb3dCb3R0b20uY3NzKHtcbiAgICAgIHdpZHRoOiB3aWR0aCArIFwicHhcIixcbiAgICAgIHRvcDogKGVsZW0ub2Zmc2V0LnRvcCArIGhlaWdodCAtIDIwKSArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbExpc3RlbmVyKCkge1xuICAgIGVsZW0ub2ZmKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICBlbGVtLm9uKFwic2Nyb2xsLnNoYWRvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpID4gMCkge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZUluKDIwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZU91dCgyMDApO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wKCkgKyBoZWlnaHQgPj0gZWxlbVswXS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVPdXQoMjAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoYWRvd0JvdHRvbS5mYWRlSW4oMjAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICQod2luZG93KS5vbihcInJlc2l6ZS5zaGFkb3dcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICB9LCAxMCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKHBhcikge1xuICAgICAgZWxlbSA9ICQocGFyKTtcbiAgICAgIGluaXRTaGFkb3dzKCk7XG4gICAgICBjYWxjUG9zaXRpb24oKTtcbiAgICAgIGFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICBhZGRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogY2FsY1Bvc2l0aW9uXG4gIH07XG5cbn0oKSk7XG5cbi8vIHN0YXJ0XG5zY3JvbGxTaGFkb3cuaW5pdChcIi5jb250YWluZXJcIik7XG4iXX0=
