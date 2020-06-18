

Object.prototype.random = function(arg){
    return console.log(`%c ${arg}`, `color:${"#"+((1<<24)*Math.random()|0).toString(16)}`)
}


// Object.prototype.emoji = function(arg, feeling){
//     return console.log(`%c${emoji[feeling]} ${arg} `, `color:${"#"+((1<<24)*Math.random()|0).toString(16)}`)
// }




let count = 0; 
Object.prototype.emoji = function(arg, feeling){
    //console.log(arg, feeling, x, this.memory, this.trace(), this.dir('dfs'), this.context(), this.count() )
    this.clear()    


    let words = arg.split(' ')
    let emo = emoji['smiley']
    for(word of words){        
        if(emoji[word]){        
            emo = emoji[word]
            break
        }
    }

    count++
    if(typeof arg != 'string'){
        return ( this.log(emo, arg) )
    } else {
        return ( 
            this.trace(`%c${emo} ${arg} `, 
            `
                color:${"#"+((1<<24)*Math.random()|0).toString(16)}; 
                transition: all 1s; 
                font-size: 16px;
                animation: cool 2s infinite;
            `
            ) 
        )
    }
}

function log(arg, feeling){
    
    return console.emoji(arg, feeling)
 } 

