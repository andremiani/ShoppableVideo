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

    .directive('popover', function($compile) {
        return {
            restrict: 'A',
            scope: true,
            link: function(scope, elem, attrs) {
                $(elem).on('isOpen', function() {
                    var positionTop = parseInt($('.product-card').position().top + 30);
                    var positionLeft = parseInt($(this).position().left + $(this).width - 20);
                    var x = pos2 - position + 5;
                    /*if (popoverheight < x)
                    x = popoverheight;*/
                    $('.product-card-hightlight').css('top', positionTop + 'px');

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

// jQuery functions from SM
$(document).ready(function() {

    $('.view-options .list').click(function() {
        $('.view-options a').removeClass('active');
        $('.items').fadeOut(200, function() {
            $(this).removeClass('grid').fadeIn(200);
        });
        $(this).addClass('active');
    });

    $('.view-options .grid').click(function() {
        $('.view-options a').removeClass('active');
        $('.items').fadeOut(200, function() {
            $(this).addClass('grid').fadeIn(200);
        });
        $(this).addClass('active');
    });

    $('.modal .item-thumb').click(function() {
        if ($(this).hasClass('selected')) {
            return;
        }
        $(this).parent().parent().clone().appendTo('.items.added');
        $(this).addClass('selected');
    });

    $('.add-timeline').click(function() {
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


        $(this).parent().parent().find(".product-timeline").append($div);
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

    $(".marker").draggable({
        containment: ".timeline",
        axis: "x"
    });
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

    $('.edit-timeline').click(function() {
        $(this).toggleClass('active');
        $(this).find('.product-edit-prompt').slideToggle(200);
    });

    $('.delete-timeline').click(function() {
        $(this).parent().parent().parent().remove();
    });

    $(".marker").draggable({
        drag: function(event, ui) {
            var currentPos = parseInt($('.marker').css('left'));
            var totalWidth = parseInt($('.timeline').css('width'));
            var percentage = currentPos / totalWidth;
            var newTime = totalDuration * percentage;

            $('.current').text(convertSecondsToTime(newTime));
        }
    });
    var totalDuration = 151;
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
    var totalDuration = 151;

    var totalWidth = parseInt($('.timeline').css('width'));

    var currentPos = parseInt(position);
    var percentage = currentPos / totalWidth;
    var newTime = totalDuration * percentage;

    return convertSecondsToTime(newTime);
}

function addTimeline() {
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


    $(this).parent().parent().find(".product-timeline").append($div);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JpcHQuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Nob3BwYWJsZVZpZGVvJywgWyduZ0FuaW1hdGUnLCAnbmdTYW5pdGl6ZScsICd1aS5ib290c3RyYXAnLCAndWkuc29ydGFibGUnXSk7XG4vLyBEZWNsYXJlIHRoZSBBcHBDdHJsIGNvbnRyb2xsZXJcbmFwcFxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgICAgICAvLyBDYXJkIGNvdW50ZXIsIHVzZWQgZm9yIGNhcmQgbmFtaW5nXG4gICAgICAgIHZhciBjYXJkQ291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gUHJvZHVjdCBjb3VudGVyLCB1c2VkIGZvciBwcm9kdWN0IG5hbWluZ1xuICAgICAgICB2YXIgcHJvZHVjdENvdW50ZXIgPSBcIlwiO1xuXG5cbiAgICAgICAgLy8gVmFyaWFibGUgZm9yIHRoZSB2aWRlbyB0aXRsZVxuICAgICAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cbiAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9tdXRlLnBuZ1wiO1xuXG4gICAgICAgIC8vUGxheSBhbmQgcGF1c2VcbiAgICAgICAgJHNjb3BlLnRvZ2dsZU11dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAoIXZpZGVvLm11dGUpIHtcbiAgICAgICAgICAgICAgICB2aWRlby5tdXRlID0gIXZpZGVvLm11dGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvc3BlYWtlci5wbmdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ubXV0ZSA9IHZpZGVvLm11dGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVQbGF5UGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICB2YXIgcGxheXBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5cGF1c2VcIik7XG4gICAgICAgICAgICBpZiAodmlkZW8ucGF1c2VkIHx8IHZpZGVvLmVuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGF1c2UucG5nXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICRzY29wZS5kdXJhdGlvbiA9IDA7XG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RDYXJkc1xuICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzID0gW107XG5cbiAgICAgICAgLy9Db2xsYXBzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3QgY2FyZHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vQ29sbGFzcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc1Byb2R1Y3RDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3RzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZVByb2R1Y3RPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vVmFyaWFibGUgdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSAwO1xuXG4gICAgICAgIC8vRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBhY3RpdmUgcHJvZHVjdCBjYXJkXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXJkID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSBpbmRleDtcbiAgICAgICAgfTtcblxuXG4gICAgICAgICRzY29wZS5zaG93TGlicmFyeSA9IFwiXCI7XG5cbiAgICAgICAgJHNjb3BlLnNldFRyaWFuZ2xlSGVpZ2h0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wb3NpdGlvbi50b3AgKyAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5oZWlnaHQ7XG4gICAgICAgICAgICBhbGVydChwb3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qJHNjb3BlLnNob3dMaWJyYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd0xpYnJhcnkgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuaGlkZUxpYnJhcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5zaG93TGlicmFyeSA9IGZhbHNlO1xuICAgICAgICB9OyovXG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RzIGluIHRoZSBsaWJyYXJ5XG4gICAgICAgICRzY29wZS5saWJyYXJ5UHJvZHVjdHMgPSBbe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZy0wMS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjQnVkZ2V0ICNGYW1pbGogI0Jhcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNFa28gI0tsaW1hdHNtYXJ0ICNOw6Ryb2RsYXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnIEx5eCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWczLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGaW5zbWFrYXJlICNLdmFsaXRldFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnw4RnZyBGcmkuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZyAtIEZyaWfDpWVuZGUucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0RqdXJ2w6RuXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1WYW5saWcucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjQnVkZ2V0XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnIEVrbycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2ctZWtvLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNFa28gI0tsaW1hdHNtYXJ0ICNOw6Ryb2RsYXRcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0tuaXYgSmFwYW5zaycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtQXZhbmNlcmFkLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNLdmFsaXRldFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1CYXJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGYW1pbGogI0Jhcm5cIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0tuaXYgU3RvcicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtU3TDtnJyZS0wMS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjTWF0bGFnYXJlXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdGw7Zya2zDpGRlIEJydW4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLWzDpGRlci0wMS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJlbmQgI01vZGVyblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0bDtnJrbMOkZGUgVHlnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvRsO2cmtsw6RkZS1UeWcucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0tsYXNzaXNrXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnw4RnZ2tsb2NrYScsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2drbG9ja2EucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI1RyYWRpdGlvbmVsbFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1BlbnNlbCBTaWxpa29uJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLXNpbGljb24ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI01vZGVyblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS2F2ZWwgcnVuZCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLXJ1bmQucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI01vZGVyblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS2F2ZWwgQmFybicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLWJhcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjQmFyblwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS2F2ZWwnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9LYXZlbC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiaHR0cDp3d3cuLi5cIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiMjAlIFNhbGVcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIkJ1eSBub3dcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCIjVHJhZGl0aW9uZWxsXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdHanV0asOkcm4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9zdGVrcGFubmEtZ2p1dGrDpHJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNGYW1pbGogI1RyYWRpdGlvbmVsbFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU3Rla3Bhbm5hJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU3Rla3Bhbm5hLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJodHRwOnd3dy4uLlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCIyMCUgU2FsZVwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiQnV5IG5vd1wiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIiNNb2Rlcm4gI0ZhbWlsalwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnTXVsdGlwZW5zZWwnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtbWVkLWtuaXYucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI0ZhbWlsaiAjTXVsdGlcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1BlbnNlbCBUcsOkJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLXRyw6QucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcImh0dHA6d3d3Li4uXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIjIwJSBTYWxlXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJCdXkgbm93XCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiI1RyYWRpdGlvbmVsbCAjTWlsasO2dsOkbmxpZ1wiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEFycmF5IHRoYXQgc3RvcmUgYWxsIHRoZSBjYXRlZ29yaWVzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIGRyb3Bkb3duLWxpc3RcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBbXTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5saWJyYXJ5UHJvZHVjdHMsIGZ1bmN0aW9uKHZhbHVlLCBjYXRlZ29yeSkge1xuICAgICAgICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuY2F0ZWdvcnkpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMucHVzaCh2YWx1ZS5jYXRlZ29yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vVGVsbHMgdWktc29ydGFibGUgd2hhdCBhbmQgaG93IHRvIHNvcnQgcHJvZHVjdCBjYXJkc1xuICAgICAgICAkc2NvcGUuc29ydGFibGVDYXJkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhhbmRsZTogJy5wcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuICAgICAgICAvKlxuICAgICAgICAkc2NvcGUuc2V0Q29sbGFwc2VkID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGkgPT0gKCRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLmxlbmd0aC0xKSl7XG5cbiAgICAgICAgICAgICAgc1Byb2R1Y3RDb2xsYXBzZWQ9dHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgICAgaXNQcm9kdWN0Q29sbGFwc2VkPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiovXG4gICAgICAgIC8vIEFkZCBwcm9kdWN0Q2FyZCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgICB2YXIgYWRkUHJvZHVjdENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlOiAnUHJvZHVjdCBDYXJkICcgKyBjYXJkQ291bnRlcixcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FyZENvdW50ZXIrKztcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZENhcmQgPSAkc2NvcGUucHJvZHVjdENhcmRzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbMF0uc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOiBcImVuZFwifSk7XG4gICAgICAgICAgICAqL1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vQWRkIHByb2R1Y3QgdG8gYSBwcm9kdWN0IGNhcmRcbiAgICAgICAgdmFyIGFkZFByb2R1Y3QgPSBmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgcHJvZHVjdENvdW50ZXIgPSAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGggKyAxO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiBpdGVtLnByb2R1Y3RUaXRsZSxcbiAgICAgICAgICAgICAgICBsaW5rOiBpdGVtLmxpbmssXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBpdGVtLnNwZWNpYWxPZmZlcixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBpdGVtLmJ1dHRvblRleHQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IGl0ZW0udGFyZ2V0R3JvdXAsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6IGl0ZW0uaW1hZ2VVUkwsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksXG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGNhcmQgYnkgaW5kZXhcbiAgICAgICAgdmFyIHJlbW92ZVByb2R1Y3RDYXJkID0gZnVuY3Rpb24oZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIGNhcmRDb3VudGVyLS07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgYnkgaW5kZXggYW5kIHByb2R1Y3QgY2FyZCBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdCA9IGZ1bmN0aW9uKHByb2R1Y3RDYXJkSW5kZXgsIGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1twcm9kdWN0Q2FyZEluZGV4XS5wcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vVmlkZW8gY29udHJvbGxlclxuICAgICAgICAvL1ZvbHVtZVxuICAgICAgICBmdW5jdGlvbiBzZXRWb2x1bWUoKSB7XG4gICAgICAgICAgICB2YXIgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVcIik7XG4gICAgICAgICAgICB2aWRlby52b2x1bWUgPSB2b2x1bWUudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9NdXRlXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU11dGUoKSB7XG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcbiAgICAgICAgfVxuICAgICAgICAvL1Byb2dyZXNzYmFyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB1cGRhdGVQcm9ncmVzcywgZmFsc2UpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgICAgICAgICBpZiAodmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKCgxMDAgLyB2aWRlby5kdXJhdGlvbikgKiB2aWRlby5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IHZhbHVlICsgXCIlXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBzY29wZSBmdW5jdGlvbnNcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3RDYXJkID0gYWRkUHJvZHVjdENhcmQ7XG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0ID0gYWRkUHJvZHVjdDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3RDYXJkID0gcmVtb3ZlUHJvZHVjdENhcmQ7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0ID0gcmVtb3ZlUHJvZHVjdDtcblxuICAgICAgICAvLyBGb3IgZGVtb25zdHJhdGlvbiBhZGQgNSBwcm9kdWN0Q2FyZHNcbiAgICAgICAgLypmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYWRkUHJvZHVjdENhcmQoKTtcbiAgICAgICAgfSovXG5cbiAgICB9XSlcblxuICAgIC5maWx0ZXIoJ3RvTWluU2VjJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludChpbnB1dCAvIDYwLCAxMCk7XG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoaW5wdXQgJSA2MCk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKyAnOjAnICsgc2Vjb25kcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC5kaXJlY3RpdmUoJ3BvcG92ZXInLCBmdW5jdGlvbigkY29tcGlsZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtKS5vbignaXNPcGVuJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvblRvcCA9IHBhcnNlSW50KCQoJy5wcm9kdWN0LWNhcmQnKS5wb3NpdGlvbigpLnRvcCArIDMwKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uTGVmdCA9IHBhcnNlSW50KCQodGhpcykucG9zaXRpb24oKS5sZWZ0ICsgJCh0aGlzKS53aWR0aCAtIDIwKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBwb3MyIC0gcG9zaXRpb24gKyA1O1xuICAgICAgICAgICAgICAgICAgICAvKmlmIChwb3BvdmVyaGVpZ2h0IDwgeClcbiAgICAgICAgICAgICAgICAgICAgeCA9IHBvcG92ZXJoZWlnaHQ7Ki9cbiAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtY2FyZC1oaWdodGxpZ2h0JykuY3NzKCd0b3AnLCBwb3NpdGlvblRvcCArICdweCcpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSlcblxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgLypjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAkc2NvcGUub25TbGlkZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCovXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRzbGlkZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KVxuXG5cbiAgICAuZGlyZWN0aXZlKCdzb21lVmlkZW8nLCBmdW5jdGlvbigkd2luZG93LCAkdGltZW91dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICB2aWRlb0N1cnJlbnRUaW1lOiBcIj12aWRlb0N1cnJlbnRUaW1lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUub25UaW1lVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyVGltZSA9ICRlbGVtZW50WzBdLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyclRpbWUgLSAkc2NvcGUudmlkZW9DdXJyZW50VGltZSA+IDIgfHwgJHNjb3BlLnZpZGVvQ3VycmVudFRpbWUgLSBjdXJyVGltZSA+IDIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnRbMF0uY3VycmVudFRpbWUgPSAkc2NvcGUudmlkZW9DdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52aWRlb0N1cnJlbnRUaW1lID0gJGVsZW1lbnRbMF0uY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxtKSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoaXMgJHdhdGNoIHRvIHJlc3RhcnQgdGhlIHZpZGVvIGlmIGl0IGhhcyBlbmRlZFxuICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgndmlkZW9DdXJyZW50VGltZScsIGZ1bmN0aW9uKG5ld1ZhbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbG1bMF0uZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIGEgc2Vjb25kIGNoZWNrIGJlY2F1c2UgdGhlIGxhc3QgJ3RpbWV1cGRhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgdmlkZW8gc3RvcHMgY2F1c2VzIGEgaGljY3VwLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsbVswXS5jdXJyZW50VGltZSAhPT0gbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtWzBdLmN1cnJlbnRUaW1lID0gbmV3VmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbVswXS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2Uga2VlcCBhbnkgbW9kZWwgc3luY2luZyBoZXJlLlxuICAgICAgICAgICAgICAgIGVsbS5iaW5kKCd0aW1ldXBkYXRlJywgc2NvcGUub25UaW1lVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAuZGlyZWN0aXZlKCdtYXJrZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgICAgICRzY29wZS5vbkRyYWcgPSBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubWFya2VyVmFsdWUgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzbGVmdCA9PSAnYXV0bycpIHRoaXNjc3NsZWZ0ID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Bvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KG1hcmtlclZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5sZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRtYXJrZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZSgnYWRkVGltZWxpbmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kc2xpZGVyID0gJChlbGVtZW50KS5kcmFnZ2FibGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9KTtcbiIsIiQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgYXhpczogJ3gnLFxuICAgIGNvbnRhaW5tZW50OiAncHJvZHVjdC10aW1lbGluZScsXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgcG9zVG9wQXJyYXkgPSBbXTtcbiAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHRoaXNjc3N0b3AgPSAkKHRoaXMpLmNzcygndG9wJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3N0b3AgPT0gJ2F1dG8nKSB0aGlzY3NzdG9wID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgIHBvc1RvcEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc3RvcCk7XG4gICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiZWdpbnRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICBiZWdpbmxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgfSxcbiAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHZhciB0b3BkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBiZWdpbnRvcDtcbiAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCBwb3NUb3BBcnJheVtpXSArIHRvcGRpZmYpO1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIi8vIGpRdWVyeSBmdW5jdGlvbnMgZnJvbSBTTVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5saXN0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5ncmlkJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcubW9kYWwgLml0ZW0tdGh1bWInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNsb25lKCkuYXBwZW5kVG8oJy5pdGVtcy5hZGRlZCcpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFkZC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgdmFyIG5ld1BvcyA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoICogMTAwO1xuXG4gICAgICAgIHZhciAkZGl2ID0gJChcIjxkaXY+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgJHNlZ1N0YXJ0ID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRzZWdFbmQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRkZWxTZWcgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICAgICAgfSkuaHRtbCgnPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImhvdmVyLWhlbHBcIj5EZWxldGUgc2VnbWVudDwvc3Bhbj48L2E+PC9zcGFuPicpO1xuICAgICAgICAkZGl2LmFwcGVuZCgkc2VnU3RhcnQsICRzZWdFbmQsICRkZWxTZWcpO1xuXG5cbiAgICAgICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICAgICAkZGl2LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICAgICAgfSk7XG4gICAgICAgICRkaXYuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLnByb2R1Y3QtdGltZWxpbmVcIikuYXBwZW5kKCRkaXYpO1xuICAgICAgICAkZGl2LmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCRkaXYuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAgICAgJGRpdi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJChcIi5tYXJrZXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnRpbWVsaW5lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiXG4gICAgfSk7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoe1xuICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZGVsLXNlZycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmVkaXQtdGltZWxpbmUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnByb2R1Y3QtZWRpdC1wcm9tcHQnKS5zbGlkZVRvZ2dsZSgyMDApO1xuICAgIH0pO1xuXG4gICAgJCgnLmRlbGV0ZS10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJChcIi5tYXJrZXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoO1xuICAgICAgICAgICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgICAgICAgICAgJCgnLmN1cnJlbnQnKS50ZXh0KGNvbnZlcnRTZWNvbmRzVG9UaW1lKG5ld1RpbWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciB0b3RhbER1cmF0aW9uID0gMTUxO1xufSk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRTZWNvbmRzVG9UaW1lKHNlYykge1xuICAgIHRvdGFsU2VjID0gTWF0aC5yb3VuZChzZWMpO1xuICAgIHZhciBob3VycyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gMzYwMCkgJSAyNDtcbiAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gNjApICUgNjA7XG4gICAgdmFyIHNlY29uZHMgPSB0b3RhbFNlYyAlIDYwO1xuXG4gICAgdmFyIHJlc3VsdCA9IChob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzKSArIFwiOlwiICsgKG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXMpICsgXCI6XCIgKyAoc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25Ub1RpbWUocG9zaXRpb24pIHtcbiAgICB2YXIgdG90YWxEdXJhdGlvbiA9IDE1MTtcblxuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcblxuICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQocG9zaXRpb24pO1xuICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgIHJldHVybiBjb252ZXJ0U2Vjb25kc1RvVGltZShuZXdUaW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkVGltZWxpbmUoKSB7XG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG5cbiAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgfSk7XG4gICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICB9KS5odG1sKCc8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiaG92ZXItaGVscFwiPkRlbGV0ZSBzZWdtZW50PC9zcGFuPjwvYT48L3NwYW4+Jyk7XG4gICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICRkaXYuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgfSk7XG4gICAgJGRpdi5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG5cbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIucHJvZHVjdC10aW1lbGluZVwiKS5hcHBlbmQoJGRpdik7XG4gICAgJGRpdi5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkZGl2LmNzcygnbGVmdCcpKSk7XG4gICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAkZGl2LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRkZWxTZWcuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgfVxuIiwiLyogU2Nyb2xsaW5nIHNoYWRvd3MgYnkgXCJtaW5kc3Rvcm1cIi4gaHR0cHM6Ly9jb2RlcGVuLmlvL21pbmRzdG9ybS9wZW4vRWJpeUoqL1xuXG5cbnZhciBzY3JvbGxTaGFkb3cgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBlbGVtLCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXQsXG4gICAgc2hhZG93VG9wLCBzaGFkb3dCb3R0b20sXG4gICAgdGltZW91dDtcblxuICBmdW5jdGlvbiBpbml0U2hhZG93cygpIHtcbiAgICBzaGFkb3dUb3AgPSAkKFwiPGRpdj5cIilcbiAgICAgIC5hZGRDbGFzcyhcInNoYWRvdy10b3BcIilcbiAgICAgIC5pbnNlcnRBZnRlcihlbGVtKTtcbiAgICBzaGFkb3dCb3R0b20gPSAkKFwiPGRpdj5cIilcbiAgICAgIC5hZGRDbGFzcyhcInNoYWRvdy1ib3R0b21cIilcbiAgICAgIC5pbnNlcnRBZnRlcihlbGVtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNQb3NpdGlvbigpIHtcbiAgICB3aWR0aCA9IGVsZW0ub3V0ZXJXaWR0aCgpO1xuICAgIGhlaWdodCA9IGVsZW0ub3V0ZXJIZWlnaHQoKTtcbiAgICBvZmZzZXQgPSBlbGVtLnBvc2l0aW9uKCk7XG5cbiAgICAvLyB1cGRhdGVcbiAgICBzaGFkb3dUb3AuY3NzKHtcbiAgICAgIHdpZHRoOiB3aWR0aCArIFwicHhcIixcbiAgICAgIHRvcDogZWxlbS5vZmZzZXQudG9wICsgXCJweFwiLFxuICAgICAgbGVmdDogZWxlbS5vZmZzZXQubGVmdCArIFwicHhcIlxuICAgIH0pO1xuICAgIHNoYWRvd0JvdHRvbS5jc3Moe1xuICAgICAgd2lkdGg6IHdpZHRoICsgXCJweFwiLFxuICAgICAgdG9wOiAoZWxlbS5vZmZzZXQudG9wICsgaGVpZ2h0IC0gMjApICsgXCJweFwiLFxuICAgICAgbGVmdDogZWxlbS5vZmZzZXQubGVmdCArIFwicHhcIlxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgZWxlbS5vZmYoXCJzY3JvbGwuc2hhZG93XCIpO1xuICAgIGVsZW0ub24oXCJzY3JvbGwuc2hhZG93XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wKCkgPiAwKSB7XG4gICAgICAgIHNoYWRvd1RvcC5mYWRlSW4oMjAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoYWRvd1RvcC5mYWRlT3V0KDIwMCk7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbS5zY3JvbGxUb3AoKSArIGhlaWdodCA+PSBlbGVtWzBdLnNjcm9sbEhlaWdodCkge1xuICAgICAgICBzaGFkb3dCb3R0b20uZmFkZU91dCgyMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVJbigyMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUmVzaXplTGlzdGVuZXIoKSB7XG4gICAgJCh3aW5kb3cpLm9uKFwicmVzaXplLnNoYWRvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxjUG9zaXRpb24oKTtcbiAgICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogZnVuY3Rpb24ocGFyKSB7XG4gICAgICBlbGVtID0gJChwYXIpO1xuICAgICAgaW5pdFNoYWRvd3MoKTtcbiAgICAgIGNhbGNQb3NpdGlvbigpO1xuICAgICAgYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgIGFkZFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICBlbGVtLnRyaWdnZXIoXCJzY3JvbGwuc2hhZG93XCIpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBjYWxjUG9zaXRpb25cbiAgfTtcblxufSgpKTtcblxuLy8gc3RhcnRcbnNjcm9sbFNoYWRvdy5pbml0KFwiLmNvbnRhaW5lclwiKTtcbiJdfQ==
