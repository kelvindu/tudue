$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {
        username:'test',
        todo: item.val(),
        isDone: false,
        hasAttachment: false
      };

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
      return false;

  });

  $('.item-check').change(function(){
    var isDone;
    if($(this).is(':checked')){
      isDone=true;
    }else{
      isDone=false;
    }
    var todo = {
      id: $(this).attr('id'),
      isDone: isDone
    };

    $.ajax({
      type: 'POST',
      url: '/todo/check',
      data: todo,
      success : function(data){}
    });

  });

  $('.button-delete').on('click', function(){
      var id = $(this).attr('id');
      $.ajax({
        type: 'DELETE',
        url: '/todo/'+id,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
