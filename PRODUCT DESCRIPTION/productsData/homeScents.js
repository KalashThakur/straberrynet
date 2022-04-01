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

let homeScents_data = [];

let d1 = new getdata("https://a.cdnsbn.com/images/products/250/17901089515.jpg","Jo Malone","Lime Basil & Mandarin Scent Surround Diffuser",8135,"Extra 8% Off The Entire Site","★★★★☆","Size: 200ml/6.8oz","1,054.00","https://a.cdnsbn.com/images/products/17901089515.jpg","https://a.cdnsbn.com/images/products/17901089515-1.jpg","Save: 12%",1)
let d2 = new getdata("https://a.cdnsbn.com/images/products/250/26179689516.jpg","Jo Malone","Wood Sage & Sea Salt Car Diffuser Cartridge",2777,"Extra 8% Off The Entire Site","★★★★☆","Size: 1pc","1,054.00","https://a.cdnsbn.com/images/products/26179689516-1.jpg","https://a.cdnsbn.com/images/products/26179689516-2.jpg","Save: 12%",1);
let d3 = new getdata("https://a.cdnsbn.com/images/products/250/26179589516.jpg","Jo Malone","Lime Basil & Mandarin Car Diffuser Cartridge",2777,"Extra 8% Off The Entire Site","★★★★☆","Size: 1pc","1,054.00","https://a.cdnsbn.com/images/products/26179589516-1.jpg","https://a.cdnsbn.com/images/products/26179589516-2.jpg","Save: 18%",1);
let d4 = new getdata("https://a.cdnsbn.com/images/products/250/18173989516.jpg","Jo Malone","English Pear & Freesia Scented Candle",6532,"Extra 8% Off The Entire Site","★★★★☆","Size: 200g (2.5 inch)","1,054.00","https://a.cdnsbn.com/images/products/18173989516.jpg","https://a.cdnsbn.com/images/products/18173989516.jpg","Save: 2%",1);
let d5 = new getdata("https://a.cdnsbn.com/images/products/25634575116.jpg","Voluspa","Mini Tin Candle - French Cade Lavender",1173,"Extra 8% Off The Entire Site","★★★★☆","Size: 113g/4oz","1,054.00","https://a.cdnsbn.com/images/products/25634575116-1.jpg","https://a.cdnsbn.com/images/products/25634575116-2.jpg","Save: 6%",1)
let d6 = new getdata("https://a.cdnsbn.com/images/products/26179789509.jpg","Jo Malone","The Car Diffuser Case",5163,"Extra 8% Off The Entire Site","★★★★☆","Size: 1pc","1,054.00","https://a.cdnsbn.com/images/products/26179789509-1.jpg","https://a.cdnsbn.com/images/products/26179789509-2.jpg","Save: 3%",1)
let d7 = new getdata("https://a.cdnsbn.com/images/products/24692375116.jpg","Voluspa","Petite Jar Candle - French Cade Lavender",1291,"Extra 8% Off The Entire Site","★★★★☆","Size: 90g/3.2oz","1,054.00","https://a.cdnsbn.com/images/products/24692375116.jpg","https://a.cdnsbn.com/images/products/24692375116-1.jpg","Save: 11%",1)
let d8 = new getdata("https://b.cdnsbn.com/images/products/250/17878589516.jpg","Jo Malone","Lime Basil & Mandarin Scented Candle",6532,"Extra 8% Off The Entire Site","★★★★☆","Size: 200g (2.5 inch","1,054.00","https://a.cdnsbn.com/images/products/17878589516.jpg","https://a.cdnsbn.com/images/products/17878589516.jpg","Save: 13%",1)
let d9 = new getdata("https://c.cdnsbn.com/images/products/250/26180189516.jpg","Jo Malone","Peony & Blush Suede Car Diffuser Cartridge",2777,"Extra 8% Off The Entire Site","★★★★☆","Size: 1pc","1,054.00","https://a.cdnsbn.com/images/products/26180189516-1.jpg","https://a.cdnsbn.com/images/products/26180189516-2.jpg","Save: 17%",1)
let d10 = new getdata("https://c.cdnsbn.com/images/products/250/25647675116.jpg","Voluspa","Small Jar Candle - White Cypress",1838,"Extra 8% Off The Entire Site","★★★★☆","Size: 156g/5.5oz","1,054.00","https://a.cdnsbn.com/images/products/25647675116-1.jpg","https://a.cdnsbn.com/images/products/25647675116-2.jpg","Save: 3%",1)
let d11 = new getdata("https://a.cdnsbn.com/images/products/25643275116.jpg","Voluspa","Small Jar Candle - French Cade Lavender",1838,"Extra 8% Off The Entire Site","★★★★☆","Size: 156g/5.5oz","1,054.00","https://a.cdnsbn.com/images/products/25643275116-1.jpg","https://a.cdnsbn.com/images/products/25643275116-2.jpg","Save: 9%",1)
let d12 = new getdata("https://c.cdnsbn.com/images/products/250/25634475116.jpg","Voluspa","Small Jar Candle - French Cade Lavender",1838,"Extra 8% Off The Entire Site","★★★★☆","Size: 156g/5.5oz","1,054.00","https://a.cdnsbn.com/images/products/25643275116-1.jpg","https://a.cdnsbn.com/images/products/25643275116-2.jpg","Save: 10%",1)

homeScents_data.push(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12);

localStorage.setItem("homeScents_data",JSON.stringify(homeScents_data));
