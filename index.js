var userClickedPattern=[];
var b=['red','blue','green','yellow'];
var g=[];
var l=0;
var started=0;
$(document).keypress(function(){
  if(!started)
  nextSequence();
  started++;
});
$(".btn").click(function(){
  userChosen=$(this).attr("id");
  userClickedPattern.push(userChosen);
  playSound(userChosen);
  animatePress(userChosen);
  checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(cl){
  if(userClickedPattern[cl]===g[cl]){
    if(userClickedPattern.length===g.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }else{
    var b= new Audio("sounds/wrong.mp3");
    b.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").html("Game Over, Press Any Key to Restart");
    l=0;
    started=0;
    g=[];
  }

}

function nextSequence(){
  l++;
  $("h1").html("Level "+l);
  userClickedPattern=[];
  var ran=Math.floor(Math.random()*4);
  var ranc=b[ran];
  g.push(ranc);
  $("."+ranc).fadeOut(100).fadeIn(100);
  playSound(ranc);
}
function playSound(name){
  var a=new Audio("sounds/"+name+".mp3");
  a.play();
}
function animatePress(cc){
  $("#"+cc).addClass("pressed");
  setTimeout(function(){
    $("#"+cc).removeClass("pressed");
},100);
}
