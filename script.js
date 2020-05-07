document.getElementById('img1').addEventListener('click',showImg);
document.getElementById('img2').addEventListener('click',showImg2);
document.getElementById('exitbtn').addEventListener('click',error);
function error(){
  alert("Warning! Please return to your fishtank!")
}


function showImg(){
  var img=document.getElementById('img1');
  img.src="002_hvr.jpg";
  document.getElementById('caption1').innerHTML="Content Farm";

}

function showImg2(){
  var img_2=document.getElementById('img2');
  img_2.src="001_hvr.jpg";
  document.getElementById('caption2').innerHTML="Distruction";
}
