$(document).ready(function(){
  $(".sub > h1").click(function(){
    $(this).toggleClass("visible");
    $(this).siblings().toggle();
    var altTitle = $(this).parent().data("alttitle");
    var title = $(this).text();
    $(this).parent().data("alttitle", title);
    $(this).text(altTitle);
  });  
  $(".sub > h1").hover(function(){
    if ($(this).hasClass("visible")==false){
      $(this).siblings().toggleClass('visHover');
    }
  });
  $("a#photo").click(function(){
    $(".activeMenu").removeClass("activeMenu");
    $(this).addClass("activeMenu");
    $("#img_container").show();
    $("#video_container").hide();
  });
  $("a#video").click(function(){
    $(".activeMenu").removeClass("activeMenu");
    $(this).addClass("activeMenu");
    $("#img_container").hide();
    $("#video_container").show();
  });

  
  var imgTop = $("#content").css("height");
  var imgHeight;
  $("#mediaContainer").css("top", imgTop);
  if($("a#photo").length > 0){
    $("#img").fadeIn();
  }
  else {
    $("#video_container").fadeIn();
    $("a#video").addClass("activeMenu");
  }
  loadImg(1);
  loadVid(1);
});


function nextImg(){
  var count = $(".count").text();
  var num = $(".num").text();
  if(num < count){  
    num ++;
    
  }
  else {
    num = 1;
  };
  $(".num").text(num);
  loadImg(num);
}

function prevImg(){
  var count = $(".count").text();
  var num = $(".num").text();
  if(num > 1){  
    num --;
    
  }
  else {
    num = count;
  };
  $(".num").text(num);
  loadImg(num);
}

function loadImg(id){  
  $(".show").hide().removeClass("show");
  $("p.desc").hide();
  $("div#img"+id).addClass("show").show(100, function(){
    imgHeight=$("div#img"+id+" > img").css("height");
    $("p.desc").css("margin-top", imgHeight).show();
  });
  
  
}

function nextVid(){
  var count = $(".vCount").text();
  var num = $(".vNum").text();
  if(num < count){  
    num ++;
    
  }
  else {
    num = 1;
  };
  $(".vNum").text(num);
  loadVid(num);
}

function prevVid(){
  var count = $(".vCount").text();
  var num = $(".vNum").text();
  if(num > 1){  
    num --;
    
  }
  else {
    num = count;
  };
  $(".vNum").text(num);
  loadVid(num);
}

function loadVid(id){
  $(".showV").fadeOut().removeClass("showV");
  $("div#vid"+id).addClass("showV").show();
}