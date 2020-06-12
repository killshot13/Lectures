Array.prototype.cool = function(a){
    return this.map(elem => {
        return elem += 4
    })
}

let arr = [1,4,7]

console.log(
    arr.cool('s')
)





let arr = [{a:1},{b:2},{c:3}]

console.log(arr)

let arr2 = arr.map(a=>{
    return {...a}
})

arr[1].b = 5 


console.log(arr2)