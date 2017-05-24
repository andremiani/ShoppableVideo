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
        $scope.Time = 0;
        $scope.duration = 0;
        $scope.uppdatera = 0;

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
            $('.marker').css('left', percentage + '%');

            $scope.$apply(function () {
              $scope.Time = video.currentTime;
            });

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
            $('.marker').css('left', percentage + '%');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcm9sbGluZy1zaGFkb3dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3h3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlY2xhcmUgdGhlIHNob3BwYWJsZVZpZGVvIG1vZHVsZSBhbmQgaXRzIGRlcGVuZGVuY2llc1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaG9wcGFibGVWaWRlbycsIFsnbmdBbmltYXRlJywgJ25nU2FuaXRpemUnLCAndWkuYm9vdHN0cmFwJywgJ3VpLnNvcnRhYmxlJ10pO1xuLy8gRGVjbGFyZSB0aGUgQXBwQ3RybCBjb250cm9sbGVyXG5hcHBcbiAgICAuY29udHJvbGxlcignQXBwQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgICAgICAgLy8gQ2FyZCBjb3VudGVyLCB1c2VkIGZvciBjYXJkIG5hbWluZ1xuICAgICAgICB2YXIgY2FyZENvdW50ZXIgPSAxO1xuXG4gICAgICAgIC8vIFByb2R1Y3QgY291bnRlciwgdXNlZCBmb3IgcHJvZHVjdCBuYW1pbmdcbiAgICAgICAgdmFyIHByb2R1Y3RDb3VudGVyID0gXCJcIjtcblxuXG4gICAgICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAgICAgJHNjb3BlLnZpZGVvVGl0bGUgPSBcIlwiO1xuXG4gICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGxheS5wbmdcIjtcbiAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvc3BlYWtlci5wbmdcIjtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVNdXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKTtcblxuICAgICAgICAgICAgaWYgKHZpZC5tdXRlZCkge1xuICAgICAgICAgICAgICAgIHZpZC5tdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRzY29wZS5tdXRlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3NwZWFrZXIucG5nXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZC5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVQbGF5UGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAodmlkZW8ucGF1c2VkIHx8IHZpZGVvLmVuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5tYXJrZXJUaW1lID0gMDtcbiAgICAgICAgJHNjb3BlLlRpbWUgPSAwO1xuICAgICAgICAkc2NvcGUuZHVyYXRpb24gPSAwO1xuICAgICAgICAkc2NvcGUudXBwZGF0ZXJhID0gMDtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdENhcmRzXG4gICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMgPSBbXTtcblxuICAgICAgICAvL0NvbGxhcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdCBjYXJkcywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9Db2xsYXNwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0cywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdENvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vVGVsbHMgdWktc29ydGFibGUgd2hhdCBhbmQgaG93IHRvIHNvcnQgcHJvZHVjdHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlUHJvZHVjdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vVmFyaWFibGUgdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSAwO1xuXG4gICAgICAgIC8vRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXJkID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSBpbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSBcIlwiO1xuXG4gICAgICAgICRzY29wZS5zZXRUcmlhbmdsZUhlaWdodCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucG9zaXRpb24udG9wICsgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0uaGVpZ2h0O1xuICAgICAgICAgICAgYWxlcnQocG9zKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKiRzY29wZS5zaG93TGlicmFyeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnNob3dMaWJyYXJ5ID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmhpZGVMaWJyYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSBmYWxzZTtcbiAgICAgICAgfTsqL1xuXG5cbiAgICAgICAgLy9SZXR1cm5zIHRydWUgaWYgbGlicmFyeSBwcm9kdWN0IGV4aXN0cyBpbiB0aGUgc2VsZWN0ZWQgcHJvZHVjdGNhcmRcbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdEFkZGVkID0gZnVuY3Rpb24oaXRlbSwgc2VsZWN0ZWRDYXJkSW5kZXgpIHtcblxuICAgICAgICAgICAgdmFyIGFyckxlbiA9ICRzY29wZS5wcm9kdWN0Q2FyZHNbc2VsZWN0ZWRDYXJkSW5kZXhdLnByb2R1Y3RzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUucHJvZHVjdENhcmRzW3NlbGVjdGVkQ2FyZEluZGV4XS5wcm9kdWN0c1tpXS5JZCA9PT0gaXRlbS5JZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpYnJhcnlcbiAgICAgICAgJHNjb3BlLmxpYnJhcnlQcm9kdWN0cyA9IFt7XG4gICAgICAgICAgICAgICAgSWQ6ICcxJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTbcO2cmRlZycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWctMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0J1ZGdldCAjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzInLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNFa28gI0tsaW1hdHNtYXJ0ICNOw6Ryb2RsYXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZpbnNtYWthcmUgI0t2YWxpdGV0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzQnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRnJpLicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2cgLSBGcmlnw6VlbmRlLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNEanVydsOkblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc1JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1WYW5saWcucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjQnVkZ2V0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzYnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0VrbyAjS2xpbWF0c21hcnQgI07DpHJvZGxhdFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICc3JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IEphcGFuc2snLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUF2YW5jZXJhZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS3ZhbGl0ZXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnOCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1CYXJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGYW1pbGogI0Jhcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnOScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBTdG9yJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1TdMO2cnJlLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNNYXRsYWdhcmVcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTAnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmVuZCAjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnRsO2cmtsw6RkZSBUeWcnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLVR5Zy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjS2xhc3Npc2tcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzEyJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdna2xvY2thJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZ2tsb2NrYS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcxMycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE0JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBydW5kJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtcnVuZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTW9kZXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE1JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtYmFybi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNCYXJuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE2JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNUcmFkaXRpb25lbGxcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElkOiAnMTcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0dqdXRqw6RybicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3N0ZWtwYW5uYS1nanV0asOkcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE4JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTdGVrcGFubmEnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9TdGVrcGFubmEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI01vZGVybiAjRmFtaWxqXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJZDogJzE5JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdNdWx0aXBlbnNlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1tZWQta25pdi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjRmFtaWxqICNNdWx0aVwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSWQ6ICcyMCcsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFRyw6QnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtdHLDpC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsICNNaWxqw7Z2w6RubGlnXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gQXJyYXkgdGhhdCBzdG9yZSBhbGwgdGhlIGNhdGVnb3JpZXMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgZHJvcGRvd24tbGlzdFxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IFtdO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmxpYnJhcnlQcm9kdWN0cywgZnVuY3Rpb24odmFsdWUsIGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5jYXRlZ29yeSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5wdXNoKHZhbHVlLmNhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydCBwcm9kdWN0IGNhcmRzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZUNhcmRPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qXG4gICAgICAgICRzY29wZS5zZXRDb2xsYXBzZWQgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaSA9PSAoJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoLTEpKXtcblxuICAgICAgICAgICAgICBzUHJvZHVjdENvbGxhcHNlZD10cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICBpc1Byb2R1Y3RDb2xsYXBzZWQ9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuKi9cbiAgICAgICAgLy8gQWRkIHByb2R1Y3RDYXJkIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgIHZhciBhZGRQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGU6ICdQcm9kdWN0IENhcmQgJyArIGNhcmRDb3VudGVyLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXJkQ291bnRlcisrO1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2FyZCA9ICRzY29wZS5wcm9kdWN0Q2FyZHMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1swXS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6IFwiZW5kXCJ9KTtcbiAgICAgICAgICAgICovXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9BZGQgcHJvZHVjdCB0byBhIHByb2R1Y3QgY2FyZFxuICAgICAgICB2YXIgYWRkUHJvZHVjdCA9IGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICBwcm9kdWN0Q291bnRlciA9ICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBJZDogaXRlbS5JZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6IGl0ZW0ucHJvZHVjdFRpdGxlLFxuICAgICAgICAgICAgICAgIGxpbms6IGl0ZW0ubGluayxcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IGl0ZW0uc3BlY2lhbE9mZmVyLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IGl0ZW0uYnV0dG9uVGV4dCxcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogaXRlbS50YXJnZXRHcm91cCxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogaXRlbS5pbWFnZVVSTCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgY2FyZCBieSBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgY2FyZENvdW50ZXItLTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBieSBpbmRleCBhbmQgcHJvZHVjdCBjYXJkIGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0ID0gZnVuY3Rpb24ocHJvZHVjdENhcmRJbmRleCwgZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW3Byb2R1Y3RDYXJkSW5kZXhdLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9WaWRlbyBjb250cm9sbGVyXG4gICAgICAgIC8vVm9sdW1lXG4gICAgICAgIHZhciBzZXRWb2x1bWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBtZWRpYUNsaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpO1xuICAgICAgICAgICAgbWVkaWFDbGlwLnZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lXCIpLnZhbHVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvL1Byb2dyZXNzYmFyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB1cGRhdGVQcm9ncmVzcyk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHZpZGVvLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdmFyIG1heGR1cmF0aW9uID0gdmlkZW8uZHVyYXRpb247XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IDEwMCAqIGN1cnJlbnRQb3MgLyBtYXhkdXJhdGlvbjtcbiAgICAgICAgICAgICQoJyNwcm9ncmVzcycpLmNzcygnd2lkdGgnLCBwZXJjZW50YWdlICsgJyUnKTtcbiAgICAgICAgICAgICQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnLCBwZXJjZW50YWdlICsgJyUnKTtcblxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICRzY29wZS5UaW1lID0gdmlkZW8uY3VycmVudFRpbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cblxuXG4gICAgICAgICRzY29wZS50aW1lRHJhZyA9IGZhbHNlO1xuXG4gICAgICAgICRzY29wZS5wcm9ncmVzc0NsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJHNjb3BlLnRpbWVEcmFnID0gdHJ1ZTtcbiAgICAgICAgICAgIHVwZGF0ZWJhcihlLnBhZ2VYKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUucHJvZ3Jlc3NHbyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUudGltZURyYWcpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZURyYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB1cGRhdGViYXIoZS5wYWdlWCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUucHJvZ3Jlc3NNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKCRzY29wZS50aW1lRHJhZykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWJhcihlLnBhZ2VYKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cGRhdGViYXIgPSBmdW5jdGlvbih4KSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAkKCcjcHJvZ3Jlc3NCYXInKTtcbiAgICAgICAgICAgIHZhciBtYXhkdXJhdGlvbiA9IHZpZGVvLmR1cmF0aW9uO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0geCAtIHByb2dyZXNzLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IDEwMCAqIHBvc2l0aW9uIC8gcHJvZ3Jlc3Mud2lkdGgoKTtcblxuICAgICAgICAgICAgLy9DaGVjayB3aXRoaW4gcmFuZ2VcbiAgICAgICAgICAgIGlmIChwZXJjZW50YWdlID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBlcmNlbnRhZ2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vVXBkYXRlIHByb2dyZXNzIGJhciBhbmQgdmlkZW8gY3VycmVudHRpbWVcbiAgICAgICAgICAgICQoJyNwcm9ncmVzcycpLmNzcygnd2lkdGgnLCBwZXJjZW50YWdlICsgJyUnKTtcbiAgICAgICAgICAgICQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnLCBwZXJjZW50YWdlICsgJyUnKTtcbiAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gKChtYXhkdXJhdGlvbiAqIHBlcmNlbnRhZ2UpIC8gMTAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2Nyb2xsVG9SaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xldHRlcnMnKSk7XG4gICAgICAgICAgICB2YXIgeCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCgpICsgMTQwO1xuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0KHgpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5zY3JvbGxUb0xlZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZXR0ZXJzJykpO1xuICAgICAgICAgICAgdmFyIHggPSBlbGVtZW50LnNjcm9sbExlZnQoKSAtIDE0MDtcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCh4KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBzY29wZSBmdW5jdGlvbnNcbiAgICAgICAgJHNjb3BlLnNldFZvbHVtZSA9IHNldFZvbHVtZTtcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3RDYXJkID0gYWRkUHJvZHVjdENhcmQ7XG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0ID0gYWRkUHJvZHVjdDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3RDYXJkID0gcmVtb3ZlUHJvZHVjdENhcmQ7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0ID0gcmVtb3ZlUHJvZHVjdDtcblxuICAgICAgICAvLyBGb3IgZGVtb25zdHJhdGlvbiBhZGQgNSBwcm9kdWN0Q2FyZHNcbiAgICAgICAgLypmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYWRkUHJvZHVjdENhcmQoKTtcbiAgICAgICAgfSovXG5cbiAgICB9XSlcblxuICAgIC5kaXJlY3RpdmUoJ3Njcm9sbFRvTGFzdCcsIFsnJGxvY2F0aW9uJywgJyRhbmNob3JTY3JvbGwnLCBmdW5jdGlvbigkbG9jYXRpb24sICRhbmNob3JTY3JvbGwpIHtcblxuICAgICAgICBmdW5jdGlvbiBsaW5rRm4oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICAkbG9jYXRpb24uaGFzaChhdHRycy5zY3JvbGxUb0xhc3QpO1xuICAgICAgICAgICAgJGFuY2hvclNjcm9sbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICAgICAgc2NvcGU6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGxpbmtGblxuICAgICAgICB9O1xuICAgIH1dKVxuXG4gICAgLmZpbHRlcigndG9NaW5TZWMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KGlucHV0IC8gNjAsIDEwKTtcbiAgICAgICAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcihpbnB1dCAlIDYwKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWludXRlcyArICc6MCcgKyBzZWNvbmRzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWludXRlcyArICc6JyArIHNlY29uZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyouZGlyZWN0aXZlKCdwb3BvdmVyJywgZnVuY3Rpb24gKCRjb21waWxlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRycykge1xuICAgICAgICAgICAgICAgICAgJChlbGVtKS5vbignaXNPcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblRvcCA9IHBhcnNlSW50KCQoJy5wcm9kdWN0LWNhcmQnKS5wb3NpdGlvbigpLnRvcCArIDMwKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25MZWZ0ID0gcGFyc2VJbnQoJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQgKyAkKHRoaXMpLndpZHRoIC0gMjApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtY2FyZC1oaWdodGxpZ2h0JykuY3NzKCd0b3AnLCBwb3NpdGlvblRvcCArICdweCcpO1xuXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgfSkqL1xuICAgIC5kaXJlY3RpdmUoJ2Nsb3NlT3RoZXJzJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFub3B0ID0gJChcIi5jYXJkLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGFub3B0Lm9uKFwic2hvdy5icy5jb2xsYXBzZVwiLFwiLmNvbGxhcHNlXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGxhbm9wdC5maW5kKFwiLmNvbGxhcHNlLmluXCIpLmNvbGxhcHNlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgIH0pXG4gICAgLy9EaXJlY3RpdmUgdG8gYXBwZW5kIGpRdWVyeVVJIGRyYWdnYWJsZS9yZXNpemFibGUtZnVuY3Rpb25hbGl0eSB0byB0aGUgdGltZXNsb3Qgc2xpZGVycyBvbiBsb2FkXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAvKmNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vblNsaWRlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sKi9cbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgLy8gQ2F1c2VzIFwiTmEg4oCUIGpxdWVyeS5taW4uanM6MjIxNVR5cGVFcnJvcjogdW5kZWZpbmVkIGlzIG5vdCBhbiBvYmplY3QgKGV2YWx1YXRpbmcgJ2Iub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldydcIlxuICAgICAgICAgICAgICAgIC8vdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHRpbWVzbG90IHNsaWRlciBvbiBkb2MgcmVhZHlcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vc2NvcGUuYXBwZW5kVGltZXNsb3QgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbm1ldG46IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuY3VycmVudCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnVuYmluZCgnY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmRlbC1zZWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSlcblxuICAgIC8vRGlyZWN0aXZlIGZvciB0aGUgdGltZSBtYXJrZXIgZHJhZ2dhYmxlXG4gICAgLmRpcmVjdGl2ZSgnbWFya2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUub25EcmFnID0gZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1hcmtlclZhbHVlID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXlbaV0gPSBwYXJzZUludCh0aGlzY3NzbGVmdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2lubGVmdCA9ICQodGhpcykub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vJCh0aGlzKS5jc3MoJ2xlZnQnLCBwb3NMZWZ0QXJyYXlbaV0gKyBsZWZ0ZGlmZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5WzBdICsgbGVmdGRpZmYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIG1hcmtlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJG1hcmtlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSlcbiAgICAvL0RpcmVjdGl2ZSB0byBhcHBlbmQgYSBuZXcgdGltZXNsb3Qgd2hlbiB1c2VyIHVzZXMgdGhlIGFkZCB0aW1lc2xvdCBidXR0b25cbiAgICAuZGlyZWN0aXZlKCdhZGRUaW1lc2xvdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgLypjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAkc2NvcGUub25TbGlkZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCovXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gYWRkLXRpbWVzbG90LWNsaWNrXG4gICAgICAgICAgICAgICAgLy92YXIgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRkLXRpbWVzbG90Jyk7XG4gICAgICAgICAgICAgICAgLy9hbmd1bGFyLmVsZW1lbnQoYWRkQnRuKS5jbGljayhmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmFkZFRpbWVzbG90ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vJChlbGVtKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCcuYWRkLXRpbWVzbG90JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1iYXIgdWktd2lkZ2V0LWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLWVuZFwiXG4gICAgICAgICAgICAgICAgICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwiZGVsLXNlZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0pLmh0bWwoJzxhIGhyZWY9XCIjXCI+PC9hPjwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICAgICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICRkaXYuY3NzKCdsZWZ0JywgbmV3UG9zICsgJyUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGRpdi5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkZGl2LmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICRkaXYucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5wcm9kdWN0LXRpbWVsaW5lJykuYXBwZW5kKCRkaXYpXG4gICAgICAgICAgICAgICAgICAgICRkaXYuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJGRpdi5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICAgICAkZGl2LmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJGRpdi5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkZGl2LmNzcygnd2lkdGgnKSkpKTtcblxuICAgICAgICAgICAgICAgICAgICAkZGl2LmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICRkZWxTZWcuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRTZWNvbmRzVG9UaW1lKHNlYykge1xuICAgIHRvdGFsU2VjID0gTWF0aC5yb3VuZChzZWMpO1xuICAgIHZhciBob3VycyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gMzYwMCkgJSAyNDtcbiAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gNjApICUgNjA7XG4gICAgdmFyIHNlY29uZHMgPSB0b3RhbFNlYyAlIDYwO1xuXG4gICAgdmFyIHJlc3VsdCA9IC8qKGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnMpICsgXCI6XCIgKyovIChtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzKSArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9UaW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSA2MTtcblxuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcblxuICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQocG9zaXRpb24pO1xuICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgIHJldHVybiBjb252ZXJ0U2Vjb25kc1RvVGltZShuZXdUaW1lKTtcbn1cbiIsIi8qIFNjcm9sbGluZyBzaGFkb3dzIGJ5IFwibWluZHN0b3JtXCIuIGh0dHBzOi8vY29kZXBlbi5pby9taW5kc3Rvcm0vcGVuL0ViaXlKKi9cblxuXG52YXIgc2Nyb2xsU2hhZG93ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgZWxlbSwgd2lkdGgsIGhlaWdodCwgb2Zmc2V0LFxuICAgIHNoYWRvd1RvcCwgc2hhZG93Qm90dG9tLFxuICAgIHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gaW5pdFNoYWRvd3MoKSB7XG4gICAgc2hhZG93VG9wID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctdG9wXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gICAgc2hhZG93Qm90dG9tID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctYm90dG9tXCIpXG4gICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjUG9zaXRpb24oKSB7XG4gICAgd2lkdGggPSBlbGVtLm91dGVyV2lkdGgoKTtcbiAgICBoZWlnaHQgPSBlbGVtLm91dGVySGVpZ2h0KCk7XG4gICAgb2Zmc2V0ID0gZWxlbS5wb3NpdGlvbigpO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgc2hhZG93VG9wLmNzcyh7XG4gICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICB0b3A6IGVsZW0ub2Zmc2V0LnRvcCArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgICBzaGFkb3dCb3R0b20uY3NzKHtcbiAgICAgIHdpZHRoOiB3aWR0aCArIFwicHhcIixcbiAgICAgIHRvcDogKGVsZW0ub2Zmc2V0LnRvcCArIGhlaWdodCAtIDIwKSArIFwicHhcIixcbiAgICAgIGxlZnQ6IGVsZW0ub2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbExpc3RlbmVyKCkge1xuICAgIGVsZW0ub2ZmKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICBlbGVtLm9uKFwic2Nyb2xsLnNoYWRvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpID4gMCkge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZUluKDIwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGFkb3dUb3AuZmFkZU91dCgyMDApO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wKCkgKyBoZWlnaHQgPj0gZWxlbVswXS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVPdXQoMjAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoYWRvd0JvdHRvbS5mYWRlSW4oMjAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICQod2luZG93KS5vbihcInJlc2l6ZS5zaGFkb3dcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICB9LCAxMCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKHBhcikge1xuICAgICAgZWxlbSA9ICQocGFyKTtcbiAgICAgIGluaXRTaGFkb3dzKCk7XG4gICAgICBjYWxjUG9zaXRpb24oKTtcbiAgICAgIGFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICBhZGRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogY2FsY1Bvc2l0aW9uXG4gIH07XG5cbn0oKSk7XG5cbi8vIHN0YXJ0XG5zY3JvbGxTaGFkb3cuaW5pdChcIi5jb250YWluZXJcIik7XG4iXX0=
