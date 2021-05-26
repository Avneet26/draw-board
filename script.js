let canvas = document.querySelector(".board");
let tool = canvas.getContext("2d");

let isDown = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Basic drawing function
tool.lineJoin = "round";
tool.lineCap = "round"
tool.lineWidth = 5;
canvas.addEventListener("mousedown",function(e){
    tool.moveTo(e.clientX,e.clientY);
    isDown = true;
})
canvas.addEventListener("mousemove",function(e){
    if(isDown){
        tool.lineTo(e.clientX,e.clientY); 
        tool.stroke();
    }
})
canvas.addEventListener("mouseup",function(){
    isDown = false;
})