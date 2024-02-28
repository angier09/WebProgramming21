const userName = document.getElementById("name");
const nameError = document.getElementById("nameError");
const userEmail = document.getElementById("email");
const emailError = document.getElementById("emailError");
const userPassword = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const country=document.getElementById("country");
const countryError=document.getElementById("countryError");
const phone=document.getElementById("phone");
const phoneError=document.getElementById("phoneError");
const DOB=document.getElementById("DOB");
const dobError=document.getElementById("dobError");
const zipcode=document.getElementById("zipcode");
const zipError=document.getElementById("zipError");

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

    if (phone.value === '' || phone.value === null)
    {
        e.preventDefault();
        phoneError.innerHTML = "*Phone number required";
    }
    else
    {
        if (!validPhoneNumber(phone.value))
        {
            e.preventDefault();
            phoneError.innerHTML = "*numbers only";
        }
    }

    if (country.value === '' || country.value === null)
    {
        e.preventDefault();
        countryError.innerHTML = "*country required";
    }
    else
    {
        if (!validName(country.value))
        {
            e.preventDefault();
            countryError.innerHTML = "*alphabets only";
        }
    }

    if (zipcode.value === '' || zipcode.value === null)
    {
        e.preventDefault();
        zipError.innerHTML = "*Zipcode required";
    }
    else
    {
        if (!validPhoneNumber(zipcode.value))
        {
            e.preventDefault();
            zipcode.innerHTML = "*number only";
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

function validPhoneNumber(phoneNumber)
{
    var regex = /^[0-9]+$/;
    if(regex.test(phoneNumber))
    {
        return true;   
    }
    return false;
}