/* eslint-env node, jquery, browser */

$(document).ready(function () {
  $('.alert').alert();

  var $carousel = $('.PriceBlocks-slider').flickity({
    cellSelector: '.PriceBlock-container',
    initialIndex: 2,
  });

  var flkty = $carousel.data('flickity');

  var previousSlide = flkty.slides[flkty.selectedIndex - 1];
  var nextSlide = flkty.slides[flkty.selectedIndex + 1];

  nextSlide.getCellElements().forEach(function (cellElem) {
    cellElem.classList['add']('is-next');
  }); 
  previousSlide.getCellElements().forEach(function ( cellElem ) {
    cellElem.classList['add']('is-previous');
  });

  $carousel.on('staticClick.flickity', function (event, pointer, cellElement, cellIndex) {
    if (typeof cellIndex === 'number') {
      $carousel.flickity('selectCell', cellIndex);
    }
  });

  $carousel.on('select.flickity', function () {
    flkty.getCellElements().forEach(function (cellElem) {
      cellElem.classList['remove']('is-next');
      cellElem.classList['remove']('is-previous');
    });

    var previousSlide = flkty.slides[flkty.selectedIndex - 1];
    var nextSlide = flkty.slides[flkty.selectedIndex + 1];

    nextSlide.getCellElements().forEach(function (cellElem) {
      cellElem.classList['add']('is-next');
    }); 
    previousSlide.getCellElements().forEach(function ( cellElem ) {
      cellElem.classList['add']('is-previous');
    });
  });
});