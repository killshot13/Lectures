const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth
canvas.height= window.innerHeight

const ctx = canvas.getContext('2d');

//Methods for drawing: 
//ctx.fillRect,  ctx.drawImage, ctx.fillStyle, clearRect

//Methods fot animation:
//window.requestAnimationFrame, window.cancelAnimationFrame

let redObj = {
    color:'red',
    width:15,
    height: 200,
    x: canvas.width-15,
    y: canvas.height-200
}

let greenObj = {
    color:'green',
    width:50,
    height: 50,
    x: 0,
    y: 100
}



function checkCollision(){

    if (redObj.x < greenObj.x + greenObj.width &&
    redObj.x + redObj.width > greenObj.x &&
    redObj.y < greenObj.y + greenObj.height &&
    redObj.y + redObj.height > greenObj.y) {
        // collision detected!
        console.log('collision!!!!')
        window.cancelAnimationFrame(id)
    }
}


function drawRed(i){
    ctx.fillStyle = redObj.color;
    redObj.x -= 1
    redObj.y -= 1
    ctx.fillRect(redObj.x, redObj.y, redObj.width, redObj.height)
}

function drawGreen(i){
    ctx.fillStyle = greenObj.color;
    greenObj.x = i 
    ctx.fillRect(greenObj.x, greenObj.y, greenObj.width, greenObj.height)

}



let i = 0; 
let id = null; 




function animate(){ //Game engine... 
    id = window.requestAnimationFrame(animate)
    i+=1;
    ctx.clearRect(0,0,canvas.width,canvas.height) //Clears everythign I've drawn
    
    drawRed(i)
    drawGreen(i)
    checkCollision()

}
animate()

