
     document.querySelector(".div2").style.display="none";
    function signin(){
        document.querySelector(".div1").style.display="none";
        document.querySelector(".div2").style.display="";

    }
    function newhere(){
        document.querySelector(".div1").style.display="";
        document.querySelector(".div2").style.display="none";
        
    }
    document.querySelector(".cross").addEventListener("click",()=>{
        document.querySelector("#lg").style.display="none";
        
    })
    document.querySelector(".account-Singin").addEventListener("click",()=>{
        document.querySelector(".login").style.display="flex";
    })
     // storing the user's email in local storage
     document.getElementById('email').value = localStorage.getItem('userEmail');

let userStack = JSON.parse(localStorage.getItem('userDatabase')) || [];

// storing user data 
function addUser(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userData = {
        'name': name,
        'email': email,
        'password': password
    }

    userStack.push(userData);

    localStorage.setItem('userDatabase', JSON.stringify(userStack));

    // window.location.href = "home.html";
    alert("register sucessfull")
}
function puneethspl(){
    let email = document.getElementById('useremail').value;
    let password = document.getElementById('userpass').value;
    let SingData=JSON.parse(localStorage.getItem('userDatabase'))|| []
    
   var flag=false
    for(let i=0; i<SingData.length; i++){
    if (SingData[i].email == email && SingData[i].password == password) {
    flag=true;
  }
}
  if (flag ==true) {
      //document.querySelector("input[type='submit']").addEventListener("click",function(){
              window.location.href="home.html";
              alert("Login successful")
     // })
    }
 else {
     alert("Invalid")
 }
}
document.getElementById('submit').addEventListener('click', addUser);
document.getElementById('btt').addEventListener('click', puneethspl);