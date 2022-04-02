const singupPankaj = () =>{
    return ` <div class="login">
    <div class="main">
        <div class="cross">❌</div>
        <div id="cont">
         <div id="signup">
             <h6 id="userSign">Sign In</h6>
            <h6 id="newHere">New Here?</h6>
         </div>
         
         <div class="div1">
             <input type="text" placeholder="Email Adress" id="useremail">
             <input type="password" placeholder="Password" id="userpass">
             <p class="punnetp">Forget Password</p>
             <button id="btt">Sign In</button>
         </div>
         <div class="div2">
             <input type="text" placeholder="First Name" id="name" class="input-field" required>
             <input type="text" placeholder="Last Name">
             <input type="text" placeholder="Email Adress" id="email" class="input-field" required>
             <input type="text" placeholder="Password" id="password" class="input-field" required>
             <p class="punnetp">Please enter a minimum of 8 characters.</p>
             <input type="text" placeholder="Re-enter Password">
             <button id="submit">Register</button>
             
         </div>
         
        </div>

    </div>
 </div>`
}

// const singupPankajS = () =>{
//     return ` document.querySelector(".div2").style.display="none";
//     function signin(){
//         document.querySelector(".div1").style.display="none";
//         document.querySelector(".div2").style.display="";

//     }
//     function newhere(){
//         document.querySelector(".div1").style.display="";
//         document.querySelector(".div2").style.display="none";
        
//     }
//     document.querySelector(".cross").addEventListener("click",()=>{
//         document.querySelector("#lg").style.display="none";
        
//     })
//     document.querySelector(".account-Singin").addEventListener("click",()=>{
//         document.querySelector(".login").style.display="flex";
//     })
//      // storing the user's email in local storage
//      document.getElementById('email').value = localStorage.getItem('userEmail');

// let userStack = JSON.parse(localStorage.getItem('userDatabase')) || [];

// // storing user data 
// function addUser(event) {
//     event.preventDefault();
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;

//     let userData = {
//         'name': name,
//         'email': email,
//         'password': password
//     }

//     userStack.push(userData);

//     localStorage.setItem('userDatabase', JSON.stringify(userStack));

//     //window.location.href = "home.html";
//     alert("register sucessfull")
// }
// function puneethspl(){
//     let email = document.getElementById('useremail').value;
//     let password = document.getElementById('userpass').value;
//     let SingData=JSON.parse(localStorage.getItem('userDatabase'))|| []
    
//    var flag=false
//     for(let i=0; i<SingData.length; i++){
//     if (SingData[i].email == email && SingData[i].password == password) {
//     flag=true;
//   }
// }
//   if (flag ==true) {
//       //document.querySelector("input[type='submit']").addEventListener("click",function(){
//               window.location.href="home.html";
//               alert("Login successful")
//      // })
//     }
//  else {
//      alert("Invalid")
//  }
// }
// document.getElementById('submit').addEventListener('click', addUser);
// document.getElementById('btt').addEventListener('click', puneethspl);
// `
// }

export default singupPankaj;