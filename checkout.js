
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
       document.querySelector("#amount2").innerText = total.toFixed(2);

    }

showTotal();

function countproduct()
{
    document.querySelector(".count").innerText = arr.length;
}
countproduct();


let product_price = document.querySelector("#amount2").innerText;
let final = ((product_price - 907)-725) + 1099;

document.querySelector("#final_price").innerText = final.toFixed(2);


function visacard()
{
    console.log("visa")
    document.querySelector("#input1").style.display = "block";
}

function mastercard()
{
    document.querySelector("#input2").style.display = "block";

}

function americancard()
{
    document.querySelector("#input4").style.display = "block";

}


document.getElementById("form2").addEventListener("submit",(e,final_price)=>{

    applyPromo(e,final_price)
})

let applyPromo =(e,final_price)=>{
    e.preventDefault();
// console.log("fdggrtghghghghghghghghghghghghghghgh")
let promo  = document.querySelector("#input_promo").value;
var final_price = document.querySelector("#final_price").innerText;
// console.log(final_price)
    if(promo=="masai30")
    {
        // let discount = subtotal-(subtotal*0.3);
      document.querySelector("#final_price").innerText = Math.floor(final_price-(final_price*0.3)).toFixed(2);
      console.log(final_price)
    }

}
// console.log(final_price)


// ********************




document.querySelector("#pay_form").addEventListener("submit",formfunction)


function formfunction(event)
{
    event.preventDefault();

    let cardno = document.getElementById("cardno").value;
    let cvvno = document.getElementById("cvvno").value;

    if(cardno.length==16 && cvvno.length==3)
    {
        console.log("payment received")
        alert("Enter Otp = 7575");
        window.location.href = "otp.html";
    }

    else{
        alert("Incorrect credentials")
    }

}

document.querySelector("#myform").addEventListener("submit",(e) =>
{
    formdetail(e)
})

// console.log("hhhhhhhhhhhhh")

function formdetail(e)
{
    e.preventDefault();

    console.log("hhhhhhhhhhhhh")

    
}


 
