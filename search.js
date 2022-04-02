// var arr1=JSON.parse(localStorage.getItem("skincare_science"))
// var arr2=JSON.parse(localStorage.getItem("blush_data"))
// var arr3=JSON.parse(localStorage.getItem("scents"))
// var arr4=JSON.parse(localStorage.getItem("hair_prod"))
// var arr5=JSON.parse(localStorage.getItem("bundle_joy"))
var arr0=JSON.parse(localStorage.getItem("skincare_science"))
// var arr1=JSON.parse(localStorage.getItem("article"))
var arr2=JSON.parse(localStorage.getItem("BestDealsData"))
var arr3=JSON.parse(localStorage.getItem("blush_data"))
var arr4=JSON.parse(localStorage.getItem("scents"))
var arr5=JSON.parse(localStorage.getItem("BestSellerData1"))
var arr6=JSON.parse(localStorage.getItem("DaySpecialData"))
var arr7=JSON.parse(localStorage.getItem("skincare_science"))
// var arr8=JSON.parse(localStorage.getItem("data"))
var arr9=JSON.parse(localStorage.getItem("hair_prod"))
var arr10=JSON.parse(localStorage.getItem("newArrival"))
var arr11=JSON.parse(localStorage.getItem("top_brand"))
var arr12=JSON.parse(localStorage.getItem("BestSellerData2"))
var arr13=JSON.parse(localStorage.getItem("top40SepicalsData"))
var arr14=JSON.parse(localStorage.getItem("bundle_joy"))
    
var arr15=JSON.parse(localStorage.getItem("extra_data"))

 var main_arr=[];
 main_arr.push(...arr0,...arr2,...arr3,...arr4,...arr5,...arr6,...arr7,...arr9,...arr10,...arr11,...arr12,...arr13,...arr14,...arr15)
    

//  console.log(main_arr)

var search_item=localStorage.getItem("search_item")

var result=[]

main_arr.map(function(elem){
    if(elem.title==search_item){
        result.push(elem)
    }
})

document.getElementById("cat_catshow").innerText=search_item
document.getElementById("crt_main_vat_header").innerText=`${result.length} RESULTS FOR : ${search_item} `



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
showdata("crt_parrentforappendingdata",result)
