// JavaScript File
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

item1.addEventListener("click", function(){
    info1.innerHTML = "1. Soccer is a fun sport that is played all accross the world.";
    info2.innerHTML = "2. In order to play on a team you need shinguards, soccer cleats, a soccerball, and a jersey.";
    info3.innerHTML = "3. In order for you to have a full team you need 11 players"
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "1. This is a computer, and it is used for various things.";
    info2.innerHTML = "2. On a computer you can look around the internet, check your email, and a lot more stuff.";
    info3.innerHTML = "3. Also on a computer you can play lots of games like counter strike.";
});