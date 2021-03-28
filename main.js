/* table of content:
0. dom elements
1. collapseMenu() function
2. hideMenu() function
3. event listeners
*/


let logo = document.getElementById("logo");
let menuIcon = document.getElementById("menuIcon");
let main = document.getElementById("main");
let footer = document.getElementById("footer");
let wraper = document.getElementById("wraper");
let closeIcon = document.getElementById("closeIcon");
let menuItems = document.getElementById("menuItems");

function showMenu() {
      // 1. step - hide logo and menuIcon
      logo.classList.add("element--hidden");
      menuIcon.classList.add("element--hidden");
      // 2. step - hide page content (main and footer)
      main.classList.add("element--hidden");
      footer.classList.add("element--hidden");
      // 3. step - add class .wraper-active to the wraper
      wraper.classList.add("wraper--active-menu");
      // 4. step - show closeIcon and menuItems
      closeIcon.classList.remove("element--hidden");
      menuItems.classList.remove("element--hidden");
}

function hideMenu() {
  // 1. step - show logo and menuIcon
  logo.classList.remove("element--hidden");
  menuIcon.classList.remove("element--hidden");
  // 2. step - show page content (main and footer)
  main.classList.remove("element--hidden");
  footer.classList.remove("element--hidden");
  // 3. step - remove class .wraper-active to the wraper
  wraper.classList.remove("wraper--active-menu");
  // 4. step - hide closeIcon and menuItems
  closeIcon.classList.add("element--hidden");
  menuItems.classList.add("element--hidden");
}


menuIcon.addEventListener("click",
function(){
    showMenu();
})

closeIcon.addEventListener("click",
function(){
    hideMenu();
})
