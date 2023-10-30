var sidemenu = document.getElementById("sidemenu");
var isOpen = false;

function openmenu() {
    if (isOpen) {
        sidemenu.style.left = "-300px"; // Close the menu
        isOpen = false;
    } else {
        sidemenu.style.left = "0"; // Open the menu
        isOpen = true;
    }
}

function closemenu() {
    sidemenu.style.left = "-300px"; // Close the menu
    isOpen = false;
}