function Box($obj, $doc) {
  this.obj = $obj;
  this.docWidthHalf = $doc.width() / 2.75;
  this.docHeightHalf = $doc.height() / 3.5;
}

Box.prototype.saveOffset = function() {
  this.origTop = this.obj.offset().top;
  this.origLeft = this.obj.offset().left;
};

Box.prototype.moveToCenter = function() {
  var box = this;

  box.obj.on('click', function(){
    var $box = $(this);

    if ( $box.hasClass('is-open') ) {
      $box.offset({ top: box.origTop, left: box.origLeft });
      $box.removeClass('is-open');
    } else {
      $box.offset({ top: box.docHeightHalf, left: box.docWidthHalf });
      $box.addClass('is-open');
    }
  });
};
