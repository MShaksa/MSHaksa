

 

var $messages = $('.messages-content'),
d, h, m,
i = 0;

var myName = "";




$(window).load(function() {



 


temp = location.href.split("?");
data=temp[1].split("/");
uids = data[0];



myName = uids
$messages.mCustomScrollbar();

firebase.database().ref("messages").on("child_added", function (snapshot) {
if (snapshot.val().sender == myName) {
  //나자신이보낸 메시지
  $('<div class="message message-personal"> <div id="message-' + snapshot.key + '">' + snapshot.val().message + '<button class="btn-delete" data-id="' + snapshot.key + '" onclick="deleteMessage(this);">X</button></div></div>').appendTo($('.mCSB_container')).addClass('new');
 // $('<div class="message message-personal"> <figure class="avatar"><img src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png" /></figure>  <div id="message-' + snapshot.key + '">' + snapshot.val().message + '<button class="btn-delete" data-id="' + snapshot.key + '" onclick="deleteMessage(this);">X</button></div></div>').appendTo($('.mCSB_container')).addClass('new');

  $('.message-input').val(null);
  
} else {
 // $('<div class="message new"><figure class="avatar"><img src="https://cdn1.iconfinder.com/data/icons/basic-22/512/1041_boy_c-512.png" /></figure><div id="message-' + snapshot.key + '">' + snapshot.val().sender + ': ' + snapshot.val().message + '</div></div>').appendTo($('.mCSB_container')).addClass('new');

  $('<div class="message new"><figure class="avatar"><img src="https://cdn1.iconfinder.com/data/icons/basic-22/512/1041_boy_c-512.png" /></figure><div id="message-' + snapshot.key + '">' + snapshot.val().message + '</div></div>').appendTo($('.mCSB_container')).addClass('new');
}

setDate();
updateScrollbar();
});

});

function updateScrollbar() {
$messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
scrollInertia: 10,
timeout: 0
});
}

function setDate(){

    //냘짜 함수
    var d = new Date();
    var year = d.getFullYear().toString();
    var month = (d.getMonth() + 1).toString();
    var day = d.getDate().toString();
    var hours = d.getHours().toString();
    var min = d.getMinutes().toString();
    var sec = d.getSeconds().toString();
    var currentTime = year + "." + month + "." + day+ "." + hours + ":" + min;


 if (m != d.getMinutes()) {
m = d.getMinutes();
$('<div class="timestamp">' + currentTime + '</div>').appendTo($('.message:last'));
}
}

function insertMessage() {
msg = $('.message-input').val();
if ($.trim(msg) == '') {
return false;
}

sendMessage();
}

$('.message-submit').click(function() {
insertMessage();
});

$(window).on('keydown', function(e) {
if (e.which == 13) {
insertMessage();
return false;
}
});





