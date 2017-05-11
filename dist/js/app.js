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
        $scope.categories = [];
        angular.forEach($scope.libraryProducts, function(value, category){
            if($scope.categories.indexOf(value.category) == -1)
            {
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
            $scope.productCards[$scope.productCards.length - 1].active = true;
        };

        //Add product to a product card
        var addProduct = function(index) {
            productCounter = $scope.productCards[index].products.length + 1;
            $scope.productCards[index].products.push({
                productTitle: 'Product ' + productCounter,
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


var seekBar = document.getElementById("progress");


// Update the seek bar as the video plays
video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;
});

        $scope.addProduct = addProduct;
        $scope.removeProductCard = removeProductCard;
        $scope.removeProduct = removeProduct;

        // For demonstration add 5 productCards
        /*for (var i = 0; i < 5; i++) {
            addProductCard();
        }*/

    }])
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
            controller: function ($scope, $element, $attrs) {
            $scope.onDrag = function (e, ui) {
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

                                //posLeftArray[i] = parseInt(thiscssleft);
                                posLeftArray[i] = parseInt(markerValue);

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
          top: offset.top + "px",
          left: offset.left + "px"
        });
        shadowBottom.css({
          width: width + "px",
          top: (offset.top + height - 20) + "px",
          left: offset.left + "px"
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
          // Added OR syntax to make shadow invisible initially
          if (elem.scrollTop() + height >= elem[0].scrollHeight || elem[0].scrollHeight < ($(window).height()* 0.70)) {
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
    scrollShadow.init(".card-container");

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JpcHQuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlY2xhcmUgdGhlIHNob3BwYWJsZVZpZGVvIG1vZHVsZSBhbmQgaXRzIGRlcGVuZGVuY2llc1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzaG9wcGFibGVWaWRlbycsIFsnbmdBbmltYXRlJywgJ25nU2FuaXRpemUnLCAndWkuYm9vdHN0cmFwJywgJ3VpLnNvcnRhYmxlJ10pO1xuLy8gRGVjbGFyZSB0aGUgQXBwQ3RybCBjb250cm9sbGVyXG5hcHBcbiAgICAuY29udHJvbGxlcignQXBwQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cblxuICAgICAgICAvLyBDYXJkIGNvdW50ZXIsIHVzZWQgZm9yIGNhcmQgbmFtaW5nXG4gICAgICAgIHZhciBjYXJkQ291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gUHJvZHVjdCBjb3VudGVyLCB1c2VkIGZvciBwcm9kdWN0IG5hbWluZ1xuICAgICAgICB2YXIgcHJvZHVjdENvdW50ZXIgPSBcIlwiO1xuXG5cbiAgICAgICAgLy8gVmFyaWFibGUgZm9yIHRoZSB2aWRlbyB0aXRsZVxuICAgICAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cblxuICAgICAgICAkc2NvcGUucGxheVBhdXNlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3BsYXkucG5nXCI7XG4gICAgICAgICRzY29wZS5tdXRlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL211dGUucG5nXCI7XG5cblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVQbGF5UGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyAgdmFyIHBsYXlwYXVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheXBhdXNlXCIpO1xuICAgICAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCB8fCB2aWRlby5lbmRlZCkge1xuICAgICAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucGxheVBhdXNlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3BhdXNlLnBuZ1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdENhcmRzXG4gICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMgPSBbXTtcblxuICAgICAgICAvL0NvbGxhcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdCBjYXJkcywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9Db2xsYXNwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0cywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdENvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vVGVsbHMgdWktc29ydGFibGUgd2hhdCBhbmQgaG93IHRvIHNvcnQgcHJvZHVjdHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlUHJvZHVjdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RzIGluIHRoZSBsaWJyYXJ5XG4gICAgICAgICRzY29wZS5saWJyYXJ5UHJvZHVjdHMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdTbcO2cmRlZycsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZy0wMS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdTbcO2cmRlZyBFa28nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Ntw7ZyZGVnIEx5eCcsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnw4RnZyBGcmlnw6VlbmRlJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnIC0gRnJpZ8OlZW5kZS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfDhGdnJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLVZhbmxpZy5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfDhGdnIEVrbycsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnS25pdiBKYXBhbnNrJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUF2YW5jZXJhZC5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLbml2IEJhcm4nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtQmFybi5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLbml2IFN0b3InLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtU3TDtnJyZS0wMS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdGw7Zya2zDpGRlIEJydW4nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdGw7Zya2zDpGRlIFR5ZycsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvRsO2cmtsw6RkZS1UeWcucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ8OEZ2drbG9ja2EnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2drbG9ja2EucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BlbnNlbCBTaWxpa29uJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLYXZlbCBydW5kJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9rYXZlbC1ydW5kLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0thdmVsIEJhcm4nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLWJhcm4ucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnS2F2ZWwnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0dqdXRqw6RybicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvc3Rla3Bhbm5hLWdqdXRqw6Rybi5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdTdGVrcGFubmEnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL1N0ZWtwYW5uYS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQZW5zZWwgbS4ga25pdicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLW1lZC1rbml2LnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BlbnNlbCBUcsOkJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtdHLDpC5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH1cblxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEFycmF5IHRoYXQgc3RvcmUgYWxsIHRoZSBjYXRlZ29yaWVzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIGRyb3Bkb3duLWxpc3RcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBbXTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5saWJyYXJ5UHJvZHVjdHMsIGZ1bmN0aW9uKHZhbHVlLCBjYXRlZ29yeSl7XG4gICAgICAgICAgICBpZigkc2NvcGUuY2F0ZWdvcmllcy5pbmRleE9mKHZhbHVlLmNhdGVnb3J5KSA9PSAtMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5wdXNoKHZhbHVlLmNhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydCBwcm9kdWN0IGNhcmRzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZUNhcmRPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG5cblxuICAgICAgICAvLyBBZGQgcHJvZHVjdENhcmQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgdmFyIGFkZFByb2R1Y3RDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNhcmRUaXRsZTogJ1Byb2R1Y3QgQ2FyZCAnICsgY2FyZENvdW50ZXIsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhcmRDb3VudGVyKys7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzWyRzY29wZS5wcm9kdWN0Q2FyZHMubGVuZ3RoIC0gMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL0FkZCBwcm9kdWN0IHRvIGEgcHJvZHVjdCBjYXJkXG4gICAgICAgIHZhciBhZGRQcm9kdWN0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHByb2R1Y3RDb3VudGVyID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLnB1c2goe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Byb2R1Y3QgJyArIHByb2R1Y3RDb3VudGVyLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy4uLicsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiAnMjAlJyxcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnQnV5IG5vdyBiYWJ5JyxcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogJ1JpY2ggcGVvcGxlJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgY2FyZCBieSBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgY2FyZENvdW50ZXItLTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBieSBpbmRleCBhbmQgcHJvZHVjdCBjYXJkIGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0ID0gZnVuY3Rpb24ocHJvZHVjdENhcmRJbmRleCwgZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW3Byb2R1Y3RDYXJkSW5kZXhdLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgc2NvcGUgZnVuY3Rpb25zXG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0Q2FyZCA9IGFkZFByb2R1Y3RDYXJkO1xuXG4vL1ZpZGVvIGNvbnRyb2xsZXJcbi8vVm9sdW1lXG5mdW5jdGlvbiBzZXRWb2x1bWUoKSB7XG4gICAgdmFyIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lXCIpO1xuICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZS52YWx1ZTtcbn1cbi8vTXV0ZVxuZnVuY3Rpb24gdG9nZ2xlTXV0ZSgpIHtcbiAgICB2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcbn1cbi8vUHJvZ3Jlc3NiYXJcbnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB1cGRhdGVQcm9ncmVzcywgZmFsc2UpO1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgaWYgKHZpZGVvLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IoKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB2YWx1ZSArIFwiJVwiO1xufVxuXG5cbnZhciBzZWVrQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcblxuXG4vLyBVcGRhdGUgdGhlIHNlZWsgYmFyIGFzIHRoZSB2aWRlbyBwbGF5c1xudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIENhbGN1bGF0ZSB0aGUgc2xpZGVyIHZhbHVlXG4gIHZhciB2YWx1ZSA9ICgxMDAgLyB2aWRlby5kdXJhdGlvbikgKiB2aWRlby5jdXJyZW50VGltZTtcblxuICAvLyBVcGRhdGUgdGhlIHNsaWRlciB2YWx1ZVxuICBzZWVrQmFyLnZhbHVlID0gdmFsdWU7XG59KTtcblxuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdCA9IGFkZFByb2R1Y3Q7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0Q2FyZCA9IHJlbW92ZVByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdCA9IHJlbW92ZVByb2R1Y3Q7XG5cbiAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkIDUgcHJvZHVjdENhcmRzXG4gICAgICAgIC8qZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGFkZFByb2R1Y3RDYXJkKCk7XG4gICAgICAgIH0qL1xuXG4gICAgfV0pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAvKmNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vblNsaWRlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sKi9cbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHNsaWRlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHNsaWRlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pXG4gICAgLmRpcmVjdGl2ZSgnbWFya2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAkc2NvcGUub25EcmFnID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tYXJrZXJWYWx1ZSA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzbGVmdCA9PSAnYXV0bycpIHRoaXNjc3NsZWZ0ID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wb3NMZWZ0QXJyYXlbaV0gPSBwYXJzZUludCh0aGlzY3NzbGVmdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KG1hcmtlclZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5sZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRtYXJrZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZSgnYWRkVGltZWxpbmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kc2xpZGVyID0gJChlbGVtZW50KS5kcmFnZ2FibGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG4iLCIkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgIGF4aXM6ICd4JyxcbiAgICBjb250YWlubWVudDogJ3Byb2R1Y3QtdGltZWxpbmUnLFxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHBvc1RvcEFycmF5ID0gW107XG4gICAgICAgIHBvc0xlZnRBcnJheSA9IFtdO1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzY3NzdG9wID0gJCh0aGlzKS5jc3MoJ3RvcCcpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzdG9wID09ICdhdXRvJykgdGhpc2Nzc3RvcCA9IDA7IC8vIEZvciBJRVxuXG4gICAgICAgICAgICAgICAgdGhpc2Nzc2xlZnQgPSAkKHRoaXMpLmNzcygnbGVmdCcpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzbGVmdCA9PSAnYXV0bycpIHRoaXNjc3NsZWZ0ID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICBwb3NUb3BBcnJheVtpXSA9IHBhcnNlSW50KHRoaXNjc3N0b3ApO1xuICAgICAgICAgICAgICAgIHBvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KHRoaXNjc3NsZWZ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYmVnaW50b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgYmVnaW5sZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgIH0sXG4gICAgZHJhZzogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICB2YXIgdG9wZGlmZiA9ICQodGhpcykub2Zmc2V0KCkudG9wIC0gYmVnaW50b3A7XG4gICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywgcG9zVG9wQXJyYXlbaV0gKyB0b3BkaWZmKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnbGVmdCcsIHBvc0xlZnRBcnJheVtpXSArIGxlZnRkaWZmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCIvLyBqUXVlcnkgZnVuY3Rpb25zIGZyb20gU01cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgJCgnLnZpZXctb3B0aW9ucyAubGlzdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcudmlldy1vcHRpb25zIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5pdGVtcycpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2dyaWQnKS5mYWRlSW4oMjAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnLnZpZXctb3B0aW9ucyAuZ3JpZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcudmlldy1vcHRpb25zIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5pdGVtcycpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2dyaWQnKS5mYWRlSW4oMjAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnLm1vZGFsIC5pdGVtLXRodW1iJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jbG9uZSgpLmFwcGVuZFRvKCcuaXRlbXMuYWRkZWQnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgICQoJy5hZGQtdGltZWxpbmUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgICAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1iYXIgdWktd2lkZ2V0LWNvbnRlbnRcIlxuICAgICAgICB9KTtcbiAgICAgICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1zdGFydFwiXG4gICAgICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLWVuZFwiXG4gICAgICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwiZGVsLXNlZ1wiXG4gICAgICAgIH0pLmh0bWwoJzxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJob3Zlci1oZWxwXCI+RGVsZXRlIHNlZ21lbnQ8L3NwYW4+PC9hPjwvc3Bhbj4nKTtcbiAgICAgICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgICAgICRkaXYuY3NzKCdsZWZ0JywgbmV3UG9zICsgJyUnKTtcbiAgICAgICAgJGRpdi5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgIH0pO1xuICAgICAgICAkZGl2LmRyYWdnYWJsZSh7XG4gICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRkaXYucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuXG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5wcm9kdWN0LXRpbWVsaW5lXCIpLmFwcGVuZCgkZGl2KTtcbiAgICAgICAgJGRpdi5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkZGl2LmNzcygnbGVmdCcpKSk7XG4gICAgICAgICRkaXYuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkZGl2LmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCRkaXYuY3NzKCd3aWR0aCcpKSkpO1xuXG4gICAgICAgICRkaXYuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRkZWxTZWcuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiBcIi50aW1lbGluZVwiLFxuICAgICAgICBheGlzOiBcInhcIlxuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKHtcbiAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgfSk7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmRlbC1zZWcnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgICQoJy5lZGl0LXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5wcm9kdWN0LWVkaXQtcHJvbXB0Jykuc2xpZGVUb2dnbGUoMjAwKTtcbiAgICB9KTtcblxuICAgICQoJy5kZWxldGUtdGltZWxpbmUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgICQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aDtcbiAgICAgICAgICAgIHZhciBuZXdUaW1lID0gdG90YWxEdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICAgICAgICAgICQoJy5jdXJyZW50JykudGV4dChjb252ZXJ0U2Vjb25kc1RvVGltZShuZXdUaW1lKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgdG90YWxEdXJhdGlvbiA9IDE1MTtcbn0pO1xuXG5mdW5jdGlvbiBjb252ZXJ0U2Vjb25kc1RvVGltZShzZWMpIHtcbiAgICB0b3RhbFNlYyA9IE1hdGgucm91bmQoc2VjKTtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDM2MDApICUgMjQ7XG4gICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDYwKSAlIDYwO1xuICAgIHZhciBzZWNvbmRzID0gdG90YWxTZWMgJSA2MDtcblxuICAgIHZhciByZXN1bHQgPSAoaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycykgKyBcIjpcIiArIChtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzKSArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9UaW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSAxNTE7XG5cbiAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG5cbiAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KHBvc2l0aW9uKTtcbiAgICB2YXIgcGVyY2VudGFnZSA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoO1xuICAgIHZhciBuZXdUaW1lID0gdG90YWxEdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICByZXR1cm4gY29udmVydFNlY29uZHNUb1RpbWUobmV3VGltZSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRpbWVsaW5lKCkge1xuICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgdmFyIG5ld1BvcyA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoICogMTAwO1xuXG4gICAgdmFyICRkaXYgPSAkKFwiPGRpdj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1iYXIgdWktd2lkZ2V0LWNvbnRlbnRcIlxuICAgIH0pO1xuICAgIHZhciAkc2VnU3RhcnQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1zdGFydFwiXG4gICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICB2YXIgJHNlZ0VuZCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwic2VnLWVuZFwiXG4gICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICB2YXIgJGRlbFNlZyA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwiZGVsLXNlZ1wiXG4gICAgfSkuaHRtbCgnPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImhvdmVyLWhlbHBcIj5EZWxldGUgc2VnbWVudDwvc3Bhbj48L2E+PC9zcGFuPicpO1xuICAgICRkaXYuYXBwZW5kKCRzZWdTdGFydCwgJHNlZ0VuZCwgJGRlbFNlZyk7XG5cblxuICAgICRkaXYuY3NzKCdsZWZ0JywgbmV3UG9zICsgJyUnKTtcbiAgICAkZGl2LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAkZGl2LnJlc2l6YWJsZSh7XG4gICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgIH0pO1xuICAgICRkaXYuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICRkaXYucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLnByb2R1Y3QtdGltZWxpbmVcIikuYXBwZW5kKCRkaXYpO1xuICAgICRkaXYuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJGRpdi5jc3MoJ2xlZnQnKSkpO1xuICAgICRkaXYuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkZGl2LmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCRkaXYuY3NzKCd3aWR0aCcpKSkpO1xuXG4gICAgJGRpdi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkZGVsU2VnLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIH1cbiIsIi8qIFNjcm9sbGluZyBzaGFkb3dzIGJ5IFwibWluZHN0b3JtXCIuIGh0dHBzOi8vY29kZXBlbi5pby9taW5kc3Rvcm0vcGVuL0ViaXlKKi9cblxuXG4gICAgdmFyIHNjcm9sbFNoYWRvdyA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtLCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXQsXG4gICAgICAgIHNoYWRvd1RvcCwgc2hhZG93Qm90dG9tLFxuICAgICAgICB0aW1lb3V0O1xuXG4gICAgICBmdW5jdGlvbiBpbml0U2hhZG93cygpIHtcbiAgICAgICAgc2hhZG93VG9wID0gJChcIjxkaXY+XCIpXG4gICAgICAgICAgLmFkZENsYXNzKFwic2hhZG93LXRvcFwiKVxuICAgICAgICAgIC5pbnNlcnRBZnRlcihlbGVtKTtcbiAgICAgICAgc2hhZG93Qm90dG9tID0gJChcIjxkaXY+XCIpXG4gICAgICAgICAgLmFkZENsYXNzKFwic2hhZG93LWJvdHRvbVwiKVxuICAgICAgICAgIC5pbnNlcnRBZnRlcihlbGVtKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2FsY1Bvc2l0aW9uKCkge1xuICAgICAgICB3aWR0aCA9IGVsZW0ub3V0ZXJXaWR0aCgpO1xuICAgICAgICBoZWlnaHQgPSBlbGVtLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIG9mZnNldCA9IGVsZW0ucG9zaXRpb24oKTtcblxuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgc2hhZG93VG9wLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICsgXCJweFwiLFxuICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcCArIFwicHhcIixcbiAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCArIFwicHhcIlxuICAgICAgICB9KTtcbiAgICAgICAgc2hhZG93Qm90dG9tLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICsgXCJweFwiLFxuICAgICAgICAgIHRvcDogKG9mZnNldC50b3AgKyBoZWlnaHQgLSAyMCkgKyBcInB4XCIsXG4gICAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBlbGVtLm9mZihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICAgIGVsZW0ub24oXCJzY3JvbGwuc2hhZG93XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpID4gMCkge1xuICAgICAgICAgICAgc2hhZG93VG9wLmZhZGVJbigyMDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGFkb3dUb3AuZmFkZU91dCgyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGRlZCBPUiBzeW50YXggdG8gbWFrZSBzaGFkb3cgaW52aXNpYmxlIGluaXRpYWxseVxuICAgICAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpICsgaGVpZ2h0ID49IGVsZW1bMF0uc2Nyb2xsSGVpZ2h0IHx8IGVsZW1bMF0uc2Nyb2xsSGVpZ2h0IDwgKCQod2luZG93KS5oZWlnaHQoKSogMC43MCkpIHtcbiAgICAgICAgICAgIHNoYWRvd0JvdHRvbS5mYWRlT3V0KDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGFkb3dCb3R0b20uZmFkZUluKDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkUmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgICQod2luZG93KS5vbihcInJlc2l6ZS5zaGFkb3dcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgICAgICBlbGVtLnRyaWdnZXIoXCJzY3JvbGwuc2hhZG93XCIpO1xuICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHBhcikge1xuICAgICAgICAgIGVsZW0gPSAkKHBhcik7XG4gICAgICAgICAgaW5pdFNoYWRvd3MoKTtcbiAgICAgICAgICBjYWxjUG9zaXRpb24oKTtcbiAgICAgICAgICBhZGRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICAgIGFkZFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBjYWxjUG9zaXRpb25cbiAgICAgIH07XG5cbiAgICB9KCkpO1xuXG4gICAgLy8gc3RhcnRcbiAgICBzY3JvbGxTaGFkb3cuaW5pdChcIi5jYXJkLWNvbnRhaW5lclwiKTtcbiJdfQ==
