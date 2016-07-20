$(document).on('ready', function(){
  var $boxes = $('.box');

  $boxes.each(function(){
    var $box = new Box( $(this), $(document) );

    $box.saveOffset();

    $box.moveToCenter();

  });
});
