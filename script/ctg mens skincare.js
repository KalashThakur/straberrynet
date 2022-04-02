function getdata(
  url,
  name,
  description,
  price,
  extraof,
  rating,
  size,
  strikedprice,
  url1,
  url2,
  save,
  quant
) {
  this.image1 = url;
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

let d1 = new getdata(
  "https://a.cdnsbn.com/images/products/250/10057281421.jpg",
  "Shiseido",
  "Men Cleansing Foam 125ml/4.2oz",
  2151.5,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 125ml/4.2oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10057281421.jpg",
  "https://a.cdnsbn.com/images/products/10057281421-1.jpg",
  "Save: 12%",
  1
);
let d2 = new getdata(
  "https://a.cdnsbn.com/images/products/250/23695580321.jpg",
  "Clarins",
  "Men Super Moisture Gel (New Packaging) 50ml/1.7oz",
  3051.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.7oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/23695580321-1.jpg",
  "https://a.cdnsbn.com/images/products/23695580321-2.jpg",
  "Save: 10%",
  1
);
let d3 = new getdata(
  "https://a.cdnsbn.com/images/products/250/23695480321.jpg",
  "Clarins",
  "Men Super Moisture Balm (New Packaging) 50ml/1.6oz",
  3051.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.6oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/23695480321-1.jpg",
  "https://a.cdnsbn.com/images/products/23695480321-2.jpg",
  "Save: 11%",
  1
);
let d4 = new getdata(
  "https://a.cdnsbn.com/images/products/250/14461280321.jpg",
  "Clarins",
  "Men Exfoliating Cleanser 125ml/4.4oz",
  1995.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 125ml/4.4oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/14461280321-1.jpg",
  "https://a.cdnsbn.com/images/products/14461280321-2.jpg",
  "Save: 6%",
  1
);
let d5 = new getdata(
  "https://b.cdnsbn.com/images/products/250/10217380321.jpg",
  "Clarins",
  "Men After Shave Energizer 100ml/3.4oz",
  2738.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 100ml/3.4oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10217380321-1.jpg",
  "https://a.cdnsbn.com/images/products/10217380321-2.jpg",
  "Save: 8%",
  1
);
let d6 = new getdata(
  "https://b.cdnsbn.com/images/products/250/10044280321.jpg",
  "Clarins",
  "Men Line-Control Balm 50ml/1.7oz",
  4576.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.7oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10044280321-1.jpg",
  "https://a.cdnsbn.com/images/products/10044280321-2.jpg",
  "Save: 3%",
  1
);

let d7 = new getdata(
  "https://b.cdnsbn.com/images/products/250/10057481421.jpg",
  "Shiseido",
  "Men Hydrating Lotion 150ml/5oz",
  2855.5,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 150ml/5oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10057481421-1.jpg",
  "https://a.cdnsbn.com/images/products/10057481421-2.jpg",
  "Save: 7%",
  1
);
let d8 = new getdata(
  "https://b.cdnsbn.com/images/products/250/18844676721.jpg",
  "Biotherm",
  "Homme Aquapower 72H Concentrated Glacial Hydrator 50ml/1.69oz",
  3989.5,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.69oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/18844676721-1.jpg",
  "https://a.cdnsbn.com/images/products/18844676721-2.jpg",
  "Save: 2%",
  1
);
let d9 = new getdata(
  "https://c.cdnsbn.com/images/products/250/10031180321.jpg",
  "Clarins",
  "Men Active Face Wash 125ml/4.4oz",
  1760.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 125ml/4.4oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10031180321-1.jpg",
  "https://a.cdnsbn.com/images/products/10031180321-2.jpg",
  "Save: 12%",
  1
);
let d10 = new getdata(
  "https://c.cdnsbn.com/images/products/250/16822181421.jpg",
  "Shiseido",
  "Men Total Revitalizer Eye 15ml/0.53oz",
  4107.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 15ml/0.53oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/16822181421-1.jpg",
  "https://a.cdnsbn.com/images/products/16822181421-2.jpg",
  "Save: 12%",
  1
);

let d11 = new getdata(
  "https://c.cdnsbn.com/images/products/250/24330580421.jpg",
  "Clinique",
  "Maximum Hydrator 72-Hour Auto-Replenishing Hydrator 50ml/1.7oz",
  3481.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.7oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/24330580421-1.jpg",
  "https://a.cdnsbn.com/images/products/24330580421-2.jpg",
  "Save: 15%",
  1
);
let d12 = new getdata(
  "https://c.cdnsbn.com/images/products/250/20485676721.jpg",
  "Biotherm",
  "Homme Day Control Extreme Protection 72H Non-Stop Antiperspirant",
  2308.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.8oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/20485676721-1.jpg",
  "https://a.cdnsbn.com/images/products/20485676721-2.jpg",
  "Save: 21%",
  1
);

let d13 = new getdata(
  "https://d.cdnsbn.com/images/products/250/10046180321.jpg",
  "Clarins",
  "Men Anti Perspirant 50ml/1.7oz",
  1682.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.7oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10046180321-1.jpg",
  "https://a.cdnsbn.com/images/products/10046180321-2.jpg",
  "Save: 14%",
  1
);
let d14 = new getdata(
  "https://d.cdnsbn.com/images/products/250/10968228621.jpg",
  "Kiehl's",
  "Facial Fuel Energizing Moisture Treatment For Men 125ml/4.2oz",
  3559.5,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 125ml/4.2oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10968228621-1.jpg",
  "https://a.cdnsbn.com/images/products/10968228621-2.jpg",
  "Save: 8%",
  1
);
let d15 = new getdata(
  "https://d.cdnsbn.com/images/products/250/10063176721.jpg",
  "Biotherm",
  "Homme Aquatic After Shave Lotion (Normal Skin) 200ml/6.76oz",
  3051.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 200ml/6.76oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10063176721-1.jpg",
  "https://a.cdnsbn.com/images/products/10063176721-2.jpg",
  "Save: 8%",
  1
);
let d16 = new getdata(
  "https://d.cdnsbn.com/images/products/250/13424776721.jpg",
  "Biotherm",
  "Homme T-Pur Clay-Like Unclogging Purifying Cleanser 125ml/4.22oz",
  2464.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 125ml/4.22oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/13424776721-1.jpg",
  "https://a.cdnsbn.com/images/products/13424776721-2.jpg",
  "Save: 12%",
  1
);

let d17 = new getdata(
  "https://a.cdnsbn.com/images/products/250/18107076721.jpg",
  "Biotherm",
  "Homme Force Supreme Eye Architect Serum 15ml/0.5oz",
  4772.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 15ml/0.5oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/18107076721-1.jpg",
  "https://a.cdnsbn.com/images/products/18107076721-2.jpg",
  "Save: 8%",
  1
);
let d18 = new getdata(
  "https://a.cdnsbn.com/images/products/250/20485576721.jpg",
  "Biotherm",
  "Homme Day Control Protection 48H Non-Stop Antiperspirant 75ml/2.53oz",
  2308.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 75ml/2.53oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/20485576721-1.jpg",
  "https://a.cdnsbn.com/images/products/20485576721-2.jpg",
  "Save: 6%",
  1
);
let d19 = new getdata(
  "https://a.cdnsbn.com/images/products/250/13687699921.jpg",
  "Jack Black",
  "Double Duty Face Moisturizer SPF 20 251ml/8.5oz",
  4185.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size:251ml/8.5oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/13687699921-1.jpg",
  "https://a.cdnsbn.com/images/products/13687699921-2.jpg",
  "Save: 2%",
  1
);
let d20 = new getdata(
  "https://a.cdnsbn.com/images/products/250/10047076721.jpg",
  "Biotherm",
  "Homme Toning Cleansing Gel (Normal Skin) 150ml/5.07oz",
  2660.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 150ml/5.07oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10047076721.jpg",
  "https://a.cdnsbn.com/images/products/10047076721.jpg",
  "Save: 12%",
  1
);
let d21 = new getdata(
  "https://b.cdnsbn.com/images/products/250/10217580321.jpg",
  "Clarins",
  "Men After Shave Soother 75ml/2.7oz",
  2738.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 75ml/2.7oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/10217580321-1.jpg",
  "https://a.cdnsbn.com/images/products/10217580321-2.jpg",
  "Save: 10%",
  1
);
let d22 = new getdata(
  "https://b.cdnsbn.com/images/products/250/11723628621.jpg",
  "Kiehl's",
  "Facial Fuel Energizing Moisture Treatment For Men 75ml/2.5oz",
  2855.5,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 75ml/2.5oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/11723628621-1.jpg",
  "https://a.cdnsbn.com/images/products/11723628621-2.jpg",
  "Save: 12%",
  1
);
let d23 = new getdata(
  "https://b.cdnsbn.com/images/products/250/14045880421.jpg",
  "Clinique",
  "Anti-Age Moisturizer 100ml/3.4oz",
  4459.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 100ml/3.4oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/14045880421-1.jpg",
  "https://a.cdnsbn.com/images/products/14045880421-2.jpg",
  "Save: 2%",
  1
);
let d24 = new getdata(
  "https://b.cdnsbn.com/images/products/250/26162681421.jpg",
  "Shiseido",
  "Men Energizing Moisturizer Extra Light Fluid 100ml/3.3oz",
  4185.0,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 100ml/3.3oz",
  "1,054.00",
  "https://a.cdnsbn.com/images/products/26162681421-1.jpg",
  "https://a.cdnsbn.com/images/products/26162681421-2.jpg",
  "Save: 12%",
  1
);

menSkincare_data.push(
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
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
  d21,
  d22,
  d23,
  d24
);

// localStorage.setItem("haircare_data",JSON.stringify(haircare_data));

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
// arr[1].push(
//   d1,
//   d2,
//   d3,
//   d4,
//   d5,
//   d6,
//   d8,
//   d9,
//   d10,
//   d11,
//   d12,
//   d13,
//   d14,
//   d15,
//   d16,
//   d17,
//   d18,
//   d19,
//   d20,
//   d24
// );
let brand11arr = [];
// brand11arr.push(c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11);

let aradata = menSkincare_data;

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
    wishsym.addEventListener("input", () => {
      addthisproductstowishlist(elem);
    });

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

  document
    .querySelector("#crt_popularityfilter")
    .addEventListener("change", () => {
      sorting();
    });
  let sorting = () => {
    let selval = document.querySelector("#crt_popularityfilter").value;
    console.log(selval);
    if (selval == "LOWEST PRICE") {
      aradata.sort(function (a, b) {
        return a.price - b.price;
      });
      shodata(aradata);
    } else if (selval == "BRAND: A-Z") {
      aradata.sort((a, b) =>
        a.title < b.title ? -1 : a.title > b.title ? 1 : 0
      );

      // })
      shodata(aradata);
    }
  };
};
shodata(aradata);
let addthisproductstowishlist = (elem) => {
  // console.log(elem);
  let mywisharr = JSON.parse(localStorage.getItem("wish_list")) || [];
  let flag = true;
  for (let i = 0; i < mywisharr.length; i++) {
    if (mywisharr[i].title === elem.title) {
      flag = false;
    }
  }
  if (flag === true) {
    mywisharr.push(elem);
    localStorage.setItem("wish_list", JSON.stringify(mywisharr));
  }
};

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
document.querySelector("#crticonnamearrnging").addEventListener("click", () => {
  showdataingridformat();
});
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
