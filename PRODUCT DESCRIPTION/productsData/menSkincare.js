function getdata(url,name,description,price)
{
    this.image = url;
    this.name = name;
    this.description = description;
    this.price = price;
}

let menSkincare_data = [];

let d1 = new getdata("https://a.cdnsbn.com/images/products/250/10057281421.jpg","Shiseido","Men Cleansing Foam 125ml/4.2oz","Rs .2,151.50");
let d2 = new getdata("https://a.cdnsbn.com/images/products/250/23695580321.jpg","Clarins","Men Super Moisture Gel (New Packaging) 50ml/1.7oz","Rs .3,051.00");
let d3 = new getdata("https://a.cdnsbn.com/images/products/250/23695480321.jpg","Clarins","Men Super Moisture Balm (New Packaging) 50ml/1.6oz","Rs .3,051.00");
let d4 = new getdata("https://a.cdnsbn.com/images/products/250/14461280321.jpg","Clarins","Men Exfoliating Cleanser 125ml/4.4oz","Rs .1,995.00");
let d5 = new getdata("https://b.cdnsbn.com/images/products/250/10217380321.jpg","Clarins","Men After Shave Energizer 100ml/3.4oz","Rs .2,738.00");
let d6 = new getdata("https://b.cdnsbn.com/images/products/250/10044280321.jpg","Clarins","Men Line-Control Balm 50ml/1.7oz","Rs .4,576.00");
let d7 = new getdata("https://b.cdnsbn.com/images/products/250/10057481421.jpg","Shiseido","Men Hydrating Lotion 150ml/5oz","Rs .2,855.50");
let d8 = new getdata("https://b.cdnsbn.com/images/products/250/18844676721.jpg","Biotherm","Homme Aquapower 72H Concentrated Glacial Hydrator 50ml/1.69oz","Rs .3,989.50");
let d9 = new getdata("https://c.cdnsbn.com/images/products/250/10031180321.jpg","Clarins","Men Active Face Wash 125ml/4.4oz","Rs .1,760.00");
let d10 = new getdata("https://c.cdnsbn.com/images/products/250/16822181421.jpg","Shiseido","Men Total Revitalizer Eye 15ml/0.53oz","Rs .4,107.00");
let d11 = new getdata("https://c.cdnsbn.com/images/products/250/24330580421.jpg","Clinique","Maximum Hydrator 72-Hour Auto-Replenishing Hydrator 50ml/1.7oz","Rs .3,481.00");
let d12 = new getdata("https://c.cdnsbn.com/images/products/250/20485676721.jpg","Biotherm","Homme Day Control Extreme Protection 72H Non-Stop Antiperspirant","Rs .2,308.00");
let d13 = new getdata("https://d.cdnsbn.com/images/products/250/10046180321.jpg","Clarins","Men Anti Perspirant 50ml/1.7oz","Rs .1,682.00");
let d14 = new getdata("https://d.cdnsbn.com/images/products/250/10968228621.jpg","Kiehl's","Facial Fuel Energizing Moisture Treatment For Men 125ml/4.2oz","Rs .3,559.50");
let d15 = new getdata("https://d.cdnsbn.com/images/products/250/10063176721.jpg","Biotherm","Homme Aquatic After Shave Lotion (Normal Skin) 200ml/6.76oz","Rs .3,051.00");
let d16 = new getdata("https://d.cdnsbn.com/images/products/250/13424776721.jpg","Biotherm","Homme T-Pur Clay-Like Unclogging Purifying Cleanser 125ml/4.22oz","Rs .2,464.00");
let d17 = new getdata("https://a.cdnsbn.com/images/products/250/18107076721.jpg","Biotherm","Homme Force Supreme Eye Architect Serum 15ml/0.5oz","Rs .4,772.00");
let d18 = new getdata("https://a.cdnsbn.com/images/products/250/20485576721.jpg","Biotherm","Homme Day Control Protection 48H Non-Stop Antiperspirant 75ml/2.53oz","Rs .2,308.00");
let d19 = new getdata("https://a.cdnsbn.com/images/products/250/13687699921.jpg","Jack Black","Double Duty Face Moisturizer SPF 20 251ml/8.5oz","Rs .4,185.00");
let d20 = new getdata("https://a.cdnsbn.com/images/products/250/10047076721.jpg","Biotherm","Homme Toning Cleansing Gel (Normal Skin) 150ml/5.07oz","Rs .2,660.00");
let d21 = new getdata("https://b.cdnsbn.com/images/products/250/10217580321.jpg","Clarins","Men After Shave Soother 75ml/2.7oz","Rs .2,738.00");
let d22 = new getdata("https://b.cdnsbn.com/images/products/250/11723628621.jpg","Kiehl's","Facial Fuel Energizing Moisture Treatment For Men 75ml/2.5oz","Rs .2,855.50");
let d23 = new getdata("https://b.cdnsbn.com/images/products/250/14045880421.jpg","Clinique","Anti-Age Moisturizer 100ml/3.4oz","Rs .4,459.00");
let d24 = new getdata("https://b.cdnsbn.com/images/products/250/26162681421.jpg","Shiseido","Men Energizing Moisturizer Extra Light Fluid 100ml/3.3oz","Rs .4,185.00");
let d25 = new getdata("https://c.cdnsbn.com/images/products/250/10024180121.jpg","Christian Dior","Homme Dermo System Repairing Moisturizing Emulsion 50ml/1.7oz","Rs .6,023.50");
let d26 = new getdata("https://c.cdnsbn.com/images/products/250/10053081821.jpg","Payot","Optimale Homme 24 Hour Roll On Deodorant","Rs .1,604.00");
let d27 = new getdata("https://c.cdnsbn.com/images/products/250/16856580421.jpg","Clinique","Men Face Wash (For Normal to Dry Skin) 200ml/6.7oz","Rs .1,916.50");
let d28 = new getdata("https://d.cdnsbn.com/images/products/250/10128480121.jpg","Christian Dior","Homme Dermo System After Shave Lotion 100ml/3.4oz","Rs .5,945.00");


menSkincare_data.push(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28);

localStorage.setItem("menSkincare_data",JSON.stringify(menSkincare_data));