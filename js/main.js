$(window).on("load", function(){
   $("header").vide("img/video.mp4");
});

let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");
setInterval(tick, 1000);
function tick(){
   let date = new Date();
   let hours = 23-date.getHours();
   if(hours<10){
      h.innerHTML = "0"+hours;
   }else{
      h.innerHTML = hours;
   }
   let minutes = 59-date.getMinutes();
   if(minutes<10){
      m.innerHTML = ":0"+minutes;
   }else{
      m.innerHTML = ":"+minutes;
   }
   let seconds =59-date.getSeconds();
   if(seconds<10){
      s.innerHTML = ":0"+seconds;
   }else{
      s.innerHTML = ":"+seconds;
   }
   
}
