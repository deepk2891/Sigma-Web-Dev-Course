console.log('hey this is 2')
console.log('hey this is 3')
console.log('hey this is 4')
console.log('hey this is 5')


function greet (name) {
    console.log(`Hey ${ name } how are you !`)
    console.log(`Hey ${ name } Good day !`)
    console.log(`Hey ${ name } you won ! !`)
}
greet('deep')


function sum (a,b,c = 3) {
    return a + b + c
}
result1 = sum(3,5)
result2 = sum(5,5)
result3 = sum(2,5,10)

// console.log(`The sum is ${ sum(1,4) }`)
console.log(`The sum is `,result1)
console.log(`The sum is `,result2)
console.log(`The sum is `,result3)


const fun1 = (x) => {
    console.log(`I am an arrow function`,x)
}
fun1(23)
