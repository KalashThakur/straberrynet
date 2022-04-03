function getdata(image1,title,desc,price,quant){
    this.price=price,
    this.title=title,
    this.image1=image1,
    this.desc=desc
    this.quant=quant;
}
var skincare_science=[]

var data1=new getdata("https://a.cdnsbn.com/images/products/250/25930157001.jpg","colorescience","Sunforgettable Total Protection Face Shield SPF 50 - # Glow  55ml/1.8oz", 2888.50,1)
var data2= new getdata("https://a.cdnsbn.com/images/products/250/17482140803.jpg","DERMAdoctor","KP Duty Dermatologist Formulated Body Scrub  473ml/16oz",3513.00,1)
var data3=new getdata("https://a.cdnsbn.com/images/products/250/24594570901.jpg","Filorga","Lift-Designer Ultra-Lifting Serum  30ml/1oz", 2849.50,1)
var data4=new getdata("https://a.cdnsbn.com/images/products/250/19143259701.jpg","Iluminage","Youth Cell Night Cream  50ml/1.7oz",1874.00,1)
var data5=new getdata("https://b.cdnsbn.com/images/products/250/17513128601.jpg","Kiehl's","Hydro-Plumping Re-Texturizing Serum Concentrate  50ml/1.7oz", 5777.00,1)
var data6=new getdata("https://b.cdnsbn.com/images/products/250/03973383301.jpg","La Prairie","Cellular Softening &amp; Balancing Lotion  250ml/8.4oz",12803.00,1)
var data7=new getdata("https://b.cdnsbn.com/images/products/250/23583681301.jpg","Oriane","Anagenese Essential Anti-Aging Serum  30ml/1oz", 3279.00,1)
var data8=new getdata("https://b.cdnsbn.com/images/products/250/23720229301.jpg","StriVectin","StriVectin - S.T.A.R. Light Retinol Night Oil  30ml/1oz",5777.00,1)

skincare_science.push(data1,data2,data3,data4,data5,data6,data7,data8)

localStorage.setItem("skincare_science",JSON.stringify(skincare_science))

var blushdata=[]
var data9=new getdata("https://a.cdnsbn.com/images/products/250/21999826502.jpg","Bobbi Brown","Highlighting Powder - # Bronze Glow  8g/0.28oz", 4216.00,1)
var data10=new getdata(" https://a.cdnsbn.com/images/products/250/22353893402.jpg","Chantecaille","Cheek Shade - Laughter (Coral)  2.5g/0.08oz", 3279.00,1)
var data11=new getdata("https://a.cdnsbn.com/images/products/250/21999826502.jpg","Clinique","Blushing Blush Powder Blush - # 120 Bashful Blush  6g/0.21oz",2264.00,1)
var data12=new getdata("https://a.cdnsbn.com/images/products/250/25790779102.jpg","Fenty Beauty by Rihanna","Killawatt Freestyle Highlighter Duo 2x3.5g/0.12oz", 2498.50,1)
var data13=new getdata("https://b.cdnsbn.com/images/products/250/24290758802.jpg","HourGlass","HourGlass Vanish Flash Highlighting Stick - # Champagne Flash  6.1g/0.21oz", 2732.50,1)
var data14=new getdata("https://a.cdnsbn.com/images/products/250/22353893402.jpg","Lancome","Lancome Bronze & Glow Palette - # 02 Your Pink Glow Shot  14g/0.49",1717.50,1)
var data15=new getdata("https://b.cdnsbn.com/images/products/250/22330924702.jpg","Laura Mercier","Candleglow Concealer And Highlighter - # 62.2ml/0.07oz",1093.00,1)
var data16=new getdata("https://b.cdnsbn.com/images/products/250/13085502602.jpg","NARS","NARS Blush - Deep Throat  4.8g/0.16oz",2108.00,1)
blushdata.push(data9,data10,data11,data12,data13,data14,data15,data16)
localStorage.setItem("blush_data",JSON.stringify(blushdata))

var scents=[]

