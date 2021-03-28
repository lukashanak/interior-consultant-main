
let body = document.getElementById("body");
let wraper = document.getElementById("wraper");

let logo = document.getElementById("logo");
let collapsedMenuIcon = document.getElementById("collapsedMenuIcon");
let closeIcon = document.getElementById("closeIcon");

let menuItems = document.getElementById("menuItems");

let main = document.getElementById("main");
let footer = document.getElementById("footer");

function collapseMenu() {
    // step 1 - hide logo and menuIcon
      logo.classList.add("element--hidden");
      menuIcon.classList.add("element--hidden");
      main.classList.add("element--hidden");
      footer.classList.add("element--hidden");
    // step 2 - add class of .height-100-percents to wraper
      wraper.classList.add("wraper-active");


      closeIcon.classList.remove("element--hidden");
      menuItems.classList.remove("element--hidden");
}

function hideMenu() {
  logo.classList.remove("element--hidden");
  menuIcon.classList.remove("element--hidden");
  main.classList.remove("element--hidden");
  footer.classList.remove("element--hidden");

  wraper.classList.remove("height-100-percents");

  closeIcon.classList.add("element--hidden");

  menuItems.classList.add("element--hidden");

  wraper.classList.remove("wraper-active");
}


menuIcon.addEventListener("click",
function(){
    collapseMenu();
})

closeIcon.addEventListener("click",
function(){
    hideMenu();
})
