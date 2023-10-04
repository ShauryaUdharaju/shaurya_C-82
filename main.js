var mouseEvent="empty"
var lastPositionOfX, lastPositionOfY

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="black"
widthOfLine=2

canvas.addEventListener("mousedown", my_mouse_down)
function my_mouse_down(e){
    mouseEvent="mouseDown"
}

canvas.addEventListener("mouseup", my_mouse_up)
function my_mouse_up(e){
    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave", my_mouse_leave)
function my_mouse_leave(e){
    mouseEvent="mouseLeave"
}

canvas.addEventListener("mousemove", my_mouse_move)
function my_mouse_move(e){
    currentPositionOfMouse_X=e.clientX-canvas.offsetLeft
    currentPositionOfMouse_Y=e.clientY-canvas.offsetTop

   if(mouseEvent=="mouseDown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthOfLine
    
    ctx.moveTo(lastPositionOfX, lastPositionOfY)
    ctx.lineTo(currentPositionOfMouse_X, currentPositionOfMouse_Y)
    ctx.stroke()
   }
   lastPositionOfX=currentPositionOfMouse_X
   lastPositionOfY=currentPositionOfMouse_Y
}