var data17=new getdata("https://a.cdnsbn.com/images/products/250/14514126106.jpg","Aqua Di Parma","Blu Mediterraneo Fico Di Amalfi Eau De Toilette Spray  75ml/2.5oz",6089.50,1)
var data18=new getdata("https://a.cdnsbn.com/images/products/250/25920468106.jpg","Anna Sui","Sky Eau De Toilette Spray  50ml/1.7oz",4606.00,1)
var data19=new getdata("https://a.cdnsbn.com/images/products/250/24265135005.jpg","Bvlgari","Man Wood Neroli Eau De Parfum Spray  100ml/3.4oz",7729.00,1)
var data20=new getdata("https://a.cdnsbn.com/images/products/250/16513380606.jpg","Estee Lauder","Modern Muse Eau De Parfum Spray  50ml/1.7oz", 5387.00,1)
var data21=new getdata("https://b.cdnsbn.com/images/products/250/22341380705.jpg","Guerlain","L'Homme Ideal L'Intense Eau De Parfum Spray   50ml/1.6oz", 5074.50,1)
var data22=new getdata("https://b.cdnsbn.com/images/products/250/12550740106.jpg","Hermes","Un Jardin Sur Le Toit Eau De Toilette Spray  100ml/3.3oz",8978.00,1)
var data23=new getdata("https://b.cdnsbn.com/images/products/250/26926889503.jpg","Jo Malone","English Pear & Freesia Exfoliating Shower Gel  200ml/6.7oz", 4059.50,1)
var data24=new getdata("https://b.cdnsbn.com/images/products/250/22667689106.jpg","Serge Lutens","Fleurs D' Oranger Eau De Parfum Spray  100ml/3.3oz",10070.50,1)

scents.push(data17,data18,data19,data20,data21,data22,data23,data24)
localStorage.setItem("scents",JSON.stringify(scents))

var hair=[]

var data25=new getdata("https://a.cdnsbn.com/images/products/250/16244574344.jpg","Aveda","Damage Remedy Intensive Restructuring Treatment  150ml/5oz"," 3,591.50",1)
var data26=new getdata("https://a.cdnsbn.com/images/products/250/21853924944.jpg","DevaCurl","Deep Sea Repair (Seaweed Strengthening Mask)  236.6ml/8oz", 2810.50,1)
var data27=new getdata("https://a.cdnsbn.com/images/products/250/23431000444.jpg","Kerastase","Elixir Ultime Le Masque Sublimating Oil Infused Masque (Dull Hair)  200ml/6.8oz", 4372.00,1)
var data28=new getdata("https://a.cdnsbn.com/images/products/250/21047110144.jpg","KMS California","Moist Repair Revival Creme (Moisture &amp; Manageability)  125ml/4.2oz",1561.50,1)
var data29=new getdata("	https://b.cdnsbn.com/images/products/250/25828528444.jpg","Living Proof","No Frizz Intense Moisture Mask  200ml/6.7oz",2654.50,1)
var data30=new getdata("	https://b.cdnsbn.com/images/products/250/15338632644.jpg","Orofluido","Original Mask  250ml/8.4oz", 937.00,1)
var data31=new getdata("https://b.cdnsbn.com/images/products/250/26953990744.jpg","Phyto","Phyto Specific Nourishing Styling Butter  100ml/3.3oz",1639.5,1)
var data32=new getdata("	https://b.cdnsbn.com/images/products/250/12126793144.jpg","Tigi","Tigi Bed Head Urban Anti+dotes Resurrection Conditioner 200ml/6.76oz", 859.00,1)

hair.push(data25,data26,data27,data28,data29,data30,data31,data32)
localStorage.setItem("hair_prod",JSON.stringify(hair))

var bundle_joy=[]

let data33 = new getdata('https://a.cdnsbn.com/images/products/250/27342293753.jpg','BareMinerals','Smoothness Hydrating Cleansing Oil (Free: Natural Beauty r-PGA Dee... 180ml+6x20ml',2576.50,1);

let data34 = new getdata('https://a.cdnsbn.com/images/products/250/27343276753.jpg','Biotherm','Aquasource Everplump Plumping Smoothing Moisturizing Treatment 125ml (Fre... 2pcs',6089.50,1)

let data35 = new getdata('https://a.cdnsbn.com/images/products/250/27342026553.jpg','Bobbi Brown','Soothing Cleansing Oil (Free: Natural Beauty BIO UP Treatment Essence 200ml) 2pcs',4606.00,1);

