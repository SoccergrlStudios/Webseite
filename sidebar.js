var oldArticleHeight = 0;

function openSidebar() {
    document.getElementById("sidebar").style.display = "block";

    oldArticleHeight = document.getElementById("article").offsetHeight;
    if(document.getElementById("article").offsetHeight < document.getElementById("sidebar").offsetHeight){
        document.getElementById("article").style.height = document.getElementById("sidebar").offsetHeight + "px";
    }

    // Move the open Button for the Sidebar, so it doesn't shine through
    document.getElementById("buttonOpen").style.marginLeft = "0.5em";
    document.getElementById("buttonOpen").style.marginRight = "0.5em";
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";

    if(oldArticleHeight !== document.getElementById("article").offsetHeight){
        document.getElementById("article").style.height = oldArticleHeight + "px";
    }

    // Move the open Button for the Sidebar back to the original Position
    document.getElementById("buttonOpen").style.marginLeft = "";
    document.getElementById("buttonOpen").style.marginRight = "";
}