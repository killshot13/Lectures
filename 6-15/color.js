

Object.prototype.random = function(arg){
    return console.log(`%c ${arg}`, `color:${"#"+((1<<24)*Math.random()|0).toString(16)}`)
}


// Object.prototype.emoji = function(arg, feeling){
//     return console.log(`%c${emoji[feeling]} ${arg} `, `color:${"#"+((1<<24)*Math.random()|0).toString(16)}`)
// }


Object.prototype.emoji = function(arg, feeling){
    return ( 
        console.log(`%c${emoji[feeling]} ${arg} `, 
        `
            color:${"#"+((1<<24)*Math.random()|0).toString(16)}; 
            transition: all 1s; 
            font-size: 16px;
        `
        ) 
    )
}
