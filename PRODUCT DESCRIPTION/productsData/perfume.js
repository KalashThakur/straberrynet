function getdata(url,name,description,price,extraof,rating,size,strikedprice,url1,url2,save,quant)
{
    this.img = url;   
    this.title = name;
    this.desc = description;
    this.price = price;

    this.extraof = extraof;
    this.rating = rating; 
    this.size = size;
    this.strikedprice = strikedprice;

    this.img1 = url1;
    this.img2 = url2;

    this.save = save;
    this.quant = quant;
}

let perfume_data = [];



let d1 = new getdata("https://a.cdnsbn.com/images/products/250/14514226106.jpg","Acqua Di Parma","Blu Mediterraneo Mirto Di Panarea Eau De Toilette Spray 75ml/2.5oz",6532,"Extra 8% Off The Entire Site","★★★★☆","Size: 75ml/2.5oz","9,387.00","https://a.cdnsbn.com/images/products/14514226106-1.jpg","https://a.cdnsbn.com/images/products/14514226106-2.jpg","Save: 30%",1);
let d2 = new getdata("https://a.cdnsbn.com/images/products/250/03460684003.jpg","Calvin Klein","CK One Deodorant Stick 75ml/2.5oz",1838,"Extra 8% Off The Entire Site","★★★★☆","Size: 75ml/2.5oz","2,387.00","https://a.cdnsbn.com/images/products/03460684003-1.jpg","https://a.cdnsbn.com/images/products/03460684003-2.jpg","Save: 12%",1);
let d3 = new getdata("https://a.cdnsbn.com/images/products/250/22667789106.jpg","Serge Lutens","La Fille De Berlin Eau De Parfum Spray 100ml/3.3oz",12789,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.3oz","17,991.50","https://a.cdnsbn.com/images/products/22667789106-1.jpg","https://a.cdnsbn.com/images/products/22667789106-2.jpg","Save: 29%",1);
let d4 = new getdata("https://a.cdnsbn.com/images/products/250/02984280206.jpg","Chanel","Coco Mademoiselle Eau De Toilette Spray 50ml/1.7oz",10482,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.7oz","15,991.50","https://a.cdnsbn.com/images/products/02984280206-1.jpg","https://a.cdnsbn.com/images/products/02984280206-2.jpg","Save: 25%",1);
let d5 = new getdata("https://b.cdnsbn.com/images/products/250/23966180206.jpg","Chanel","Chance Eau Tendre Eau de Parfum Spray 100ml/3.4oz",16348,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.4oz","18,991.50","https://a.cdnsbn.com/images/products/msn/23966180206-1.jpg","https://a.cdnsbn.com/images/products/msn/23966180206-2.jpg","Save: 26%",1);
let d6 = new getdata("https://b.cdnsbn.com/images/products/250/15666239306.jpg","Davidoff","Cool Water Into the Ocean Eau De Toilette Spray 100ml/3.4iz",1095,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.4iz","4,850.00","https://a.cdnsbn.com/images/products/msn/15666239306-1.jpg","https://a.cdnsbn.com/images/products/msn/15666239306-2.jpg","Save: 77%",1);
let d7 = new getdata("https://b.cdnsbn.com/images/products/250/16013218806.jpg","Diptyque","Do Son Eau De Toilette Spray 100ml/3.4oz",11420,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.4oz","14,850.00","https://a.cdnsbn.com/images/products/msn/16013218806-1.jpg","https://a.cdnsbn.com/images/products/msn/16013218806-2.jpg","Save: 17%",1);
let d8 = new getdata("https://b.cdnsbn.com/images/products/250/13210380903.jpg","Lancome","Tresor Body Lotion 150ml/5oz",1564,"Extra 8% Off The Entire Site","★★★★☆","Size: 150ml/5oz","3,520.00","https://a.cdnsbn.com/images/products/msn/13210380903.jpg","https://a.cdnsbn.com/images/products/msn/13210380903-1.jpg","Save: 56%",1);
let d9 = new getdata("https://d.cdnsbn.com/images/products/250/12814180903.jpg","Lancome","Miracle Perfumed Body Lotion 150ml/5oz",1916,"Extra 8% Off The Entire Site","★★★★☆","Size: 150ml/5oz ","3,598.50","https://a.cdnsbn.com/images/products/msn/12814180903-1.jpg","https://a.cdnsbn.com/images/products/msn/12814180903-2.jpg","Save: 47%",1);
let d10 = new getdata("https://b.cdnsbn.com/images/products/250/25040737906.jpg","Loewe","001 Eau De Parfum Spray 50ml/1.7oz",6649,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.7oz","7,598.50","https://a.cdnsbn.com/images/products/msn/25040737906-1.jpg","https://a.cdnsbn.com/images/products/msn/25040737906-2.jpg","Save: 10%",1);


perfume_data.push(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10);

localStorage.setItem("homeScents_data",JSON.stringify(perfume_data));