const displayString=(string)=>
{
   
    let n=string.length
    let upperString=string.toUpperCase()
    for(let i=0;i<n;i++)
    {
        document.write(i+upperString[i])
    }
}

const stringInput=(callback)=>
{
    let string=prompt("enter the string")
    callback(string)
}

stringInput(displayString);