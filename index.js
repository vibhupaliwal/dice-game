var randomNumber1=Math.floor((Math.random()*6)+1);
var randimgsourse1="images/"+"dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randimgsourse1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randimgsourse2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randimgsourse2);
if(randomNumber1>randomNumber2){
      document.querySelector("h1").innerHTML="💫🥳Player 1 wins...";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="💫🥳Player 2 wins...";
}
else{
    document.querySelector("h1").innerHTML="draw";
}

