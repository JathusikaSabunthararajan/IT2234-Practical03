//call back function


const greet = (msg,func) =>
{
	console.log("Hi...."+msg)
	func()
}
const myName = (name) => 
{
	console.log("My name is "+ name)
}
//myName("Alice")
//greet("Good morning", myName("David"))
greet("Good morning", ()=>
{
	console.log("My name is David")
})

const multtwo = (n)=>n*2

const myarr = (mul,...n)=>
{
	n.forEach((i)=> console.log(mul(i)))
}

myarr(multtwo,4,5,6,8,2)