
const showDataOnbag = (data,parent)=>{

    parent.innerHTML=""
    data.forEach((el) => {
        let div = document.createElement("div");
        div.id = "prodcutDiv"

        let image = document.createElement("img")
        image.src =el.image1

        let productName = document.createElement("h4")
        productName.innerHTML=el.title

        let descripiton = document.createElement("p")
        descripiton.innerHTML=el.desc

        let productSize = document.createElement("p")
        productSize.innerHTML=el.size

        let Proquant = document.createElement("p")
        Proquant.innerHTML=el.quant

        let Proprice = document.createElement("h5")
        Proprice.innerHTML=el.price

        div.append(image,productName,descripiton,productSize,Proquant,Proprice)

        parent.append(div);
    });


}

export  default showDataOnbag; 