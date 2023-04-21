var LeftSide = document.getElementById('left');
var RightSide = document.getElementById('right');
var CubeStart = 10;
var level = 1;
//generate the position
function GeneratePosition(max, min) {
    return Math.random() * (max - min) + min;
}

function GenerateCube(CubeNum) {
    clearFaces();
    var max = LeftSide.offsetWidth-55;
    for (var i = 0; i < CubeNum; i++) {
        var el = document.createElement('div');
        el.setAttribute("class", "cube");
        el.style.left = GeneratePosition(max, 0) + "px";
        el.style.top = GeneratePosition(max, 0) + "px";
        LeftSide.appendChild(el);
    }
    CopyToRightSide();
}

function clearFaces() {
    while (LeftSide.firstChild) {
        LeftSide.removeChild(LeftSide.firstChild);
    }
    while (RightSide.firstChild) {
        RightSide.removeChild(RightSide.firstChild);
    }
}
function CopyToRightSide() {
    var LeftSideCubes = LeftSide.cloneNode(true);
    LeftSideCubes.removeChild(LeftSideCubes.lastChild);
    LeftSideCubes.removeAttribute("id");
    RightSide.appendChild(LeftSideCubes);
    MakeActions();
    LeftSideCubes = "";
}

function MakeActions() {
    var LastSquare = document.getElementById('left').lastChild;
    var status = document.getElementById('status');
    LastSquare.onclick = function nextLevel(event) {
        event.stopPropagation();
        CubeStart = CubeStart + 5;
        level += 1;
        if (level == 6){
            document.getElementById("Message-Container").style.visibility = 'visible';
            document.getElementById("okBtn").onclick = function altaf() { 
                location.href = '../Chapter 4/chapter4.html'; 
            }
        }
        status.innerHTML = "Level " + level;
        GenerateCubes();
    }
}
document.getElementById('left').onclick = function bodyClick() {
alert("Game Over! You Lost..!!");
    if (confirm("Do you want to start over?")) {
         location.href = 'chapter3.html';
    }
}

function GenerateCubes(){
    GenerateCube(CubeStart);
}

window.onload = function () {
    GenerateCubes();
}




