let allTools = document.querySelectorAll(".tools");
let penIcon = document.querySelector(".penColor i");
let colors = document.querySelectorAll(".penColor .color");
let penWidthInp = document.querySelector(".pen input");
let ersIcon = document.querySelector(".eraser i");
let ersWidthInp = document.querySelector(".eraser input");
let penDropdown = document.querySelector(".pen-dropdown");
let penSetBtn = document.querySelector(".penIcons .fa-chevron-down");
let ersDropdown = document.querySelector(".ers-dropdown");
let ersSetBtn = document.querySelector(".ersIcons .fa-chevron-down");

let toolInHand = "pen";
let penColor = "";
let eraserWidth = 10;
let penWidth = 10;
let penDrop = false;
let ersDrop = false;

let canvas = document.querySelector(".board");
let tool = canvas.getContext("2d");

let isDown = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Tool in Hand
for (let i = 0; i < allTools.length; i++) {
    allTools[i].addEventListener("click", function () {
        for (let j = 0; j < allTools.length; j++) {
            allTools[j].classList.remove("active");
        }
        let activeTool = allTools[i].classList[0];
        allTools[i].classList.add("active");
        toolInHand = activeTool;
    });
}

//Basic drawing function
tool.lineJoin = "round";
tool.lineCap = "round";

canvas.addEventListener("mousedown", function (e) {
    tool.beginPath();
    tool.moveTo(e.clientX, e.clientY);
    tool.strokeStyle = penColor;
    isDown = true;
});
canvas.addEventListener("mousemove", function (e) {
    if (isDown) {
        if (toolInHand == "pen") {
            tool.lineWidth = penWidth;
            tool.globalCompositeOperation = "source-over";
            tool.lineTo(e.clientX, e.clientY);
            tool.stroke();
        } else {
            tool.lineWidth = eraserWidth;
            tool.globalCompositeOperation = "destination-out";
            tool.lineTo(e.clientX, e.clientY);
            tool.stroke();
        }
    }
});
canvas.addEventListener("mouseup", function () {
    isDown = false;
});

//Pen implementation
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function () {
        let color = colors[i].classList[1];
        penColor = color;
        penIcon.style.color = color;
    });
}
penWidthInp.addEventListener("input", function () {
    penWidth = penWidthInp.value;
});

penSetBtn.addEventListener("click", function () {
    if (penDrop == false) {
        penDrop = true;
        penDropdown.style.display = "block";
        penDropdown.classList.add("dropdownDown");
        penDropdown.classList.remove("dropdownUp");
    } else {
        penDrop = false;
        penDropdown.style.display = "none";
        penDropdown.classList.add("dropdownUp");
        penDropdown.classList.remove("dropdownDown");
    }
});

if (penDrop == false) {
    penDropdown.style.display = "none";
} else {
    penDropdown.style.display = "block";
}

//Eraser implementation
ersWidthInp.addEventListener("input", function () {
    eraserWidth = ersWidthInp.value;
});
ersIcon.addEventListener("dblclick", function () {
    tool.clearRect(0, 0, canvas.width, canvas.height);
});

ersSetBtn.addEventListener("click", function () {
    if (ersDrop == false) {
        ersDrop = true;
        ersDropdown.style.display = "block";
        ersDropdown.classList.add("dropdownDown");
        ersDropdown.classList.remove("dropdownUp");
    } else {
        ersDrop = false;
        ersDropdown.style.display = "none";
        ersDropdown.classList.add("dropdownUp");
        ersDropdown.classList.remove("dropdownDown");
    }
});

if (ersDrop == false) {
    ersDropdown.style.display = "none";
} else {
    ersDropdown.style.display = "block";
}