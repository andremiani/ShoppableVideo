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

        //Tells ui-sortable what and how to sort
        $scope.sortableOptions = {
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

    }]);

//scrolling shadow fail
    $('.card-container').css('position', 'relative');
    var $contentShadow = $("<div class='card-container-shadow'></div>)");

    if ($('#card-container').height() == '65vh') {
    $('.card-container').append($contentShadow);

    // flexbox 却是 .container on scroll 事件
    $('.card-container').on('scroll', function(e){
      if (e.target.scrollTop === 0){
        $contentShadow.removeClass('top').addClass('bottom');
      }
      else
      if (e.target.offsetHeight + e.target.scrollTop == e.target.scrollHeight){
        $contentShadow.addClass('top').removeClass('bottom');
      }
      else{
        $contentShadow.removeClass('top bottom');
      }

      // console.log(e);
  }); };
    $('.card-container').scroll();

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgc2hvcHBhYmxlVmlkZW8gbW9kdWxlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Nob3BwYWJsZVZpZGVvJywgWyduZ0FuaW1hdGUnLCAnbmdTYW5pdGl6ZScsICd1aS5ib290c3RyYXAnLCAndWkuc29ydGFibGUnXSk7XG4vLyBEZWNsYXJlIHRoZSBBcHBDdHJsIGNvbnRyb2xsZXJcbmFwcFxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgICAgICAvLyBDYXJkIGNvdW50ZXIsIHVzZWQgZm9yIGNhcmQgbmFtaW5nXG4gICAgICAgIHZhciBjYXJkQ291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gUHJvZHVjdCBjb3VudGVyLCB1c2VkIGZvciBwcm9kdWN0IG5hbWluZ1xuICAgICAgICB2YXIgcHJvZHVjdENvdW50ZXIgPSBcIlwiO1xuXG4gICAgICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAgICAgJHNjb3BlLnZpZGVvVGl0bGUgPSBcIlwiO1xuXG4gICAgICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0Q2FyZHNcbiAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcyA9IFtdO1xuXG4gICAgICAgIC8vQ29sbGFwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0IGNhcmRzLCB0cnVlIGlmIGNvbGxhcHNlZFxuICAgICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL0NvbGxhc3BzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3RzLCB0cnVlIGlmIGNvbGxhcHNlZFxuICAgICAgICAkc2NvcGUuaXNQcm9kdWN0Q29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydFxuICAgICAgICAkc2NvcGUuc29ydGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpYnJhcnlcbiAgICAgICAgJHNjb3BlLmxpYnJhcnlQcm9kdWN0cyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Ntw7ZyZGVnJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9TbW9yZGVnLTAxLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Ntw7ZyZGVnIEVrbycsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzItMDEucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnU23DtnJkZWcgTHl4JyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9TbW9yZGVnMy5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfDhGdnIEZyaWfDpWVuZGUnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2cgLSBGcmlnw6VlbmRlLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ8OEZ2cnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2ctVmFubGlnLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ8OEZ2cgRWtvJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLWVrby5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLbml2IEphcGFuc2snLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtQXZhbmNlcmFkLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0tuaXYgQmFybicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1CYXJuLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0tuaXYgU3RvcicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvS25pdi1TdMO2cnJlLTAxLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0bDtnJrbMOkZGUgQnJ1bicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvRsO2cmtsw6RkZS1sw6RkZXItMDEucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0bDtnJrbMOkZGUgVHlnJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9Gw7Zya2zDpGRlLVR5Zy5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnw4RnZ2tsb2NrYScsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZ2tsb2NrYS5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUGVuc2VsIFNpbGlrb24nLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC1zaWxpY29uLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0thdmVsIHJ1bmQnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLXJ1bmQucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnS2F2ZWwgQmFybicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMva2F2ZWwtYmFybi5wbmcnLFxuICAgICAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdLYXZlbCcsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvS2F2ZWwucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnR2p1dGrDpHJuJyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9zdGVrcGFubmEtZ2p1dGrDpHJuLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1N0ZWtwYW5uYScsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU3Rla3Bhbm5hLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BlbnNlbCBtLiBrbml2JyxcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtbWVkLWtuaXYucG5nJyxcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUGVuc2VsIFRyw6QnLFxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL3BlbnNlbC10csOkLnBuZycsXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gQXJyYXkgdGhhdCBzdG9yZSBhbGwgdGhlIGNhdGVnb3JpZXMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgZHJvcGRvd24tbGlzdFxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IFtdXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubGlicmFyeVByb2R1Y3RzLCBmdW5jdGlvbih2YWx1ZSwgY2F0ZWdvcnkpe1xuICAgICAgICAgICAgaWYoJHNjb3BlLmNhdGVnb3JpZXMuaW5kZXhPZih2YWx1ZS5jYXRlZ29yeSkgPT0gLTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMucHVzaCh2YWx1ZS5jYXRlZ29yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBwcm9kdWN0Q2FyZCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgICB2YXIgYWRkUHJvZHVjdENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlOiAnUHJvZHVjdCBDYXJkICcgKyBjYXJkQ291bnRlcixcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FyZENvdW50ZXIrKztcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbJHNjb3BlLnByb2R1Y3RDYXJkcy5sZW5ndGggLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vQWRkIHByb2R1Y3QgdG8gYSBwcm9kdWN0IGNhcmRcbiAgICAgICAgdmFyIGFkZFByb2R1Y3QgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgcHJvZHVjdENvdW50ZXIgPSAkc2NvcGUucHJvZHVjdENhcmRzW2luZGV4XS5wcm9kdWN0cy5sZW5ndGggKyAxO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiAnUHJvZHVjdCAnICsgcHJvZHVjdENvdW50ZXIsXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3Li4uJyxcbiAgICAgICAgICAgICAgICBzcGVjaWFsT2ZmZXI6ICcyMCUnLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdCdXkgbm93IGJhYnknLFxuICAgICAgICAgICAgICAgIHRhcmdldEdyb3VwOiAnUmljaCBwZW9wbGUnLFxuICAgICAgICAgICAgICAgIGltYWdlVVJMOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBjYXJkIGJ5IGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0Q2FyZCA9IGZ1bmN0aW9uKGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgY2FyZENvdW50ZXItLTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBieSBpbmRleCBhbmQgcHJvZHVjdCBjYXJkIGluZGV4XG4gICAgICAgIHZhciByZW1vdmVQcm9kdWN0ID0gZnVuY3Rpb24ocHJvZHVjdENhcmRJbmRleCwgZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzW3Byb2R1Y3RDYXJkSW5kZXhdLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgc2NvcGUgZnVuY3Rpb25zXG4gICAgICAgICRzY29wZS5hZGRQcm9kdWN0Q2FyZCA9IGFkZFByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdCA9IGFkZFByb2R1Y3Q7XG4gICAgICAgICRzY29wZS5yZW1vdmVQcm9kdWN0Q2FyZCA9IHJlbW92ZVByb2R1Y3RDYXJkO1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdCA9IHJlbW92ZVByb2R1Y3Q7XG5cbiAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkIDUgcHJvZHVjdENhcmRzXG4gICAgICAgIC8qZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGFkZFByb2R1Y3RDYXJkKCk7XG4gICAgICAgIH0qL1xuXG4gICAgfV0pO1xuXG4vL3Njcm9sbGluZyBzaGFkb3cgZmFpbFxuICAgICQoJy5jYXJkLWNvbnRhaW5lcicpLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICB2YXIgJGNvbnRlbnRTaGFkb3cgPSAkKFwiPGRpdiBjbGFzcz0nY2FyZC1jb250YWluZXItc2hhZG93Jz48L2Rpdj4pXCIpO1xuXG4gICAgaWYgKCQoJyNjYXJkLWNvbnRhaW5lcicpLmhlaWdodCgpID09ICc2NXZoJykge1xuICAgICQoJy5jYXJkLWNvbnRhaW5lcicpLmFwcGVuZCgkY29udGVudFNoYWRvdyk7XG5cbiAgICAvLyBmbGV4Ym94IOWNtOaYryAuY29udGFpbmVyIG9uIHNjcm9sbCDkuovku7ZcbiAgICAkKCcuY2FyZC1jb250YWluZXInKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oZSl7XG4gICAgICBpZiAoZS50YXJnZXQuc2Nyb2xsVG9wID09PSAwKXtcbiAgICAgICAgJGNvbnRlbnRTaGFkb3cucmVtb3ZlQ2xhc3MoJ3RvcCcpLmFkZENsYXNzKCdib3R0b20nKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIGlmIChlLnRhcmdldC5vZmZzZXRIZWlnaHQgKyBlLnRhcmdldC5zY3JvbGxUb3AgPT0gZS50YXJnZXQuc2Nyb2xsSGVpZ2h0KXtcbiAgICAgICAgJGNvbnRlbnRTaGFkb3cuYWRkQ2xhc3MoJ3RvcCcpLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICRjb250ZW50U2hhZG93LnJlbW92ZUNsYXNzKCd0b3AgYm90dG9tJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICB9KTsgfTtcbiAgICAkKCcuY2FyZC1jb250YWluZXInKS5zY3JvbGwoKTtcbiIsIi8vIGpRdWVyeSBmdW5jdGlvbnMgZnJvbSBTTVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5saXN0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5ncmlkJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcubW9kYWwgLml0ZW0tdGh1bWInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNsb25lKCkuYXBwZW5kVG8oJy5pdGVtcy5hZGRlZCcpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFkZC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgdmFyIG5ld1BvcyA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoICogMTAwO1xuXG4gICAgICAgIHZhciAkZGl2ID0gJChcIjxkaXY+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgJHNlZ1N0YXJ0ID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRzZWdFbmQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRkZWxTZWcgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICAgICAgfSkuaHRtbCgnPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImhvdmVyLWhlbHBcIj5EZWxldGUgc2VnbWVudDwvc3Bhbj48L2E+PC9zcGFuPicpO1xuICAgICAgICAkZGl2LmFwcGVuZCgkc2VnU3RhcnQsICRzZWdFbmQsICRkZWxTZWcpO1xuXG5cbiAgICAgICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICAgICAkZGl2LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICAgICAgfSk7XG4gICAgICAgICRkaXYuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLnByb2R1Y3QtdGltZWxpbmVcIikuYXBwZW5kKCRkaXYpO1xuICAgICAgICAkZGl2LmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCRkaXYuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAgICAgJGRpdi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIudGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCJcbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZSh7XG4gICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5kZWwtc2VnJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZWRpdC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcucHJvZHVjdC1lZGl0LXByb21wdCcpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZGVsZXRlLXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3VGltZSA9IHRvdGFsRHVyYXRpb24gKiBwZXJjZW50YWdlO1xuXG4gICAgICAgICAgICAkKCcuY3VycmVudCcpLnRleHQoY29udmVydFNlY29uZHNUb1RpbWUobmV3VGltZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdG90YWxEdXJhdGlvbiA9IDE1MTtcbn0pO1xuXG5mdW5jdGlvbiBjb252ZXJ0U2Vjb25kc1RvVGltZShzZWMpIHtcbiAgICB0b3RhbFNlYyA9IE1hdGgucm91bmQoc2VjKTtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDM2MDApICUgMjQ7XG4gICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDYwKSAlIDYwO1xuICAgIHZhciBzZWNvbmRzID0gdG90YWxTZWMgJSA2MDtcblxuICAgIHZhciByZXN1bHQgPSAoaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycykgKyBcIjpcIiArIChtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzKSArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9UaW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSAxNTE7XG5cbiAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG5cbiAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KHBvc2l0aW9uKTtcbiAgICB2YXIgcGVyY2VudGFnZSA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoO1xuICAgIHZhciBuZXdUaW1lID0gdG90YWxEdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICByZXR1cm4gY29udmVydFNlY29uZHNUb1RpbWUobmV3VGltZSk7XG59XG4iXX0=
