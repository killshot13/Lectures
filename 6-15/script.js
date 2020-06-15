console.random("That was easy")



//"method" is function inside of class or object

class Animal {
    constructor(animal, age){
        this.animal = animal
        this.age = age
    }

    sayHello = (name) => {
        console.random(`I am a ${this.animal}, nice to meet you ${name}`)
        this.howOldAreYou()
    }

    howOldAreYou = () => {
        console.random(`I am ${this.age} years old`)
    }
}

let timon = new Animal('meer cat', 16)
let pumbaa = new Animal('hog', 13)


// console.log(simba, timon, pumbaa)

class Cat extends Animal {
    constructor(animal, age, milk){
        super(animal, age)
        this.milk = milk
    }
    meow = () => {
        console.random(`${this.animal} Meeeeeeeooooooooooowwwwwwwww`)
    }
}


let mufassa = new Cat('lion', 99, 'cow')
let simba = new Cat('lion',2, 'chocolate')


























//OOP
const obj = { 

    animal:"giraffe",
    age: 14,
    foods: ["Trees", "Cheetos", "Lollipops"],
    favoriteAnimal: {
        animal: "hippo"
    },
    eat: function(food){ //bananas came through here
        console.random("MOW CRUNCH YUM " + food)
    }, 
    whoAreYou: function () {
        console.random(`I'm a ${this.animal}!! And I'm ${this.age}`)
    },
    happyBirthday: function() {
        this.age++
        this.whoAreYou()
    }

}




//Functional programming 
function tellMeWhoYouAre(obj){
    console.random(`I'm a ${obj.animal}!! And I'm ${obj.age}`)
}


