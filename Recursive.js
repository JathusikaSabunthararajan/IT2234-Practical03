function printNumbers(n, current = 1) 
{
    if (current > n)
	{
		return
	}		
		
    console.log(current)
    printNumbers(n, current + 1)
}


let n = 10;
printNumbers(n);
