let isNavbarActive = false;
let switchNavbarVisibility=()=> {
    let closeIcon = document.getElementById("closeIcon");
    let navbar = document.getElementById("navbar");
    let logo = document.getElementById("logo");
    let menuIcon = document.getElementById("menuIcon");
    let header = document.getElementById("header");

    if(isNavbarActive === false) {
        // step 2 - hide logo and menu icon
        logo.classList.add("hidden");
        menuIcon.classList.add("hidden");
        console.log(menuIcon.classList);
        // step 1 - show navbar and close icon and add ctive class to the header
        closeIcon.classList.remove("hidden");
        navbar.classList.remove("hidden");
        header.classList.add("header-active-nav");
    }
    else {
                // step 2 - show logo and menu icon
                logo.classList.remove("hidden");
                menuIcon.classList.remove("hidden");
                // step 1 - hide navbar and close icon and remove ctive class to the header
                closeIcon.classList.add("hidden");
                navbar.classList.add("hidden");
                header.classList.remove("header-active-nav");
    }
    isNavbarActive= !isNavbarActive;
}




document.getElementById('menuIcon').addEventListener("click", 
function(){
    switchNavbarVisibility();
})

document.getElementById('closeIcon').addEventListener("click", 
function(){
    switchNavbarVisibility();
})