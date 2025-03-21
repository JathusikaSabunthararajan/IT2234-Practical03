const mult = (a,b=4) =>
{
	return a*b
}
console.log(mult(5,2))
console.log(mult(5))


//Reset parameter
//we can give any number of arguments
const mySum = (...n) =>
{
	console.log(n)
}
mySum(4,5,6,8,9,2)

//modify mySum function and get the sum of all the numbers 


const mySum2 = (...n)=>
{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mySum2(4,5,6,8,9,2)

const mySum3 = (...n)=>
{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mySum3(4,5,6,8,9,2))