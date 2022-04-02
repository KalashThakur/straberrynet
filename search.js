var arr1=JSON.parse(localStorage.getItem("skincare_science"))
var arr2=JSON.parse(localStorage.getItem("blush_data"))
var arr3=JSON.parse(localStorage.getItem("scents"))
var arr4=JSON.parse(localStorage.getItem("hair_prod"))
var arr5=JSON.parse(localStorage.getItem("bundle_joy"))
    

var main_arr=[]
main_arr.push(...arr1,...arr2,...arr3,...arr4,...arr5)

var search_item=localStorage.getItem("search_item")

var result=[]

main_arr.map(function(elem){
    if(elem.name==search_item){
        result.push(elem)
    }
})
console.log(result)