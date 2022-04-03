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
  this.image2 = url1;
  this.image3 = url2;
  this.save = save;
  this.quant = quant;
}

let perfume_data = [];

let d1 = new getdata(
  "https://a.cdnsbn.com/images/products/250/14514226106.jpg",
  "Acqua Di Parma",
  "Blu Mediterraneo Mirto Di Panarea Eau De Toilette Spray 75ml/2.5oz",
  6532,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 75ml/2.5oz",
  "9,387.00",
  "https://a.cdnsbn.com/images/products/14514226106-1.jpg",
  "https://a.cdnsbn.com/images/products/14514226106-2.jpg",
  "Save: 30%",
  1
);
let d2 = new getdata(
  "https://a.cdnsbn.com/images/products/250/03460684003.jpg",
  "Calvin Klein",
  "CK One Deodorant Stick 75ml/2.5oz",
  1838,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 75ml/2.5oz",
  "2,387.00",
  "https://a.cdnsbn.com/images/products/03460684003-1.jpg",
  "https://a.cdnsbn.com/images/products/03460684003-2.jpg",
  "Save: 12%",
  1
);
let d3 = new getdata(
  "https://a.cdnsbn.com/images/products/250/22667789106.jpg",
  "Serge Lutens",
  "La Fille De Berlin Eau De Parfum Spray 100ml/3.3oz",
  12789,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 100ml/3.3oz",
  "17,991.50",
  "https://a.cdnsbn.com/images/products/22667789106-1.jpg",
  "https://a.cdnsbn.com/images/products/22667789106-2.jpg",
  "Save: 29%",
  1
);
let d4 = new getdata(
  "https://a.cdnsbn.com/images/products/250/02984280206.jpg",
  "Chanel",
  "Coco Mademoiselle Eau De Toilette Spray 50ml/1.7oz",
  10482,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.7oz",
  "15,991.50",
  "https://a.cdnsbn.com/images/products/02984280206-1.jpg",
  "https://a.cdnsbn.com/images/products/02984280206-2.jpg",
  "Save: 25%",
  1
);
let d5 = new getdata(
  "https://b.cdnsbn.com/images/products/250/23966180206.jpg",
  "Chanel",
  "Chance Eau Tendre Eau de Parfum Spray 100ml/3.4oz",
  16348,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 100ml/3.4oz",
  "18,991.50",
  "https://a.cdnsbn.com/images/products/msn/23966180206-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/23966180206-2.jpg",
  "Save: 26%",
  1
);
let d6 = new getdata(
  "https://b.cdnsbn.com/images/products/250/15666239306.jpg",
  "Davidoff",
  "Cool Water Into the Ocean Eau De Toilette Spray 100ml/3.4iz",
  1095,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 100ml/3.4iz",
  "4,850.00",
  "https://a.cdnsbn.com/images/products/msn/15666239306-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/15666239306-2.jpg",
  "Save: 77%",
  1
);
let d7 = new getdata(
  "https://b.cdnsbn.com/images/products/250/16013218806.jpg",
  "Diptyque",
  "Do Son Eau De Toilette Spray 100ml/3.4oz",
  11420,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 100ml/3.4oz",
  "14,850.00",
  "https://a.cdnsbn.com/images/products/msn/16013218806-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/16013218806-2.jpg",
  "Save: 17%",
  1
);
let d8 = new getdata(
  "https://b.cdnsbn.com/images/products/250/13210380903.jpg",
  "Lancome",
  "Tresor Body Lotion 150ml/5oz",
  1564,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 150ml/5oz",
  "3,520.00",
  "https://a.cdnsbn.com/images/products/msn/13210380903.jpg",
  "https://a.cdnsbn.com/images/products/msn/13210380903-1.jpg",
  "Save: 56%",
  1
);
let d9 = new getdata(
  "https://d.cdnsbn.com/images/products/250/12814180903.jpg",
  "Lancome",
  "Miracle Perfumed Body Lotion 150ml/5oz",
  1916,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 150ml/5oz ",
  "3,598.50",
  "https://a.cdnsbn.com/images/products/msn/12814180903-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/12814180903-2.jpg",
  "Save: 47%",
  1
);
let d10 = new getdata(
  "https://b.cdnsbn.com/images/products/250/25040737906.jpg",
  "Loewe",
  "001 Eau De Parfum Spray 50ml/1.7oz",
  6649,
  "Extra 8% Off The Entire Site",
  "★★★★☆",
  "Size: 50ml/1.7oz",
  "7,598.50",
  "https://a.cdnsbn.com/images/products/msn/25040737906-1.jpg",
  "https://a.cdnsbn.com/images/products/msn/25040737906-2.jpg",
  "Save: 10%",
  1
);

perfume_data.push(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
// console.log("d28:", d28);

// localStorage.setItem("haircare_data",JSON.stringify(haircare_data));

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

let brand11arr = [];

let aradata = perfume_data;

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

// document.querySelector(".crt_ToolsA").addEventListener("click", () => {
//   ToolsAcces();
// });

// let ToolsAcces = () => {
//   shodata(ToolsAccessoriesarr);
//   // document.querySelector("#crt_count_of_prod").innerText = Borghesearr.length;
//   // console.log("hhfgfhfgfgfddddddd");
// };

import { navbar, footer } from "../components/header.js";
// document.querySelector("#crt_fotter").innerHTML =

document.querySelector("#crt_navbar").innerHTML = navbar();
document.querySelector("#crt_fotter").innerHTML = footer();
document.querySelector("#skincare").addEventListener("click", () => {
  pankaj();
});
const pankaj = () => {
  window.location.href = "catg.html";
};
document.querySelector("#haircare").addEventListener("click", () => {
  haircare();
});
const haircare = () => {
  window.location.href = "catghaircare.html";
};
document.querySelector("#menskincare").addEventListener("click", () => {
  menskincare();
});
const menskincare = () => {
  window.location.href = "catgmensskincare.html";
};
document.querySelector("#prefume").addEventListener("click", () => {
  prefume();
});
const prefume = () => {
  window.location.href = "catg perfume.html";
};
