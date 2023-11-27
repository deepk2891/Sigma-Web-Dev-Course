let random = Math.random()
console.log(random)

num1 = Number(prompt(`Enter num1 : `))
num2 = Number(prompt(`Enter num2 : `))
operator = prompt(`Enter operator : /, *, -, +`)

let obj = {
    '+': '-',
    '*': '+',
    '-': '/',
    '/': '**'
}

if (random > 0.1)
{
    console.log(`The result is ${ eval(`${ num1 } ${ operator } ${ num2 }`) } `)
} else
{
    operator = obj[ operator ]
    console.log(`The result is ${ eval(`${ num1 } ${ operator } ${ num2 }`) } `)
}