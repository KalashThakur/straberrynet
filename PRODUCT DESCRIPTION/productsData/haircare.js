function getdata(url,url1,url2,url3,name,description,price,extraof,rating,save,size,strikedprice)
{
    this.image = url;   
    this.title = name;
    this.desc = description;
    this.price = price;

    
}

let haircare_data = [];

let d1 = new getdata("https://a.cdnsbn.com/images/products/250/21116099444.jpg","Moroccanoil","Moroccanoil Treatment - Original (For All Hair Types) 200ml/6.8oz","6,180.00");
let d2 = new getdata("https://a.cdnsbn.com/images/products/250/25402085944.jpg","Olaplex","No. 4 Bond Maintenance Shampoo 250ml/8.5oz",2,660.00);
let d3 = new getdata("https://a.cdnsbn.com/images/products/250/25402185944.jpg","Olaplex","No. 4 Bond Maintenance Conditioner 250ml/8.5oz","Rs .2,660.00");
let d4 = new getdata("https://a.cdnsbn.com/images/products/250/19168260044.jpg","Regenepure","Dr Hair & Scalp Treatment 224ml/8oz","Rs .2,347.00");
let d5 = new getdata("https://b.cdnsbn.com/images/products/250/25401885944.jpg","Olaplex","No. 3 Hair Perfector 100ml/3.3oz","Rs .2,660.00");
let d6 = new getdata("https://b.cdnsbn.com/images/products/250/25647000444.jpg","Kerastase","Chronologiste Masque Intense Regenerant Youth Revitalizing Hair Mas... 200ml/6.8oz","Rs .5,788.50");
let d7 = new getdata("https://b.cdnsbn.com/images/products/250/18521229244.jpg","Peter Thomas Roth","Mega-Rich Nourishing Shampoo 235ml/8oz","Rs .1,408.00");
let d8 = new getdata("https://b.cdnsbn.com/images/products/250/25402385944.jpg","Olaplex","No. 6 Bond Smoother 100ml/3.3oz","Rs .2,660.00");
let d9 = new getdata("https://c.cdnsbn.com/images/products/250/10282299444.jpg","Moroccanoil","Intense Hydrating Mask (For Medium to Thick Dry Hair) 250ml/8.5oz","Rs .3,520.00");
let d10 = new getdata("https://c.cdnsbn.com/images/products/250/18920799444.jpg","Moroccanoil","Moroccanoil Treatment - Original (For All Hair Types) 100ml/3.4oz ","Rs .3,442.00");
let d11 = new getdata("https://c.cdnsbn.com/images/products/250/12299114144.jpg","Baxter Of California","Clay Pomade (Firm Hold/ Matte Finish) 60ml/2oz","Rs .1,838.50");
let d12 = new getdata("https://c.cdnsbn.com/images/products/250/24074699444.jpg","Moroccanoil","Moroccanoil Treatment - Light (For Fine or Light-Colored Hair) 200ml/6.8oz","Rs .6,180.00");
let d13 = new getdata("https://d.cdnsbn.com/images/products/250/10250901144.jpg","Sebastian","Craft Clay Remoldable Matte Texturizer 52ml/1.7oz","Rs .1,291.00");
let d14 = new getdata("https://d.cdnsbn.com/images/products/250/25402485944.jpg","Olaplex","No. 7 Bonding Oil 30ml/1oz","Rs .2,660.00");
let d15 = new getdata("https://d.cdnsbn.com/images/products/250/26790485944.jpg","Olaplex","No. 8 Bond Intense Moisture Mask 100ml/3.3oz","Rs .2,503.50");
let d16 = new getdata("https://d.cdnsbn.com/images/products/250/16362499444.jpg","Moroccanoil","Curl Defining Cream 250ml/8.5oz","Rs .3,207.50");
let d17 = new getdata("https://a.cdnsbn.com/images/products/250/23709517944.jpg","John Masters Organics","Shampoo For Normal Hair with Lavender & Rosemary  473ml/16oz ","Rs .2,386.00");
let d18 = new getdata("https://a.cdnsbn.com/images/products/250/18490600444.jpg","Kerastase","Discipline Fluidissime Complete Anti-Frizz Care (For All Unruly Hair) 150ml/5.1oz","Rs .3,012.00");
let d19 = new getdata("https://a.cdnsbn.com/images/products/250/24359280309.jpg","Wet Brush","Pro Epic Quick Dry Detangler - # Rose Gold 1pc","Rs .1,017.00");
let d20 = new getdata("https://a.cdnsbn.com/images/products/250/23337300044.jpg","Rene Furterer","Triphasic Progressive Anti-Hair Loss Ritual Anti-Hair Loss Treatment (Progressive Hair Loss)... 8x5.5ml/0.18oz","Rs .6,297.00");
let d21 = new getdata("https://b.cdnsbn.com/images/products/250/16354900444.jpg","Kerastase","Nutritive Lait Vital Incredibly Light - Exceptional Nutrition Care (For Normal to Slightly Dry Hair) 1000ml/34oz","Rs .7,040.00");
let d22 = new getdata("https://b.cdnsbn.com/images/products/250/18415600344.jpg","BioSilk","Silk Therapy Original 167ml/5.64oz","Rs .1,995.00");
let d23 = new getdata("https://b.cdnsbn.com/images/products/250/23370300444.jpg","Kerastase","Elixir Ultime L'Huile Originale Versatile Beautifying Oil (Dull Hair) 100ml/3.4oz","Rs .4,263.50");
let d24 = new getdata("https://b.cdnsbn.com/images/products/250/25468588744.jpg","Pelo Baum","Hair Revitalizing Shampoo 150ml/5oz","Rs .1,995.00");
let d25 = new getdata("https://c.cdnsbn.com/images/products/250/24075999444.jpg","Moroccanoil","Moroccanoil Treatment - Original (For All Hair Types) 50ml/1.7oz ","Rs .2,425.00");
let d26 = new getdata("https://c.cdnsbn.com/images/products/250/10672701144.jpg","Sebastian","Penetraitt Strengthening and Repair-Shampoo 1000ml/33.8oz","Rs .3,051.00");
let d27 = new getdata("https://c.cdnsbn.com/images/products/250/23260800044.jpg","Rene Furterer","Forticea Leave-In Energizing Lotion (All Hair Types) 100ml/3.3oz","Rs .2,151.50");
let d28 = new getdata("https://c.cdnsbn.com/images/products/250/26403985944.jpg","Olaplex","No. 0 Intensive Bond Building Treatment 155ml/5.2oz","Rs .2,660.00");




haircare_data.push(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28);
console.log('haircare_data:', haircare_data)

localStorage.setItem("haircare_data",JSON.stringify(haircare_data));

// *****************************************************************************************


