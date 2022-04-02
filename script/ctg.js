let arr = [
  ["Skincare"],
  [
    {
      image1: "https://a.cdnsbn.com/images/products/250/23141000007.jpg",
      image2: "https://a.cdnsbn.com/images/products/msn/23141000007-1.jpg",
      image3: "https://a.cdnsbn.com/images/products/msn/23141000007-2.jpg",
      title: "Marvis",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      price: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
      quant: 1,
    },
    {
      image1: "https://a.cdnsbn.com/images/products/250/24714281301.jpg",
      image2: "https://a.cdnsbn.com/images/products/msn/24714281301-1.jpg",
      image3: "https://a.cdnsbn.com/images/products/msn/24714281301-2.jpg",
      title: "Timeless Skin Care",
      desc: "20% Vitamin C Serum + Vitamin E + Ferulic Acid",
      size: "Size: 30ml/1oz",
      save: "SAVE 19%",
      price: 2034.0,
      strikedprice: "2,112.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
      quant: 1,
    },
    {
      image1: "https://a.cdnsbn.com/images/products/250/20079465901.jpg",
      image2: "https://a.cdnsbn.com/images/products/msn/20079465901-1.jpg",
      image3: "https://a.cdnsbn.com/images/products/msn/20079465901-1.jpg",
      title: "EltaMD",
      desc: "UV Clear Facial Sunscreen SPF 46 - For Skin Types Prone To Acne, Rosacea & Hyperpigmentation",
      size: "Size: 48g/1.7oz ",
      save: "SAVE 19%",
      price: 3364.0,
      strikedprice: "3864.0",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★★",
      quant: 1,
    },
    {
      image1: "https://a.cdnsbn.com/images/products/250/16305336601.jpg",
      image2: "https://a.cdnsbn.com/images/products/msn/16305336601-1.jpg",
      image3: "https://a.cdnsbn.com/images/products/msn/16305336601-2.jpg",
      title: "Embryolisse",
      desc: "Lait Creme Concentrate (24-Hour Miracle Cream)",
      size: "Size: 75ml/2.6oz ",
      save: "SAVE 19%",
      price: 1995.0,
      strikedprice: "2,190.50",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
      quant: 1,
    },
    {
      image1: "https://b.cdnsbn.com/images/products/250/26990380301.jpg",
      image2: "https://a.cdnsbn.com/images/products/msn/26990380301-1.jpg",
      image3: "https://a.cdnsbn.com/images/products/msn/26990380301-2.jpg",
      title: "Clarins",
      desc: "Double Serum Eye (Hydrolipidic System) Global Age Control Concentrate",
      size: "Size: 20ml/0.6oz ",
      save: "SAVE 19%",
      price: 5867.0,
      strikedprice: "6,023.50",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
      quant: 1,
    },

    {
      image1: "https://b.cdnsbn.com/images/products/250/21495880501.jpg",
      image2: "https://a.cdnsbn.com/images/products/msn/21495880501-1.jpg",
      image3: "https://a.cdnsbn.com/images/products/msn/21495880501-2.jpg",
      title: "Elizabeth Arden",
      desc: "Advanced Ceramide Capsules Daily Youth Restoring Eye Serum",
      size: "Size: 60caps",
      save: "SAVE 10%",
      price: 4420.0,
      strikedprice: "4,928.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
      quant: 1,
    },
    {
      image1: "https://a.cdnsbn.com/images/products/msn/17975043503.jpg",
      image2: "https://a.cdnsbn.com/images/products/msn/17975043503-1.jpg",
      image3: "https://a.cdnsbn.com/images/products/msn/17975043503-2.jpg",
      title: "3W Clinic",
      desc: "Hand Cream - Snail",
      size: "Size: 100ml/3.38oz",
      save: "Save: 38%",
      price: 313.0,
      strikedprice: "508.50.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★☆☆",
      quant: 1,
    },
  ],
];

function getdata(
  image1,
  image2,
  image3,
  title,
  desc,
  size,
  save,
  price,
  strikedprice,
  extraof,
  rating,
  quant
) {
  this.image1 = image1;
  this.image2 = image2;
  this.image3 = image3;
  this.title = title;
  this.desc = desc;
  this.size = size;
  this.save = save;
  this.price = price;
  this.strikedprice = strikedprice;
  this.extraof = extraof;
  this.rating = rating;
  this.quant = quant;
}

