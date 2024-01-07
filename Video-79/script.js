let a = prompt("Enter number 1 : ")

let b = prompt("Enter number 2 : ")

if (isNaN(a) || isNaN(b))
{
    throw SyntaxError("This is not allowed")
}

let sum = parseInt(a) + parseInt(b)


function main () {
    x = 1
    try
    {
        console.log("The sum is " + sum * x);
    }
    catch (error)
    {
        console.log("Error aa gya bhai");
        return false
    }
    finally
    {
        console.log("files are being closed and db connection is being closed");
    }
}
main()