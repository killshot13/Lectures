

document.querySelector('#cat').innerHTML = '<h1>Garfield</h1>'


let mice = [
    "Minnie Mouse",
    "Micky Mouse",
    "Speedy Gonzales"
]


function fillTheMice(){
    document.querySelectorAll('.mouse').forEach((domMouse,i) => {
        // console.log(`Replace ${domMouse.innerHTML} with ${mice[i]}`)
        domMouse.innerHTML =  mice[i]
    })
}


function killTheMice(){
    document.querySelectorAll('.mouse').forEach((domMouse,i) => {
        // console.log(`Replace ${domMouse.innerHTML} with X`)
        domMouse.innerHTML =  "X"
    })
}


///Event Listeners 
document.querySelector('#fill').onclick = function(){ //I clicked Fill
    let line = new Error().stack.match(/\(([^()]+)\)/g)[0].split('/').pop().replace(')','')
    log('filling mouse')
    fillTheMice()
}

document.querySelector('#kill').onclick = function(){ //I clicked Kill
    log('killing boom')
    killTheMice()
}





document.querySelector('input').onkeypress = function(e){
    //e.key key pressed 
    console.log(e.target.value)  //whole word
}









document.querySelector('ul').onclick = function(e){
    e.target.parentElement.remove()
}










document.querySelector('#cat').onclick = function(e){
    console.log(e)
    addCoordinate(e.clientX, e.clientY)
}

function addCoordinate(x,y){
    document.querySelector('ul').innerHTML += 
        `<li>Client X: ${x} Client Y: ${y} <button class="deleteBtn">Delete</button></li>`
}



//Also work //document.querySelector('#fill').onclick = fillTheMice 
