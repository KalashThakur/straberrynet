let thumbnails = document.getElementsByClassName("thumbnail");

    let activeImages = document.getElementsByClassName("active");

    for(var i=0; i<thumbnails.length; i++)
    {
        thumbnails[i].addEventListener("click", function() {

            // console.log(activeImages);

            if(activeImages.length > 0)
            {
                activeImages[0].classList.remove('active');
            }

            this.classList.add('active');
            document.getElementById('featured').src = this.src;
        })
    }


    product_details();

    function product_details(){

        document.getElementById("description_box").innerHTML = null;

        let list = document.createElement("ul");

        let l1 = document.createElement("li");
        l1.innerText = "A rich, creamy & uniquely flavoured toothpaste";

        let l2 = document.createElement("li");
        l2.innerText = "Contains Fluoride to prevent tooth decay while combating tartar & plaque";

        let l3 = document.createElement("li");
        l3.innerText = "Flavoured with sharp, cool peppermint";

        let l4 = document.createElement("li");
        l4.innerText = "Offers a long-lasting pleasurable taste sensation";

        let l5 = document.createElement("li");
        l5.innerText = "Keeps breath fresh all day long";

        let l6 = document.createElement("li");
        l6.innerText = "Leaves teeth clean, protected & healthy";

        list.append(l1,l2,l3,l4,l5,l6);
        document.getElementById("description_box").append(list);

    }


    function reviews()
    {
        document.getElementById("description_box").innerText = "Be the first to review this product!";
    }


    document.getElementById("adding_review").addEventListener("click", function()
    {
        document.querySelector(".bg-modal").style.display = "flex";
    })

    document.querySelector(".close").addEventListener("click", function()
    {
        document.querySelector(".bg-modal").style.display = "none";
    })

    document.querySelector("#cancel").addEventListener("click", function()
    {
        document.querySelector(".bg-modal").style.display = "none";
    })


    // ********************REVIEW SECTION**************
    let arr = JSON.parse(localStorage.getItem("user_review")) || [];

    document.querySelector("#submit").addEventListener("click", function()
    {


        let title = document.getElementById("title").value;
        let description = document.getElementById("text-area").value;

        var obj = {"Title": title, "Description": description};

        arr.push(obj);
        // console.log('arr:', arr)

        

        localStorage.setItem("user_review", JSON.stringify(arr));

        document.querySelector(".bg-modal").style.display = "none";
                
    })


    document.getElementById("review-btn").addEventListener("click", function()
    {
        arr.map(function(elem)
            {
                let mainDiv = document.createElement("div");

                let head = document.createElement("h3");
                head.innerText = elem.Title;

                let des = document.createElement("p");
                des.innerText = elem.Description;

                mainDiv.append(head,des)
                // mainDiv.innerText = head,des;
        
                document.getElementById("description_box").innerText = elem.Description;

                // document.getElementById("description_box").innerText = mainDiv;

            })
    })

    let cart = JSON.parse(localStorage.getItem("cart_item")) || []

    document.querySelector("#cart_btn").addEventListener("click", function()
    {
        // addToCart(elem);

     
let title = document.getElementById("heading").innerText;


        let quant = document.getElementById("select-tag").value;
        // console.log('quant:', quant)
        let desc = document.querySelector("#product_name").innerText;
        // addToCart(elem);
        let image = document.querySelector("#main-img").src;

        let price = document.querySelector(".intPrice").innerText;

        let obj = 
            {image1: image, 
             title: title,   
             desc: desc,
             quant: Number(quant),
             price: price*quant
            }
        cart.push(obj)

        console.log('cart:', cart)

        localStorage.setItem("cart_item", JSON.stringify(cart))


    });


    // function addToCart(elem)
    // {
    //     console.log(elem)
    // //    let cart = JSON.parse(localStorage.getItem("cart_item")) || [];

    // //    let flag = true;



    let arr2 = JSON.parse(localStorage.getItem("tempiteam")) || [];
    console.log('arr2:', arr2)

    let a = document.getElementById("heading").innerText = arr2[0].title;
    // console.log('a:', a)
    let b = document.getElementById("featured").src = arr2[0].image1;
    // console.log('b:', b)

    let c = document.getElementById("product_size").innerText = arr2[0].size;
    // console.log('c:', c)

    let d = document.getElementById("product_name").innerText = arr2[0].desc;
    // console.log('d:', d)

    let e = document.querySelector(".intPrice").innerText = arr2[0].price;
    // console.log('e:', e)

    let f = document.querySelector(".strikedoff_price").innerText = arr2[0].strikedprice;
    // console.log('f:', f)

    let g = document.querySelector(".offer").innerText = arr2[0].extraof;
    // console.log('g:', g)
    let h = document.getElementById("main-img").src = arr2[0].image1;
    let k = document.getElementById("main-img-1").src = arr2[0].image2;
    let j = document.getElementById("main-img-2").src = arr2[0].image3;

    document.getElementById("size").innerText = arr2[0].size;

    document.querySelector(".discount").innerText = arr2[0].save;
    // let h = document.querySelector(".offer").innerText = arr2[0].extraof;
    
    document.querySelector(".flat-off").innerText = arr2[0].save;


    let arr3 = JSON.parse(localStorage.getItem("haircare_data")) || [];
    console.log('arr3:', arr3)

    
