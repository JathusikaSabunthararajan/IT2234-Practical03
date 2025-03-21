//write a boolean function to find a given number is prime

function PrimeNumber(a)
{
	let is_prime = true
	if(a==0 || a==1)
	{
		is_prime=false
	}
	for(let i=2; i<a; i++)
	{
		if(a%i==0)
		{
			is_prime=false
			break
		}
	}
	if(is_prime)
	{
		console.log(a+ " is Prime")
	}
	else
	{
		console.log(a+ " is not Prime")
	}
	return 0;
}

PrimeNumber(9)
PrimeNumber(2)
PrimeNumber(12)