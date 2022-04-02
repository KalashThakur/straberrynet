

var cart=JSON.parse(localStorage.getItem("cart_item"))||[]



function showdata(idname,arr){
    var idname=document.getElementById(idname)
    arr.map(function(elem){

     var product_ind=document.createElement("div")
 product_ind.setAttribute("class","productind")
 var image=document.createElement("img")
       image.className="product_img"
       image.src=elem.image1;

 var title=document.createElement("div")
 title.className="name"
 title.innerText=elem.title

 var desc=document.createElement("div")
 desc.className="desc"
 desc.innerText=elem.desc
 var discount=document.createElement("div")
 discount.className="discounts"
 discount.innerText="save "+(Math.random()*30).toFixed(0)+"%"
 var price=document.createElement("div")
     price.innerText=`Rs.${elem.price}`
     price.className="price"

     var button=document.createElement("button")
     button.innerText="Add To Bag"
     button.className="bag"
    button.addEventListener("click",function(){
        cart.push(elem)
        localStorage.setItem("cart_item",JSON.stringify(cart))
    })
var offer=document.createElement("p")
offer.innerText="Extra 8% Off The Entire Site"
offer.className="offer"
     product_ind.append(image,title,desc,discount,price,button,offer)
     idname.append(product_ind)

    })
 
}



var topbrands=document.getElementById("topbrands")
var tops=JSON.parse(localStorage.getItem("top_brand"))
function topbrand(arr){
 
 arr.map(function(elem){
     var div_base=document.createElement("div")
     var image=document.createElement("img")
     image.src=elem.url_link
     div_base.append(image)
     topbrands.append(div_base)
 })
}
topbrand(tops)

// timerrrrrrrrrrrr

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
 
// Find the distance between now and the count down date
var distance = countDownDate - now;
 
// Time calculations for days, hours, minutes and seconds
// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
// Output the result in an element with id="demo"
document.getElementById("timer").innerHTML = hours + "h "
+ minutes + "m " + seconds + "s ";
 
// If the count down is over, write some text 
if (distance < 0) {
 clearInterval(x);
 document.getElementById("timer").innerHTML = "EXPIRED";
}
}, 1000);


// timer





var data1=JSON.parse(localStorage.getItem("skincare_science"))
var data2=JSON.parse(localStorage.getItem("blush_data"))
var data3=JSON.parse(localStorage.getItem("scents"))
var data4=JSON.parse(localStorage.getItem("hair_prod"))
var data5=JSON.parse(localStorage.getItem("bundle_joy"))
var data6=JSON.parse(localStorage.getItem("DaySpecialData"))
var data7=JSON.parse(localStorage.getItem("BestSellerData1"))
var data8=JSON.parse(localStorage.getItem("BestSellerData2"))
var data9=JSON.parse(localStorage.getItem("BestDealsData"))
var data10=JSON.parse(localStorage.getItem("top40SepicalsData"))
var data11=JSON.parse(localStorage.getItem("newArrival"))
showdata("products",data1)
showdata("extra",data2)
showdata("scents",data3)
showdata("hair",data4)
showdata("bundlejoy",data5)
showdata("dayspecial",data6)
showdata("one",data7)
showdata("two",data8)
showdata("bestdeal",data9)
showdata("topspecial",data10)
showdata("newArrival",data11)