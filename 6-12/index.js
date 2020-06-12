
let names = [
    {name:'roy',    color:'blue'}, 
    {name:'hanna',  color:'red'}, 
    {name:'anthony',color:'green'}, 
    {name:'andrew', color:'yellow'}, 
    {name:'grajales',  color:'red'}, 
    {name:'juan',   color:'perrywinkle'},
    {name:'count dracula',  color:'red'}, 

]


let persons = []
for(let n of names){
    if(n.color === 'red'){
        persons.push(n.name)
    }
}

//console.log(persons)


// console.log(sentence)





/**Loops */

names.forEach(key => { //Basic loop
    //console.log(key)
})



let newNamesArray = names.map(key => {  //returns a new array 
    //console.log(key)
    return key.name.toUpperCase()
})

// console.log(newNamesArray)






let sentence2 = names.reduce((acc, val, iterator) =>{ //has an accumaltor and returns a new result
    //console.log(val)
    return acc+= ` & ${val.name} `
}, 'Reduce : ')

// console.log(sentence2)




let numbers = [9, 394873498579438, 454, 4,111]
//numbers.sort() [111, 4, 9]


names.sort((a,b)=>{ //returns a new sorted array 
    if(a.name > b.name){
        return -1
    } 
    if(b.name > a.name){
        return 1
    }
    if( b.name === a.name){
        return 0
    }
})

// console.log(names)


let persons2 = names.filter(n => {
    if(n.color === 'red'){
        return n    
    }
})

console.log(persons2)







let person2 = names.find(name => {
    return name.color === 'red'
}) 

// console.log(person2.name)


 



























Array.prototype.cool = function(a){
    return this.map(name => "You're cool "+ name)
}

// console.log(
//     names.cool()
// )


let animals = ['giraffe', 'cheetah', 'dog']


// console.log(
//     animals.cool()
// )












let obj = {
    animal: 'penguin',
    height: 3,
    fur: 'tuxedo'
}


// for(let o in obj){
//     console.log(o, obj[o])
// }












