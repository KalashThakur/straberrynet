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