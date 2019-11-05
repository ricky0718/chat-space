$(document).on('turbolinks:load',function(){
  function buildHTML(message){
    if ( message.image ) {
    var html = 
      `<div class="messages-group=${message.id}">
        <div class="messages-group__detail">
          <div class="messages-group__detail--name">
            ${message.user_name}
          </div>
          <div class="messages-group__detail--day">
            ${message.date}
          </div>
        </div>
        <div class="messages-group__comment">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >
      </div>`
    return html;
    }
    else{
      var html =
      `<div class="messages-group">
        <div class="messages-group__detail">
          <div class="messages-group__detail--name">
            ${message.user_name}
          </div>
          <div class="messages-group__detail--day">
            ${message.date}
          </div>
        </div>
        <div class="messages-group__comment">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url, 
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(message){
      var html = buildHTML(message)
      $('.chat-messages').append(html)
      $('.lower-message_content').val('')
      $('.lower-message_image').val('')
      $(".chat-messages").animate({scrollTop:$(".chat-messages")[0].scrollHeight});
      
    })
    .fail(function(){
    alert("メッセージ送信に失敗しました")
    return false;
    })
    .always(function(){
      $('.send').prop("disabled",false);
      $("#new_message")[0].reset();
     
    })
  })
});


