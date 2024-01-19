function validate()
{
    var un=/^[A-Za-z]+$/
    var up=/^[6-9]{1}[0-9]{9}$/
    var regularExpression  =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/
    var uname=document.getElementById("uname").value
    var phone=document.getElementById("phone").value
    var email=document.getElementById("email").value
    var pass=document.getElementById("pass").value
    var confirmpass=document.getElementById("password").value
    var a=true
    if(!(uname.match(un)))
    {
        document.getElementById("msg").innerHTML="Username should contain alphabets only."
        a=false
    }
    
    if(uname.length<3)
    {
        document.getElementById("msg").innerHTML="Username should contains minimum 3 characters."
        a= false
    }
    if(uname.length>10)
    {
        document.getElementById("msg").innerHTML="Username should contains maximum 10 characters."
        a=false
    }
    if(uname=="")
    {
        document.getElementById("msg").innerHTML="Enter the Username."
         a= false
    }
if(email=="")
{
    document.getElementById("msg3").innerHTML="Enter the Email"
    a=false
}
if(phone=="")
{
    document.getElementById("msg2").innerHTML="Phone Number is invalid."
    a=false
}
if(!(phone.match(up)))
{
    document.getElementById("msg2").innerHTML="Phone Number is invalid."
    a= false
}
if(!(pass.match(regularExpression)))
{
    document.getElementById("msg4").innerHTML=" Minimun 6 and Maximum 12 characters,Atleast one special character and number."
    a= false
}

if(pass=="")
{
    document.getElementById("msg4").innerHTML="Enter the Password."
    a=false
}

if(pass!=confirmpass)
{
    document.getElementById("msg5").innerHTML="password doesn't match."
    a= false
}
if(confirmpass=="")
{
    document.getElementById("msg5").innerHTML="Enter the Password."
    a=false
}
return a
}