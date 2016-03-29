var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

//This is the function that allows the user to click the image, and then have the information show up.
item1.addEventListener("click", function(){
    info1.innerHTML = "1. Super smash bros brawl, is a really fun game to play with family, that is played on the wii.";
    info2.innerHTML = "2. In super smash bros you can play as many characters such as mario, donkey kong, link, and many more.";
    info3.innerHTML = "3. The first weekend super smash bros was out it sold 490,000 copies!"
    //This is using javascript to move around the information that needs to show up on the page.
    info1.style.left = item1.offsetLeft + 'px';
    info1.style.top = item1.offsetHeight + 'px';
    info2.style.left = item1.offsetLeft + 'px';
    info2.style.top = (item1.offsetHeight + info1.offsetHeight + 10) + 'px';
    info3.style.left = item1.offsetLeft + 'px';
    info3.style.top = (item1.offsetHeight + info1.offsetHeight + 10 + info2.offsetHeight + 10) + 'px';
});

//This is the function that allows the user to click the image, and then have the information show up.
item2.addEventListener("click", function(){
    info1.innerHTML = "1. Fifa 16 is a fun soccer game that can be played with your friends, family, and by yourself.";
    info2.innerHTML = "2. In fifa 16 you can play as many different soccer teams from different leagues, create your own career, and build your own personal team.";
    info3.innerHTML = "3. Fifa games have been coming out every year since 1993.";
    info1.style.left = item2.offsetLeft + 'px';
    info1.style.top = item2.offsetHeight + 'px';
    info2.style.left = item2.offsetLeft + 'px';
    info2.style.top = (item2.offsetHeight + info1.offsetHeight + 10) + 'px';
    info3.style.left = item2.offsetLeft + 'px';
    info3.style.top = (item2.offsetHeight + info1.offsetHeight + 10 + info2.offsetHeight + 10) + 'px';
});
//This is the function that allows the user to click the image, and then have the information show up.
item3.addEventListener("click", function(){
    info1.innerHTML = "1. Counter strike is a really fun first-person shooter, that has been evolving over the years.";
    info2.innerHTML = "2. In Counter Strike Global Offensive you can collect skins, play in a deathmatch, and play in a competative match making.";
    info3.innerHTML = "3. Counter strike is played proffesionally, and there are many tournaments in which they can win money.";
  //This is using javascript to move around the information that needs to show up on the page.
    info1.style.left = item3.offsetLeft + 'px';
    info1.style.top = item3.offsetHeight + 'px';
    info2.style.left = item3.offsetLeft + 'px';
    info2.style.top = (item3.offsetHeight + info1.offsetHeight + 10) + 'px';
    info3.style.left = item3.offsetLeft + 'px';
    info3.style.top = (item3.offsetHeight + info1.offsetHeight + 10 + info2.offsetHeight + 10) + 'px';
});

//This is the function that allows the user to click the image, and then have the information show up.
item4.addEventListener("click", function(){
    info1.innerHTML = "1. Team Fortress 2 is a really fun team based first-person shooter.";
    info2.innerHTML = "2. In Team Fortress 2 you can play a varity of game modes that are really fun.";
    info3.innerHTML = "3. Team Fortres came out in 2007, and is the sequel to a mod made on Quake and its remake made in 1999.";
     //This is using javascript to move around the information that needs to show up on the page.
    info1.style.left = item4.offsetLeft + 'px';
    info1.style.top = item4.offsetHeight + 'px';
    info2.style.left = item4.offsetLeft + 'px';
    info2.style.top = (item4.offsetHeight + info1.offsetHeight + 10) + 'px';
    info3.style.left = item4.offsetLeft + 'px';
    info3.style.top = (item4.offsetHeight + info1.offsetHeight + 10 + info2.offsetHeight + 10) + 'px';
});
                       
                       