const numbers = [ 5 ];
let factorial = 1;

for (let i = 1; i <= numbers[ 0 ]; i++)
{
	factorial *= i;
}

console.log(factorial);


// --------------------------------------------------------------


function calculateFactorial (num) {

	let factorial = 1

	for (let i = 1; i <= num[ 0 ]; i++)
	{
		factorial *= i
	}
	return factorial
}
const aaa = [ 6 ]

console.log(calculateFactorial(aaa))


// --------------------------------------------------------------


digits = [ 1,2,3,4,5 ]
const result = digits.reduce(function (a,b) {
	return a * b
})

console.log(result)