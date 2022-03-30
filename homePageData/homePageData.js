 
 function BundleOfJoyObj(img,t,d,p){
     this.name = img
     this.title =t
     this.des = d
     this.price = p
 }
 let productArr = [];
 let p1 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/27342293753.jpg','BareMinerals','Smoothness Hydrating Cleansing Oil (Free: Natural Beauty r-PGA Dee... 180ml+6x20ml','Rs .2,576.50');

let p2 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/27343276753.jpg','Biotherm','Aquasource Everplump Plumping Smoothing Moisturizing Treatment 125ml (Fre... 2pcs','Rs .6,089.50')

let p3 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/27342026553.jpg','Bobbi Brown','Soothing Cleansing Oil (Free: Natural Beauty BIO UP Treatment Essence 200ml) 2pcs','Rs .4,606.00');

let p4 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/27003380414.jpg','Clinique','Dramatically Different Moisturizing Lotion+ - Very Dry to Dry Combination ... 2pcs','Rs .4,294.00');

let p5 = new BundleOfJoyObj('https://b.cdnsbn.com/images/products/250/27338282553.jpg','Darphin','Intral Daily Rescue Serum 50ml (Free: Natural Beauty Aromatic Cleaning Bal... 2pcs','Rs .7,104.00');

let p6 = new BundleOfJoyObj('https://b.cdnsbn.com/images/products/250/27342100053.jpg','Elemis','Pro-Collagen Super Serum (Free: Natural Beauty BIO UP Treatment Essence 20... 2pcs','Rs .4,918.50');

let p7 = new BundleOfJoyObj('https://b.cdnsbn.com/images/products/250/27338380553.jpg','Elizabeth Arden','Ceramide Vitamin C Capsules - Radiance Renewal Serum 60caps (Free: Natural... 2pcs,','Rs .5,777.00');

let p8 = new BundleOfJoyObj('https://b.cdnsbn.com/images/products/250/27338180953.jpg','Lancome','Confort Tonique 400ml (Free: Natural Beauty r-PGA Deep Hydration ... 400ml+6x 20ml','Rs .4,059.50');

productArr.push(p1,p2,p3,p4,p5,p6,p7,p8);
localStorage.setItem("BundleOfJoy",JSON.stringify(productArr));

                        //   Day sepical data
      let DaySepicalDataArr = []

 let d1 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/25862214639.jpg','Avene','Men Anti-Aging Hydrating Care (For Sensitive Skin) 50ml/1.69oz','Rs .1,952.00') 
 let d2 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/26398093739.jpg','BareMinerals','Dew Mist Setting Spray 100ml/3.4oz','Rs .1,639.50') 
 let d3 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/26296273037.jpg','D.S. & Durga','Cowboy Grass Eau De Parfum Spray 50ml/1.7oz','Rs .8,353.50')                      
 let d4 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/26290647239.jpg','Dermaheal',`Stem C,'Rum HL Anti-Hair Loss Solution 5x5ml/0.17oz`,'Rs .15,535.50') 
 let d5 = new BundleOfJoyObj('https://b.cdnsbn.com/images/products/250/22391239537.jpg','Dolce & Gabbana','Dolce Eau De Parfum Spray 150ml/5oz','Rs .6,011.50') 
 let d6 = new BundleOfJoyObj('https://b.cdnsbn.com/images/products/250/25857233839.jpg','Gucci','Silk Priming Serum 30ml/1oz','Rs .3,552.00') 
 let d7 = new BundleOfJoyObj('https://b.cdnsbn.com/images/products/250/23567090939.jpg','Nioxin','Density System 3 Scalp Therapy Conditioner (Colored Hair, Light T... 1000ml/33.8oz','Rs .3,045.00') 
 let d8 = new BundleOfJoyObj('https://b.cdnsbn.com/images/products/250/24493901139.jpg','Sebastian','Seb Man The Protector Shaving Cream 135g/4.7oz','Rs .976.00') 

 DaySepicalDataArr.push(d1,d2,d3,d4,d5,d6,d7,d8);
 localStorage.setItem("DaySepicalData",JSON.stringify(DaySepicalDataArr));

 let  BestSellersArr = [];

 let b1 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/20079465901.jpg','EltaMD','UV Clear Facial Sunscreen SPF 46 - For Skin Types Prone To Acne, Rosacea & Hyperpigmentation ','Rs .2,732.50')
 let b2 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/16305336601.jpg','Embryolisse','Lait Creme Concentrate (24-Hour Miracle Cream)','Rs .1,991.00')
 let b3 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/17059239101.jpg','Frownies','Facial Patches (For Forehead & Between Eyes) ','Rs .2,030.00')
 let b4 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/10147781401.jpg','Shiseido','Future Solution LX Extra Rich Cleansing Foam ','Rs .4,606.00')
 let b5 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/23615480102.jpg','Christian Dior','Dior Addict Lip Maximizer (Hyaluronic Lip Plumper) ','Rs .3,513.00')
 let b6 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/22665196301.jpg','Skin Ceuticals','C E Ferulic High Potency Triple Antioxidant Treatment ','Rs .14,403.50')
 let b7 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/22568881401.jpg','Shiseido','Anessa Perfect UV Sunscreen Skincare Milk SPF50+ PA++++ ','Rs .3,825.50')
 let b8 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/10837781401.jpg','Shiseido','Urban Environment UV Protection Cream Plus SPF 50 (For Face & Body) ','Rs .2,498.50');

 BestSellersArr.push(b1,b2,b3,b4,b5,b6,b7,b8);
 localStorage.setItem("BestSellerData",JSON.stringify(BestSellersArr));


 // Best Deals 
 let BestDealsArr = [];
 let bd1 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/22027414601.jpg','Avene','Hydrance Rich Hydrating Cream - For Dry to Very Dry Sensitive Skin 40ml/1.3oz','Rs .2,615.50')
 let bd2 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/05072793401.jpg','Chantecaille','Stress Repair Concentrate Eye Cream 15ml/0.5oz','Rs .17,135.50')
 let bd3 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/07745580602.jpg','Estee Lauder','Double Wear Zero Smudge Lengthening Mascara - # 01 Black 6ml/0.24oz','Rs .2,537.50')
 let bd4 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/23345796301.jpg','Skin Ceuticals','Hydrating B5 - Moisture Enhancing Fluid 30ml/1oz','Rs .6,870.00');

 BestDealsArr.push(bd1,bd2,bd3,bd4);
 localStorage.setItem("BestDealsData",JSON.stringify(BestDealsArr));

 //Top 40 Secials

 let top40SpecialsArr = [];
 let top1 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/24288385903.jpg','Decleor','Bourrache Cica-Botanic Oil 100ml/3.38oz','Rs .1,522.50');
 let top2 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/24774580501.jpg','Elizabeth Arden','Ceramide Vitamin C Capsules - Radiance Renewal Serum 30caps','Rs .2,615.50');
 let top3 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/22933563101.jpg','Ella Bache','Nutridermologie Lab Magistral Cream-Mask Rejuvenium 27% Rescue Crea... 50ml/1.69oz','Rs .3,513.00');
 let top4 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/24467824702.jpg','Laura Mercier','Caviar Chrome Veil Lightweight Liquid Eye Colour 6ml/0.2oz','Rs .1,249.50');

 top40SpecialsArr.push(top1,top2,top3,top4);
 localStorage.setItem("top40SepicalsData",JSON.stringify(top40SpecialsArr));


 // New Arrivalse
 let newArrialsArr = [];
 let na1 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/26307826344.jpg','Bosley','Scalp Relief Anti-Dandruff Shampoo with Pyrithione Zinc 740ml/25oz','Rs .4,528.00')
 let na2 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/26164883301.jpg','La Prairie','Platinum Rare Haute-Rejuvenation Eye Elixir 15ml/0.5oz','Rs .77,675.50')
 let na3 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/26307404144.jpg','Philip Kingsley','Pure Blonde Booster Colour- Correcting Weekly Shampoo 500ml/16.9oz','Rs .3,864.50')
 let na4 = new BundleOfJoyObj('https://a.cdnsbn.com/images/products/250/25344264344.jpg','Redken','Nature + Science Color Extend Vibrancy Shampoo (For Color-Treated ... 300ml/10.1oz','Rs .2,069.00')
 
 newArrialsArr.push(na1,na2,na3,na4);
 localStorage.setItem("newArrial", JSON.stringify(newArrialsArr));


 
