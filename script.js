function showTab(tabId) {
    var tabs = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    var links = document.getElementsByClassName("tab-links");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active-link");
    }

    document.getElementById(tabId).style.display = "block";
    document.querySelector('[onclick="showTab(\'' + tabId + '\')"]').classList.add("active-link");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


// sheet code response code//

