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

        /*$scope.showLibrary = false;

        $scope.showLibrary = function() {
            $scope.showLibrary = true;
        };

        $scope.hideLibrary = function() {
            $scope.showLibrary = false;
        };*/

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
        /*height = elem.css('max-height').replace('vh','');*/
        offset = elem.position();

        /*alert(height);*/
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hcmtlci1kcmFnZ2FibGUuanMiLCJzY3JpcHQuanMiLCJzY3JvbGxpbmctc2hhZG93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Nob3BwYWJsZVZpZGVvJywgWyduZ0FuaW1hdGUnLCAnbmdTYW5pdGl6ZScsICd1aS5ib290c3RyYXAnLCAndWkuc29ydGFibGUnXSk7XG4vLyBEZWNsYXJlIHRoZSBBcHBDdHJsIGNvbnRyb2xsZXJcbmFwcFxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuXG4gICAgICAgIC8vIENhcmQgY291bnRlciwgdXNlZCBmb3IgY2FyZCBuYW1pbmdcbiAgICAgICAgdmFyIGNhcmRDb3VudGVyID0gMTtcblxuICAgICAgICAvLyBQcm9kdWN0IGNvdW50ZXIsIHVzZWQgZm9yIHByb2R1Y3QgbmFtaW5nXG4gICAgICAgIHZhciBwcm9kdWN0Q291bnRlciA9IFwiXCI7XG5cblxuICAgICAgICAvLyBWYXJpYWJsZSBmb3IgdGhlIHZpZGVvIHRpdGxlXG4gICAgICAgICRzY29wZS52aWRlb1RpdGxlID0gXCJcIjtcblxuXG4gICAgICAgICRzY29wZS5wbGF5UGF1c2VTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGxheS5wbmdcIjtcbiAgICAgICAgJHNjb3BlLm11dGVTcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmdcIjtcblxuICAgICAgICAvL1BsYXkgYW5kIHBhdXNlXG4gICAgICAgICRzY29wZS50b2dnbGVNdXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gIHZhciBwbGF5cGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlwYXVzZVwiKTtcbiAgICAgICAgICAgIGlmICghdmlkZW8ubXV0ZSkge1xuICAgICAgICAgICAgICAgIHZpZGVvLm11dGUgPSAhdmlkZW8ubXV0ZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9zcGVha2VyLnBuZ1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWRlby5tdXRlID0gdmlkZW8ubXV0ZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUubXV0ZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9tdXRlLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vUGxheSBhbmQgcGF1c2VcbiAgICAgICAgJHNjb3BlLnRvZ2dsZVBsYXlQYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gIHZhciBwbGF5cGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlwYXVzZVwiKTtcbiAgICAgICAgICAgIGlmICh2aWRlby5wYXVzZWQgfHwgdmlkZW8uZW5kZWQpIHtcbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnBsYXlQYXVzZVNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wYXVzZS5wbmdcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucGxheVBhdXNlU3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3BsYXkucG5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RDYXJkc1xuICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzID0gW107XG5cbiAgICAgICAgLy9Db2xsYXBzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3QgY2FyZHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vQ29sbGFzcHNlIHZhcmlhYmxlIGZvciB0aGUgcHJvZHVjdHMsIHRydWUgaWYgY29sbGFwc2VkXG4gICAgICAgICRzY29wZS5pc1Byb2R1Y3RDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL1RlbGxzIHVpLXNvcnRhYmxlIHdoYXQgYW5kIGhvdyB0byBzb3J0IHByb2R1Y3RzXG4gICAgICAgICRzY29wZS5zb3J0YWJsZVByb2R1Y3RPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuICAgICAgICAvKiRzY29wZS5zaG93TGlicmFyeSA9IGZhbHNlO1xuXG4gICAgICAgICRzY29wZS5zaG93TGlicmFyeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnNob3dMaWJyYXJ5ID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuaGlkZUxpYnJhcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5zaG93TGlicmFyeSA9IGZhbHNlO1xuICAgICAgICB9OyovXG5cbiAgICAgICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHByb2R1Y3RzIGluIHRoZSBsaWJyYXJ5XG4gICAgICAgICRzY29wZS5saWJyYXJ5UHJvZHVjdHMgPSBbe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZy0wMS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWRpYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFZGlibGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVkaWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdnIEZyaS4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnIC0gRnJpZ8OlZW5kZS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWRpYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLVZhbmxpZy5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWRpYmxlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVkaWJsZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IEphcGFuc2snLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUF2YW5jZXJhZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLbml2IEJhcm4nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUJhcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnS25pdiBTdG9yJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1TdMO2cnJlLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdGw7Zya2zDpGRlIFR5ZycsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtVHlnLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICfDhGdna2xvY2thJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZ2tsb2NrYS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBydW5kJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtcnVuZC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCBCYXJuJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtYmFybi5wbmcnLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdLYXZlbCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ0dqdXRqw6RybicsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3N0ZWtwYW5uYS1nanV0asOkcm4ucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnU3Rla3Bhbm5hJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvU3Rla3Bhbm5hLnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ011bHRpcGVuc2VsJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLW1lZC1rbml2LnBuZycsXG4gICAgICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1BlbnNlbCBUcsOkJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLXRyw6QucG5nJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogXCJcIixcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEFycmF5IHRoYXQgc3RvcmUgYWxsIHRoZSBjYXRlZ29yaWVzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIGRyb3Bkb3duLWxpc3RcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBbXTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5saWJyYXJ5UHJvZHVjdHMsIGZ1bmN0aW9uKHZhbHVlLCBjYXRlZ29yeSkge1xuICAgICAgICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzLmluZGV4T2YodmFsdWUuY2F0ZWdvcnkpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMucHVzaCh2YWx1ZS5jYXRlZ29yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vVGVsbHMgdWktc29ydGFibGUgd2hhdCBhbmQgaG93IHRvIHNvcnQgcHJvZHVjdCBjYXJkc1xuICAgICAgICAkc2NvcGUuc29ydGFibGVDYXJkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhhbmRsZTogJy5wcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuXG5cbiAgICAgICAgLy8gQWRkIHByb2R1Y3RDYXJkIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgIHZhciBhZGRQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGU6ICdQcm9kdWN0IENhcmQgJyArIGNhcmRDb3VudGVyLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXJkQ291bnRlcisrO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1skc2NvcGUucHJvZHVjdENhcmRzLmxlbmd0aCAtIDFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9BZGQgcHJvZHVjdCB0byBhIHByb2R1Y3QgY2FyZFxuICAgICAgICB2YXIgYWRkUHJvZHVjdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICBwcm9kdWN0Q291bnRlciA9ICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGU6ICdQcm9kdWN0ICcgKyBwcm9kdWN0Q291bnRlcixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuLi4nLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxPZmZlcjogJzIwJScsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ0J1eSBub3cgYmFieScsXG4gICAgICAgICAgICAgICAgdGFyZ2V0R3JvdXA6ICdSaWNoIHBlb3BsZScsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZycsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGNhcmQgYnkgaW5kZXhcbiAgICAgICAgdmFyIHJlbW92ZVByb2R1Y3RDYXJkID0gZnVuY3Rpb24oZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIGNhcmRDb3VudGVyLS07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgYnkgaW5kZXggYW5kIHByb2R1Y3QgY2FyZCBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdCA9IGZ1bmN0aW9uKHByb2R1Y3RDYXJkSW5kZXgsIGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1twcm9kdWN0Q2FyZEluZGV4XS5wcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy9WaWRlbyBjb250cm9sbGVyXG4gICAgICAgIC8vVm9sdW1lXG4gICAgICAgIGZ1bmN0aW9uIHNldFZvbHVtZSgpIHtcbiAgICAgICAgICAgIHZhciB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZVwiKTtcbiAgICAgICAgICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL011dGVcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTXV0ZSgpIHtcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gIXZpZGVvLm11dGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vUHJvZ3Jlc3NiYXJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHVwZGF0ZVByb2dyZXNzLCBmYWxzZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gMDtcbiAgICAgICAgICAgIGlmICh2aWRlby5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IoKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gdmFsdWUgKyBcIiVcIjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFyIHNlZWtCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xuXG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBzZWVrIGJhciBhcyB0aGUgdmlkZW8gcGxheXNcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHNsaWRlciB2YWx1ZVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gKDEwMCAvIHZpZGVvLmR1cmF0aW9uKSAqIHZpZGVvLmN1cnJlbnRUaW1lO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNsaWRlciB2YWx1ZVxuICAgICAgICAgICAgc2Vla0Jhci52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBzY29wZSBmdW5jdGlvbnNcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3RDYXJkID0gYWRkUHJvZHVjdENhcmQ7XG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0ID0gYWRkUHJvZHVjdDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3RDYXJkID0gcmVtb3ZlUHJvZHVjdENhcmQ7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0ID0gcmVtb3ZlUHJvZHVjdDtcblxuICAgICAgICAvLyBGb3IgZGVtb25zdHJhdGlvbiBhZGQgNSBwcm9kdWN0Q2FyZHNcbiAgICAgICAgLypmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYWRkUHJvZHVjdENhcmQoKTtcbiAgICAgICAgfSovXG5cbiAgICB9XSlcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kc2xpZGVyID0gJChlbGVtZW50KS5kcmFnZ2FibGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSlcbiAgICAuZGlyZWN0aXZlKCdtYXJrZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgICAgICRzY29wZS5vbkRyYWcgPSBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubWFya2VyVmFsdWUgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3Igc2V0IGl0IG9uIHRoZSBtb2RlbFxuICAgICAgICAgICAgICAgICAgICAvLyBEYXRhTW9kZWwubW9kZWwgPSB1aS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIGFuZ3VsYXIgZGlnZXN0IGN5Y2xlXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5ncm91cFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzY3NzbGVmdCA9PSAnYXV0bycpIHRoaXNjc3NsZWZ0ID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Bvc0xlZnRBcnJheVtpXSA9IHBhcnNlSW50KG1hcmtlclZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5sZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ZGlmZiA9ICQodGhpcykub2Zmc2V0KCkubGVmdCAtIGJlZ2lubGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJncm91cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCB1cCBzbGlkZXIgb24gbG9hZFxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRtYXJrZXIgPSAkKGVsZW1lbnQpLmRyYWdnYWJsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pXG4gICAgLmRpcmVjdGl2ZSgnYWRkVGltZWxpbmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgICAgIC8qY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykge1xuICAgICAgICAgICAgJHNjb3BlLm9uU2xpZGUgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIG9yIHNldCBpdCBvbiB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgLy8gRGF0YU1vZGVsLm1vZGVsID0gdWkudmFsdWU7XG4gICAgICAgICAgICAgIC8vIGFkZCB0byBhbmd1bGFyIGRpZ2VzdCBjeWNsZVxuICAgICAgICAgICAgICAkc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwqL1xuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgc2xpZGVyIG9uIGxvYWRcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kc2xpZGVyID0gJChlbGVtZW50KS5kcmFnZ2FibGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9KTtcbiIsIiQoXCIubWFya2VyXCIpLmRyYWdnYWJsZSh7XG4gICAgYXhpczogJ3gnLFxuICAgIGNvbnRhaW5tZW50OiAncHJvZHVjdC10aW1lbGluZScsXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgcG9zVG9wQXJyYXkgPSBbXTtcbiAgICAgICAgcG9zTGVmdEFycmF5ID0gW107XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHRoaXNjc3N0b3AgPSAkKHRoaXMpLmNzcygndG9wJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3N0b3AgPT0gJ2F1dG8nKSB0aGlzY3NzdG9wID0gMDsgLy8gRm9yIElFXG5cbiAgICAgICAgICAgICAgICB0aGlzY3NzbGVmdCA9ICQodGhpcykuY3NzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNjc3NsZWZ0ID09ICdhdXRvJykgdGhpc2Nzc2xlZnQgPSAwOyAvLyBGb3IgSUVcblxuICAgICAgICAgICAgICAgIHBvc1RvcEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc3RvcCk7XG4gICAgICAgICAgICAgICAgcG9zTGVmdEFycmF5W2ldID0gcGFyc2VJbnQodGhpc2Nzc2xlZnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiZWdpbnRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICBiZWdpbmxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgfSxcbiAgICBkcmFnOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHZhciB0b3BkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBiZWdpbnRvcDtcbiAgICAgICAgdmFyIGxlZnRkaWZmID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0IC0gYmVnaW5sZWZ0O1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZ3JvdXBcIikpIHtcbiAgICAgICAgICAgICQoXCIuZ3JvdXBcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCBwb3NUb3BBcnJheVtpXSArIHRvcGRpZmYpO1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgcG9zTGVmdEFycmF5W2ldICsgbGVmdGRpZmYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIi8vIGpRdWVyeSBmdW5jdGlvbnMgZnJvbSBTTVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5saXN0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5ncmlkJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcubW9kYWwgLml0ZW0tdGh1bWInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNsb25lKCkuYXBwZW5kVG8oJy5pdGVtcy5hZGRlZCcpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFkZC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgdmFyIG5ld1BvcyA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoICogMTAwO1xuXG4gICAgICAgIHZhciAkZGl2ID0gJChcIjxkaXY+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgJHNlZ1N0YXJ0ID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRzZWdFbmQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRkZWxTZWcgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICAgICAgfSkuaHRtbCgnPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImhvdmVyLWhlbHBcIj5EZWxldGUgc2VnbWVudDwvc3Bhbj48L2E+PC9zcGFuPicpO1xuICAgICAgICAkZGl2LmFwcGVuZCgkc2VnU3RhcnQsICRzZWdFbmQsICRkZWxTZWcpO1xuXG5cbiAgICAgICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICAgICAkZGl2LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICAgICAgfSk7XG4gICAgICAgICRkaXYuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLnByb2R1Y3QtdGltZWxpbmVcIikuYXBwZW5kKCRkaXYpO1xuICAgICAgICAkZGl2LmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCRkaXYuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAgICAgJGRpdi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJChcIi5tYXJrZXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnRpbWVsaW5lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiXG4gICAgfSk7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoe1xuICAgICAgICBtYXhIZWlnaHQ6IDIwLFxuICAgICAgICBtaW5IZWlnaHQ6IDIwLFxuICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgIGF4aXM6IFwieFwiLFxuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCQodGhpcykuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3dpZHRoJykpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgJChcIi5wcm9kdWN0LWJhclwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKSkge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZW5hYmxlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuZGVsLXNlZycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmVkaXQtdGltZWxpbmUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnByb2R1Y3QtZWRpdC1wcm9tcHQnKS5zbGlkZVRvZ2dsZSgyMDApO1xuICAgIH0pO1xuXG4gICAgJCgnLmRlbGV0ZS10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJChcIi5tYXJrZXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoO1xuICAgICAgICAgICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgICAgICAgICAgJCgnLmN1cnJlbnQnKS50ZXh0KGNvbnZlcnRTZWNvbmRzVG9UaW1lKG5ld1RpbWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciB0b3RhbER1cmF0aW9uID0gMTUxO1xufSk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRTZWNvbmRzVG9UaW1lKHNlYykge1xuICAgIHRvdGFsU2VjID0gTWF0aC5yb3VuZChzZWMpO1xuICAgIHZhciBob3VycyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gMzYwMCkgJSAyNDtcbiAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gNjApICUgNjA7XG4gICAgdmFyIHNlY29uZHMgPSB0b3RhbFNlYyAlIDYwO1xuXG4gICAgdmFyIHJlc3VsdCA9IChob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzKSArIFwiOlwiICsgKG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXMpICsgXCI6XCIgKyAoc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25Ub1RpbWUocG9zaXRpb24pIHtcbiAgICB2YXIgdG90YWxEdXJhdGlvbiA9IDE1MTtcblxuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcblxuICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQocG9zaXRpb24pO1xuICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgdmFyIG5ld1RpbWUgPSB0b3RhbER1cmF0aW9uICogcGVyY2VudGFnZTtcblxuICAgIHJldHVybiBjb252ZXJ0U2Vjb25kc1RvVGltZShuZXdUaW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkVGltZWxpbmUoKSB7XG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwYXJzZUludCgkKCcubWFya2VyJykuY3NzKCdsZWZ0JykpO1xuICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICB2YXIgbmV3UG9zID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGggKiAxMDA7XG5cbiAgICB2YXIgJGRpdiA9ICQoXCI8ZGl2PlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgfSk7XG4gICAgdmFyICRzZWdTdGFydCA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgIHZhciAkc2VnRW5kID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICB9KS50ZXh0KCdoaDptbTpzcycpO1xuICAgIHZhciAkZGVsU2VnID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICB9KS5odG1sKCc8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiaG92ZXItaGVscFwiPkRlbGV0ZSBzZWdtZW50PC9zcGFuPjwvYT48L3NwYW4+Jyk7XG4gICAgJGRpdi5hcHBlbmQoJHNlZ1N0YXJ0LCAkc2VnRW5kLCAkZGVsU2VnKTtcblxuXG4gICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICRkaXYuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICRkaXYucmVzaXphYmxlKHtcbiAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgbWluSGVpZ2h0OiAyMCxcbiAgICAgICAgaGFuZGxlczogJ2UsIHcnXG4gICAgfSk7XG4gICAgJGRpdi5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIucHJvZHVjdC10aW1lbGluZVwiLFxuICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgZHJhZzogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCQodGhpcykuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG5cbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIucHJvZHVjdC10aW1lbGluZVwiKS5hcHBlbmQoJGRpdik7XG4gICAgJGRpdi5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkZGl2LmNzcygnbGVmdCcpKSk7XG4gICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAkZGl2LmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRkZWxTZWcuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgfVxuIiwiLyogU2Nyb2xsaW5nIHNoYWRvd3MgYnkgXCJtaW5kc3Rvcm1cIi4gaHR0cHM6Ly9jb2RlcGVuLmlvL21pbmRzdG9ybS9wZW4vRWJpeUoqL1xuXG5cbiAgICB2YXIgc2Nyb2xsU2hhZG93ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW0sIHdpZHRoLCBoZWlnaHQsIG9mZnNldCxcbiAgICAgICAgc2hhZG93VG9wLCBzaGFkb3dCb3R0b20sXG4gICAgICAgIHRpbWVvdXQ7XG5cbiAgICAgIGZ1bmN0aW9uIGluaXRTaGFkb3dzKCkge1xuICAgICAgICBzaGFkb3dUb3AgPSAkKFwiPGRpdj5cIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctdG9wXCIpXG4gICAgICAgICAgLmluc2VydEFmdGVyKGVsZW0pO1xuICAgICAgICBzaGFkb3dCb3R0b20gPSAkKFwiPGRpdj5cIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJzaGFkb3ctYm90dG9tXCIpXG4gICAgICAgICAgLmluc2VydEFmdGVyKGVsZW0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjYWxjUG9zaXRpb24oKSB7XG4gICAgICAgIHdpZHRoID0gZWxlbS5vdXRlcldpZHRoKCk7XG4gICAgICAgIGhlaWdodCA9IGVsZW0ub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgLypoZWlnaHQgPSBlbGVtLmNzcygnbWF4LWhlaWdodCcpLnJlcGxhY2UoJ3ZoJywnJyk7Ki9cbiAgICAgICAgb2Zmc2V0ID0gZWxlbS5wb3NpdGlvbigpO1xuXG4gICAgICAgIC8qYWxlcnQoaGVpZ2h0KTsqL1xuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgc2hhZG93VG9wLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICsgXCJweFwiLFxuICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcCArIFwicHhcIixcbiAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCArIFwicHhcIlxuICAgICAgICB9KTtcbiAgICAgICAgc2hhZG93Qm90dG9tLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICsgXCJweFwiLFxuICAgICAgICAgIHRvcDogKG9mZnNldC50b3AgKyBoZWlnaHQgLSAyMCkgKyBcInB4XCIsXG4gICAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgKyBcInB4XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICBlbGVtLm9mZihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICAgIGVsZW0ub24oXCJzY3JvbGwuc2hhZG93XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpID4gMCkge1xuICAgICAgICAgICAgc2hhZG93VG9wLmZhZGVJbigyMDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGFkb3dUb3AuZmFkZU91dCgyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGRlZCBPUiBzeW50YXggdG8gbWFrZSBzaGFkb3cgaW52aXNpYmxlIGluaXRpYWxseVxuICAgICAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCgpICsgaGVpZ2h0ID49IGVsZW1bMF0uc2Nyb2xsSGVpZ2h0IHx8IGVsZW1bMF0uc2Nyb2xsSGVpZ2h0IDwgKGhlaWdodCAqIDAuNjUpKSB7XG4gICAgICAgICAgICBzaGFkb3dCb3R0b20uZmFkZU91dCgyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhZG93Qm90dG9tLmZhZGVJbigyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemUuc2hhZG93XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhbGNQb3NpdGlvbigpO1xuICAgICAgICAgICAgZWxlbS50cmlnZ2VyKFwic2Nyb2xsLnNoYWRvd1wiKTtcbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbihwYXIpIHtcbiAgICAgICAgICBlbGVtID0gJChwYXIpO1xuICAgICAgICAgIGluaXRTaGFkb3dzKCk7XG4gICAgICAgICAgY2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgICAgYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICBhZGRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICAgIGVsZW0udHJpZ2dlcihcInNjcm9sbC5zaGFkb3dcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogY2FsY1Bvc2l0aW9uXG4gICAgICB9O1xuXG4gICAgfSgpKTtcblxuICAgIC8vIHN0YXJ0XG4gICAgc2Nyb2xsU2hhZG93LmluaXQoXCIuY2FyZC1jb250YWluZXJcIik7XG4iXX0=
