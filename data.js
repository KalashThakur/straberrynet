function getdata(img,name,desc,price){
    this.price=price,
    this.name=name,
    this.img=img,
    this.desc=desc
}
var skincare_science=[]

var data1=new getdata("https://a.cdnsbn.com/images/products/250/25930157001.jpg","colorescience","Sunforgettable Total Protection Face Shield SPF 50 - # Glow  55ml/1.8oz","Rs 2,888.50")
var data2= new getdata("https://a.cdnsbn.com/images/products/250/17482140803.jpg","DERMAdoctor","KP Duty Dermatologist Formulated Body Scrub  473ml/16oz","Rs 3,513.00")
var data3=new getdata("https://a.cdnsbn.com/images/products/250/24594570901.jpg","Filorga","Lift-Designer Ultra-Lifting Serum  30ml/1oz","Rs 2,849.50")
var data4=new getdata("https://a.cdnsbn.com/images/products/250/19143259701.jpg","Iluminage","Youth Cell Night Cream  50ml/1.7oz","Rs 1,874.00")
var data5=new getdata("https://b.cdnsbn.com/images/products/250/17513128601.jpg","Kiehl's","Hydro-Plumping Re-Texturizing Serum Concentrate  50ml/1.7oz","Rs 5,777.00")
var data6=new getdata("https://b.cdnsbn.com/images/products/250/03973383301.jpg","La Prairie","Cellular Softening &amp; Balancing Lotion  250ml/8.4oz","Rs 12,803.00")
var data7=new getdata("https://b.cdnsbn.com/images/products/250/23583681301.jpg","Oriane","Anagenese Essential Anti-Aging Serum  30ml/1oz","Rs 3,279.00")
var data8=new getdata("https://b.cdnsbn.com/images/products/250/23720229301.jpg","StriVectin","StriVectin - S.T.A.R. Light Retinol Night Oil  30ml/1oz","Rs 5,777.00")

skincare_science.push(data1,data2,data3,data4,data5,data6,data7,data8)

localStorage.setItem("skincare_science",JSON.stringify(skincare_science))

var blushdata=[]
var data9=new getdata("https://a.cdnsbn.com/images/products/250/21999826502.jpg","Bobbi Brown","Highlighting Powder - # Bronze Glow  8g/0.28oz","Rs 4,216.00")
var data10=new getdata(" https://a.cdnsbn.com/images/products/250/22353893402.jpg","Chantecaille","Cheek Shade - Laughter (Coral)  2.5g/0.08oz","Rs 3,279.00")
var data11=new getdata("https://a.cdnsbn.com/images/products/250/21999826502.jpg","Clinique","Blushing Blush Powder Blush - # 120 Bashful Blush  6g/0.21oz","Rs 2,264.00")
var data12=new getdata("https://a.cdnsbn.com/images/products/250/25790779102.jpg","Fenty Beauty by Rihanna","Killawatt Freestyle Highlighter Duo 2x3.5g/0.12oz","Rs 2,498.50")
var data13=new getdata("https://b.cdnsbn.com/images/products/250/24290758802.jpg","HourGlass","HourGlass Vanish Flash Highlighting Stick - # Champagne Flash  6.1g/0.21oz","Rs 2,732.50")
var data14=new getdata("https://a.cdnsbn.com/images/products/250/22353893402.jpg","Lancome","Lancome Bronze & Glow Palette - # 02 Your Pink Glow Shot  14g/0.49","Rs 1,717.50")
var data15=new getdata("https://b.cdnsbn.com/images/products/250/22330924702.jpg","Laura Mercier","Candleglow Concealer And Highlighter - # 62.2ml/0.07oz","Rs 1,093.00")
var data16=new getdata("https://b.cdnsbn.com/images/products/250/13085502602.jpg","NARS","NARS Blush - Deep Throat  4.8g/0.16oz","Rs 2,108.00")
blushdata.push(data9,data10,data11,data12,data13,data14,data15,data16)
localStorage.setItem("blush_data",JSON.stringify(blushdata))

var scents=[]

var data17=new getdata("https://a.cdnsbn.com/images/products/250/14514126106.jpg","Aqua Di Parma","Blu Mediterraneo Fico Di Amalfi Eau De Toilette Spray  75ml/2.5oz","Rs 6,089.50")
var data18=new getdata("https://a.cdnsbn.com/images/products/250/25920468106.jpg","Anna Sui","Sky Eau De Toilette Spray  50ml/1.7oz","Rs 4,606.00")
var data19=new getdata("https://a.cdnsbn.com/images/products/250/24265135005.jpg","Bvlgari","Man Wood Neroli Eau De Parfum Spray  100ml/3.4oz","Rs 7,729.00")
var data20=new getdata("https://a.cdnsbn.com/images/products/250/16513380606.jpg","Estee Lauder","Modern Muse Eau De Parfum Spray  50ml/1.7oz","Rs 5,387.00")
var data21=new getdata("https://b.cdnsbn.com/images/products/250/22341380705.jpg","Guerlain","L'Homme Ideal L'Intense Eau De Parfum Spray   50ml/1.6oz","Rs&nbsp;.5,074.50")
var data22=new getdata("https://b.cdnsbn.com/images/products/250/12550740106.jpg","Hermes","Un Jardin Sur Le Toit Eau De Toilette Spray  100ml/3.3oz","Rs 8,978.00")
var data23=new getdata("https://b.cdnsbn.com/images/products/250/26926889503.jpg","Jo Malone","English Pear & Freesia Exfoliating Shower Gel  200ml/6.7oz","Rs 4,059.50")
var data24=new getdata("https://b.cdnsbn.com/images/products/250/22667689106.jpg","Serge Lutens","Fleurs D' Oranger Eau De Parfum Spray  100ml/3.3oz","Rs 10,070.50")

