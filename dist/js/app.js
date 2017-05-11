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
        $scope.categories = []
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JpcHQuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNsYXJlIHRoZSBzaG9wcGFibGVWaWRlbyBtb2R1bGUgYW5kIGl0cyBkZXBlbmRlbmNpZXNcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc2hvcHBhYmxlVmlkZW8nLCBbJ25nQW5pbWF0ZScsICduZ1Nhbml0aXplJywgJ3VpLmJvb3RzdHJhcCcsICd1aS5zb3J0YWJsZSddKTtcbi8vIERlY2xhcmUgdGhlIEFwcEN0cmwgY29udHJvbGxlclxuYXBwXG4gICAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuXG5cbiAgICAgICAgLy8gQ2FyZCBjb3VudGVyLCB1c2VkIGZvciBjYXJkIG5hbWluZ1xuICAgICAgICB2YXIgY2FyZENvdW50ZXIgPSAxO1xuXG4gICAgICAgIC8vIFByb2R1Y3QgY291bnRlciwgdXNlZCBmb3IgcHJvZHVjdCBuYW1pbmdcbiAgICAgICAgdmFyIHByb2R1Y3RDb3VudGVyID0gXCJcIjtcblxuICAgICAgICAvLyBWYXJpYWJsZSBmb3IgdGhlIHZpZGVvIHRpdGxlXG4gICAgICAgICRzY29wZS52aWRlb1RpdGxlID0gXCJcIjtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdENhcmRzXG4gICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMgPSBbXTtcblxuICAgICAgICAvL0NvbGxhcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdCBjYXJkcywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9Db2xsYXNwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0cywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdENvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vVGVsbHMgdWktc29ydGFibGUgd2hhdCBhbmQgaG93IHRvIHNvcnQgcHJvZHVjdHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlUHJvZHVjdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RzIGluIHRoZSBsaWJyYXJ5XG4gICAgICAgICRzY29wZS5saWJyYXJ5UHJvZHVjdHMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdTbcO2cmRlZycsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZy0wMS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdTbcO2cmRlZyBFa28nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Ntw7ZyZGVnIEx5eCcsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnw4RnZyBGcmlnw6VlbmRlJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnIC0gRnJpZ8OlZW5kZS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfDhGdnJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLVZhbmxpZy5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfDhGdnIEVrbycsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnS25pdiBKYXBhbnNrJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUF2YW5jZXJhZC5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLbml2IEJhcm4nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtQmFybi5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLbml2IFN0b3InLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtU3TDtnJyZS0wMS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdGw7Zya2zDpGRlIEJydW4nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdGw7Zya2zDpGRlIFR5ZycsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvRsO2cmtsw6RkZS1UeWcucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ8OEZ2drbG9ja2EnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2drbG9ja2EucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BlbnNlbCBTaWxpa29uJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLYXZlbCBydW5kJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9rYXZlbC1ydW5kLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0thdmVsIEJhcm4nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLWJhcm4ucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnS2F2ZWwnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0dqdXRqw6RybicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvc3Rla3Bhbm5hLWdqdXRqw6Rybi5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdTdGVrcGFubmEnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL1N0ZWtwYW5uYS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQZW5zZWwgbS4ga25pdicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLW1lZC1rbml2LnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BlbnNlbCBUcsOkJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtdHLDpC5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH1cblxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEFycmF5IHRoYXQgc3RvcmUgYWxsIHRoZSBjYXRlZ29yaWVzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIGRyb3Bkb3duLWxpc3RcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBbXVxuICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLmxpYnJhcnlQcm9kdWN0cywgZnVuY3Rpb24odmFsdWUsIGNhdGVnb3J5KXtcbiAgICAgICAgICAgIGlmKCRzY29wZS5jYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuY2F0ZWdvcnkpID09IC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLnB1c2godmFsdWUuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3QgY2FyZHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlQ2FyZE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIC8vIGl0ZW1zOiAnIC5wYW5lbDpub3QoLnBhbmVsLWhlYWRpbmcpJ1xuICAgICAgICAgICAgYXhpczogJ3knXG4gICAgICAgIH07XG5cblxuICAgICAgICAvLyBBZGQgcHJvZHVjdENhcmQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgdmFyIGFkZFByb2R1Y3RDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNhcmRUaXRsZTogJ1Byb2R1Y3QgQ2FyZCAnICsgY2FyZENvdW50ZXIsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhcmRDb3VudGVyKys7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzWyRzY29wZS5wcm9kdWN0Q2FyZHMubGVuZ3RoIC0gMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL0FkZCBwcm9kdWN0IHRvIGEgcHJvZHVjdCBjYXJkXG4gICAgICAgIHZhciBhZGRQcm9kdWN0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHByb2R1Y3RDb3VudGVyID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLnB1c2goe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Byb2R1Y3QgJyArIHByb2R1Y3RDb3VudGVyLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy4uLicsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiAnMjAlJyxcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnQnV5IG5vdyBiYWJ5JyxcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogJ1JpY2ggcGVvcGxlJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgY2FyZCBieSBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNhcmRDb3VudGVyLS07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgYnkgaW5kZXggYW5kIHByb2R1Y3QgY2FyZCBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdCA9IGZ1bmN0aW9uKHByb2R1Y3RDYXJkSW5kZXgsIGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1twcm9kdWN0Q2FyZEluZGV4XS5wcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdENhcmQgPSBhZGRQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3QgPSBhZGRQcm9kdWN0O1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdENhcmQgPSByZW1vdmVQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3QgPSByZW1vdmVQcm9kdWN0O1xuXG4gICAgICAgIC8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCA1IHByb2R1Y3RDYXJkc1xuICAgICAgICAvKmZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB9Ki9cbiAgICB9XSlcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kc2xpZGVyID0gJChlbGVtZW50KS5kcmFnZ2FibGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKCdtYXJrZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vbkRyYWcgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1hcmtlclZhbHVlID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Bvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KHRoaXNjc3NsZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQobWFya2VyVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbmxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2xlZnQnLCBwb3NMZWZ0QXJyYXlbaV0gKyBsZWZ0ZGlmZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHNsaWRlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJG1hcmtlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKCdhZGRUaW1lbGluZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICAgICAgLypjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gICAgICAgICAgICAkc2NvcGUub25TbGlkZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICAgICAgICAkc2NvcGUubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCovXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRzbGlkZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICAvL1ZpZGVvIGNvbnRyb2xsZXJcblxuICAgIC8vVm9sdW1lXG4gICAgZnVuY3Rpb24gc2V0Vm9sdW1lKCkge1xuICAgICAgICB2YXIgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVcIik7XG4gICAgICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZS52YWx1ZTtcbiAgICB9XG4gICAgLy9NdXRlXG4gICAgZnVuY3Rpb24gdG9nZ2xlTXV0ZSgpIHtcbiAgICAgICAgdmlkZW8ubXV0ZWQgPSAhdmlkZW8ubXV0ZWQ7XG4gICAgfVxuICAgIC8vUHJvZ3Jlc3NiYXJcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdXBkYXRlUHJvZ3Jlc3MsIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICBpZiAodmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IoKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IHZhbHVlICsgXCIlXCI7XG4gICAgfVxuXG5cbiAgICB2YXIgc2Vla0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NcIik7XG5cblxuICAgIC8vIFVwZGF0ZSB0aGUgc2VlayBiYXIgYXMgdGhlIHZpZGVvIHBsYXlzXG4gICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHNsaWRlciB2YWx1ZVxuICAgICAgdmFyIHZhbHVlID0gKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHNsaWRlciB2YWx1ZVxuICAgICAgc2Vla0Jhci52YWx1ZSA9IHZhbHVlO1xuICAgIH0pO1xuIiwiJChcIi5tYXJrZXJcIikuZHJhZ2dhYmxlKHtcbiAgICBheGlzOiAneCcsXG4gICAgY29udGFpbm1lbnQ6ICdwcm9kdWN0LXRpbWVsaW5lJyxcbiAgICBzdGFydDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICBwb3NUb3BBcnJheSA9IFtdO1xuICAgICAgICBwb3NMZWZ0QXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgdGhpc2Nzc3RvcCA9ICQodGhpcykuY3NzKCd0b3AnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpc2Nzc3RvcCA9PSAnYXV0bycpIHRoaXNjc3N0b3AgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgIHRoaXNjc3NsZWZ0ID0gJCh0aGlzKS5jc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpc2Nzc2xlZnQgPT0gJ2F1dG8nKSB0aGlzY3NzbGVmdCA9IDA7IC8vIEZvciBJRVxuXG4gICAgICAgICAgICAgICAgcG9zVG9wQXJyYXlbaV0gPSBwYXJzZUludCh0aGlzY3NzdG9wKTtcbiAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXlbaV0gPSBwYXJzZUludCh0aGlzY3NzbGVmdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJlZ2ludG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgIGJlZ2lubGVmdCA9ICQodGhpcykub2Zmc2V0KCkubGVmdDtcbiAgICB9LFxuICAgIGRyYWc6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgdmFyIHRvcGRpZmYgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIGJlZ2ludG9wO1xuICAgICAgICB2YXIgbGVmdGRpZmYgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQgLSBiZWdpbmxlZnQ7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIHBvc1RvcEFycmF5W2ldICsgdG9wZGlmZik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2xlZnQnLCBwb3NMZWZ0QXJyYXlbaV0gKyBsZWZ0ZGlmZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiLy8galF1ZXJ5IGZ1bmN0aW9ucyBmcm9tIFNNXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICQoJy52aWV3LW9wdGlvbnMgLmxpc3QnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnZpZXctb3B0aW9ucyBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcuaXRlbXMnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdncmlkJykuZmFkZUluKDIwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy52aWV3LW9wdGlvbnMgLmdyaWQnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLnZpZXctb3B0aW9ucyBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcuaXRlbXMnKS5mYWRlT3V0KDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdncmlkJykuZmFkZUluKDIwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy5tb2RhbCAuaXRlbS10aHVtYicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2xvbmUoKS5hcHBlbmRUbygnLml0ZW1zLmFkZGVkJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuYWRkLXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG5cbiAgICAgICAgdmFyICRkaXYgPSAkKFwiPGRpdj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtYmFyIHVpLXdpZGdldC1jb250ZW50XCJcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciAkc2VnU3RhcnQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctc3RhcnRcIlxuICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICB2YXIgJHNlZ0VuZCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1lbmRcIlxuICAgICAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgICAgICB2YXIgJGRlbFNlZyA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcImRlbC1zZWdcIlxuICAgICAgICB9KS5odG1sKCc8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiaG92ZXItaGVscFwiPkRlbGV0ZSBzZWdtZW50PC9zcGFuPjwvYT48L3NwYW4+Jyk7XG4gICAgICAgICRkaXYuYXBwZW5kKCRzZWdTdGFydCwgJHNlZ0VuZCwgJGRlbFNlZyk7XG5cblxuICAgICAgICAkZGl2LmNzcygnbGVmdCcsIG5ld1BvcyArICclJyk7XG4gICAgICAgICRkaXYuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAkZGl2LnJlc2l6YWJsZSh7XG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgICAgICB9KTtcbiAgICAgICAgJGRpdi5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkZGl2LnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cblxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIucHJvZHVjdC10aW1lbGluZVwiKS5hcHBlbmQoJGRpdik7XG4gICAgICAgICRkaXYuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJGRpdi5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAkZGl2LmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJGRpdi5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkZGl2LmNzcygnd2lkdGgnKSkpKTtcblxuICAgICAgICAkZGl2LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkZGVsU2VnLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIudGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCJcbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZSh7XG4gICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5kZWwtc2VnJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZWRpdC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcucHJvZHVjdC1lZGl0LXByb21wdCcpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZGVsZXRlLXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3VGltZSA9IHRvdGFsRHVyYXRpb24gKiBwZXJjZW50YWdlO1xuXG4gICAgICAgICAgICAkKCcuY3VycmVudCcpLnRleHQoY29udmVydFNlY29uZHNUb1RpbWUobmV3VGltZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSAxNTE7XG59KTtcblxuZnVuY3Rpb24gY29udmVydFNlY29uZHNUb1RpbWUoc2VjKSB7XG4gICAgdG90YWxTZWMgPSBNYXRoLnJvdW5kKHNlYyk7XG4gICAgdmFyIGhvdXJzID0gcGFyc2VJbnQodG90YWxTZWMgLyAzNjAwKSAlIDI0O1xuICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQodG90YWxTZWMgLyA2MCkgJSA2MDtcbiAgICB2YXIgc2Vjb25kcyA9IHRvdGFsU2VjICUgNjA7XG5cbiAgICB2YXIgcmVzdWx0ID0gKGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnMpICsgXCI6XCIgKyAobWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcykgKyBcIjpcIiArIChzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvblRvVGltZShwb3NpdGlvbikge1xuICAgIHZhciB0b3RhbER1cmF0aW9uID0gMTUxO1xuXG4gICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuXG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludChwb3NpdGlvbik7XG4gICAgdmFyIHBlcmNlbnRhZ2UgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aDtcbiAgICB2YXIgbmV3VGltZSA9IHRvdGFsRHVyYXRpb24gKiBwZXJjZW50YWdlO1xuXG4gICAgcmV0dXJuIGNvbnZlcnRTZWNvbmRzVG9UaW1lKG5ld1RpbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRUaW1lbGluZSgpIHtcbiAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgIHZhciAkZGl2ID0gJChcIjxkaXY+XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtYmFyIHVpLXdpZGdldC1jb250ZW50XCJcbiAgICB9KTtcbiAgICB2YXIgJHNlZ1N0YXJ0ID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJzZWctc3RhcnRcIlxuICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgdmFyICRzZWdFbmQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1lbmRcIlxuICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgdmFyICRkZWxTZWcgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcImRlbC1zZWdcIlxuICAgIH0pLmh0bWwoJzxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJob3Zlci1oZWxwXCI+RGVsZXRlIHNlZ21lbnQ8L3NwYW4+PC9hPjwvc3Bhbj4nKTtcbiAgICAkZGl2LmFwcGVuZCgkc2VnU3RhcnQsICRzZWdFbmQsICRkZWxTZWcpO1xuXG5cbiAgICAkZGl2LmNzcygnbGVmdCcsIG5ld1BvcyArICclJyk7XG4gICAgJGRpdi5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgJGRpdi5yZXNpemFibGUoe1xuICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICB9KTtcbiAgICAkZGl2LmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkZGl2LnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cblxuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5wcm9kdWN0LXRpbWVsaW5lXCIpLmFwcGVuZCgkZGl2KTtcbiAgICAkZGl2LmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCRkaXYuY3NzKCdsZWZ0JykpKTtcbiAgICAkZGl2LmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJGRpdi5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkZGl2LmNzcygnd2lkdGgnKSkpKTtcblxuICAgICRkaXYuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICB9XG4iLCIvKiBTY3JvbGxpbmcgc2hhZG93cyBieSBcIm1pbmRzdG9ybVwiLiBodHRwczovL2NvZGVwZW4uaW8vbWluZHN0b3JtL3Blbi9FYml5SiovXG5cblxuICAgIHZhciBzY3JvbGxTaGFkb3cgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWxlbSwgd2lkdGgsIGhlaWdodCwgb2Zmc2V0LFxuICAgICAgICBzaGFkb3dUb3AsIHNoYWRvd0JvdHRvbSxcbiAgICAgICAgdGltZW91dDtcblxuICAgICAgZnVuY3Rpb24gaW5pdFNoYWRvd3MoKSB7XG4gICAgICAgIHNoYWRvd1RvcCA9ICQoXCI8ZGl2PlwiKVxuICAgICAgICAgIC5hZGRDbGFzcyhcInNoYWRvdy10b3BcIilcbiAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gICAgICAgIHNoYWRvd0JvdHRvbSA9ICQoXCI8ZGl2PlwiKVxuICAgICAgICAgIC5hZGRDbGFzcyhcInNoYWRvdy1ib3R0b21cIilcbiAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNhbGNQb3NpdGlvbigpIHtcbiAgICAgICAgd2lkdGggPSBlbGVtLm91dGVyV2lkdGgoKTtcbiAgICAgICAgaGVpZ2h0ID0gZWxlbS5vdXRlckhlaWdodCgpO1xuICAgICAgICBvZmZzZXQgPSBlbGVtLnBvc2l0aW9uKCk7XG5cbiAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgIHNoYWRvd1RvcC5jc3Moe1xuICAgICAgICAgIHdpZHRoOiB3aWR0aCArIFwicHhcIixcbiAgICAgICAgICB0b3A6IG9mZnNldC50b3AgKyBcInB4XCIsXG4gICAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICAgICAgfSk7XG4gICAgICAgIHNoYWRvd0JvdHRvbS5jc3Moe1xuICAgICAgICAgIHdpZHRoOiB3aWR0aCArIFwicHhcIixcbiAgICAgICAgICB0b3A6IChvZmZzZXQudG9wICsgaGVpZ2h0IC0gMjApICsgXCJweFwiLFxuICAgICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0ICsgXCJweFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgZWxlbS5vZmYoXCJzY3JvbGwuc2hhZG93XCIpO1xuICAgICAgICBlbGVtLm9uKFwic2Nyb2xsLnNoYWRvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoZWxlbS5zY3JvbGxUb3AoKSA+IDApIHtcbiAgICAgICAgICAgIHNoYWRvd1RvcC5mYWRlSW4oMjAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhZG93VG9wLmZhZGVPdXQoMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkZWQgT1Igc3ludGF4IHRvIG1ha2Ugc2hhZG93IGludmlzaWJsZSBpbml0aWFsbHlcbiAgICAgICAgICBpZiAoZWxlbS5zY3JvbGxUb3AoKSArIGhlaWdodCA+PSBlbGVtWzBdLnNjcm9sbEhlaWdodCB8fCBlbGVtWzBdLnNjcm9sbEhlaWdodCA8ICgkKHdpbmRvdykuaGVpZ2h0KCkqIDAuNzApKSB7XG4gICAgICAgICAgICBzaGFkb3dCb3R0b20uZmFkZU91dCgyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVJbigyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemUuc2hhZG93XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhbGNQb3NpdGlvbigpO1xuICAgICAgICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbihwYXIpIHtcbiAgICAgICAgICBlbGVtID0gJChwYXIpO1xuICAgICAgICAgIGluaXRTaGFkb3dzKCk7XG4gICAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgICAgYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICBhZGRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogY2FsY1Bvc2l0aW9uXG4gICAgICB9O1xuXG4gICAgfSgpKTtcblxuICAgIC8vIHN0YXJ0XG4gICAgc2Nyb2xsU2hhZG93LmluaXQoXCIuY2FyZC1jb250YWluZXJcIik7XG4iXX0=
