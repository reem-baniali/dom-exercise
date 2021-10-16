//call password input by query selector
let password = document.querySelector("#password1");

//call password confirm input by query selectior
let confirmPass = document.querySelector("#password2");

//call first password check div by query selector
let pwFirstCheck = document.querySelector("#pw1_check");

//call second password check div by query selector
let pwSecondCheck = document.querySelector("#pw2_check");

//call submit button by query selector
let btn = document.querySelector("#submitBtn")

//hide submit button 
btn.style.display="none"


//check first password input value function
function checkFirstPassword() {
    if (password.value.length !=0){
 if (password.value.length >5) {
    pwFirstCheck.innerHTML = " ";
  } else {
    pwFirstCheck.innerHTML= "Password should be 6 min characters"
    return;
  }
}
}
 
//check second password input value function
function checkSecondPassword() {
    if (confirmPass.value.length !=0) {
  if (password.value == confirmPass.value) {
    pwSecondCheck.textContent = "Confirmed";
    btn.style.display="block" //dispay submit button
  } else  {
    pwSecondCheck.textContent = "not confirme";
  }
}
}
