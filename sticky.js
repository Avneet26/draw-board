let stickyIcon = document.querySelector(".sticky-icon");
let stickyHeader = document.querySelector(".sticky-header");
let stickyBoard = document.querySelector("body");
let deleteBtn;
let minBtn;

let stickyElem;
let notes = [];
let isDrag = false;
let elemid = 0;

stickyIcon.addEventListener("click", function () {
    stickyElem = document.createElement("div");
    stickyElem.innerHTML = `<div class="sticky-header" id="note${elemid}header">
                                <i class="fas fa-minus" id="minus${elemid}"></i>
                                <i class="fas fa-times" id="plus${elemid}"></i>
                            </div>
                            <div class="sticky-body" contenteditable="true"></div>`;
    stickyElem.classList.add("sticky-note");
    stickyElem.setAttribute("id", `note${elemid}`);
    stickyBoard.appendChild(stickyElem);
    notes.push(stickyElem);

    elemid++;
    // dragElement(stickyElem);
    for (let i = 0; i < notes.length; i++) {
        dragElement(notes[i]);
    }

    deleteBtn = document.querySelectorAll(".fa-times");
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", deleteSticky);
    }

    minBtn = document.querySelectorAll(".fa-minus");
    for (let i = 0; i < minBtn.length; i++) {
        minBtn[i].addEventListener("click", minSticky);
    }
});

//Drag Sticky Listeners
function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown =
            dragMouseDown;
    } else {
        // elmnt.onmousedown = dragMouseDown;
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
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//Delete Sticky
function deleteSticky(e) {
    let currElem = e.currentTarget;
    let deleteId = currElem.parentNode.parentNode;
    console.log(deleteId);
    deleteId.remove();
}

function minSticky(e) {
    let currElem = e.currentTarget;
    let minimizeSticky = currElem.parentNode.parentNode;
    let idSticky = minimizeSticky.getAttribute("id");
    minimizeSticky.children[1].classList.toggle("sticky-minimize");
}
