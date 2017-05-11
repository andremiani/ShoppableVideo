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
        $scope.libraryProducts = [{
                productTitle: 'Smördeg',
                imageURL: '../assets/images/Smordeg-01.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Edibles"
            },
            {
                productTitle: 'Smördeg Eko',
                imageURL: '../assets/images/Smordeg2-01.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Edibles"
            },
            {
                productTitle: 'Smördeg Lyx',
                imageURL: '../assets/images/Smordeg3.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Edibles"
            },
            {
                productTitle: 'Ägg Fri.',
                imageURL: '../assets/images/Ägg - Frigående.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Edibles"
            },
            {
                productTitle: 'Ägg',
                imageURL: '../assets/images/Ägg-Vanlig.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Edibles"
            },
            {
                productTitle: 'Ägg Eko',
                imageURL: '../assets/images/Ägg-eko.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Edibles"
            },
            {
                productTitle: 'Kniv Japansk',
                imageURL: '../assets/images/Kniv-Avancerad.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Kniv Barn',
                imageURL: '../assets/images/Kniv-Barn.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Kniv Stor',
                imageURL: '../assets/images/Kniv-Större-01.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Förkläde Brun',
                imageURL: '../assets/images/Förkläde-läder-01.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Others"
            },
            {
                productTitle: 'Förkläde Tyg',
                imageURL: '../assets/images/Förkläde-Tyg.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Others"
            },
            {
                productTitle: 'Äggklocka',
                imageURL: '../assets/images/Äggklocka.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Others"
            },
            {
                productTitle: 'Pensel Silikon',
                imageURL: '../assets/images/pensel-silicon.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Kavel rund',
                imageURL: '../assets/images/kavel-rund.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Kavel Barn',
                imageURL: '../assets/images/kavel-barn.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Kavel',
                imageURL: '../assets/images/Kavel.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Gjutjärn',
                imageURL: '../assets/images/stekpanna-gjutjärn.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Stekpanna',
                imageURL: '../assets/images/Stekpanna.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Multipensel',
                imageURL: '../assets/images/pensel-med-kniv.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
                category: "Tools"
            },
            {
                productTitle: 'Pensel Trä',
                imageURL: '../assets/images/pensel-trä.png',
                link: "",
                specialOffer: "",
                buttonText: "",
                targetGroup: "",
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
                imageURL: '../assets/images/placeholder.png',
                category: ""
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


        var seekBar = document.getElementById("progress");


        // Update the seek bar as the video plays
        video.addEventListener("timeupdate", function() {
            // Calculate the slider value
            var value = (100 / video.duration) * video.currentTime;

            // Update the slider value
            seekBar.value = value;
        });

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
          if (elem.scrollTop() + height >= elem[0].scrollHeight || elem[0].scrollHeight < (height * 0.65)) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JpcHQuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNsYXJlIHRoZSBzaG9wcGFibGVWaWRlbyBtb2R1bGUgYW5kIGl0cyBkZXBlbmRlbmNpZXNcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc2hvcHBhYmxlVmlkZW8nLCBbJ25nQW5pbWF0ZScsICduZ1Nhbml0aXplJywgJ3VpLmJvb3RzdHJhcCcsICd1aS5zb3J0YWJsZSddKTtcbi8vIERlY2xhcmUgdGhlIEFwcEN0cmwgY29udHJvbGxlclxuYXBwXG4gICAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuXG5cbiAgICAgICAgLy8gQ2FyZCBjb3VudGVyLCB1c2VkIGZvciBjYXJkIG5hbWluZ1xuICAgICAgICB2YXIgY2FyZENvdW50ZXIgPSAxO1xuXG4gICAgICAgIC8vIFByb2R1Y3QgY291bnRlciwgdXNlZCBmb3IgcHJvZHVjdCBuYW1pbmdcbiAgICAgICAgdmFyIHByb2R1Y3RDb3VudGVyID0gXCJcIjtcblxuXG4gICAgICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAgICAgJHNjb3BlLnZpZGVvVGl0bGUgPSBcIlwiO1xuXG5cbiAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wbGF5LnBuZ1wiO1xuICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9tdXRlLnBuZ1wiO1xuXG5cbiAgICAgICAgLy9QbGF5IGFuZCBwYXVzZVxuICAgICAgICAkc2NvcGUudG9nZ2xlUGxheVBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgdmFyIHBsYXlwYXVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheXBhdXNlXCIpO1xuICAgICAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCB8fCB2aWRlby5lbmRlZCkge1xuICAgICAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucGxheVBhdXNlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3BhdXNlLnBuZ1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGxheS5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdENhcmRzXG4gICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMgPSBbXTtcblxuICAgICAgICAvL0NvbGxhcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdCBjYXJkcywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9Db2xsYXNwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0cywgdHJ1ZSBpZiBjb2xsYXBzZWRcbiAgICAgICAgJHNjb3BlLmlzUHJvZHVjdENvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vVGVsbHMgdWktc29ydGFibGUgd2hhdCBhbmQgaG93IHRvIHNvcnQgcHJvZHVjdHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlUHJvZHVjdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdCcsXG4gICAgICAgICAgICAvLyBpdGVtczogJyAucGFuZWw6bm90KC5wYW5lbC1oZWFkaW5nKSdcbiAgICAgICAgICAgIGF4aXM6ICd5J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0cyBpbiB0aGUgbGlicmFyeVxuICAgICAgICAkc2NvcGUubGlicmFyeVByb2R1Y3RzID0gW3tcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTbcO2cmRlZycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWctMDEucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVkaWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdTbcO2cmRlZyBFa28nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9TbW9yZGVnMi0wMS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWRpYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnIEx5eCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWczLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFZGlibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnw4RnZyBGcmkuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZyAtIEZyaWfDpWVuZGUucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVkaWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1WYW5saWcucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVkaWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnIEVrbycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2ctZWtvLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFZGlibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBKYXBhbnNrJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1BdmFuY2VyYWQucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1CYXJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0tuaXYgU3RvcicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtU3TDtnJyZS0wMS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdGw7Zya2zDpGRlIEJydW4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLWzDpGRlci0wMS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnRsO2cmtsw6RkZSBUeWcnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLVR5Zy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnw4RnZ2tsb2NrYScsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2drbG9ja2EucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1BlbnNlbCBTaWxpa29uJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLXNpbGljb24ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS2F2ZWwgcnVuZCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLXJ1bmQucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS2F2ZWwgQmFybicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLWJhcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS2F2ZWwnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9LYXZlbC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdHanV0asOkcm4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9zdGVrcGFubmEtZ2p1dGrDpHJuLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1N0ZWtwYW5uYScsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1N0ZWtwYW5uYS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdNdWx0aXBlbnNlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1tZWQta25pdi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdQZW5zZWwgVHLDpCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC10csOkLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgXTtcblxuICAgICAgICAvLyBBcnJheSB0aGF0IHN0b3JlIGFsbCB0aGUgY2F0ZWdvcmllcyB0aGF0IGFyZSB1c2VkIGluIHRoZSBkcm9wZG93bi1saXN0XG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gW107XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubGlicmFyeVByb2R1Y3RzLCBmdW5jdGlvbih2YWx1ZSwgY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllcy5pbmRleE9mKHZhbHVlLmNhdGVnb3J5KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLnB1c2godmFsdWUuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3QgY2FyZHNcbiAgICAgICAgJHNjb3BlLnNvcnRhYmxlQ2FyZE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoYW5kbGU6ICcucHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIC8vIGl0ZW1zOiAnIC5wYW5lbDpub3QoLnBhbmVsLWhlYWRpbmcpJ1xuICAgICAgICAgICAgYXhpczogJ3knXG4gICAgICAgIH07XG5cblxuXG4gICAgICAgIC8vIEFkZCBwcm9kdWN0Q2FyZCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgICB2YXIgYWRkUHJvZHVjdENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlOiAnUHJvZHVjdCBDYXJkICcgKyBjYXJkQ291bnRlcixcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FyZENvdW50ZXIrKztcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbJHNjb3BlLnByb2R1Y3RDYXJkcy5sZW5ndGggLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vQWRkIHByb2R1Y3QgdG8gYSBwcm9kdWN0IGNhcmRcbiAgICAgICAgdmFyIGFkZFByb2R1Y3QgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgcHJvZHVjdENvdW50ZXIgPSAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGggKyAxO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUHJvZHVjdCAnICsgcHJvZHVjdENvdW50ZXIsXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3Li4uJyxcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6ICcyMCUnLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdCdXkgbm93IGJhYnknLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiAnUmljaCBwZW9wbGUnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBjYXJkIGJ5IGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBjYXJkQ291bnRlci0tO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGJ5IGluZGV4IGFuZCBwcm9kdWN0IGNhcmQgaW5kZXhcbiAgICAgICAgdmFyIHJlbW92ZVByb2R1Y3QgPSBmdW5jdGlvbihwcm9kdWN0Q2FyZEluZGV4LCBldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbcHJvZHVjdENhcmRJbmRleF0ucHJvZHVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vVmlkZW8gY29udHJvbGxlclxuICAgICAgICAvL1ZvbHVtZVxuICAgICAgICBmdW5jdGlvbiBzZXRWb2x1bWUoKSB7XG4gICAgICAgICAgICB2YXIgdm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVcIik7XG4gICAgICAgICAgICB2aWRlby52b2x1bWUgPSB2b2x1bWUudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9NdXRlXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU11dGUoKSB7XG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcbiAgICAgICAgfVxuICAgICAgICAvL1Byb2dyZXNzYmFyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB1cGRhdGVQcm9ncmVzcywgZmFsc2UpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgICAgICAgICBpZiAodmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKCgxMDAgLyB2aWRlby5kdXJhdGlvbikgKiB2aWRlby5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IHZhbHVlICsgXCIlXCI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZhciBzZWVrQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcblxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2VlayBiYXIgYXMgdGhlIHZpZGVvIHBsYXlzXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzbGlkZXIgdmFsdWVcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICgxMDAgLyB2aWRlby5kdXJhdGlvbikgKiB2aWRlby5jdXJyZW50VGltZTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzbGlkZXIgdmFsdWVcbiAgICAgICAgICAgIHNlZWtCYXIudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgc2NvcGUgZnVuY3Rpb25zXG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0Q2FyZCA9IGFkZFByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdCA9IGFkZFByb2R1Y3Q7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0Q2FyZCA9IHJlbW92ZVByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdCA9IHJlbW92ZVByb2R1Y3Q7XG5cbiAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkIDUgcHJvZHVjdENhcmRzXG4gICAgICAgIC8qZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGFkZFByb2R1Y3RDYXJkKCk7XG4gICAgICAgIH0qL1xuXG4gICAgfV0pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAvKmNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vblNsaWRlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sKi9cbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHNsaWRlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHNsaWRlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pXG4gICAgLmRpcmVjdGl2ZSgnbWFya2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUub25EcmFnID0gZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm1hcmtlclZhbHVlID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0xlZnRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc2Nzc2xlZnQgPSAkKHRoaXMpLmNzcygnbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc2Nzc2xlZnQgPT0gJ2F1dG8nKSB0aGlzY3NzbGVmdCA9IDA7IC8vIEZvciBJRVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0QXJyYXlbaV0gPSBwYXJzZUludChtYXJrZXJWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2lubGVmdCA9ICQodGhpcykub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVmdGRpZmYgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQgLSBiZWdpbmxlZnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnbGVmdCcsIHBvc0xlZnRBcnJheVtpXSArIGxlZnRkaWZmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kbWFya2VyID0gJChlbGVtZW50KS5kcmFnZ2FibGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9KVxuICAgIC5kaXJlY3RpdmUoJ2FkZFRpbWVsaW5lJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgICAgICAvKmNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgICAgICAgICAgICRzY29wZS5vblNsaWRlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBvciBzZXQgaXQgb24gdGhlIG1vZGVsXG4gICAgICAgICAgICAgIC8vIERhdGFNb2RlbC5tb2RlbCA9IHVpLnZhbHVlO1xuICAgICAgICAgICAgICAvLyBhZGQgdG8gYW5ndWxhciBkaWdlc3QgY3ljbGVcbiAgICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sKi9cbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIHNsaWRlciBvbiBsb2FkXG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHNsaWRlciA9ICQoZWxlbWVudCkuZHJhZ2dhYmxlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfSk7XG4iLCIkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgIGF4aXM6ICd4JyxcbiAgICBjb250YWlubWVudDogJ3Byb2R1Y3QtdGltZWxpbmUnLFxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHBvc1RvcEFycmF5ID0gW107XG4gICAgICAgIHBvc0xlZnRBcnJheSA9IFtdO1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzY3NzdG9wID0gJCh0aGlzKS5jc3MoJ3RvcCcpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzdG9wID09ICdhdXRvJykgdGhpc2Nzc3RvcCA9IDA7IC8vIEZvciBJRVxuXG4gICAgICAgICAgICAgICAgdGhpc2Nzc2xlZnQgPSAkKHRoaXMpLmNzcygnbGVmdCcpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzbGVmdCA9PSAnYXV0bycpIHRoaXNjc3NsZWZ0ID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICBwb3NUb3BBcnJheVtpXSA9IHBhcnNlSW50KHRoaXNjc3N0b3ApO1xuICAgICAgICAgICAgICAgIHBvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KHRoaXNjc3NsZWZ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYmVnaW50b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgYmVnaW5sZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgIH0sXG4gICAgZHJhZzogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICB2YXIgdG9wZGlmZiA9ICQodGhpcykub2Zmc2V0KCkudG9wIC0gYmVnaW50b3A7XG4gICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAkKFwiLmdyb3VwXCIpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywgcG9zVG9wQXJyYXlbaV0gKyB0b3BkaWZmKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnbGVmdCcsIHBvc0xlZnRBcnJheVtpXSArIGxlZnRkaWZmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCIvLyBqUXVlcnkgZnVuY3Rpb25zIGZyb20gU01cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgJCgnLnZpZXctb3B0aW9ucyAubGlzdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcudmlldy1vcHRpb25zIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5pdGVtcycpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2dyaWQnKS5mYWRlSW4oMjAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnLnZpZXctb3B0aW9ucyAuZ3JpZCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcudmlldy1vcHRpb25zIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5pdGVtcycpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2dyaWQnKS5mYWRlSW4oMjAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnLm1vZGFsIC5pdGVtLXRodW1iJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jbG9uZSgpLmFwcGVuZFRvKCcuaXRlbXMuYWRkZWQnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgICQoJy5hZGQtdGltZWxpbmUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgICAgIHZhciBuZXdQb3MgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aCAqIDEwMDtcblxuICAgICAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1iYXIgdWktd2lkZ2V0LWNvbnRlbnRcIlxuICAgICAgICB9KTtcbiAgICAgICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1zdGFydFwiXG4gICAgICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLWVuZFwiXG4gICAgICAgIH0pLnRleHQoJ2hoOm1tOnNzJyk7XG4gICAgICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwiZGVsLXNlZ1wiXG4gICAgICAgIH0pLmh0bWwoJzxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJob3Zlci1oZWxwXCI+RGVsZXRlIHNlZ21lbnQ8L3NwYW4+PC9hPjwvc3Bhbj4nKTtcbiAgICAgICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgICAgICRkaXYuY3NzKCdsZWZ0JywgbmV3UG9zICsgJyUnKTtcbiAgICAgICAgJGRpdi5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgICAgIH0pO1xuICAgICAgICAkZGl2LmRyYWdnYWJsZSh7XG4gICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRkaXYucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuXG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5wcm9kdWN0LXRpbWVsaW5lXCIpLmFwcGVuZCgkZGl2KTtcbiAgICAgICAgJGRpdi5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkZGl2LmNzcygnbGVmdCcpKSk7XG4gICAgICAgICRkaXYuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkZGl2LmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCRkaXYuY3NzKCd3aWR0aCcpKSkpO1xuXG4gICAgICAgICRkaXYuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRkZWxTZWcuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiBcIi50aW1lbGluZVwiLFxuICAgICAgICBheGlzOiBcInhcIlxuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKHtcbiAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgfSk7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmRlbC1zZWcnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgICQoJy5lZGl0LXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5wcm9kdWN0LWVkaXQtcHJvbXB0Jykuc2xpZGVUb2dnbGUoMjAwKTtcbiAgICB9KTtcblxuICAgICQoJy5kZWxldGUtdGltZWxpbmUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgICQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUludCgkKCcudGltZWxpbmUnKS5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBjdXJyZW50UG9zIC8gdG90YWxXaWR0aDtcbiAgICAgICAgICAgIHZhciBuZXdUaW1lID0gdG90YWxEdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICAgICAgICAgICQoJy5jdXJyZW50JykudGV4dChjb252ZXJ0U2Vjb25kc1RvVGltZShuZXdUaW1lKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgdG90YWxEdXJhdGlvbiA9IDE1MTtcbn0pO1xuXG5mdW5jdGlvbiBjb252ZXJ0U2Vjb25kc1RvVGltZShzZWMpIHtcbiAgICB0b3RhbFNlYyA9IE1hdGgucm91bmQoc2VjKTtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDM2MDApICUgMjQ7XG4gICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDYwKSAlIDYwO1xuICAgIHZhciBzZWNvbmRzID0gdG90YWxTZWMgJSA2MDtcblxuICAgIHZhciByZXN1bHQgPSAoaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycykgKyBcIjpcIiArIChtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzKSArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9UaW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSAxNTE7XG5cbiAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG5cbiAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KHBvc2l0aW9uKTtcbiAgICB2YXIgcGVyY2VudGFnZSA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoO1xuICAgIHZhciBuZXdUaW1lID0gdG90YWxEdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICByZXR1cm4gY29udmVydFNlY29uZHNUb1RpbWUobmV3VGltZSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRpbWVsaW5lKCkge1xuICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgdmFyIG5ld1BvcyA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoICogMTAwO1xuXG4gICAgdmFyICRkaXYgPSAkKFwiPGRpdj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1iYXIgdWktd2lkZ2V0LWNvbnRlbnRcIlxuICAgIH0pO1xuICAgIHZhciAkc2VnU3RhcnQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcInNlZy1zdGFydFwiXG4gICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICB2YXIgJHNlZ0VuZCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwic2VnLWVuZFwiXG4gICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICB2YXIgJGRlbFNlZyA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwiZGVsLXNlZ1wiXG4gICAgfSkuaHRtbCgnPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImhvdmVyLWhlbHBcIj5EZWxldGUgc2VnbWVudDwvc3Bhbj48L2E+PC9zcGFuPicpO1xuICAgICRkaXYuYXBwZW5kKCRzZWdTdGFydCwgJHNlZ0VuZCwgJGRlbFNlZyk7XG5cblxuICAgICRkaXYuY3NzKCdsZWZ0JywgbmV3UG9zICsgJyUnKTtcbiAgICAkZGl2LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAkZGl2LnJlc2l6YWJsZSh7XG4gICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgIH0pO1xuICAgICRkaXYuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICRkaXYucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLnByb2R1Y3QtdGltZWxpbmVcIikuYXBwZW5kKCRkaXYpO1xuICAgICRkaXYuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJGRpdi5jc3MoJ2xlZnQnKSkpO1xuICAgICRkaXYuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkZGl2LmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCRkaXYuY3NzKCd3aWR0aCcpKSkpO1xuXG4gICAgJGRpdi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkZGVsU2VnLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIH1cbiIsIi8qIFNjcm9sbGluZyBzaGFkb3dzIGJ5IFwibWluZHN0b3JtXCIuIGh0dHBzOi8vY29kZXBlbi5pby9taW5kc3Rvcm0vcGVuL0ViaXlKKi9cblxuXG4gICAgdmFyIHNjcm9sbFNoYWRvdyA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtLCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXQsXG4gICAgICAgIHNoYWRvd1RvcCwgc2hhZG93Qm90dG9tLFxuICAgICAgICB0aW1lb3V0O1xuXG4gICAgICBmdW5jdGlvbiBpbml0U2hhZG93cygpIHtcbiAgICAgICAgc2hhZG93VG9wID0gJChcIjxkaXY+XCIpXG4gICAgICAgICAgLmFkZENsYXNzKFwic2hhZG93LXRvcFwiKVxuICAgICAgICAgIC5pbnNlcnRBZnRlcihlbGVtKTtcbiAgICAgICAgc2hhZG93Qm90dG9tID0gJChcIjxkaXY+XCIpXG4gICAgICAgICAgLmFkZENsYXNzKFwic2hhZG93LWJvdHRvbVwiKVxuICAgICAgICAgIC5pbnNlcnRBZnRlcihlbGVtKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2FsY1Bvc2l0aW9uKCkge1xuICAgICAgICB3aWR0aCA9IGVsZW0ub3V0ZXJXaWR0aCgpO1xuICAgICAgICBoZWlnaHQgPSBlbGVtLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIG9mZnNldCA9IGVsZW0ucG9zaXRpb24oKTtcblxuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgc2hhZG93VG9wLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICsgXCJweFwiLFxuICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcCArIFwicHhcIixcbiAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCArIFwicHhcIlxuICAgICAgICB9KTtcbiAgICAgICAgc2hhZG93Qm90dG9tLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICsgXCJweFwiLFxuICAgICAgICAgIHRvcDogKG9mZnNldC50b3AgKyBoZWlnaHQgLSAyMCkgKyBcInB4XCIsXG4gICAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBlbGVtLm9mZihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICAgIGVsZW0ub24oXCJzY3JvbGwuc2hhZG93XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpID4gMCkge1xuICAgICAgICAgICAgc2hhZG93VG9wLmZhZGVJbigyMDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGFkb3dUb3AuZmFkZU91dCgyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGRlZCBPUiBzeW50YXggdG8gbWFrZSBzaGFkb3cgaW52aXNpYmxlIGluaXRpYWxseVxuICAgICAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpICsgaGVpZ2h0ID49IGVsZW1bMF0uc2Nyb2xsSGVpZ2h0IHx8IGVsZW1bMF0uc2Nyb2xsSGVpZ2h0IDwgKGhlaWdodCAqIDAuNjUpKSB7XG4gICAgICAgICAgICBzaGFkb3dCb3R0b20uZmFkZU91dCgyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVJbigyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemUuc2hhZG93XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhbGNQb3NpdGlvbigpO1xuICAgICAgICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbihwYXIpIHtcbiAgICAgICAgICBlbGVtID0gJChwYXIpO1xuICAgICAgICAgIGluaXRTaGFkb3dzKCk7XG4gICAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgICAgYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICBhZGRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogY2FsY1Bvc2l0aW9uXG4gICAgICB9O1xuXG4gICAgfSgpKTtcblxuICAgIC8vIHN0YXJ0XG4gICAgc2Nyb2xsU2hhZG93LmluaXQoXCIuY2FyZC1jb250YWluZXJcIik7XG4iXX0=