scents.push(data17,data18,data19,data20,data21,data22,data23,data24)
localStorage.setItem("scents",JSON.stringify(scents))

var hair=[]

var data25=new getdata("https://a.cdnsbn.com/images/products/250/16244574344.jpg","Aveda","Damage Remedy Intensive Restructuring Treatment  150ml/5oz","Rs 3,591.50")
var data26=new getdata("https://a.cdnsbn.com/images/products/250/21853924944.jpg","DevaCurl","Deep Sea Repair (Seaweed Strengthening Mask)  236.6ml/8oz","Rs 2,810.50")
var data27=new getdata("https://a.cdnsbn.com/images/products/250/23431000444.jpg","Kerastase","Elixir Ultime Le Masque Sublimating Oil Infused Masque (Dull Hair)  200ml/6.8oz","Rs 4,372.00")
var data28=new getdata("https://a.cdnsbn.com/images/products/250/21047110144.jpg","KMS California","Moist Repair Revival Creme (Moisture &amp; Manageability)  125ml/4.2oz","Rs 1,561.50")
var data29=new getdata("	https://b.cdnsbn.com/images/products/250/25828528444.jpg","Living Proof","No Frizz Intense Moisture Mask  200ml/6.7oz","Rs 2,654.50")
var data30=new getdata("	https://b.cdnsbn.com/images/products/250/15338632644.jpg","Orofluido","Original Mask  250ml/8.4oz","Rs 937.00")
var data31=new getdata("https://b.cdnsbn.com/images/products/250/26953990744.jpg","Phyto","Phyto Specific Nourishing Styling Butter  100ml/3.3oz","Rs 1,639.50")
var data32=new getdata("	https://b.cdnsbn.com/images/products/250/12126793144.jpg","Tigi","Tigi Bed Head Urban Anti+dotes Resurrection Conditioner 200ml/6.76oz","Rs 859.00")

hair.push(data25,data26,data27,data28,data29,data30,data31,data32)
localStorage.setItem("hair_prod",JSON.stringify(hair))

var bundle_joy=[]

let data33 = new getdata('https://a.cdnsbn.com/images/products/250/27342293753.jpg','BareMinerals','Smoothness Hydrating Cleansing Oil (Free: Natural Beauty r-PGA Dee... 180ml+6x20ml','Rs .2,576.50');

let data34 = new getdata('https://a.cdnsbn.com/images/products/250/27343276753.jpg','Biotherm','Aquasource Everplump Plumping Smoothing Moisturizing Treatment 125ml (Fre... 2pcs','Rs .6,089.50')

let data35 = new getdata('https://a.cdnsbn.com/images/products/250/27342026553.jpg','Bobbi Brown','Soothing Cleansing Oil (Free: Natural Beauty BIO UP Treatment Essence 200ml) 2pcs','Rs .4,606.00');

let data36 = new getdata('https://a.cdnsbn.com/images/products/250/27003380414.jpg','Clinique','Dramatically Different Moisturizing Lotion+ - Very Dry to Dry Combination ... 2pcs','Rs .4,294.00');

let data37 = new getdata('https://b.cdnsbn.com/images/products/250/27338282553.jpg','Darphin','Intral Daily Rescue Serum 50ml (Free: Natural Beauty Aromatic Cleaning Bal... 2pcs','Rs .7,104.00');

let data38 = new getdata('https://b.cdnsbn.com/images/products/250/27342100053.jpg','Elemis','Pro-Collagen Super Serum (Free: Natural Beauty BIO UP Treatment Essence 20... 2pcs','Rs .4,918.50');

let data39 = new getdata('https://b.cdnsbn.com/images/products/250/27338380553.jpg','Elizabeth Arden','Ceramide Vitamin C Capsules - Radiance Renewal Serum 60caps (Free: Natural... 2pcs,','Rs .5,777.00');

let data40 = new getdata('https://b.cdnsbn.com/images/products/250/27338180953.jpg','Lancome','Confort Tonique 400ml (Free: Natural Beauty r-PGA Deep Hydration ... 400ml+6x 20ml','Rs .4,059.50');
bundle_joy.push(data33,data34,data35,data36,data37,data38,data39,data40)
localStorage.setItem("bundle_joy",JSON.stringify(bundle_joy))


let DaySepicalDataArr = []

