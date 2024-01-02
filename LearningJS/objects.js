const user= {username:"Aditya",email: "aks@ak.com", age: "22", gender: "male" , isAdmin: false, address: {flat:"f-15", area:"KENGERI"}}

console.log(user.email)
console.log(user.hasOwnProperty('username'))
console.log(user.hasOwnProperty('draw'))
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(user.address.area)