let d1 = new getdata(
  "https://d.cdnsbn.com/images/products/250/23802077203.jpg",
  "https://a.cdnsbn.com/images/products/msn/23802077203-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/23802077203-2.jpg",
  "KISS ME",
  "Medicated Hand Cream",
  "Size: 75g/2.6oz",
  "Save: 25%",
  469.0,
  "626.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  1
);
let d2 = new getdata(
  "https://b.cdnsbn.com/images/products/250/25682680401.jpg",
  "https://a.cdnsbn.com/images/products/msn/25682680401-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/25682680401-2.jpg",
  "CLINIQUE",
  "Moisture Surge 72-Hour Auto-Replenishing Hydrator (Limited Edition)",
  "Size: 75ml/2.5oz",
  "Save: 21%",
  3324.0,
  "4,224.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d3 = new getdata(
  "https://c.cdnsbn.com/images/products/250/23802177203.jpg",
  "https://a.cdnsbn.com/images/products/msn/23802177203-1.jpg",
  "",
  "KISS ME",
  "Medicated Hand Cream",
  "Size: 65g/2.2oz",
  "Save: 14%",
  469.0,
  "548.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let d4 = new getdata(
  "https://c.cdnsbn.com/images/products/250/21495580301.jpg",
  "https://a.cdnsbn.com/images/products/msn/21495580301-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/21495580301-2.jpg",
  "CLARINS",
  "Double Serum (Hydric + Lipidic System) Complete Age Control Concentrate",
  "Size: 30ml/1oz ",
  "Save: 14%",
  7588.0,
  "8,588.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let d5 = new getdata(
  "https://d.cdnsbn.com/images/products/250/04873792001.jpg",
  "https://a.cdnsbn.com/images/products/msn/04873792001-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/04873792001-1.jpg",
  "DR. HAUSCHKA",
  "Lip Care Stick",
  "Size: 4.9g/0.16oz ",
  "Save: 17%",
  978.0,
  "1,173.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d6 = new getdata(
  "https://d.cdnsbn.com/images/products/250/20457342003.jpg",
  "https://a.cdnsbn.com/images/products/msn/20457342003-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/20457342003-2.jpg",
  "MARIO BADESCU",
  "A.H.A. Botanical Body Soap - For All Skin Types",
  "Size: 236ml/8oz ",
  "Save: 10%",
  900.0,
  "1200.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let d7 = new getdata(
  "https://a.cdnsbn.com/images/products/msn/11930580303.jpg",
  "https://a.cdnsbn.com/images/products/msn/11930580303-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/11930580303-1.jpg",
  "CLARINS",
  "Gentle Care Roll On Deodorant",
  "Size: 50ml/1.7oz",
  "Save: 10%",
  1995.0,
  "2,200.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let d8 = new getdata(
  "https://a.cdnsbn.com/images/products/250/08070680901.jpg",
  "https://a.cdnsbn.com/images/products/msn/08070680901-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/08070680901-2.jpg",
  "LANCOME",
  "Mousse Eclat Express Clarifying Self-Foaming Cleanser",
  "Size: 200ml/6.7oz",
  "",
  2699.0,
  "2,999.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d9 = new getdata(
  "https://b.cdnsbn.com/images/products/250/22665196301.jpg",
  "https://a.cdnsbn.com/images/products/msn/22665196301-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/22665196301-2.jpg",
  "Skin Ceuticals",
  "C E Ferulic High Potency Triple Antioxidant Treatment",
  "Size: 30ml/1oz",
  "",
  14432.0,
  "16,432.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d10 = new getdata(
  "https://b.cdnsbn.com/images/products/250/18677708101.jpg",
  "https://a.cdnsbn.com/images/products/msn/18677708101-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/18677708101-2.jpg",
  "LA ROCHE POSAY",
  "Cicaplast Baume B5 Soothing Repairing Balm",
  "Size: 100ml/3.3oz ",
  "Save: 15%",
  1995.0,
  "2,347.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let d11 = new getdata(
  "https://b.cdnsbn.com/images/products/250/01348880501.jpg",
  "https://a.cdnsbn.com/images/products/msn/01348880501-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/01348880501-2.jpg",
  "ELIZABETH ARDEN",
  "Eight Hour Lipcare Stick",
  "Size: 3.7g/0.13oz ",
  "Save: 40%",
  1134.0,
  "1,877.50",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);

