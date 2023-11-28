let arr = [ 1,2,3,4,5 ]

console.log(arr)
console.log(arr.length)

console.log(arr[ 0 ])
console.log(arr[ 1 ])
console.log(arr[ 2 ])
console.log(arr[ 3 ])
console.log(arr[ 4 ])

arr[ 0 ] = 5000
console.log(arr)

console.log(arr.join(' and '))


var num = [ 1,2,3,4,5,6,]
console.log(num.pop())
console.log(num)

num.push(1000)
num.push('deep')
console.log(num)

// shift() is brother of pop()
// unshift() is brother of push()

num.shift()
console.log(num)

num.unshift('deep')
console.log(num)

delete num[ 5 ]
console.log(num)

let a1 = [ 1,2,3 ]
let a2 = [ 4,5,6 ]
let a3 = [ 7,8,9 ]
console.log(a1.concat(a2,a3))

let numbers = [ 1,2,3,4,5 ]

numbers.splice(1,3)
console.log(numbers)

numbers.splice(1,3,222,333)
console.log(numbers)


let a = [ 1,93,5,6,,88 ]
for (let index = 0; index < a.length; index++)
{
    const element = a[ index ];
    console.log(element)
}
a.forEach((value,index,arr) => {
    console.log(value,index,arr)
});


let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj)
{
    if (Object.hasOwnProperty.call(obj,key))
    {
        const element = obj[ key ];
        console.log(key,element)
    }
}


for (const iterator of num)
{
    console.log(iterator)
}


