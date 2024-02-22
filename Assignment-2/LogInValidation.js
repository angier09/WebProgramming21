const userName = document.getElementById("name");
const nameError = document.getElementById("nameError");
const userEmail = document.getElementById("email");
const emailError = document.getElementById("emailError");
const userPassword = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

document.getElementById('signUp').addEventListener('submit', checkForm);

function checkForm(e)
{
    if (userName.value === '' || userName.value === null)
    {
        e.preventDefault();
        nameError.innerHTML = "*name required";
    }
    else
    {
        if (!validName(userName.value))
        {
            e.preventDefault();
            nameError.innerHTML = "*alphabets only";
        }
    }

    if (userEmail.value === '' || userEmail.value === null)
    {
        e.preventDefault();
        emailError.innerHTML = "*email required";
    } 
    else
    {
        if (!ValidateEmail(userEmail.value))
        {
            e.preventDefault();
            emailError.innerHTML = "*invalid email format";
        }
    }

    if (userPassword.value === '' || userPassword.value === null)
    {
        e.preventDefault();
        passwordError.innerHTML = "*password required";
    }
    else if (userPassword.value.length !== 8) 
    {
        e.preventDefault();
        passwordError.innerHTML = "8-digit password";
    }
}

function ValidateEmail(mail)
{
    var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(mail))
    {
        if (mail.endsWith("@gmail.com"))
        {
            return true;
        }
    }
    return false;
}

function validName(userName)
{
    var regex = /^[A-Za-z\s]+$/;
    if (regex.test(userName))
    {
        return true;
    }
    return false;
}
