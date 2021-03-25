import React from 'react'

const Lab2 = () => {

    var canvas = document.getElementById("myCanvas"),
        context = canvas.getContext("2d"),
        w = canvas.width,
        h = canvas.height;

    let mouse = {  x: 0, y:0 };
    let draw = false;

    canvas.addEventListener("mousedown", function(e){

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        draw = true;
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
    });
    canvas.addEventListener("mousemove", function(e){

        if(draw==true){

            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
        }
    });
    canvas.addEventListener("mouseup", function(e){

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
        context.closePath();
        draw = false;
    });

    return(
        <div>


        </div>
    )
}

export default Lab2