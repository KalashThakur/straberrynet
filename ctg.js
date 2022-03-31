let arr = [
  ["Skincare"],
  [
    {
      img: "https://a.cdnsbn.com/images/products/250/23141000007.jpg",
      title: "Marvis",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      pricce: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
    },
    {
      img: "https://a.cdnsbn.com/images/products/250/24714281301.jpg",
      title: "Timeless Skin Care",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      pricce: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
    },
    {
      img: "https://a.cdnsbn.com/images/products/250/20079465901.jpg",
      title: "EltaMD",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      pricce: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★★",
    },
    {
      img: "https://a.cdnsbn.com/images/products/250/16305336601.jpg",
      title: "Embryolisse",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      pricce: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
    },
    {
      img: "https://b.cdnsbn.com/images/products/250/26990380301.jpg",
      title: "Clarins",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      pricce: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
    },

    {
      img: "https://b.cdnsbn.com/images/products/250/21495880501.jpg",
      title: "Elizabeth Arden",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      pricce: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★★☆",
    },
    {
      img: "https://c.cdnsbn.com/images/products/250/15246380501.jpg",
      title: "3W Clinic",
      desc: "Whitening Mint Toothpaste With Xylitol",
      size: "Size: 85ml/4.2oz",
      save: "SAVE 19%",
      pricce: 859.0,
      strikedprice: "1,054.00",
      extraof: "Extra 8% Off The Entire Site",
      rating: "★★★☆☆",
    },
  ],
];
let aradata = arr[1];
console.log(arr[0]);
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
    let calprice = elem.pricce;
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
    proimg.src = elem.img;
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
