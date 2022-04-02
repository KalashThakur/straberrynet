// var arr1=JSON.parse(localStorage.getItem("skincare_science"))
function getdata(image1,title,desc,price){
    this.price=price,
    this.title=title,
    this.image1=image1,
    this.desc=desc
    // this.quant=quant;
}

var main=[]
var elem1=getdata("	https://a.cdnsbn.com/images/products/250/11009781301.jpg","Orlane","Orlane Absolute Skin Recovery Care Eye Contour  15ml/0.5oz","8562")
var elem2=getdata("https://a.cdnsbn.com/images/products/11009781301.jpg","Orlane","Absolute Skin Recovery Care Eye Contour","8213")
var elem3=getdata("https://a.cdnsbn.com/images/products/25207681301.jpg","Orlane","Anagenese Essential Anti-Aging Eye Care","2855")
var elem4=getdata("https://a.cdnsbn.com/images/products/24473781301.jpg","Orlane","Anti-Fatigue Absolute Detox Emulsion - Radiance & Energy","8409")
var elem5=getdata("https://a.cdnsbn.com/images/products/23649881301.jpg","Orlane","Cleanser For Normal Skin (Salon Product)","2464")
var elem6=getdata("https://a.cdnsbn.com/images/products/21712581301.jpg","Orlane","B21 Extraordinaire Absolute Youth Eye","10091")
var elem7=getdata("https://a.cdnsbn.com/images/products/23585181301.jpg","Orlane","Creme Royale Beauty Sublime Mask","8221")
var elem8=getdata("https://a.cdnsbn.com/images/products/11001281301.jpg","Orlane","Creme Royale","37579")
var elem9=getdata("https://a.cdnsbn.com/images/products/250/01637283101.jpg","Orlane","Botanical Night Cream With Collagen & Woodmallow","12711")
var elem10=getdata("https://a.cdnsbn.com/images/products/02469981301.jpg","Orlane","Astringent Purifying Lotion","1330")
var elem11=getdata("https://c.cdnsbn.com/images/products/250/08438581301.jpg","Orlane","Anti-Fatigue Absolute Detox Emulsion - Radiance & Energy","2335")
var elem12=getdata("https://a.cdnsbn.com/images/products/250/02359781301.jpg","Orlane","Creme Royale","5623")
main.push(elem1,elem2,elem3,elem4,elem5,elem6,elem7,elem8,elem9,elem10,elem11,elem12)
localStorage.setItem("extra_data",JSON.stringify(main))