let data36 = new getdata('https://a.cdnsbn.com/images/products/250/27003380414.jpg','Clinique','Dramatically Different Moisturizing Lotion+ - Very Dry to Dry Combination ... 2pcs', 4294.00,1);

let data37 = new getdata('https://b.cdnsbn.com/images/products/250/27338282553.jpg','Darphin','Intral Daily Rescue Serum 50ml (Free: Natural Beauty Aromatic Cleaning Bal... 2pcs',7,104.00,1);

let data38 = new getdata('https://b.cdnsbn.com/images/products/250/27342100053.jpg','Elemis','Pro-Collagen Super Serum (Free: Natural Beauty BIO UP Treatment Essence 20... 2pcs',4,918.50,1);

let data39 = new getdata('https://b.cdnsbn.com/images/products/250/27338380553.jpg','Elizabeth Arden','Ceramide Vitamin C Capsules - Radiance Renewal Serum 60caps (Free: Natural... 2pcs,',5777.00,1);

let data40 = new getdata('https://b.cdnsbn.com/images/products/250/27338180953.jpg','Lancome','Confort Tonique 400ml (Free: Natural Beauty r-PGA Deep Hydration ... 400ml+6x 20ml',4059.50,1);
bundle_joy.push(data33,data34,data35,data36,data37,data38,data39,data40)
localStorage.setItem("bundle_joy",JSON.stringify(bundle_joy))


let DaySepicalDataArr = []

let data41 = new getdata('https://a.cdnsbn.com/images/products/250/25862214639.jpg','Avene','Men Anti-Aging Hydrating Care (For Sensitive Skin) 50ml/1.69oz',1,952.00,1) 
let data42 = new getdata('https://a.cdnsbn.com/images/products/250/26398093739.jpg','BareMinerals','Dew Mist Setting Spray 100ml/3.4oz',1639.50,1) 
let data43 = new getdata('https://a.cdnsbn.com/images/products/250/26296273037.jpg','D.S. & Durga','Cowboy Grass Eau De Parfum Spray 50ml/1.7oz',8353.50,1)                      
let data44 = new getdata('https://a.cdnsbn.com/images/products/250/26290647239.jpg','Dermaheal',`Stem C,'Rum HL Anti-Hair Loss Solution 5x5ml/0.17oz`,15,535.50,1) 
let data45 = new getdata('https://b.cdnsbn.com/images/products/250/22391239537.jpg','Dolce & Gabbana','Dolce Eau De Parfum Spray 150ml/5oz',6011.50,1) 
let data46 = new getdata('https://b.cdnsbn.com/images/products/250/25857233839.jpg','Gucci','Silk Priming Serum 30ml/1oz',3552.00,1) 
let data47 = new getdata('https://b.cdnsbn.com/images/products/250/23567090939.jpg','Nioxin','Density System 3 Scalp Therapy Conditioner (Colored Hair, Light T... 1000ml/33.8oz',3045.00,1) 
let data48 = new getdata('https://b.cdnsbn.com/images/products/250/24493901139.jpg','Sebastian','Seb Man The Protector Shaving Cream 135g/4.7oz',976.00,1) 

DaySepicalDataArr.push(data41,data42,data43,data44,data45,data46,data47,data48);
localStorage.setItem("DaySpecialData",JSON.stringify(DaySepicalDataArr));



let  BestSellersArr1 = [];
let  BestSellersArr2 = [];

let b1 = new getdata('https://a.cdnsbn.com/images/products/250/20079465901.jpg','EltaMD','UV Clear Facial Sunscreen SPF 46 - For Skin Types Prone Acne',2732.50)
let b2 = new getdata('https://a.cdnsbn.com/images/products/16305336601.jpg','Embryolisse','Lait Creme Concentrate (24-Hour Miracle Cream)',1991.00)
let b3 = new getdata('https://a.cdnsbn.com/images/products/17059239101.jpg','Frownies','Facial Patches (For Forehead & Between Eyes) ',2030.00)
let b4 = new getdata('https://a.cdnsbn.com/images/products/10147781401.jpg','Shiseido','Future Solution LX Extra Rich Cleansing Foam ',4606.00)


