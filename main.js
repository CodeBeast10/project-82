var mouseEvent="empty"
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
mouseEvent="mousedown";
color= document.getElementById("color").value ; 
linewidth= document.getElementById("pen").value ;
radius= document.getElementById("radius").value;
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {

currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
    console.log ("current position of x and y coordinates");
    console.log ("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.linewidth=linewidth;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radius, 0, 2*MathPI);
    ctx.stroke();
}
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e) {
    mouseEvent="mouseleave";
}

function cleararea() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}