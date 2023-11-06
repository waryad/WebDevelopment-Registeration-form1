
document.myForm.onsubmit = function()
{
    return validate();
};


var validate = function()
{
    var isValid = true;



   
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");
    
   
    if (name.length < 6)
    {
        nameError.innerHTML = "Name field is required";
        nameError.style.color = "red";
        isValid = false;
    }
    else
    {
        
        nameError.innerHTML = "";

    }
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var passwordError = document.getElementById("passwordError");
    var password2Error = document.getElementById("password2Error");
    
    if (password.length < 6|| password.length>12) {
        passwordError.innerHTML = "Password must be at least characters length should be between 6-12";
        passwordError.style.color = "red";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }
    
    if (password !== password2) {
        password2Error.innerHTML = "Password and confirm password must match";
        password2Error.style.color = "red";
        isValid = false;
    } else {
        password2Error.innerHTML = "";
    }
    
    if (address=="")
    {
        addressError.innerHTML = "Required";
        addressError.style.color = "red";
        isValid = false;
    }
    else
    {
        
        addressError.innerHTML = "";

    }
   
    var course= document.getElementById("course").value;
    var courseError = document.getElementById("courseError");
    
    if (course == -1)     
    {
        courseError.innerHTML = "Please select your course";
        courseError.style.color = "red";
        isValid = false;
    }
    else
    {
        courseError.innerHTML = "";
    }
    

    var city= document.getElementById("city").value;
    var cityError = document.getElementById("cityError");
    
    if (city == -3)     
    {
        cityError.innerHTML = "Please select your city";
        cityError.style.color = "red";
        isValid = false;
    }
    else
    {
        cityError.innerHTML = "";
    }
    return isValid;
};