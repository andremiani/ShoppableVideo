// Declare the shoppableVideo module and its dependencies
var app = angular.module('shoppableVideo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.sortable']);
// Declare the AppCtrl controller
app
<<<<<<< HEAD
  .controller('AppCtrl', ['$scope', function ($scope) {

    // Card counter
    var counter = 1;

    // Variable for the video title
    $scope.videoTitle = "";


    // Array to store the productCards
    $scope.productCards = [];

    // Array to store the products
    $scope.products = [];

    //Collapse variable
    $scope.isCollapsed = false;

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
var addProductCard = function () {
  $scope.productCards.push({ title: 'Product Card ' + counter, content: 'Product Card ' + counter, imageURL: '../assets/images/placeholder.png' });
  counter++;
  $scope.productCards[$scope.productCards.length - 1].active = true;
};

// Remove product card by index
var removeProductCard = function (event, index) {
  event.preventDefault();
  event.stopPropagation();
  $scope.productCards.splice(index, 1);
  counter--;
};

// Initialize the scope functions
$scope.addProductCard    = addProductCard;
$scope.removeProductCard = removeProductCard;

// For demonstration add 5 productCards
for (var i = 0; i < 5; i++) {
  addProductCard();
}

  }])
  .directive('tabHighlight', [function () {

    return {
      restrict: 'A',
      link: function (scope, element) {
        // Here is the major jQuery usage where we add the event
        // listeners mousemove and mouseout on the tabs to initalize
        // the moving highlight for the inactive tabs
        var x, y, initial_background = '#c3d5e6';

        element
          .removeAttr('style')
          .mousemove(function (e) {
            // Add highlight effect on inactive tabs
            if(!element.hasClass('active'))
            {
              x = e.pageX - this.offsetLeft;
              y = e.pageY - this.offsetTop;

              // Set the background when mouse moves over inactive tabs
              element
                .css({ background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background });
            }
          })
          .click(function () {
            // Return the inital background color of the tab
            element.removeAttr('style');
          });
=======
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
>>>>>>> 8b2c8ed02d51f8c3226fd6913172d6306ba27bf5
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNsYXJlIHRoZSBzaG9wcGFibGVWaWRlbyBtb2R1bGUgYW5kIGl0cyBkZXBlbmRlbmNpZXNcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc2hvcHBhYmxlVmlkZW8nLCBbJ25nQW5pbWF0ZScsICduZ1Nhbml0aXplJywgJ3VpLmJvb3RzdHJhcCcsICd1aS5zb3J0YWJsZSddKTtcbi8vIERlY2xhcmUgdGhlIEFwcEN0cmwgY29udHJvbGxlclxuYXBwXG48PDw8PDw8IEhFQURcbiAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcblxuICAgIC8vIENhcmQgY291bnRlclxuICAgIHZhciBjb3VudGVyID0gMTtcblxuICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAkc2NvcGUudmlkZW9UaXRsZSA9IFwiXCI7XG5cblxuICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0Q2FyZHNcbiAgICAkc2NvcGUucHJvZHVjdENhcmRzID0gW107XG5cbiAgICAvLyBBcnJheSB0byBzdG9yZSB0aGUgcHJvZHVjdHNcbiAgICAkc2NvcGUucHJvZHVjdHMgPSBbXTtcblxuICAgIC8vQ29sbGFwc2UgdmFyaWFibGVcbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0cyBpbiB0aGUgbGlicmFyeVxuICAgICRzY29wZS5saWJyYXJ5UHJvZHVjdHMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU23DtnJkZWcnLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZy0wMS5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU23DtnJkZWcgRWtvJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL1Ntb3JkZWcyLTAxLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiRWF0YWJsZXNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTbcO2cmRlZyBMeXgnLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvU21vcmRlZzMucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ8OEZ2cgRnJpZ8OlZW5kZScsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnIC0gRnJpZ8OlZW5kZS5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnw4RnZycsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy/DhGdnLVZhbmxpZy5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkVhdGFibGVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnw4RnZyBFa28nLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvw4RnZy1la28ucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJFYXRhYmxlc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0tuaXYgSmFwYW5zaycsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9Lbml2LUF2YW5jZXJhZC5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnS25pdiBCYXJuJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtQmFybi5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnS25pdiBTdG9yJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0tuaXYtU3TDtnJyZS0wMS5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnRsO2cmtsw6RkZSBCcnVuJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0bDtnJrbMOkZGUtbMOkZGVyLTAxLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnRsO2cmtsw6RkZSBUeWcnLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvRsO2cmtsw6RkZS1UeWcucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfDhGdna2xvY2thJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL8OEZ2drbG9ja2EucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJPdGhlcnNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdQZW5zZWwgU2lsaWtvbicsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtc2lsaWNvbi5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnS2F2ZWwgcnVuZCcsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9rYXZlbC1ydW5kLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdLYXZlbCBCYXJuJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2thdmVsLWJhcm4ucG5nJyxcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgb2ZmZXI6IFwiXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAgIHRhcmdldEdyb3VwOiBcIlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJUb29sc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0thdmVsJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL0thdmVsLnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdHanV0asOkcm4nLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvc3Rla3Bhbm5hLWdqdXRqw6Rybi5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU3Rla3Bhbm5hJyxcbiAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL1N0ZWtwYW5uYS5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnUGVuc2VsIG0uIGtuaXYnLFxuICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvcGVuc2VsLW1lZC1rbml2LnBuZycsXG4gICAgICAgIGxpbms6IFwiXCIsXG4gICAgICAgIG9mZmVyOiBcIlwiLFxuICAgICAgICBidXR0b25UZXh0OiBcIlwiLFxuICAgICAgICB0YXJnZXRHcm91cDogXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiVG9vbHNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdQZW5zZWwgVHLDpCcsXG4gICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wZW5zZWwtdHLDpC5wbmcnLFxuICAgICAgICBsaW5rOiBcIlwiLFxuICAgICAgICBvZmZlcjogXCJcIixcbiAgICAgICAgYnV0dG9uVGV4dDogXCJcIixcbiAgICAgICAgdGFyZ2V0R3JvdXA6IFwiXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRvb2xzXCJcbiAgICAgIH1cblxuICAgIF07XG5cbiAgICAvLyBBcnJheSB0aGF0IHN0b3JlIGFsbCB0aGUgY2F0ZWdvcmllcyB0aGF0IGFyZSB1c2VkIGluIHRoZSBkcm9wZG93bi1saXN0XG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBbXVxuICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubGlicmFyeVByb2R1Y3RzLCBmdW5jdGlvbih2YWx1ZSwgY2F0ZWdvcnkpe1xuICAgICAgICBpZigkc2NvcGUuY2F0ZWdvcmllcy5pbmRleE9mKHZhbHVlLmNhdGVnb3J5KSA9PSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMucHVzaCh2YWx1ZS5jYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBwcm9kdWN0Q2FyZCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxudmFyIGFkZFByb2R1Y3RDYXJkID0gZnVuY3Rpb24gKCkge1xuICAkc2NvcGUucHJvZHVjdENhcmRzLnB1c2goeyB0aXRsZTogJ1Byb2R1Y3QgQ2FyZCAnICsgY291bnRlciwgY29udGVudDogJ1Byb2R1Y3QgQ2FyZCAnICsgY291bnRlciwgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZycgfSk7XG4gIGNvdW50ZXIrKztcbiAgJHNjb3BlLnByb2R1Y3RDYXJkc1skc2NvcGUucHJvZHVjdENhcmRzLmxlbmd0aCAtIDFdLmFjdGl2ZSA9IHRydWU7XG59O1xuXG4vLyBSZW1vdmUgcHJvZHVjdCBjYXJkIGJ5IGluZGV4XG52YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAkc2NvcGUucHJvZHVjdENhcmRzLnNwbGljZShpbmRleCwgMSk7XG4gIGNvdW50ZXItLTtcbn07XG5cbi8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xuJHNjb3BlLmFkZFByb2R1Y3RDYXJkICAgID0gYWRkUHJvZHVjdENhcmQ7XG4kc2NvcGUucmVtb3ZlUHJvZHVjdENhcmQgPSByZW1vdmVQcm9kdWN0Q2FyZDtcblxuLy8gRm9yIGRlbW9uc3RyYXRpb24gYWRkIDUgcHJvZHVjdENhcmRzXG5mb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICBhZGRQcm9kdWN0Q2FyZCgpO1xufVxuXG4gIH1dKVxuICAuZGlyZWN0aXZlKCd0YWJIaWdobGlnaHQnLCBbZnVuY3Rpb24gKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gSGVyZSBpcyB0aGUgbWFqb3IgalF1ZXJ5IHVzYWdlIHdoZXJlIHdlIGFkZCB0aGUgZXZlbnRcbiAgICAgICAgLy8gbGlzdGVuZXJzIG1vdXNlbW92ZSBhbmQgbW91c2VvdXQgb24gdGhlIHRhYnMgdG8gaW5pdGFsaXplXG4gICAgICAgIC8vIHRoZSBtb3ZpbmcgaGlnaGxpZ2h0IGZvciB0aGUgaW5hY3RpdmUgdGFic1xuICAgICAgICB2YXIgeCwgeSwgaW5pdGlhbF9iYWNrZ3JvdW5kID0gJyNjM2Q1ZTYnO1xuXG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgIC5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIEFkZCBoaWdobGlnaHQgZWZmZWN0IG9uIGluYWN0aXZlIHRhYnNcbiAgICAgICAgICAgIGlmKCFlbGVtZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeCA9IGUucGFnZVggLSB0aGlzLm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgIHkgPSBlLnBhZ2VZIC0gdGhpcy5vZmZzZXRUb3A7XG5cbiAgICAgICAgICAgICAgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIHdoZW4gbW91c2UgbW92ZXMgb3ZlciBpbmFjdGl2ZSB0YWJzXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJy1tb3otcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pXG4gICAgICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICctd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KVxuICAgICAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgaW5pdGFsIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYlxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgIH0pO1xuPT09PT09PVxuICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgICAgICAvLyBDYXJkIGNvdW50ZXIsIHVzZWQgZm9yIGNhcmQgbmFtaW5nXG4gICAgICAgIHZhciBjYXJkQ291bnRlciA9IDE7XG5cbiAgICAgICAgLy8gUHJvZHVjdCBjb3VudGVyLCB1c2VkIGZvciBwcm9kdWN0IG5hbWluZ1xuICAgICAgICB2YXIgcHJvZHVjdENvdW50ZXIgPSBcIlwiO1xuXG4gICAgICAgIC8vIFZhcmlhYmxlIGZvciB0aGUgdmlkZW8gdGl0bGVcbiAgICAgICAgJHNjb3BlLnZpZGVvVGl0bGUgPSBcIlwiO1xuXG4gICAgICAgIC8vIEFycmF5IHRvIHN0b3JlIHRoZSBwcm9kdWN0Q2FyZHNcbiAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkcyA9IFtdO1xuXG4gICAgICAgIC8vQ29sbGFwc2UgdmFyaWFibGUgZm9yIHRoZSBwcm9kdWN0IGNhcmRzLCB0cnVlIGlmIGNvbGxhcHNlZFxuICAgICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICAvL0NvbGxhc3BzZSB2YXJpYWJsZSBmb3IgdGhlIHByb2R1Y3RzLCB0cnVlIGlmIGNvbGxhcHNlZFxuICAgICAgICAkc2NvcGUuaXNQcm9kdWN0Q29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy9UZWxscyB1aS1zb3J0YWJsZSB3aGF0IGFuZCBob3cgdG8gc29ydFxuICAgICAgICAkc2NvcGUuc29ydGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgaGFuZGxlOiAnLnByb2R1Y3QnLFxuICAgICAgICAgICAgLy8gaXRlbXM6ICcgLnBhbmVsOm5vdCgucGFuZWwtaGVhZGluZyknXG4gICAgICAgICAgICBheGlzOiAneSdcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBZGQgcHJvZHVjdENhcmQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgdmFyIGFkZFByb2R1Y3RDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNhcmRUaXRsZTogJ1Byb2R1Y3QgQ2FyZCAnICsgY2FyZENvdW50ZXIsXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhcmRDb3VudGVyKys7XG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdENhcmRzWyRzY29wZS5wcm9kdWN0Q2FyZHMubGVuZ3RoIC0gMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL0FkZCBwcm9kdWN0IHRvIGEgcHJvZHVjdCBjYXJkXG4gICAgICAgIHZhciBhZGRQcm9kdWN0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHByb2R1Y3RDb3VudGVyID0gJHNjb3BlLnByb2R1Y3RDYXJkc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHNbaW5kZXhdLnByb2R1Y3RzLnB1c2goe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogJ1Byb2R1Y3QgJyArIHByb2R1Y3RDb3VudGVyLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy4uLicsXG4gICAgICAgICAgICAgICAgc3BlY2lhbE9mZmVyOiAnMjAlJyxcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnQnV5IG5vdyBiYWJ5JyxcbiAgICAgICAgICAgICAgICB0YXJnZXRHcm91cDogJ1JpY2ggcGVvcGxlJyxcbiAgICAgICAgICAgICAgICBpbWFnZVVSTDogJy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgY2FyZCBieSBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdENhcmQgPSBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0Q2FyZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNhcmRDb3VudGVyLS07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgYnkgaW5kZXggYW5kIHByb2R1Y3QgY2FyZCBpbmRleFxuICAgICAgICB2YXIgcmVtb3ZlUHJvZHVjdCA9IGZ1bmN0aW9uKHByb2R1Y3RDYXJkSW5kZXgsIGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RDYXJkc1twcm9kdWN0Q2FyZEluZGV4XS5wcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xuICAgICAgICAkc2NvcGUuYWRkUHJvZHVjdENhcmQgPSBhZGRQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLmFkZFByb2R1Y3QgPSBhZGRQcm9kdWN0O1xuICAgICAgICAkc2NvcGUucmVtb3ZlUHJvZHVjdENhcmQgPSByZW1vdmVQcm9kdWN0Q2FyZDtcbiAgICAgICAgJHNjb3BlLnJlbW92ZVByb2R1Y3QgPSByZW1vdmVQcm9kdWN0O1xuXG4gICAgICAgIC8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCA1IHByb2R1Y3RDYXJkc1xuICAgICAgICAvKmZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBhZGRQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB9Ki9cblxuICAgIH1dKTtcblxuLy9zY3JvbGxpbmcgc2hhZG93IGZhaWxcbiAgICAkKCcuY2FyZC1jb250YWluZXInKS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgdmFyICRjb250ZW50U2hhZG93ID0gJChcIjxkaXYgY2xhc3M9J2NhcmQtY29udGFpbmVyLXNoYWRvdyc+PC9kaXY+KVwiKTtcblxuICAgIGlmICgkKCcjY2FyZC1jb250YWluZXInKS5oZWlnaHQoKSA9PSAnNjV2aCcpIHtcbiAgICAkKCcuY2FyZC1jb250YWluZXInKS5hcHBlbmQoJGNvbnRlbnRTaGFkb3cpO1xuXG4gICAgLy8gZmxleGJveCDljbTmmK8gLmNvbnRhaW5lciBvbiBzY3JvbGwg5LqL5Lu2XG4gICAgJCgnLmNhcmQtY29udGFpbmVyJykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgaWYgKGUudGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCl7XG4gICAgICAgICRjb250ZW50U2hhZG93LnJlbW92ZUNsYXNzKCd0b3AnKS5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICBpZiAoZS50YXJnZXQub2Zmc2V0SGVpZ2h0ICsgZS50YXJnZXQuc2Nyb2xsVG9wID09IGUudGFyZ2V0LnNjcm9sbEhlaWdodCl7XG4gICAgICAgICRjb250ZW50U2hhZG93LmFkZENsYXNzKCd0b3AnKS5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4+Pj4+Pj4+IDhiMmM4ZWQwMmQ1MWY4YzMyMjZmZDY5MTMxNzJkNjMwNmJhMjdiZjVcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICRjb250ZW50U2hhZG93LnJlbW92ZUNsYXNzKCd0b3AgYm90dG9tJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICB9KTsgfTtcbiAgICAkKCcuY2FyZC1jb250YWluZXInKS5zY3JvbGwoKTtcbiIsIi8vIGpRdWVyeSBmdW5jdGlvbnMgZnJvbSBTTVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5saXN0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcudmlldy1vcHRpb25zIC5ncmlkJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy52aWV3LW9wdGlvbnMgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLml0ZW1zJykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZ3JpZCcpLmZhZGVJbigyMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcubW9kYWwgLml0ZW0tdGh1bWInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNsb25lKCkuYXBwZW5kVG8oJy5pdGVtcy5hZGRlZCcpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFkZC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KCQoJy5tYXJrZXInKS5jc3MoJ2xlZnQnKSk7XG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgdmFyIG5ld1BvcyA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoICogMTAwO1xuXG4gICAgICAgIHZhciAkZGl2ID0gJChcIjxkaXY+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJhciB1aS13aWRnZXQtY29udGVudFwiXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgJHNlZ1N0YXJ0ID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6IFwic2VnLXN0YXJ0XCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRzZWdFbmQgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJzZWctZW5kXCJcbiAgICAgICAgfSkudGV4dCgnaGg6bW06c3MnKTtcbiAgICAgICAgdmFyICRkZWxTZWcgPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJkZWwtc2VnXCJcbiAgICAgICAgfSkuaHRtbCgnPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImhvdmVyLWhlbHBcIj5EZWxldGUgc2VnbWVudDwvc3Bhbj48L2E+PC9zcGFuPicpO1xuICAgICAgICAkZGl2LmFwcGVuZCgkc2VnU3RhcnQsICRzZWdFbmQsICRkZWxTZWcpO1xuXG5cbiAgICAgICAgJGRpdi5jc3MoJ2xlZnQnLCBuZXdQb3MgKyAnJScpO1xuICAgICAgICAkZGl2LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgICAgICBoYW5kbGVzOiAnZSwgdydcbiAgICAgICAgfSk7XG4gICAgICAgICRkaXYuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgIGNvbnRhaW5tZW50OiBcIi5wcm9kdWN0LXRpbWVsaW5lXCIsXG4gICAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1zdGFydCcpLnRleHQocG9zaXRpb25Ub1RpbWUoJCh0aGlzKS5jc3MoJ2xlZnQnKSkpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNlZy1lbmQgJykudGV4dChwb3NpdGlvblRvVGltZShwYXJzZUludCgkKHRoaXMpLmNzcygnbGVmdCcpKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCd3aWR0aCcpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJGRpdi5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLnByb2R1Y3QtdGltZWxpbmVcIikuYXBwZW5kKCRkaXYpO1xuICAgICAgICAkZGl2LmZpbmQoJy5zZWctc3RhcnQnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKCRkaXYuY3NzKCdsZWZ0JykpKTtcbiAgICAgICAgJGRpdi5maW5kKCcuc2VnLWVuZCAnKS50ZXh0KHBvc2l0aW9uVG9UaW1lKHBhcnNlSW50KCRkaXYuY3NzKCdsZWZ0JykpICsgcGFyc2VJbnQoJGRpdi5jc3MoJ3dpZHRoJykpKSk7XG5cbiAgICAgICAgJGRpdi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZWRpdC1yZXNpemVcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZXNpemFibGUoXCJkaXNhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0LWJhclwiKS5yZW1vdmVDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlc2l6YWJsZShcImVuYWJsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGRlbFNlZy5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogXCIudGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCJcbiAgICB9KTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZSh7XG4gICAgICAgIG1heEhlaWdodDogMjAsXG4gICAgICAgIG1pbkhlaWdodDogMjAsXG4gICAgICAgIGhhbmRsZXM6ICdlLCB3J1xuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6IFwiLnByb2R1Y3QtdGltZWxpbmVcIixcbiAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgIGRyYWc6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2VnLXN0YXJ0JykudGV4dChwb3NpdGlvblRvVGltZSgkKHRoaXMpLmNzcygnbGVmdCcpKSk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5zZWctZW5kICcpLnRleHQocG9zaXRpb25Ub1RpbWUocGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2xlZnQnKSkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnd2lkdGgnKSkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImVkaXQtcmVzaXplXCIpKSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlbW92ZUNsYXNzKFwiZWRpdC1yZXNpemVcIik7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3QtYmFyXCIpLnJlc2l6YWJsZShcImRpc2FibGVcIik7XG5cbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVtb3ZlQ2xhc3MoXCJlZGl0LXJlc2l6ZVwiKTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdC1iYXJcIikucmVzaXphYmxlKFwiZGlzYWJsZVwiKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImVkaXQtcmVzaXplXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZXNpemFibGUoXCJlbmFibGVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5kZWwtc2VnJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZWRpdC10aW1lbGluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcucHJvZHVjdC1lZGl0LXByb21wdCcpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgfSk7XG5cbiAgICAkKCcuZGVsZXRlLXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLm1hcmtlclwiKS5kcmFnZ2FibGUoe1xuICAgICAgICBkcmFnOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9zID0gcGFyc2VJbnQoJCgnLm1hcmtlcicpLmNzcygnbGVmdCcpKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VJbnQoJCgnLnRpbWVsaW5lJykuY3NzKCd3aWR0aCcpKTtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvcyAvIHRvdGFsV2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3VGltZSA9IHRvdGFsRHVyYXRpb24gKiBwZXJjZW50YWdlO1xuXG4gICAgICAgICAgICAkKCcuY3VycmVudCcpLnRleHQoY29udmVydFNlY29uZHNUb1RpbWUobmV3VGltZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdG90YWxEdXJhdGlvbiA9IDE1MTtcbn0pO1xuXG5mdW5jdGlvbiBjb252ZXJ0U2Vjb25kc1RvVGltZShzZWMpIHtcbiAgICB0b3RhbFNlYyA9IE1hdGgucm91bmQoc2VjKTtcbiAgICB2YXIgaG91cnMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDM2MDApICUgMjQ7XG4gICAgdmFyIG1pbnV0ZXMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDYwKSAlIDYwO1xuICAgIHZhciBzZWNvbmRzID0gdG90YWxTZWMgJSA2MDtcblxuICAgIHZhciByZXN1bHQgPSAoaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycykgKyBcIjpcIiArIChtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzKSArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9UaW1lKHBvc2l0aW9uKSB7XG4gICAgdmFyIHRvdGFsRHVyYXRpb24gPSAxNTE7XG5cbiAgICB2YXIgdG90YWxXaWR0aCA9IHBhcnNlSW50KCQoJy50aW1lbGluZScpLmNzcygnd2lkdGgnKSk7XG5cbiAgICB2YXIgY3VycmVudFBvcyA9IHBhcnNlSW50KHBvc2l0aW9uKTtcbiAgICB2YXIgcGVyY2VudGFnZSA9IGN1cnJlbnRQb3MgLyB0b3RhbFdpZHRoO1xuICAgIHZhciBuZXdUaW1lID0gdG90YWxEdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG5cbiAgICByZXR1cm4gY29udmVydFNlY29uZHNUb1RpbWUobmV3VGltZSk7XG59XG4iXX0=