let data41 = new getdata('https://a.cdnsbn.com/images/products/250/25862214639.jpg','Avene','Men Anti-Aging Hydrating Care (For Sensitive Skin) 50ml/1.69oz','Rs .1,952.00') 
let data42 = new getdata('https://a.cdnsbn.com/images/products/250/26398093739.jpg','BareMinerals','Dew Mist Setting Spray 100ml/3.4oz','Rs .1,639.50') 
let data43 = new getdata('https://a.cdnsbn.com/images/products/250/26296273037.jpg','D.S. & Durga','Cowboy Grass Eau De Parfum Spray 50ml/1.7oz','Rs .8,353.50')                      
let data44 = new getdata('https://a.cdnsbn.com/images/products/250/26290647239.jpg','Dermaheal',`Stem C,'Rum HL Anti-Hair Loss Solution 5x5ml/0.17oz`,'Rs .15,535.50') 
let data45 = new getdata('https://b.cdnsbn.com/images/products/250/22391239537.jpg','Dolce & Gabbana','Dolce Eau De Parfum Spray 150ml/5oz','Rs .6,011.50') 
let data46 = new getdata('https://b.cdnsbn.com/images/products/250/25857233839.jpg','Gucci','Silk Priming Serum 30ml/1oz','Rs .3,552.00') 
let data47 = new getdata('https://b.cdnsbn.com/images/products/250/23567090939.jpg','Nioxin','Density System 3 Scalp Therapy Conditioner (Colored Hair, Light T... 1000ml/33.8oz','Rs .3,045.00') 
let data48 = new getdata('https://b.cdnsbn.com/images/products/250/24493901139.jpg','Sebastian','Seb Man The Protector Shaving Cream 135g/4.7oz','Rs .976.00') 

DaySepicalDataArr.push(data41,data42,data43,data44,data45,data46,data47,data48);
localStorage.setItem("DaySpecialData",JSON.stringify(DaySepicalDataArr));



let  BestSellersArr1 = [];
let  BestSellersArr2 = [];

let b1 = new getdata('https://a.cdnsbn.com/images/products/250/20079465901.jpg','EltaMD','UV Clear Facial Sunscreen SPF 46 - For Skin Types Prone Acne','Rs .2,732.50')
let b2 = new getdata('https://a.cdnsbn.com/images/products/16305336601.jpg','Embryolisse','Lait Creme Concentrate (24-Hour Miracle Cream)','Rs .1,991.00')
let b3 = new getdata('https://a.cdnsbn.com/images/products/17059239101.jpg','Frownies','Facial Patches (For Forehead & Between Eyes) ','Rs .2,030.00')
let b4 = new getdata('https://a.cdnsbn.com/images/products/10147781401.jpg','Shiseido','Future Solution LX Extra Rich Cleansing Foam ','Rs .4,606.00')


let b5 = new getdata('https://a.cdnsbn.com/images/products/23615480102.jpg','Christian Dior','Dior Addict Lip Maximizer (Hyaluronic Lip Plumper) ','Rs .3,513.00')
let b6 = new getdata('https://a.cdnsbn.com/images/products/22665196301.jpg','Skin Ceuticals','C E Ferulic High Potency Triple Antioxidant Treatment ','Rs .14,403.50')
let b7 = new getdata('https://a.cdnsbn.com/images/products/22568881401.jpg','Shiseido','Anessa Perfect UV Sunscreen Skincare Milk SPF50+ PA++++ ','Rs .3,825.50')
let b8 = new getdata('https://a.cdnsbn.com/images/products/10837781401.jpg','Shiseido','Urban Environment UV Protection Cream Plus SPF 50 (For Face & Body) ','Rs .2,498.50');

BestSellersArr1.push(b1,b2,b3,b4);
BestSellersArr2.push(b5,b6,b7,b8)

localStorage.setItem("BestSellerData1",JSON.stringify(BestSellersArr1));
localStorage.setItem("BestSellerData2",JSON.stringify(BestSellersArr2));

// best deals
let BestDealsArr = [];
let bd1 = new getdata('https://a.cdnsbn.com/images/products/250/22027414601.jpg','Avene','Hydrance Rich Hydrating Cream - For Dry to Very Dry Sensitive Skin 40ml/1.3oz','Rs .2,615.50')
let bd2 = new getdata('https://a.cdnsbn.com/images/products/250/05072793401.jpg','Chantecaille','Stress Repair Concentrate Eye Cream 15ml/0.5oz','Rs .17,135.50')
let bd3 = new getdata('https://a.cdnsbn.com/images/products/250/07745580602.jpg','Estee Lauder','Double Wear Zero Smudge Lengthening Mascara - # 01 Black 6ml/0.24oz','Rs .2,537.50')
let bd4 = new getdata('https://a.cdnsbn.com/images/products/250/23345796301.jpg','Skin Ceuticals','Hydrating B5 - Moisture Enhancing Fluid 30ml/1oz','Rs .6,870.00');

BestDealsArr.push(bd1,bd2,bd3,bd4);
localStorage.setItem("BestDealsData",JSON.stringify(BestDealsArr));
