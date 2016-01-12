var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

item1.addEventListener("click", function(){
    info1.innerHTML = "Super smash bros brawl, is a really fun game to play with family, that is played on the wii.";
    info2.innerHTML = "In super smash bros you can play as many characters such as mario, donkey kong, link, and many more.";
    info3.innerHTML = "some other stufffff"
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Item 2 stuff";
    info2.innerHTML = "Item 2 other stuff";
    info3.innerHTML = "item 2 other stuffff";
});

item3.addEventListener("click", function(){
    info1.innerHTML = "Item 3 stuf";
    info2.innerHTML = "item 3 stuff";
    info3.innerHTML = "item 3 stufff";
});

item4.addEventListener("click", function(){
    info1.innerHTML = "Item 4 stuf";
    info2.innerHTML = "item 4 stuff";
    info3.innerHTML = "item 4 stufff";
});
                       
                       