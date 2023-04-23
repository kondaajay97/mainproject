var email="raju@gmail.com"
var password="12345"
var form=document.forms
function loginpage()
{
    var userDefEmail=document.getElementById("email").value
    var userDefPassword=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderdiv")
    if(email!=userDefEmail && password!=userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        divbor[0].style.bordercolor="red"
        divbor[1].style.bordercolor="red"
        document.getElementById("result").innerHTML="email and password are wrong"
    }
    else if(email==userDefEmail && password!=userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(201,0,134),red)"
        divbor[0].style.brodercolor="royalblue"
        divbor[1].style.brodercolor="red"
        document.getElementById("result").innerHTML="password is wrong"
    }
    else if(email!=userDefEmail && password==userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,rgb(201,0,134))"
        divbor[0].style.brodercolor="red"
        divbor[1].style.brodercolor="royalblue"
        document.getElementById("result").innerHTML="email is wrong"
    }
    else
    {
        form[0].action="./hompage.html"
        form[0].elements[2].type="submit"
    }
}
function visible()
{
    form[0].elements[1].type="text";
    document.getElementById("passvisible").src="./Assets/logo/monkey mouth closing.jpg"
    document.getElementById("passvisible").style.transform="rotateY(360deg)"
    document.getElementById("passvisible").style.transition="transform 0.5s"
}
function invisible()
{
    form[0].elements[1].type="password";
    document.getElementById("passvisible").src="./Assets/logo/monkey eyes closing.png"
    document.getElementById("passvisible").style.transform="rotateY(0deg)"
    document.getElementById("passvisible").style.transition="transform 0.5s"
}