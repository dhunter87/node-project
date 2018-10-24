// console.log("Hello world")
// function square(x){
//     return x *  x
// }

// for (var i = 0; i < 10; i++){
//     var result = square(i)
//     console.log(result)
// }
var shout = require('./shout')
var motivations = require('motivations')

// console.log(motivations)
// shout("i like to shout!")

var randomIndex = Math.floor(Math.random() * motivations.length)
var randomMotivations = motivations[randomIndex]
console.log(randomMotivations)

shout(randomMotivations)


