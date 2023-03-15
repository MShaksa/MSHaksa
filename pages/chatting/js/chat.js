

 

var $messages = $('.messages-content'),
d, h, m,
i = 0;

var myName = "";




$(window).load(function() {



 


temp = location.href.split("?");
data=temp[1].split("/");
uids = data[0];
 



var foodItems = ["나무늘보" ,"황조롱이" ,"있잖아", "나는 ", "사실", "사과", "나뭇잎", "그냥 익명이", "바나나", "막대기", "SKT T1 FAKER", "고양이", "삼색이", "이얏호응", "무", "연필", "띠이모", "강아지", "빨간 모자", "그냥 학생", "내 꿈은 세계정복", "나 누구게", "갈매기"];
var randomz = foodItems[Math.floor(Math.random() * foodItems.length)];


ncNamec = prompt("익명으로 사용할 일회성 닉네임 입력");

myName = uids
ncName = randomz + " " + ncNamec

$messages.mCustomScrollbar();

firebase.database().ref("messages").on("child_added", function (snapshot) {
if (snapshot.val().sender == myName) {
  //나자신이보낸 메시지

  if (snapshot.val().sender == "kMywHo4jNSM0ybV5cYctttif7Hu1") {
    $('<div class="message message-personal"> <div style="font-size :14px; color:yellow" id="message-' + snapshot.key + '">' + snapshot.val().message + '<button class="btn-delete" data-id="' + snapshot.key + '" onclick="deleteMessage(this);">삭제</button></div></div>').appendTo($('.mCSB_container')).addClass('new');   
     $('.message-input').val(null);

  }else{

  $('<div class="message message-personal"> <div style="font-size :14px" id="message-' + snapshot.key + '">' + '<a style="font-size : 10px; color:#ffffff">' + snapshot.val().nick + '</a></br>'  + snapshot.val().message + '<button class="btn-delete" data-id="' + snapshot.key + '" onclick="deleteMessage(this);">X</button></div></div>').appendTo($('.mCSB_container')).addClass('new');
 // $('<div class="message message-personal"> <figure class="avatar"><img src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png" /></figure>  <div id="message-' + snapshot.key + '">' + snapshot.val().message + '<button class="btn-delete" data-id="' + snapshot.key + '" onclick="deleteMessage(this);">X</button></div></div>').appendTo($('.mCSB_container')).addClass('new');

  $('.message-input').val(null);
  }


  
} else {
 // $('<div class="message new"><figure class="avatar"><img src="https://cdn1.iconfinder.com/data/icons/basic-22/512/1041_boy_c-512.png" /></figure><div id="message-' + snapshot.key + '">' + snapshot.val().sender + ': ' + snapshot.val().message + '</div></div>').appendTo($('.mCSB_container')).addClass('new');



    if (snapshot.val().sender == "kMywHo4jNSM0ybV5cYctttif7Hu1") {
    //관리자가 보내는 메시지
    $('<div class="message new">'+ '<a style="font-size : 10px; color:#ff5e00">' + "기훈 김" + '</a></br>'  + '<figure class="avatar"><img src="https://www.seekpng.com/png/detail/20-200534_mars-transparent-icon-brainpop-mars.png" /></figure>' +'<div style="font-size :14px; color:#401414" id="message-' + snapshot.key + '">' + snapshot.val().message + '</div></div>').appendTo($('.mCSB_container')).addClass('new');

    
  } else{

    //일반유저가 보내는 메시지
      $('<div class="message new">'+ '<a style="font-size : 10px; color:#8e9091">' + snapshot.val().nick + '</a></br>'  + '<figure class="avatar"><img src="https://thumbs.dreamstime.com/b/solid-purple-gradient-user-icon-web-mobile-design-interface-ui-ux-developer-app-137467998.jpg" /></figure>' +'<div style="font-size :14px" id="message-' + snapshot.key + '">' + snapshot.val().message + '</div></div>').appendTo($('.mCSB_container')).addClass('new');

  }
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
//sendmsglog();
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