let b5 = new getdata('https://a.cdnsbn.com/images/products/23615480102.jpg','Christian Dior','Dior Addict Lip Maximizer (Hyaluronic Lip Plumper) ',3513.00)
let b6 = new getdata('https://a.cdnsbn.com/images/products/22665196301.jpg','Skin Ceuticals','C E Ferulic High Potency Triple Antioxidant Treatment ',14403.50)
let b7 = new getdata('https://a.cdnsbn.com/images/products/22568881401.jpg','Shiseido','Anessa Perfect UV Sunscreen Skincare Milk SPF50+ PA++++ ',3825.50)
let b8 = new getdata('https://a.cdnsbn.com/images/products/10837781401.jpg','Shiseido','Urban Environment UV Protection Cream Plus SPF 50 (For Face & Body) ',2,498.50);

BestSellersArr1.push(b1,b2,b3,b4);
BestSellersArr2.push(b5,b6,b7,b8)

localStorage.setItem("BestSellerData1",JSON.stringify(BestSellersArr1));
localStorage.setItem("BestSellerData2",JSON.stringify(BestSellersArr2));

// best deals
let BestDealsArr = [];
let bd1 = new getdata('https://a.cdnsbn.com/images/products/250/22027414601.jpg','Avene','Hydrance Rich Hydrating Cream - For Dry to Very Dry Sensitive Skin 40ml/1.3oz',2615.50)
let bd2 = new getdata('https://a.cdnsbn.com/images/products/250/05072793401.jpg','Chantecaille','Stress Repair Concentrate Eye Cream 15ml/0.5oz',17135.50)
let bd3 = new getdata('https://a.cdnsbn.com/images/products/250/07745580602.jpg','Estee Lauder','Double Wear Zero Smudge Lengthening Mascara - # 01 Black 6ml/0.24oz',2537.50)
let bd4 = new getdata('https://a.cdnsbn.com/images/products/250/23345796301.jpg','Skin Ceuticals','Hydrating B5 - Moisture Enhancing Fluid 30ml/1oz',6870.00)

BestDealsArr.push(bd1,bd2,bd3,bd4);
localStorage.setItem("BestDealsData",JSON.stringify(BestDealsArr));


// top brands
var top_brands=[]

function top_data(name,url_link){
    this.name=name,
    this.url_link=url_link

}
var img1=new top_data("img1","https://demo2020.strawberrynet.com/images/common/logo_YSL.png")
var img2=new top_data("img2","https://demo2020.strawberrynet.com/images/common/logo_ChristianDior.png")
var img3=new top_data("img3","https://demo2020.strawberrynet.com/images/common/logo_Lancome.png")
var img4=new top_data("img4","https://demo2020.strawberrynet.com/images/common/logo_Clarins.png")
var img5=new top_data("img5","https://demo2020.strawberrynet.com/images/common/logo_LaRochePosay.png")
var img6=new top_data("img6","https://demo2020.strawberrynet.com/images/common/logo_EsteeLauder.png")
var img7=new top_data("img7","https://demo2020.strawberrynet.com/images/common/logo_Moroccanoil.png")
var img8=new top_data("img8","https://demo2020.strawberrynet.com/images/common/logo_Shiseido.png")
var img9=new top_data("img9","https://demo2020.strawberrynet.com/images/common/logo_NARS.png")
var img10=new top_data("img10","https://demo2020.strawberrynet.com/images/common/logo_Clinique.png")
var img11=new top_data("img11","https://demo2020.strawberrynet.com/images/common/logo_bareMinerals.png")

var img12=new top_data("img12","https://demo2020.strawberrynet.com/images/common/logo_LauraMercier.png")
var img13=new top_data("img13","https://demo2020.strawberrynet.com/images/common/logo_Kerastase.png")
var img14=new top_data("img14","https://demo2020.strawberrynet.com/images/common/logo_JMO.png")
var img15=new top_data("img15","https://demo2020.strawberrynet.com/images/common/logo_Guerlain.png")
top_brands.push(img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15)
localStorage.setItem("top_brand",JSON.stringify(top_brands))

