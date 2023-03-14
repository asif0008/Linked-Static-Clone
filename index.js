// ------------- Dropdown menu JS -----------

let profileMenu = document.getElementById("profileMenu");

function dropdownToggle() {
    profileMenu.classList.toggle("open-menu");
}


// Discover more link JS

let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleLink() {
    sidebarActivity.classList.toggle("open-activity");

    if (sidebarActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    }
    else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
}