let d12 = new getdata(
  "https://c.cdnsbn.com/images/products/250/18677808101.jpg",
  "https://a.cdnsbn.com/images/products/msn/18677808101-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/18677808101-2.jpg",
  "La Roche Posay",
  "Cicaplast Baume B5 Soothing Repairing Balm ",
  "40ml/1.35oz",
  "",
  1730.0,
  "",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d13 = new getdata(
  "https://c.cdnsbn.com/images/products/250/20621976701.jpg",
  "https://a.cdnsbn.com/images/products/msn/20621976701-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/20621976701-2.jpg",
  "Biotherm",
  "Biosource 24H Hydrating & Tonifying Toner - For Normal/Combinatio",
  "400ml/13.52oz",
  "SAVE 14%",
  2347.0,
  "2,738.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d14 = new getdata(
  "https://c.cdnsbn.com/images/products/250/23954980501.jpg",
  "https://a.cdnsbn.com/images/products/msn/23954980501-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/23954980501-2.jpg",
  "Elizabeth Arden",
  "Ceramide Retinol Capsules - Line Erasing Night Serum ",
  " 60 Caps",
  "SAVE 15%",
  5554.0,
  "6,805.50",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let d15 = new getdata(
  "https://c.cdnsbn.com/images/products/250/17974943503.jpg",
  "https://a.cdnsbn.com/images/products/msn/23954980501-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/17974943503-2.jpg",
  "3W Clinic",
  "Hand Cream - Collagen ",
  "100ml/3.38oz",
  "SAVE 38%",
  313.0,
  "508.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d16 = new getdata(
  "https://d.cdnsbn.com/images/products/250/03191321601.jpg",
  "https://a.cdnsbn.com/images/products/msn/17974943503-2.jpg",
  "https://a.cdnsbn.com/images/products/msn/17974943503-2.jpg",
  "Dermalogica",
  "UltraCalming Cleanser",
  "500ml/16.9oz",
  "SAVE 10%",
  4498.0,
  "5,006.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d17 = new getdata(
  "https://d.cdnsbn.com/images/products/250/01347880501.jpg",
  "https://a.cdnsbn.com/images/products/msn/20789765901-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/20789765901-2.jpg",
  "EltaMD",
  "UV Clear Facial Sunscreen SPF 46 - For Skin Types Prone To Acne, Rosa",
  "48g/1.7oz",
  "SAVE 35%",
  2777.0,
  "4,302.50",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let d18 = new getdata(
  "https://d.cdnsbn.com/images/products/250/01312680303.jpg",
  "",
  "",
  "Elizabeth Arden",
  "Visible Difference Refining Moisture Cream Complex",
  "75ml/2.5oz",
  "",
  4302.0,
  "5,241.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d22 = new getdata(
  "https://d.cdnsbn.com/images/products/250/17087308201.jpg",
  "https://a.cdnsbn.com/images/products/msn/20789765901-2.jpg",
  "https://a.cdnsbn.com/images/products/msn/01347880501-2.jpg",
  "Clarins",
  "Body Treatment Oil-Tonic ",
  "100ml/3.3oz",
  "SAVE 18%",
  4654.0,
  "5,397.50",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let d19 = new getdata(
  "https://a.cdnsbn.com/images/products/250/20789765901.jpg",
  "https://a.cdnsbn.com/images/products/msn/01347880501-2.jpg",
  "",
  "Clinique",
  "Re-Boost Comforting Hydrating Cream - For Dry & Sensitiv",
  "50ml/1.7oz",
  "SAVE 14%",
  3637.0,
  "4,200.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let d20 = new getdata(
  "https://a.cdnsbn.com/images/products/250/17727242001.jpg",
  "https://a.cdnsbn.com/images/products/msn/25353480401-2.jpg",
  "",
  "Obagi",
  "BAGI360 Retinol ",
  "0.5 30ml/1oz",
  "",
  1799.0,
  "",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e24 = new getdata(
  "https://c.cdnsbn.com/images/products/250/26413580003.jpg",
  "https://a.cdnsbn.com/images/products/msn/23582480001-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/23582480001-2.jpg",
  "Borghese",
  "Energia Vitamin E Antioxidant Creme ",
  "28g/1oz",
  "SAVE 2%",
  4772.0,
  "4,850.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
  
);

// ------------------------------------------------------111Skin----------------------------------

let c0 = new getdata(
  "https://a.cdnsbn.com/images/products/250/26665493301.jpg",
  "",
  "",
  "111Skin",
  " Black Diamond Eye Mask",
  "8x6ml/0.2oz",
  "SAVE 15%",
  7666.0,
  "8,995.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let c1 = new getdata(
  "https://a.cdnsbn.com/images/products/250/26665693301.jpg",
  "",
  "",
  "111Skin",
  " Black Diamond Lifting & Firming Treatment Mask",
  "31ml/1.04oz",
  "SAVE 14%",
  2347.0,
  "2,738.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let c2 = new getdata(
  "https://a.cdnsbn.com/images/products/250/27121193301.jpg",
  "",
  "",
  "111Skin",
  "Antioxidant Energising Essence ",
  "100ml/3.4oz",
  "SAVE 12%",
  6649.0,
  "7,822.50",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let c3 = new getdata(
  "https://a.cdnsbn.com/images/products/250/26665393301.jpg",
  "",
  "",
  "111Skin",
  "Celestial Black Diamond Contour Gel ",
  "15ml/0.5oz",
  "SAVE 10%",
  9308.0,
  "10,951.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let c4 = new getdata(
  "https://b.cdnsbn.com/images/products/250/26783093301.jpg",
  "",
  "",
  "111Skin",
  "The Firming Concentrate",
  "7x2ml/0.07oz",
  "SAVE 15%",
  13063.0,
  "14,862.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let c5 = new getdata(
  "https://b.cdnsbn.com/images/products/250/27127093301.jpg",
  "",
  "",
  "111Skin",
  "Vitamin C Brightening Cleanser ",
  "120ml/4.06oz",
  "SAVE 15%",
  5319.0,
  "6,258.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let c6 = new getdata(
  "https://b.cdnsbn.com/images/products/250/26783193301.jpg",
  "",
  "",
  "111Skin",
  "Cryo Activating Hydra Gel",
  "45ml/1.52oz",
  "SAVE 30%",
  12515.0,
  "15,644.50",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let c7 = new getdata(
  "https://b.cdnsbn.com/images/products/250/26664693301.jpg",
  "",
  "",
  "111Skin",
  "Hyaluronic Acid Aqua Booster",
  "20ml/0.68oz",
  "SAVE 30%",
  8995.0,
  "10,560.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let c8 = new getdata(
  "https://c.cdnsbn.com/images/products/250/26664993301.jpg",
  "",
  "",
  "111Skin",
  "Rose Gold Radiance Booster ",
  "20ml/0.68oz",
  "SAVE 25%",
  8995.0,
  "10,560.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let c9 = new getdata(
  "https://c.cdnsbn.com/images/products/250/26782493301.jpg",
  "",
  "",
  "111Skin ",
  "The Hydration Concentrate 7",
  "x2ml/0.07oz",
  "SAVE 12%",
  12046.0,
  "13,689.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let c10 = new getdata(
  "https://c.cdnsbn.com/images/products/250/26666493314.jpg",
  "",
  "",
  "111Skin",
  "The Master-Masking Planner ",
  "(4x Eye Mask + 4) 8pcs+1case",
  "SAVE 25%",
  10560.0,
  "12,672.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let c11 = new getdata(
  "https://c.cdnsbn.com/images/products/250/26782593301.jpg",
  "",
  "",
  "111Skin ",
  "The Radiance Concentrate ",
  "7x2ml/0.07oz",
  "SAVE 15%",
  12046.0,
  "13,689.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
arr[1].push(
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d8,
  d9,
  d10,
  d11,
  d12,
  d13,
  d14,
  d15,
  d16,
  d17,
  d18,
  d19,
  d20,
  e24
);
let brand11arr = [];
brand11arr.push(c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11);

let aradata = arr[1];

let shodata = (aradata) => {
  let arr2 = JSON.parse(localStorage.getItem("cart_item")) || [];

  document.querySelector("#crt_count_of_prod").innerText = aradata.length;

  let parofappend = document.querySelector("#crt_parrentforappendingdata");

  parofappend.innerHTML = "";

  aradata.forEach((elem) => {
    let div = document.createElement("div");
    div.id = "crt_subcontain";

    let wishdiv = document.createElement("div");
    wishdiv.id = "crt_addtowish";

    let wishsym = document.createElement("input");
    wishsym.type = "checkbox";

    wishsym.id = "crt_wishchechbox";

    wishdiv.append(wishsym);

    let pname = document.createElement("p");
    pname.innerText = elem.title;
    pname.id = "crt_p_titile";
    pname.addEventListener("click", () => {
      tempsavetodesc(elem);
    });

    let descsizediv = document.createElement("div");
    let descc = document.createElement("p");
    descc.innerText = elem.desc;
    descc.id = "crt_p_decriptin";
    descc.addEventListener("click", () => {
      tempsavetodesc(elem);
    });

    let sizep = document.createElement("span");
    sizep.innerText = elem.size;
    sizep.id = "crt_p_size";
    sizep.addEventListener("click", () => {
      tempsavetodesc(elem);
    });

    descsizediv.id = "crt_descsizecomdiv";
    descsizediv.append(descc, sizep);
    let savep = document.createElement("p");
    savep.innerText = elem.save;
    savep.id = "crt_p_save";
    savep.addEventListener("click", () => {
      tempsavetodesc(elem);
    });

    let unit = document.createElement("span");
    unit.innerText = "Rs";

    let pricep = document.createElement("p");
    let calprice = elem.price;
    calprice = calprice.toFixed(2);

    pricep.innerText = `Rs .${calprice}`;
    pricep.id = "crt_p_price";
    pricep.addEventListener("click", () => {
      tempsavetodesc(elem);
    });

    let striked = document.createElement("div");
    striked.id = "crt_p_strikeddiv";
    striked.addEventListener("click", () => {
      tempsavetodesc(elem);
    });
    let spanforrp = document.createElement("p");
    spanforrp.innerText = `RRP`;
    spanforrp.id = "crt_p_rrpinitilize";
    let strikedp = document.createElement("span");
    strikedp.innerText = `Rs ${elem.strikedprice}`;
    strikedp.id = "crt_p_strikedp";
    striked.append(spanforrp, strikedp);

    let btnrtndiv = document.createElement("div");
    btnrtndiv.id = "crt_p_btnrtngsxtrp";

    let ratingp = document.createElement("p");
    ratingp.innerText = elem.rating;
    ratingp.id = "crt_p_ratingstar";

    let proimg = document.createElement("img");
    proimg.src = elem.image1;
    proimg.id = "crt_productimage";
    proimg.addEventListener("click", () => {
      tempsavetodesc(elem);
    });

    let extp = document.createElement("p");
    extp.innerText = elem.extraof;
    extp.id = "crt_p_sxtrofp";

    let addtocartbutn = document.createElement("button");
    addtocartbutn.innerText = "Add to Bag";
    addtocartbutn.id = "crt_addbtn";
    addtocartbutn.addEventListener("click", () => {
      adtocartfunc(elem);
    });
    btnrtndiv.append(addtocartbutn, ratingp, extp);
    div.append(
      wishsym,
      proimg,
      pname,
      descsizediv,
      savep,
      pricep,
      striked,
      btnrtndiv
    );
    parofappend.append(div);
  });

  document.querySelector("#crt_popularityfilter").addEventListener("change",()=>{
    sorting();
  })
  let sorting =()=>{
   let selval = document.querySelector("#crt_popularityfilter").value;
    console.log(selval)
    if(selval=="LOWEST PRICE"){
      aradata.sort(function (a,b){
        return a.price-b.price;
      })
      shodata(aradata)
    }
    else if (selval=="BRAND: A-Z"){
      aradata.sort((a, b) => a.title < b.title ? -1 : (a.title > b.title ? 1 : 0))

      // })
      shodata(aradata)
    }
  }

};
shodata(aradata);

let adtocartfunc = (elem) => {
  let arr2 = JSON.parse(localStorage.getItem("cart_item")) || [];
  let flag = true;
  console.log(arr);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].title === elem.title) {
      flag = false;
    }
  }
  if (flag === true) {
    arr2.push(elem);
    localStorage.setItem("cart_item", JSON.stringify(arr2));
    document.querySelector("#crt_counter").innerText = arr2.length;
  }
};
let tempsavetodesc = (elem) => {
  let arr2 = [];
  arr2.push(elem);

  console.log(arr2);
  localStorage.setItem("tempiteam", JSON.stringify(arr2));
  window.location.href = "./PRODUCT DESCRIPTION/1marvis.html";
};

document.querySelector(".skin11").addEventListener("input", () => {
  document.querySelector(".crt_Borghese").checked = false;
  show111skin();
});

let show111skin = () => {
  shodata(brand11arr);
  document.querySelector("#crt_count_of_prod").innerText = brand11arr.length;
  console.log("hhfgfhfgfgfddddddd");
};

let e12 = new getdata(
  "https://a.cdnsbn.com/images/products/250/04351980001.jpg",
  "",
  "",
  "Borghese",
  "Fango Brillants (Brightening Mud Mask Face & Body)",
  "430ml/17.6oz",
  "SAVE 75%",
  1956.0,
  "7,822.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e13 = new getdata(
  "https://a.cdnsbn.com/images/products/250/23577880001.jpg",
  "",
  "",
  "Borghese",
  "fango Delicato Active Mud - For Delicate Dry Skin ",
  "212g/7.5oz",
  "SAVE 29%",
  2777.0,
  "3,911.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e14 = new getdata(
  "https://a.cdnsbn.com/images/products/250/23578080001.jpg",
  "",
  "",
  "Borghese",
  "Fango Ristorativo Hydrating Mud Mask For Face And Body ",
  "212g/7.5oz",
  "SAVE 65%",
  1604.0,
  "4,537.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e15 = new getdata(
  "https://a.cdnsbn.com/images/products/250/23577980001.jpg",
  "",
  "",
  "Borghese",
  "Fango Brillante Brightening Mud Mask ",
  "212g/7.5oz",
  "SAVE 70%",
  1369.0,
  "4,537.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e16 = new getdata(
  "https://b.cdnsbn.com/images/products/250/25035580001.jpg",
  "",
  "",
  "Borghese",
  "eFango Active Mud For Face & Body ",
  "76g/2.7oz",
  "SAVE 35%",
  1017.0,
  "1,564.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e17 = new getdata(
  "https://b.cdnsbn.com/images/products/250/16676780003.jpg",
  "",
  "",
  "Borghese",
  "Hydro-Minerali Deluxe Age Control Body Serum ",
  "100ml/3.4oz",
  "SAVE 70%",
  1252.0,
  "4,224.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);

let e18 = new getdata(
  "https://b.cdnsbn.com/images/products/250/23578580001.jpg",
  "",
  "",
  "Borghese",
  "Fango Essenziali Moisturize Mud Mask with Olive & Blood Orange ",
  "198g/7oz ",
  "SAVE 64%",
  1017.0,
  "2,816.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);

let e19 = new getdata(
  "https://d.cdnsbn.com/images/products/250/23582480001.jpg",
  "",
  "",
  "Borghese",
  "Fango Essenziali Purify Mud Mask with Grapefruit & Peppercorn ",
  "198g/7oz",
  "SAVE 64%",
  1017.0,
  "2,816.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e20 = new getdata(
  "https://b.cdnsbn.com/images/products/250/23578480001.jpg",
  "",
  "",
  "Borghese",
  "Fango Purificante Purifying Mud Mask ",
  "141g/5oz",
  "SAVE 59%",
  1604.0,
  "3,911.50",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e21 = new getdata(
  "https://c.cdnsbn.com/images/products/250/23578180001.jpg",
  "",
  "",
  "Borghese",
  "Hydro-Minerali Deluxe Age Control Lift Serum ",
  "40ml/1.4oz",
  "SAVE 25%",
  5945.0,
  "979.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e22 = new getdata(
  "https://c.cdnsbn.com/images/products/250/16676580001.jpg",
  "",
  "",
  "Borghese",
  "Fango Essenziali Calm Mud Mask with Lavender & Lemon Seed ",
  "198g/7oz",
  "SAVE 58%",
  1173.0,
  "2,816.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let e23 = new getdata(
  "https://c.cdnsbn.com/images/products/250/23578380001.jpg",
  "",
  "",
  "Borghese",
  "Splendide Mani Restorative Hand Creme",
  "96g/3.4oz",
  "SAVE 25%",
  2073.0,
  "2,816.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
let Borghesearr = [];
Borghesearr.push(e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23);
document.querySelector(".crt_Borghese").addEventListener("input", () => {
  document.querySelector(".skin11").checked = false;
  Borghe();
});
document.querySelector("#crticonnamearrnging").addEventListener("click",()=>{
  showdataingridformat()
})
// document.querySelector(".LowPricePicks").addEventListener()  
// .style.backgroundcolor="black"
// let showdataingridformat =()=>{
//    let sssssss = document.querySelector("#crt_parrentforappendingdata")
//   //  sssssss.style.display = "flex";
//   //  sssssss.style.direction="column";
//   //  flexdirection: column;
// }
let Borghe = () => {
  shodata(Borghesearr);
};

let v0 = new getdata(
  "https://a.cdnsbn.com/images/products/250/27448495762.jpg",
  "",
  "",
  "Clinique",
  "Purifying Cleansing Brush for Sonic System ",
  "1pc",
  "SAVE 2%",
  2229.0,
  "2,629.0",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);

let v1 = new getdata(
  "https://a.cdnsbn.com/images/products/250/19273780409.jpg",
  "",
  "",
  "Timeless Skin Care ",
  "Mirco Needle Roller   ",
  "1.0mm",
  "SAVE 2%",
  821.0,
  "860.50",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v2 = new getdata(
  "https://a.cdnsbn.com/images/products/250/22322281401.jpg",
  "",
  "",
  "Shiseido ",
  "oil Control Blotting Paper ",
  "100sheets",
  "",
  1564.0,
  "",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);

let v3 = new getdata(
  "https://b.cdnsbn.com/images/products/250/25697189909.jpg",
  "",
  "",
  "Stacked Skincare  1pc ",
  "Dermaplaning Tool ",
  "1pc",
  "",
  6453.5,
  "",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v4 = new getdata(
  "https://b.cdnsbn.com/images/products/250/25697189909.jpg",
  "",
  "",
  "Timeless Skin Care ",
  "Mirco Needle Roller  ",
  " 0.5mm",
  "",
  782.0,
  "",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v5 = new getdata(
  "https://b.cdnsbn.com/images/products/250/25301081309.jpg",
  "",
  "",
  "Tweezerman ",
  "Blackhead Extractor (Studio Collection) ",
  "1pc",
  "",
  1330.0,
  "",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v6 = new getdata(
  "https://b.cdnsbn.com/images/products/250/24423930009.jpg",
  "",
  "",
  "Chanel ",
  "Papier Matifiant ",
  "150sheets",
  "",
  3012.0,
  "",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v7 = new getdata(
  "https://b.cdnsbn.com/images/products/250/02554080209.jpg ",
  "",
  "",
  "Obagi ",
  "SUZANOBAGIMD Acne Cleansing Wipes ",
  "25wipes",
  "SAVE 14%",
  1486.0,
  "1,721.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v8 = new getdata(
  "https://c.cdnsbn.com/images/products/250/26611808209.jpg",
  "",
  "",
  "MZ Skin ",
  "Tone & Lift Germanium Contouring Facial Roller ",
  "1pc+bag",
  "SAVE 4%",
  4772.0,
  "6,649.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v9 = new getdata(
  "https://c.cdnsbn.com/images/products/250/26955494209.jpg",
  "",
  "",
  "Tweezerman ",
  "Clear Complexion Facial Tool ",
  "1pc",
  "SAVE 2%",
  1056.0,
  "1,095.50",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v10 = new getdata(
  "https://c.cdnsbn.com/images/products/250/22594230009.jpg",
  "",
  "",
  "Fenty Beauty by Rihanna ",
  "Invisimatte Blotting Paper Refill",
  "1roll",
  "",
  900.0,
  "",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);
let v11 = new getdata(
  "https://c.cdnsbn.com/images/products/250/27183579109.jpg",
  "",
  "",
  "YHLOGLINE",
  "2019-nCoV Ag COVID-19 Self-Testing Kit 5 Test",
  "5 Test",
  "SAVE 2%",
  4772.0,
  "5,867.00",
  "Extra 8% Off The Entire Site",
  "★★★★★"
);

let ToolsAccessoriesarr = [];
ToolsAccessoriesarr.push(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11);

document.querySelector(".crt_ToolsA").addEventListener("click", () => {
  ToolsAcces();
});

let ToolsAcces = () => {
  shodata(ToolsAccessoriesarr);
  // document.querySelector("#crt_count_of_prod").innerText = Borghesearr.length;
  // console.log("hhfgfhfgfgfddddddd");
};


import { navbar, footer } from "../components/header.js";

document.querySelector("#crt_navbar").innerHTML = navbar();
document.querySelector("#crt_fotter").innerHTML = footer();
