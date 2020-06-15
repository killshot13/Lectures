
Object.prototype.cool = function(arg){
    console.log(`%c ${arg}`, `background-color:cyan; color:darkblue; font-size:24px;`)
}

Object.prototype.random = function(arg){
    return console.log(`%c ${arg}`, `color:${"#"+((1<<24)*Math.random()|0).toString(16)}`)
}

