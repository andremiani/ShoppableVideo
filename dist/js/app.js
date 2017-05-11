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
            title: 'Ägg Fri.',
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
            title: 'Multipensel',
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JpcHQuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNsYXJlIHRoZSBzaG9wcGFibGVWaWRlbyBtb2R1bGUgYW5kIGl0cyBkZXBlbmRlbmNpZXNcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc2hvcHBhYmxlVmlkZW8nLCBbJ25nQW5pbWF0ZScsICduZ1Nhbml0aXplJywgJ3VpLmJvb3RzdHJhcCcsICd1aS5zb3J0YWJsZSddKTtcbi8vIERlY2xhcmUgdGhlIEFwcEN0cmwgY29udHJvbGxlclxuYXBwXG4gICAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuXG5cbiAgICAgICAgLy8gQ2FyZCBjb3VudGVyLCB1c2VkIGZvciBjYXJkIG5hbWluZ1xuICAgICAgICB2YXIgY2FyZENvdW50ZXIgPSAxO1xuXG4gICAgICAgIC8vIFByb2R1Y3QgY291bnRlciwgdXNlZCBmb3IgcHJvZHVjdCBuYW1pbmdcbiAgICAgICAgdmFyIHByb2R1Y3RDb3VudGVyID0gXCJcIjtcblxuXG4gICAgICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAgICAgJHNjb3BlLnZpZGVvVGl0bGUgPSBcIlwiO1xuXG5cbiAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9tdXRlLnBuZ1wiO1xuXG5cbiAgICAgICAgLy9QbGF5IGFuZCBwYXVzZVxuICAgICAgICAkc2NvcGUudG9nZ2xlUGxheVBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gIHZhciBwbGF5cGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlwYXVzZVwiKTtcbiAgICAgICAgICAgIGlmICh2aWRlby5wYXVzZWQgfHwgdmlkZW8uZW5kZWQpIHtcbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wYXVzZS5wbmdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucGxheVBhdXNlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RDYXJkc1xuICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzID0gW107XG5cbiAgICAgICAgLy9Db2xsYXBzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3QgY2FyZHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vQ29sbGFzcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc1Byb2R1Y3RDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3RzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZVByb2R1Y3RPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpYnJhcnlcbiAgICAgICAgJHNjb3BlLmxpYnJhcnlQcm9kdWN0cyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Ntw7ZyZGVnJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9TbW9yZGVnLTAxLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzItMDEucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9TbW9yZGVnMy5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfDhGdnIEZyaS4nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2cgLSBGcmlnw6VlbmRlLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ8OEZ2cnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2ctVmFubGlnLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLWVrby5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLbml2IEphcGFuc2snLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtQXZhbmNlcmFkLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0tuaXYgQmFybicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1CYXJuLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0tuaXYgU3RvcicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1TdMO2cnJlLTAxLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvRsO2cmtsw6RkZS1sw6RkZXItMDEucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0bDtnJrbMOkZGUgVHlnJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLVR5Zy5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnw4RnZ2tsb2NrYScsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZ2tsb2NrYS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1zaWxpY29uLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0thdmVsIHJ1bmQnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLXJ1bmQucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnS2F2ZWwgQmFybicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtYmFybi5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLYXZlbCcsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvS2F2ZWwucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnR2p1dGrDpHJuJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9zdGVrcGFubmEtZ2p1dGrDpHJuLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1N0ZWtwYW5uYScsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU3Rla3Bhbm5hLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ011bHRpcGVuc2VsJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtbWVkLWtuaXYucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUGVuc2VsIFRyw6QnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC10csOkLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gQXJyYXkgdGhhdCBzdG9yZSBhbGwgdGhlIGNhdGVnb3JpZXMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgZHJvcGRvd24tbGlzdFxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IFtdO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmxpYnJhcnlQcm9kdWN0cywgZnVuY3Rpb24odmFsdWUsIGNhdGVnb3J5KXtcbiAgICAgICAgICAgIGlmKCRzY29wZS5jYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuY2F0ZWdvcnkpID09IC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLnB1c2godmFsdWUuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3QgY2FyZHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlQ2FyZE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIC8vIGl0ZW1zOiAnIC5wYW5lbDpub3QoLnBhbmVsLWhlYWRpbmcpJ1xuICAgICAgICAgICAgYXhpczogJ3knXG4gICAgICAgIH07XG5cblxuXG4gICAgICAgIC8vIEFkZCBwcm9kdWN0Q2FyZCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgICB2YXIgYWRkUHJvZHVjdENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlOiAnUHJvZHVjdCBDYXJkICcgKyBjYXJkQ291bnRlcixcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FyZENvdW50ZXIrKztcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbJHNjb3BlLnByb2R1Y3RDYXJkcy5sZW5ndGggLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vQWRkIHByb2R1Y3QgdG8gYSBwcm9kdWN0IGNhcmRcbiAgICAgICAgdmFyIGFkZFByb2R1Y3QgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgcHJvZHVjdENvdW50ZXIgPSAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGggKyAxO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUHJvZHVjdCAnICsgcHJvZHVjdENvdW50ZXIsXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3Li4uJyxcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6ICcyMCUnLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdCdXkgbm93IGJhYnknLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiAnUmljaCBwZW9wbGUnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBjYXJkIGJ5IGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBjYXJkQ291bnRlci0tO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGJ5IGluZGV4IGFuZCBwcm9kdWN0IGNhcmQgaW5kZXhcbiAgICAgICAgdmFyIHJlbW92ZVByb2R1Y3QgPSBmdW5jdGlvbihwcm9kdWN0Q2FyZEluZGV4LCBldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbcHJvZHVjdENhcmRJbmRleF0ucHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBzY29wZSBmdW5jdGlvbnNcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3RDYXJkID0gYWRkUHJvZHVjdENhcmQ7XG5cbiAgICAgICAgLy9WaWRlbyBjb250cm9sbGVyXG4gICAgICAgIC8vVm9sdW1lXG4gICAgICAgIGZ1bmN0aW9uIHNldFZvbHVtZSgpIHtcbiAgICAgICAgdmFyIHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lXCIpO1xuICAgICAgICB2aWRlby52b2x1bWUgPSB2b2x1bWUudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9NdXRlXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU11dGUoKSB7XG4gICAgICAgIHZpZGVvLm11dGVkID0gIXZpZGVvLm11dGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vUHJvZ3Jlc3NiYXJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHVwZGF0ZVByb2dyZXNzLCBmYWxzZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHZhciBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG4gICAgICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgICAgIGlmICh2aWRlby5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKCgxMDAgLyB2aWRlby5kdXJhdGlvbikgKiB2aWRlby5jdXJyZW50VGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvZ3Jlc3Muc3R5bGUud2lkdGggPSB2YWx1ZSArIFwiJVwiO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXIgc2Vla0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG5cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHNlZWsgYmFyIGFzIHRoZSB2aWRlbyBwbGF5c1xuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzbGlkZXIgdmFsdWVcbiAgICAgICAgdmFyIHZhbHVlID0gKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2xpZGVyIHZhbHVlXG4gICAgICAgIHNlZWtCYXIudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3QgPSBhZGRQcm9kdWN0O1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdENhcmQgPSByZW1vdmVQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3QgPSByZW1vdmVQcm9kdWN0O1xuXG4gICAgICAgIC8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCA1IHByb2R1Y3RDYXJkc1xuICAgICAgICAvKmZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB9Ki9cblxuICAgICAgICB9XSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnc2xpZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAvKmNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vblNsaWRlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sKi9cbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHNsaWRlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHNsaWRlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuZGlyZWN0aXZlKCdtYXJrZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vbkRyYWcgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1hcmtlclZhbHVlID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Bvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KHRoaXNjc3NsZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQobWFya2VyVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbmxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2xlZnQnLCBwb3NMZWZ0QXJyYXlbaV0gKyBsZWZ0ZGlmZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHNsaWRlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJG1hcmtlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5kaXJlY3RpdmUoJ2FkZFRpbWVsaW5lJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAvKmNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vblNsaWRlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sKi9cbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHNsaWRlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHNsaWRlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB9KTtcbiIsIiQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgYXhpczogJ3gnLFxuICAgIGNvbnRhaW5tZW50OiAncHJvZHVjdC10aW1lbGluZScsXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgcG9zVG9wQXJyYXkgPSBbXTtcbiAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHRoaXNjc3N0b3AgPSAkKHRoaXMpLmNzcygndG9wJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3N0b3AgPT0gJ2F1dG8nKSB0aGlzY3NzdG9wID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgIHBvc1RvcEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc3RvcCk7XG4gICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiZWdpbnRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICBiZWdpbmxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgfSxcbiAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHZhciB0b3BkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBiZWdpbnRvcDtcbiAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCBwb3NUb3BBcnJheVtpXSArIHRvcGRpZmYpO1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIi8vIGpRdWVyeSBmdW5jdGlvbnMgZnJvbSBTTVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5saXN0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5ncmlkJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcubW9kYWwgLml0ZW0tdGh1bWInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNsb25lKCkuYXBwZW5kVG8oJy5pdGVtcy5hZGRlZCcpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFkZC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgdmFyIG5ld1BvcyA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoICogMTAwO1xuXG4gICAgICAgIHZhciAkZGl2ID0gJChcIjxkaXY+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgJHNlZ1N0YXJ0ID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRzZWdFbmQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRkZWxTZWcgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICAgICAgfSkuaHRtbCgnPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImhvdmVyLWhlbHBcIj5EZWxldGUgc2VnbWVudDwvc3Bhbj48L2E+PC9zcGFuPicpO1xuICAgICAgICAkZGl2LmFwcGVuZCgkc2VnU3RhcnQsICRzZWdFbmQsICRkZWxTZWcpO1xuXG5cbiAgICAgICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICAgICAkZGl2LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICAgICAgfSk7XG4gICAgICAgICRkaXYuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLnByb2R1Y3QtdGltZWxpbmVcIikuYXBwZW5kKCRkaXYpO1xuICAgICAgICAkZGl2LmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCRkaXYuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAgICAgJGRpdi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJChcIi5tYXJrZXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnRpbWVsaW5lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiXG4gICAgfSk7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoe1xuICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZGVsLXNlZycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmVkaXQtdGltZWxpbmUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnByb2R1Y3QtZWRpdC1wcm9tcHQnKS5zbGlkZVRvZ2dsZSgyMDApO1xuICAgIH0pO1xuXG4gICAgJCgnLmRlbGV0ZS10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJChcIi5tYXJrZXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoO1xuICAgICAgICAgICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgICAgICAgICAgJCgnLmN1cnJlbnQnKS50ZXh0KGNvbnZlcnRTZWNvbmRzVG9UaW1lKG5ld1RpbWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciB0b3RhbER1cmF0aW9uID0gMTUxO1xufSk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRTZWNvbmRzVG9UaW1lKHNlYykge1xuICAgIHRvdGFsU2VjID0gTWF0aC5yb3VuZChzZWMpO1xuICAgIHZhciBob3VycyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gMzYwMCkgJSAyNDtcbiAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gNjApICUgNjA7XG4gICAgdmFyIHNlY29uZHMgPSB0b3RhbFNlYyAlIDYwO1xuXG4gICAgdmFyIHJlc3VsdCA9IChob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzKSArIFwiOlwiICsgKG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXMpICsgXCI6XCIgKyAoc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25Ub1RpbWUocG9zaXRpb24pIHtcbiAgICB2YXIgdG90YWxEdXJhdGlvbiA9IDE1MTtcblxuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcblxuICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQocG9zaXRpb24pO1xuICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgIHJldHVybiBjb252ZXJ0U2Vjb25kc1RvVGltZShuZXdUaW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkVGltZWxpbmUoKSB7XG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG5cbiAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgfSk7XG4gICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICB9KS5odG1sKCc8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiaG92ZXItaGVscFwiPkRlbGV0ZSBzZWdtZW50PC9zcGFuPjwvYT48L3NwYW4+Jyk7XG4gICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICRkaXYuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgfSk7XG4gICAgJGRpdi5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG5cbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIucHJvZHVjdC10aW1lbGluZVwiKS5hcHBlbmQoJGRpdik7XG4gICAgJGRpdi5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkZGl2LmNzcygnbGVmdCcpKSk7XG4gICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAkZGl2LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRkZWxTZWcuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgfVxuIiwiLyogU2Nyb2xsaW5nIHNoYWRvd3MgYnkgXCJtaW5kc3Rvcm1cIi4gaHR0cHM6Ly9jb2RlcGVuLmlvL21pbmRzdG9ybS9wZW4vRWJpeUoqL1xuXG5cbiAgICB2YXIgc2Nyb2xsU2hhZG93ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW0sIHdpZHRoLCBoZWlnaHQsIG9mZnNldCxcbiAgICAgICAgc2hhZG93VG9wLCBzaGFkb3dCb3R0b20sXG4gICAgICAgIHRpbWVvdXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGluaXRTaGFkb3dzKCkge1xuICAgICAgICBzaGFkb3dUb3AgPSAkKFwiPGRpdj5cIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctdG9wXCIpXG4gICAgICAgICAgLmluc2VydEFmdGVyKGVsZW0pO1xuICAgICAgICBzaGFkb3dCb3R0b20gPSAkKFwiPGRpdj5cIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctYm90dG9tXCIpXG4gICAgICAgICAgLmluc2VydEFmdGVyKGVsZW0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjYWxjUG9zaXRpb24oKSB7XG4gICAgICAgIHdpZHRoID0gZWxlbS5vdXRlcldpZHRoKCk7XG4gICAgICAgIGhlaWdodCA9IGVsZW0ub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgb2Zmc2V0ID0gZWxlbS5wb3NpdGlvbigpO1xuXG4gICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICBzaGFkb3dUb3AuY3NzKHtcbiAgICAgICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgdG9wOiBvZmZzZXQudG9wICsgXCJweFwiLFxuICAgICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0ICsgXCJweFwiXG4gICAgICAgIH0pO1xuICAgICAgICBzaGFkb3dCb3R0b20uY3NzKHtcbiAgICAgICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgdG9wOiAob2Zmc2V0LnRvcCArIGhlaWdodCAtIDIwKSArIFwicHhcIixcbiAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCArIFwicHhcIlxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGVsZW0ub2ZmKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICAgICAgZWxlbS5vbihcInNjcm9sbC5zaGFkb3dcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wKCkgPiAwKSB7XG4gICAgICAgICAgICBzaGFkb3dUb3AuZmFkZUluKDIwMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoYWRvd1RvcC5mYWRlT3V0KDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFkZGVkIE9SIHN5bnRheCB0byBtYWtlIHNoYWRvdyBpbnZpc2libGUgaW5pdGlhbGx5XG4gICAgICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wKCkgKyBoZWlnaHQgPj0gZWxlbVswXS5zY3JvbGxIZWlnaHQgfHwgZWxlbVswXS5zY3JvbGxIZWlnaHQgPCAoJCh3aW5kb3cpLmhlaWdodCgpKiAwLjcwKSkge1xuICAgICAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVPdXQoMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoYWRvd0JvdHRvbS5mYWRlSW4oMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplLnNoYWRvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYWxjUG9zaXRpb24oKTtcbiAgICAgICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24ocGFyKSB7XG4gICAgICAgICAgZWxlbSA9ICQocGFyKTtcbiAgICAgICAgICBpbml0U2hhZG93cygpO1xuICAgICAgICAgIGNhbGNQb3NpdGlvbigpO1xuICAgICAgICAgIGFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgYWRkUmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgICBlbGVtLnRyaWdnZXIoXCJzY3JvbGwuc2hhZG93XCIpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGNhbGNQb3NpdGlvblxuICAgICAgfTtcblxuICAgIH0oKSk7XG5cbiAgICAvLyBzdGFydFxuICAgIHNjcm9sbFNoYWRvdy5pbml0KFwiLmNhcmQtY29udGFpbmVyXCIpO1xuIl19
