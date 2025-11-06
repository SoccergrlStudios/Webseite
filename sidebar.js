var oldArticleHeight = 0;

function openSidebar() {
    document.getElementById("sidebar").style.display = "block";

    oldArticleHeight = document.getElementById("article").offsetHeight;
    if(document.getElementById("article").offsetHeight < document.getElementById("sidebar").offsetHeight){
        document.getElementById("article").style.height = document.getElementById("sidebar").offsetHeight + "px";
    }

    document.getElementById("buttonOpen").style.marginTop = "0.5em";
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";

    if(oldArticleHeight !== document.getElementById("article").offsetHeight){
        document.getElementById("article").style.height = oldArticleHeight + "px";
    }

    document.getElementById("buttonOpen").style.marginTop = "";
}