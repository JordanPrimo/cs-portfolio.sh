var button1 = document.getElementById("closeddiv1");
var button2 = document.getElementById("closeddiv2");
var button3 = document.getElementById("closeddiv3");
var elev1 = document.getElementById("elev1");
var elev2 = document.getElementById("elev2");
var elev3 = document.getElementById("elev3");

var closedimg = "http://2.bp.blogspot.com/-4911Xx5BNzc/Uo3u6-seYUI/AAAAAAAAAvQ/K3SRqjN9XH0/s1600/elevator-doors-border.png";
var openedimg = "http://charlottelawlibrary.files.wordpress.com/2013/09/people-in-elevator.jpg";
var openedimg2 = "http://www.cliseetiquette.com/wp-content/uploads/2011/07/woman-on-cell-phone-in-elevator.jpg";
var openedimg3 = "https://s-media-cache-ak0.pinimg.com/736x/67/b4/78/67b47878bf3301fd369e9c4b6a9d113c.jpg";

button1.addEventListener("click", function() {
    elev2.src = closedimg;
    elev3.src = closedimg;
    setTimeout(function() {
    elev3.src = openedimg;
        alert("Elevator Moving Floors!");
    }, 1000);
});

button2.addEventListener("click", function() {
    elev1.src = closedimg;
    elev3.src = closedimg;
    setTimeout(function() {
    elev2.src = openedimg2;
        alert("Elevator Moving Floors!");
    }, 1000);
});

button3.addEventListener("click", function() {
    elev1.src = closedimg;
    elev2.src = closedimg;
    setTimeout(function() {
    elev1.src = openedimg3;
        alert("Elevator Moving Floors!");
    }, 1000);
});