// top 40 special
let top40SpecialsArr = [];
 let top1 = new getdata('https://a.cdnsbn.com/images/products/250/24288385903.jpg','Decleor','Bourrache Cica-Botanic Oil 100ml/3.38oz',1522.50,1);
 let top2 = new getdata('https://a.cdnsbn.com/images/products/250/24774580501.jpg','Elizabeth Arden','Ceramide Vitamin C Capsules - Radiance Renewal Serum 30caps',2615.50,1235);
 let top3 = new getdata('https://a.cdnsbn.com/images/products/250/22933563101.jpg','Ella Bache','Nutridermologie Lab Magistral Cream-Mask Rejuvenium 27% Rescue Crea... 50ml/1.69oz',3513.00,1235);
 let top4 = new getdata('https://a.cdnsbn.com/images/products/250/24467824702.jpg','Laura Mercier','Caviar Chrome Veil Lightweight Liquid Eye Colour 6ml/0.2oz',1249.50,1456.00);

 top40SpecialsArr.push(top1,top2,top3,top4);
 localStorage.setItem("top40SepicalsData",JSON.stringify(top40SpecialsArr));


  // New Arrivalse
  let newArrialsArr = [];
  let na1 = new getdata('https://a.cdnsbn.com/images/products/250/26307826344.jpg','Bosley','Scalp Relief Anti-Dandruff Shampoo with Pyrithione Zinc 740ml/25oz',4,528.00,1478.00)
  let na2 = new getdata('https://a.cdnsbn.com/images/products/250/26164883301.jpg','La Prairie','Platinum Rare Haute-Rejuvenation Eye Elixir 15ml/0.5oz',77675.50,1263.00)
  let na3 = new getdata('https://a.cdnsbn.com/images/products/250/26307404144.jpg','Philip Kingsley','Pure Blonde Booster Colour- Correcting Weekly Shampoo 500ml/16.9oz',3864.50,2051.00)
  let na4 = new getdata('https://a.cdnsbn.com/images/products/250/25344264344.jpg','Redken','Nature + Science Color Extend Vibrancy Shampoo (For Color-Treated ... 300ml/10.1oz',2069.00)
  
  newArrialsArr.push(na1,na2,na3,na4);
  localStorage.setItem("newArrival", JSON.stringify(newArrialsArr));







  var main=[]
var elem1=new getdata("	https://a.cdnsbn.com/images/products/250/11009781301.jpg","Orlane","Orlane Absolute Skin Recovery Care Eye Contour  15ml/0.5oz",8562,1)
var elem2=new getdata("https://a.cdnsbn.com/images/products/11009781301.jpg","Orlane","Absolute Skin Recovery Care Eye Contour",8213,1)
var elem3=new getdata("https://a.cdnsbn.com/images/products/25207681301.jpg","Orlane","Anagenese Essential Anti-Aging Eye Care",2855,1)
var elem4=new getdata("https://a.cdnsbn.com/images/products/24473781301.jpg","Orlane","Anti-Fatigue Absolute Detox Emulsion - Radiance & Energy",8409,1)
var elem5=new getdata("https://a.cdnsbn.com/images/products/23649881301.jpg","Orlane","Cleanser For Normal Skin (Salon Product)",2464,1)
var elem6=new getdata("https://a.cdnsbn.com/images/products/21712581301.jpg","Orlane","B21 Extraordinaire Absolute Youth Eye",10091,1)
var elem7=new getdata("https://a.cdnsbn.com/images/products/23585181301.jpg","Orlane","Creme Royale Beauty Sublime Mask",8221,1)
var elem8=new getdata("https://a.cdnsbn.com/images/products/11001281301.jpg","Orlane","Creme Royale",37579,1)
var elem9=new getdata("https://a.cdnsbn.com/images/products/250/01637283101.jpg","Orlane","Botanical Night Cream With Collagen & Woodmallow",12711,1)
var elem10=new getdata("https://a.cdnsbn.com/images/products/02469981301.jpg","Orlane","Astringent Purifying Lotion",1330,1)
var elem11=new getdata("https://c.cdnsbn.com/images/products/250/08438581301.jpg","Orlane","Anti-Fatigue Absolute Detox Emulsion - Radiance & Energy",2335,1)
var elem12=new getdata("https://a.cdnsbn.com/images/products/250/02359781301.jpg","Orlane","Creme Royale",5623,1)
main.push(elem1,elem2,elem3,elem4,elem5,elem6,elem7,elem8,elem9,elem10,elem11,elem12)
localStorage.setItem("extra_data",JSON.stringify(main))