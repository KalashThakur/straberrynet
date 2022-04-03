let detail = JSON.parse(localStorage.getItem("userDatabase")) || [];


     let arr = JSON.parse(localStorage.getItem("cart_item"));
    console.log('arr:', arr)

    arr.map(function(elem)
{
    let row = document.createElement("tr");
    row.setAttribute("id","row")

    
    // let hr = document.createElement("hr");

    let col1 = document.createElement("td");
    let image = document.createElement("img");
    image.setAttribute("id","pImage")
    image.src = elem.image1;
    col1.append(image)
    
    let col2 = document.createElement("td");
    // col2.se
    col2.innerText = elem.title;
    col2.innerText = elem.desc;
    col2.style.width = "170px";

    let col3 = document.createElement("td");
    col3.innerText = `Qty: ${elem.quant}`;

// let unit = document.createElement("sup");
// unit.innerText = "INR"
    let col4 = document.createElement("td");
    col4.innerText =`₹ ${elem.price}`;
    col4.setAttribute("id","col4")
    // col4.append(unit)

    


    row.append(col1,col2,col3,col4);
    document.getElementById("table").append(row)

})

function showTotal()
    {
        var total = arr.reduce(function(acc,elem){
            return acc + elem.price*elem.quant;
        }, 0);
    
       document.querySelector("#amount").innerText = total.toFixed(2);
    //    document.querySelector("#amount2").innerText = total.toFixed(2);

    }

showTotal();

function countproduct()
{
    document.querySelector(".count").innerText = arr.length;
}
countproduct();

sign_in();

    function sign_in()
    {
        document.getElementById("description_box").innerHTML = null;

        let form = document.createElement("form");
        form.id = "form1";

        let input1 = document.createElement("input");
        input1.type = "email";
        input1.placeholder = "Email address";
        input1.id = "email";


        let input2 = document.createElement("input");
        input2.type = "password";
        input2.placeholder = "Password";
        input2.id = "pwd";


        let input3 = document.createElement("input");
        input3.type = "submit";
        input3.value = "SIGN IN";
        input3.id = "btn";

        let br = document.createElement("br");

        form.append(input1,input2,input3);
        document.getElementById("description_box").append(form)
    }

    function login()
    {
        document.getElementById("description_box").innerHTML = null;

        let form = document.createElement("form");
        form.id = "form2";


        let input1 = document.createElement("input");
        input1.type = "email";
        input1.placeholder = "Email address";
        input1.id = "email";


        let input2 = document.createElement("input");
        input2.type = "password";
        input2.placeholder = "Password";
        input2.id = "pwd1";


        let input3 = document.createElement("input");
        input3.type = "submit";
        input3.value = "REGISTER";
        input3.id = "btn";

        let input4 = document.createElement("input");
        input4.type = "text";
        input4.placeholder = "First Name";
        input4.id = "first";


        let input5 = document.createElement("input");
        input5.type = "text";
        input5.placeholder = "Last Name";
        input5.id = "last";



        form.append(input4,input5,input1,input2,input3);
        document.getElementById("description_box").append(form)
    }

document.getElementById("btn1").addEventListener("click",function()
{
    var email = document.getElementById("emailAdd").value;

    window.location.href = "checkout.html"


})

// document.getElementById("form3").addEventListener("submit",function()
// {
//     var email = document.getElementById("emailAdd").value;
//     window.location.href = "checkout.html"

// })
// **********************************

document.querySelector("#form2").addEventListener("submit",submitForm);

let userArr = JSON.parse(localStorage.getItem("userDatabase")) || [];

function submitForm(event)
{
    event.preventDefault();

    let email = document.getElementById("email").value;

    let pwd = document.getElementById("pwd1").value;

    let userData = {
        'name': name,
        'email': email,
        'password': pwd
    }

    userArr.push(userData);
    localStorage.setItem('userDatabase', JSON.stringify(userStack));

}


// ****************************************************************

document.querySelector("#form1").addEventListener("submit",loginForm);

let loginArr = JSON.parse(localStorage.getItem("userDatabase")) || [];

var form = document.querySelector("#form2");

function loginForm(event)
{
    event.preventDefault();

    var user = form.email.value;
    var pwd = form.pwd.value;

    var flag = false;

    for(var i=0; i<loginArr.length; i++)
    {
        if(loginArr[i].email==user && loginArr[i].password==pwd)
        {
            flag=true;
        }
    }

    if(flag==false)
        {
            // console.log("login failed");
            alert("Login failed")
        }
        else{
        //     // console.log("login success");
            alert("Login successful");
        }
    

    

}


