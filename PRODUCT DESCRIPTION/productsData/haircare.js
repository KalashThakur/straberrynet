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

let haircare_data = [];

let d1 = new getdata("https://a.cdnsbn.com/images/products/250/21116099444.jpg","Moroccanoil","Moroccanoil Treatment - Original (For All Hair Types) 200ml/6.8oz",6180.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 200ml/6.8oz","1,054.00","https://a.cdnsbn.com/images/products/21116099444-1.jpg","https://a.cdnsbn.com/images/products/21116099444-2.jpg","Save: 18%",1);
let d2 = new getdata("https://a.cdnsbn.com/images/products/250/25402085944.jpg","Olaplex","No. 4 Bond Maintenance Shampoo 250ml/8.5oz",2660.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 250ml/8.5oz","1,054.00","https://a.cdnsbn.com/images/products/25402085944-1.jpg","https://a.cdnsbn.com/images/products/25402085944-2.jpg","Save: 15%",1);
let d3 = new getdata("https://a.cdnsbn.com/images/products/250/25402185944.jpg","Olaplex","No. 4 Bond Maintenance Conditioner 250ml/8.5oz",2660.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 250ml/8.5oz","1,054.00","https://a.cdnsbn.com/images/products/25402185944-1.jpg","https://a.cdnsbn.com/images/products/25402185944-2.jpg","Save: 12%",1);
let d4 = new getdata("https://a.cdnsbn.com/images/products/250/19168260044.jpg","Regenepure","Dr Hair & Scalp Treatment 224ml/8oz",2347.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 224ml/8oz","1,054.00","https://a.cdnsbn.com/images/products/19168260044-1.jpg","https://a.cdnsbn.com/images/products/250/19168260044.jpg","Save: 12%",1);
let d5 = new getdata("https://b.cdnsbn.com/images/products/250/25401885944.jpg","Olaplex","No. 3 Hair Perfector 100ml/3.3oz",2660.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.3oz","1,054.00","https://a.cdnsbn.com/images/products/25401885944-1.jpg","https://a.cdnsbn.com/images/products/25401885944-2.jpg","Save: 19%",1);
let d6 = new getdata("https://b.cdnsbn.com/images/products/250/25647000444.jpg","Kerastase","Chronologiste Masque Intense Regenerant Youth Revitalizing Hair Masque 200ml/6.8oz",5788.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 200ml/6.8oz","1,054.00","https://a.cdnsbn.com/images/products/25647000444-1.jpg","https://a.cdnsbn.com/images/products/25647000444-2.jpg","Save: 12%",1);
let d7 = new getdata("https://b.cdnsbn.com/images/products/250/18521229244.jpg","Peter Thomas Roth","Mega-Rich Nourishing Shampoo 235ml/8oz",1408.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 235ml/8oz","1,054.00","https://a.cdnsbn.com/images/products/18521229244-1.jpg","https://a.cdnsbn.com/images/products/18521229244-2.jpg","Save: 12%",1);
let d8 = new getdata("https://b.cdnsbn.com/images/products/250/25402385944.jpg","Olaplex","No. 6 Bond Smoother 100ml/3.3oz",2660.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.3oz","1,054.00","https://a.cdnsbn.com/images/products/25402385944-1.jpg","https://a.cdnsbn.com/images/products/25402385944-2.jpg","Save: 11%",1);
let d9 = new getdata("https://c.cdnsbn.com/images/products/250/10282299444.jpg","Moroccanoil","Intense Hydrating Mask (For Medium to Thick Dry Hair) 250ml/8.5oz",3520.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 250ml/8.5oz","1,054.00","https://a.cdnsbn.com/images/products/10282299444-1.jpg","https://a.cdnsbn.com/images/products/10282299444-2.jpg","Save: 12%",1);

let d10 = new getdata("https://c.cdnsbn.com/images/products/250/18920799444.jpg","Moroccanoil","Moroccanoil Treatment - Original (For All Hair Types) 100ml/3.4oz",3442.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.4oz","1,054.00","https://a.cdnsbn.com/images/products/18920799444-1.jpg","https://a.cdnsbn.com/images/products/18920799444-3.jpg","Save: 12%",1);
let d11 = new getdata("https://c.cdnsbn.com/images/products/250/12299114144.jpg","Baxter Of California","Clay Pomade (Firm Hold/ Matte Finish) 60ml/2oz",1838.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 60ml/2oz","1,054.00","https://a.cdnsbn.com/images/products/12299114144-1.jpg","https://a.cdnsbn.com/images/products/12299114144-2.jpg","Save: 13%",1);
let d12 = new getdata("https://c.cdnsbn.com/images/products/250/24074699444.jpg","Moroccanoil","Moroccanoil Treatment - Light (For Fine or Light-Colored Hair) 200ml/6.8oz",6180.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 200ml/6.8oz","1,054.00","https://a.cdnsbn.com/images/products/24074699444-1.jpg","https://a.cdnsbn.com/images/products/24074699444-2.jpg","Save: 11%",1);
let d13 = new getdata("https://d.cdnsbn.com/images/products/250/10250901144.jpg","Sebastian","Craft Clay Remoldable Matte Texturizer 52ml/1.7oz",1291.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 52ml/1.7oz","1,486.50","https://a.cdnsbn.com/images/products/10250901144-1.jpg","https://a.cdnsbn.com/images/products/10250901144-2.jpg","Save: 11%",1);
let d14 = new getdata("https://d.cdnsbn.com/images/products/250/25402485944.jpg","Olaplex","No. 7 Bonding Oil 30ml/1oz",2660.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 30ml/1oz","1,054.00","https://a.cdnsbn.com/images/products/25402485944-1.jpg","https://a.cdnsbn.com/images/products/25402485944-2.jpg","Save: 11%",1);
let d15 = new getdata("https://d.cdnsbn.com/images/products/250/26790485944.jpg","Olaplex","No. 8 Bond Intense Moisture Mask 100ml/3.3oz",2503.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.3oz","1,054.00","https://a.cdnsbn.com/images/products/26790485944-1.jpg","https://a.cdnsbn.com/images/products/26790485944-2.jpg","Save: 12%",1);
let d16 = new getdata("https://d.cdnsbn.com/images/products/250/16362499444.jpg","Moroccanoil","Curl Defining Cream 250ml/8.5oz",3207.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 250ml/8.5oz","1,054.00","https://a.cdnsbn.com/images/products/16362499444-1.jpg","https://a.cdnsbn.com/images/products/16362499444-2.jpg","Save: 12%",1);
let d17 = new getdata("https://a.cdnsbn.com/images/products/250/23709517944.jpg","John Masters Organics","Shampoo For Normal Hair with Lavender & Rosemary  473ml/16oz ",2386.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 473ml/16oz","1,054.00","https://a.cdnsbn.com/images/products/23709517944.jpg","https://a.cdnsbn.com/images/products/23709517944-1.jpg","Save: 12%",1);
let d18 = new getdata("https://a.cdnsbn.com/images/products/250/18490600444.jpg","Kerastase","Discipline Fluidissime Complete Anti-Frizz Care (For All Unruly Hair) 150ml/5.1oz",3012.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 150ml/5.1oz","1,054.00","https://a.cdnsbn.com/images/products/18490600444-1.jpg","https://a.cdnsbn.com/images/products/18490600444-2.jpg","Save: 21%",1);
let d19 = new getdata("https://a.cdnsbn.com/images/products/250/24359280309.jpg","Wet Brush","Pro Epic Quick Dry Detangler - # Rose Gold 1pc",1017.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 85ml/4.2oz","1,054.00","https://a.cdnsbn.com/images/products/24359280309-1.jpg","https://a.cdnsbn.com/images/products/24359280309-2.jpg","Save: 6%",1);
let d20 = new getdata("https://a.cdnsbn.com/images/products/250/23337300044.jpg","Rene Furterer","Triphasic Progressive Anti-Hair Loss Ritual Anti-Hair Loss Treatment (Progressive Hair Loss) 8x5.5ml/0.18oz",6297.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 8x5.5ml/0.18oz","1,054.00","https://a.cdnsbn.com/images/products/23337300044-1.jpg","https://a.cdnsbn.com/images/products/23337300044-2.jpg","Save: 10%",1);
let d21 = new getdata("https://b.cdnsbn.com/images/products/250/16354900444.jpg","Kerastase","Nutritive Lait Vital Incredibly Light - Exceptional Nutrition Care (For Normal to Slightly Dry Hair) 1000ml/34oz",7040.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 1000ml/34oz","1,054.00","https://a.cdnsbn.com/images/products/16354900444-1.jpg","https://a.cdnsbn.com/images/products/16354900444-2.jpg","Save: 6%",1);

let d22 = new getdata("https://b.cdnsbn.com/images/products/250/18415600344.jpg","BioSilk","Silk Therapy Original 167ml/5.64oz",1995.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 167ml/5.64oz","1,054.00","https://a.cdnsbn.com/images/products/18415600344-1.jpg","https://a.cdnsbn.com/images/products/18415600344-2.jpg","Save: 10%",1);
let d23 = new getdata("https://b.cdnsbn.com/images/products/250/23370300444.jpg","Kerastase","Elixir Ultime L'Huile Originale Versatile Beautifying Oil (Dull Hair) 100ml/3.4oz",4263.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.4oz","1,054.00","https://a.cdnsbn.com/images/products/23370300444-1.jpg","https://a.cdnsbn.com/images/products/23370300444-2.jpg","Save: 8%",1);
let d24 = new getdata("https://b.cdnsbn.com/images/products/250/25468588744.jpg","Pelo Baum","Hair Revitalizing Shampoo 150ml/5oz",1995.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 150ml/5oz","1,054.00","https://a.cdnsbn.com/images/products/25468588744-1.jpg","https://a.cdnsbn.com/images/products/25468588744-2.jpg","Save: 11%",1);
let d25 = new getdata("https://c.cdnsbn.com/images/products/250/24075999444.jpg","Moroccanoil","Moroccanoil Treatment - Original (For All Hair Types) 50ml/1.7oz ",2425.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 50ml/1.7oz","1,054.00","https://a.cdnsbn.com/images/products/24075999444-1.jpg","https://a.cdnsbn.com/images/products/24075999444-2.jpg","Save: 6%",1);
let d26 = new getdata("https://c.cdnsbn.com/images/products/250/10672701144.jpg","Sebastian","Penetraitt Strengthening and Repair-Shampoo 1000ml/33.8oz",3051.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 1000ml/33.8oz","1,054.00","https://a.cdnsbn.com/images/products/10672701144-1.jpg","https://a.cdnsbn.com/images/products/10672701144-2.jpg","Save: 9%",1); 
let d27 = new getdata("https://c.cdnsbn.com/images/products/250/23260800044.jpg","Rene Furterer","Forticea Leave-In Energizing Lotion (All Hair Types) 100ml/3.3oz",2151.50,"Extra 8% Off The Entire Site","★★★★☆","Size: 100ml/3.3oz","1,054.00","https://a.cdnsbn.com/images/products/23260800044-1.jpg","https://a.cdnsbn.com/images/products/23260800044-2.jpg","Save: 21%",1);
let d28 = new getdata("https://c.cdnsbn.com/images/products/250/26403985944.jpg","Olaplex","No. 0 Intensive Bond Building Treatment 155ml/5.2oz",2660.00,"Extra 8% Off The Entire Site","★★★★☆","Size: 155ml/5.2oz","1,054.00","https://a.cdnsbn.com/images/products/26403985944-1.jpg","https://a.cdnsbn.com/images/products/26403985944-2.jpg","Save: 14%",1);
console.log('d28:', d28)




haircare_data.push(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28);
console.log('haircare_data:', haircare_data)

localStorage.setItem("haircare_data",JSON.stringify(haircare_data));

// *****************************************************************************************


