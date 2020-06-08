
let a = "This is JS"//Strings are usually words wrapped in quotes
// console.log(a, 'Type of:', typeof a)


let b = 88.2 //Numbers have no quotes and are just numbers 
// console.log(b, 'Type is: ', typeof b)

let c = [ //Array
    'Juancito', 'Stefan', 6715615, a, b
]

// console.log(c, 'Type is ',  typeof c)

//console.log(c[0]) //Array is zero indexed 


let d = {  //key value pairs  Object
    name: 'Andrew'
}

// console.log(d.name) //Dot notation 
// console.log(d['name'])  //Bracket notation



let e = function(){   //Function Methods are very similar TBD 
    console.log('e')
}

function f(){       //Function
    console.log('f')
}

let g = (name, one, two, three, four=4) => {     //Function
    return `${name} ${one} ${two} ${three} ${four}` //String interpolation
}

//Argument/Parameters are ways of passing data to functions

let returnedValue =  g('peacock', 'giraffe', 'horse', 'monkey')








// e()
// f()
// g()


let h = true  //Booleans 
// console.log(h, typeof h)

let i = false
// console.log(i, typeof i)


// console.log("does 5 equal 5?", 5 === '5') // 
// if(i === false){  //conditional 
//     console.log('ruff!')
// }else{
//     console.log('they are not equal') 
// }




// for(let i=0; i<100; i++){ //Loops
//     console.log(
//         g('Carlos'),                        
//         i
//     )
// }

// let x =0;
// while(x<5){  //Loops
//     console.log(x)
//     x++;
// }

//null, undefined are falsey

let cars = {
    seats:4,
    color: 'red',
    style:'convertible'
}

let u = undefined 
console.log(u, typeof u)

let v = null 
console.log(v, typeof v)

if(true){
    console.log('does this fire')
}