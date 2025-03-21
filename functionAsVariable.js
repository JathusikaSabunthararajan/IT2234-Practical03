//function as variable
const msg = () => 
{
	return ("Hello JS")
}
console.log(msg)

//not more variable
const msg2 = () =>
{
	console.log("Hello world")
}
msg2()


const Sum2 = (a,b)  =>
{
	console.log(a+b)
}
Sum2(5,4)

const Sum3 = (a,b) =>
{
	return a+b
}
console.log(Sum3(5,4))