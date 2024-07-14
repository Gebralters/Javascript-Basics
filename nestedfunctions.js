//nested functions

let username=window.prompt('Enter your username');
let password=window.prompt("Enter your password");

function login()
{

    console.log(`Welcome again ${getusername}, Your password is ${getpassword}`)
    function getusername()
    {
       return username;
    }
    function getpassword()
    {
        return password;
    }
}
