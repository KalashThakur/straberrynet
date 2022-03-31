let arr = [
  ["Skincare"],
  [
    {
      image1: "https://a.cdnsbn.com/images/products/250/23141000007.jpg",
      img2: "https://a.cdnsbn.com/images/products/msn/23141000007-1.jpg",
      img3: "https://a.cdnsbn.com/images/products/msn/23141000007-2.jpg",
      title: "Marvis",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      price: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
    },
    {
      image1: "https://a.cdnsbn.com/images/products/250/24714281301.jpg",
      img2: "https://a.cdnsbn.com/images/products/msn/24714281301-1.jpg",
      img3: "https://a.cdnsbn.com/images/products/msn/24714281301-2.jpg",
      title: "Timeless Skin Care",
      desc: "20% Vitamin C Serum + Vitamin E + Ferulic Acid",
      size: "Size: 30ml/1oz",
      save: "SAVE 19%",
      price: 2034.0,
      strikedprice: "2,112.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
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
  rating
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
}

let d1 = new getdata(
  "https://a.cdnsbn.com/images/products/msn/23802077203.jpg",
  "https://a.cdnsbn.com/images/products/msn/23802077203-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/23802077203-2.jpg",
  "KISS ME",
  "Medicated Hand Cream",
  "Size: 75g/2.6oz",
  "Save: 25%",
  469.0,
  "626.00",
  "Extra 8% Off The Entire Site",
  "★★★★☆"
);
console.log(d1);
arr[1].push(d1);

let aradata = arr[1];
console.log("arr[1]", arr[1]);
console.log("arr", arr);
document.querySelector("#crt_count_of_prod").innerText = arr[1].length;
document.querySelector("#cat_catshow").innerText = arr[0];
document.querySelector("#cat_redcatname").innerText = arr[0];
document.querySelector("#cat_cath1").innerText = arr[0];
document.querySelector("#cat_subcat_title").innerText = arr[0];
document.querySelector("#crt_main_vat_header").innerText = arr[0];
document.querySelector("#crt_topbranchildrenmain").innerText =
  " Top" + " " + arr[0] + " " + "Brands";
let shodata = (aradata) => {
  let parofappend = document.querySelector("#crt_parrentforappendingdata");

  // console.log(aradata.length);

  aradata.forEach((elem) => {
    // console.log(element.title)
    let div = document.createElement("div");
    div.id = "crt_subcontain";

    let wishdiv = document.createElement("div");
    wishdiv.id = "crt_addtowish";

    let wishsym = document.createElement("p");
    wishsym.innerText = "♡";
    wishsym.id = "crt_wishlitbtn";

    wishdiv.append(wishsym);

    let pname = document.createElement("p");
    pname.innerText = elem.title;
    pname.id = "crt_p_titile";
    pname.addEventListener("click", () => {
      tempsavetodesc(elem);
    });

    let descc = document.createElement("p");
    descc.innerText = elem.desc;
    descc.id = "crt_p_decriptin";
    descc.addEventListener("click", () => {
      tempsavetodesc(elem);
    });
    let sizep = document.createElement("p");
    sizep.innerText = elem.size;
    sizep.id = "crt_p_size";
    sizep.addEventListener("click", () => {
      tempsavetodesc(elem);
    });
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
    // calprice = calprice.toFixed(2);

    // let calprice = elem.price;
    // calprice = calprice.toFixed(2);

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

    // let pricep = document.createElement("p");
    btnrtndiv.append(addtocartbutn, ratingp, extp);
    div.append(
      wishsym,
      proimg,
      pname,
      descc,
      sizep,
      savep,
      pricep,
      striked,
      btnrtndiv
    );
    parofappend.append(div);
  });
  let arr = JSON.parse(localStorage.getItem("cart_iteam")) || [];
  document.querySelector("#crt_counter").innerText = arr.length;
};
shodata(aradata);
import { navbar, footer } from "../components/header.js";
// console.log(navbar);

let adtocartfunc = (elem) => {
  let arr = JSON.parse(localStorage.getItem("cart_iteam")) || [];
  let flag = true;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === elem.title) {
      flag = false;
    }
  }
  if (flag === true) {
    arr.push(elem);
    localStorage.setItem("cart_iteam", JSON.stringify(arr));
    document.querySelector("#crt_counter").innerText = arr.length;
  }
};
let tempsavetodesc = (elem) => {
  let arr = [];
  arr.push(elem);

  console.log(arr);
  localStorage.setItem("tempiteam", JSON.stringify(arr));
  window.location.href = "./PRODUCT DESCRIPTION/1marvis.html";
};
// crt_parrentforappendingdata>div
// document.querySelector("#crt_navbar").innerHTML = navbar();
// document.querySelector("#crt_fotter").innerHTML = footer();
