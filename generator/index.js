//generators functions*  using the yield reserved word and "for of" loops
// using the next().value we are able to get the specific element from the array

function* gen()
{
    yield 1;
    yield 2;
    yield 3;

}

const g = gen();
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)


//-------------------------------

function* iterate(array)
{
    for(let value of array)
    {
        yield value
    }
}

const it = iterate(['Vicktor', 'Manuel', 'Jaimes', 'Mora'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);