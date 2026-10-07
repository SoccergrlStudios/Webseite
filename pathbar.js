let curHeight;

function setStartHeight(){
    curHeight = document.getElementById("path").offsetHeight;

    if (curHeight > document.getElementById("path1").offsetHeight){
        multipleLines();
    }
}

function checkHeight(){
    let height = document.getElementById("path").offsetHeight;

    if (height > curHeight){
        multipleLines();
    }
    else if (height < curHeight){
        singleLine();
    }
    else
        return;

    curHeight = height;
}

function multipleLines(){
    document.getElementById("path2").style.marginTop = "0.5em";

    let buttons = document.getElementById("path2").children;

    for (let i = 0; i < buttons.length; i++){
        buttons[i].onmouseenter = () => {
            document.getElementById("path").style.marginBottom = "-0.1em";
        };
        buttons[i].onmouseleave = () => {
            document.getElementById("path").style.marginBottom = "";
        };
    }
}

function singleLine(){
    document.getElementById("path2").style.marginTop = "";

    let buttons = document.getElementById("path2").children;

    for (let i = 0; i < buttons.length; i++){
        buttons[i].onmouseenter = () => {};
        buttons[i].onmouseleave = () => {};
    }
}