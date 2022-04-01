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


let menSkincare_data = [];

let d1 = new getdata("https://a.cdnsbn.com/images/products/250/10057281421.jpg","Shiseido","Men Cleansing Foam 125ml/4.2oz",2151.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 125ml/4.2oz","1,054.00","https://a.cdnsbn.com/images/products/10057281421.jpg","https://a.cdnsbn.com/images/products/10057281421-1.jpg","Save: 12%",1);
let d2 = new getdata("https://a.cdnsbn.com/images/products/250/23695580321.jpg","Clarins","Men Super Moisture Gel (New Packaging) 50ml/1.7oz",3051.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.7oz","1,054.00","https://a.cdnsbn.com/images/products/23695580321-1.jpg","https://a.cdnsbn.com/images/products/23695580321-2.jpg","Save: 10%",1);
let d3 = new getdata("https://a.cdnsbn.com/images/products/250/23695480321.jpg","Clarins","Men Super Moisture Balm (New Packaging) 50ml/1.6oz",3051.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.6oz","1,054.00","https://a.cdnsbn.com/images/products/23695480321-1.jpg","https://a.cdnsbn.com/images/products/23695480321-2.jpg","Save: 11%",1);
let d4 = new getdata("https://a.cdnsbn.com/images/products/250/14461280321.jpg","Clarins","Men Exfoliating Cleanser 125ml/4.4oz",1995.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 125ml/4.4oz","1,054.00","https://a.cdnsbn.com/images/products/14461280321-1.jpg","https://a.cdnsbn.com/images/products/14461280321-2.jpg","Save: 6%",1);
let d5 = new getdata("https://b.cdnsbn.com/images/products/250/10217380321.jpg","Clarins","Men After Shave Energizer 100ml/3.4oz",2738.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.4oz","1,054.00","https://a.cdnsbn.com/images/products/10217380321-1.jpg","https://a.cdnsbn.com/images/products/10217380321-2.jpg","Save: 8%",1);
let d6 = new getdata("https://b.cdnsbn.com/images/products/250/10044280321.jpg","Clarins","Men Line-Control Balm 50ml/1.7oz",4576.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.7oz","1,054.00","https://a.cdnsbn.com/images/products/10044280321-1.jpg","https://a.cdnsbn.com/images/products/10044280321-2.jpg","Save: 3%",1);

let d7 = new getdata("https://b.cdnsbn.com/images/products/250/10057481421.jpg","Shiseido","Men Hydrating Lotion 150ml/5oz",2855.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 150ml/5oz","1,054.00","https://a.cdnsbn.com/images/products/10057481421-1.jpg","https://a.cdnsbn.com/images/products/10057481421-2.jpg","Save: 7%",1);
let d8 = new getdata("https://b.cdnsbn.com/images/products/250/18844676721.jpg","Biotherm","Homme Aquapower 72H Concentrated Glacial Hydrator 50ml/1.69oz",3989.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.69oz","1,054.00","https://a.cdnsbn.com/images/products/18844676721-1.jpg","https://a.cdnsbn.com/images/products/18844676721-2.jpg","Save: 2%",1);
let d9 = new getdata("https://c.cdnsbn.com/images/products/250/10031180321.jpg","Clarins","Men Active Face Wash 125ml/4.4oz",1760.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 125ml/4.4oz","1,054.00","https://a.cdnsbn.com/images/products/10031180321-1.jpg","https://a.cdnsbn.com/images/products/10031180321-2.jpg","Save: 12%",1);
let d10 = new getdata("https://c.cdnsbn.com/images/products/250/16822181421.jpg","Shiseido","Men Total Revitalizer Eye 15ml/0.53oz",4107.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 15ml/0.53oz","1,054.00","https://a.cdnsbn.com/images/products/16822181421-1.jpg","https://a.cdnsbn.com/images/products/16822181421-2.jpg","Save: 12%",1);

let d11 = new getdata("https://c.cdnsbn.com/images/products/250/24330580421.jpg","Clinique","Maximum Hydrator 72-Hour Auto-Replenishing Hydrator 50ml/1.7oz",3481.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.7oz","1,054.00","https://a.cdnsbn.com/images/products/24330580421-1.jpg","https://a.cdnsbn.com/images/products/24330580421-2.jpg","Save: 15%",1);
let d12 = new getdata("https://c.cdnsbn.com/images/products/250/20485676721.jpg","Biotherm","Homme Day Control Extreme Protection 72H Non-Stop Antiperspirant",2308.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.8oz","1,054.00","https://a.cdnsbn.com/images/products/20485676721-1.jpg","https://a.cdnsbn.com/images/products/20485676721-2.jpg","Save: 21%",1);

let d13 = new getdata("https://d.cdnsbn.com/images/products/250/10046180321.jpg","Clarins","Men Anti Perspirant 50ml/1.7oz",1682.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.7oz","1,054.00","https://a.cdnsbn.com/images/products/10046180321-1.jpg","https://a.cdnsbn.com/images/products/10046180321-2.jpg","Save: 14%",1);
let d14 = new getdata("https://d.cdnsbn.com/images/products/250/10968228621.jpg","Kiehl's","Facial Fuel Energizing Moisture Treatment For Men 125ml/4.2oz",3559.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 125ml/4.2oz","1,054.00","https://a.cdnsbn.com/images/products/10968228621-1.jpg","https://a.cdnsbn.com/images/products/10968228621-2.jpg","Save: 8%",1);
let d15 = new getdata("https://d.cdnsbn.com/images/products/250/10063176721.jpg","Biotherm","Homme Aquatic After Shave Lotion (Normal Skin) 200ml/6.76oz",3051.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 200ml/6.76oz","1,054.00","https://a.cdnsbn.com/images/products/10063176721-1.jpg","https://a.cdnsbn.com/images/products/10063176721-2.jpg","Save: 8%",1);
let d16 = new getdata("https://d.cdnsbn.com/images/products/250/13424776721.jpg","Biotherm","Homme T-Pur Clay-Like Unclogging Purifying Cleanser 125ml/4.22oz",2464.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 125ml/4.22oz","1,054.00","https://a.cdnsbn.com/images/products/13424776721-1.jpg","https://a.cdnsbn.com/images/products/13424776721-2.jpg","Save: 12%",1);

let d17 = new getdata("https://a.cdnsbn.com/images/products/250/18107076721.jpg","Biotherm","Homme Force Supreme Eye Architect Serum 15ml/0.5oz",4772.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 15ml/0.5oz","1,054.00","https://a.cdnsbn.com/images/products/18107076721-1.jpg","https://a.cdnsbn.com/images/products/18107076721-2.jpg","Save: 8%",1);
let d18 = new getdata("https://a.cdnsbn.com/images/products/250/20485576721.jpg","Biotherm","Homme Day Control Protection 48H Non-Stop Antiperspirant 75ml/2.53oz",2308.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 75ml/2.53oz","1,054.00","https://a.cdnsbn.com/images/products/20485576721-1.jpg","https://a.cdnsbn.com/images/products/20485576721-2.jpg","Save: 6%",1);
let d19 = new getdata("https://a.cdnsbn.com/images/products/250/13687699921.jpg","Jack Black","Double Duty Face Moisturizer SPF 20 251ml/8.5oz",4185.00,"Extra 8% Off The Entire Site","★★★★☆","Size:251ml/8.5oz","1,054.00","https://a.cdnsbn.com/images/products/13687699921-1.jpg","https://a.cdnsbn.com/images/products/13687699921-2.jpg","Save: 2%",1);
let d20 = new getdata("https://a.cdnsbn.com/images/products/250/10047076721.jpg","Biotherm","Homme Toning Cleansing Gel (Normal Skin) 150ml/5.07oz",2660.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 150ml/5.07oz","1,054.00","https://a.cdnsbn.com/images/products/10047076721.jpg","https://a.cdnsbn.com/images/products/10047076721.jpg","Save: 12%",1);
let d21 = new getdata("https://b.cdnsbn.com/images/products/250/10217580321.jpg","Clarins","Men After Shave Soother 75ml/2.7oz",2738.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 75ml/2.7oz","1,054.00","https://a.cdnsbn.com/images/products/10217580321-1.jpg","https://a.cdnsbn.com/images/products/10217580321-2.jpg","Save: 10%",1);
let d22 = new getdata("https://b.cdnsbn.com/images/products/250/11723628621.jpg","Kiehl's","Facial Fuel Energizing Moisture Treatment For Men 75ml/2.5oz",2855.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 75ml/2.5oz","1,054.00","https://a.cdnsbn.com/images/products/11723628621-1.jpg","https://a.cdnsbn.com/images/products/11723628621-2.jpg","Save: 12%",1);
let d23 = new getdata("https://b.cdnsbn.com/images/products/250/14045880421.jpg","Clinique","Anti-Age Moisturizer 100ml/3.4oz",4459.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.4oz","1,054.00","https://a.cdnsbn.com/images/products/14045880421-1.jpg","https://a.cdnsbn.com/images/products/14045880421-2.jpg","Save: 2%",1);
let d24 = new getdata("https://b.cdnsbn.com/images/products/250/26162681421.jpg","Shiseido","Men Energizing Moisturizer Extra Light Fluid 100ml/3.3oz",4185.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.3oz","1,054.00","https://a.cdnsbn.com/images/products/26162681421-1.jpg","https://a.cdnsbn.com/images/products/26162681421-2.jpg","Save: 12%",1);



menSkincare_data.push(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24);

localStorage.setItem("menSkincare_data",JSON.stringify(menSkincare_data));