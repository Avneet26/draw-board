let stickyIcon = document.querySelector(".sticky-icon");
let stickyBoard = document.querySelector("body");
let stickyElem;
let notes = [];
let isDrag = false;

stickyIcon.addEventListener("click", function () {
    stickyElem = document.createElement("div");
    stickyElem.innerHTML = `<div class="sticky-header">
                                <i class="fas fa-minus"></i>
                                <i class="fas fa-times"></i>
                            </div>
                            <div class="sticky-body" contenteditable="true"></div>`;
    stickyElem.classList.add("sticky-note");
    stickyBoard.appendChild(stickyElem);
    notes.push(stickyElem);
    for (let i = 0; i < notes.length; i++) {
        dragElement(notes[i]);
    }
});

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown =
            dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        console.log(elmnt.offsetTop);
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
