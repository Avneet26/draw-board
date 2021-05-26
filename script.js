let allTools = document.querySelectorAll(".tools");
let penIcon = document.querySelector(".penColor i");
let colors = document.querySelectorAll(".penColor .color");
let penWidthInp = document.querySelector(".pen input");
let ersIcon = document.querySelector(".eraser i");
let ersWidthInp = document.querySelector(".eraser input");

let toolInHand = "pen";
let penColor = "";
let eraserWidth = 10;
let penWidth = 10;

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
        if ((toolInHand == "pen")) {
            tool.lineWidth = penWidth;
            tool.globalCompositeOperation="source-over";
            tool.lineTo(e.clientX, e.clientY);
            tool.stroke();
        }else{
            tool.lineWidth = eraserWidth;
            tool.globalCompositeOperation="destination-out";
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
penWidthInp.addEventListener("input",function(){
    penWidth = penWidthInp.value;
})

//Eraser implementation
ersWidthInp.addEventListener("input",function(){
    eraserWidth = ersWidthInp.value;
})
ersIcon.addEventListener("dblclick",function(){
    tool.clearRect(0,0,canvas.width,canvas.height);
})