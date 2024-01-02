const heros = ["Batman", "Spider Man" , "Flask", "me"]
console.log(heros.length)
heros.push("Me")// to add some element in our Array
console.log(heros)
const op = heros.pop(heros) // to remove the last item from our array
console.log(heros)
heros.unshift("Me again") // to add something at the first place(0th index) of the array
console.log(heros)
console.log(heros.slice(1,4)) // to copy the index values and return it, but in this last index i.e., 4 in this case will not be counted
console.log(heros.splice(1,2)) // thi ssplice will delete the range which we've given it the range, but in this last index i.e., 2 in this case will be considered.
console.log(heros)
