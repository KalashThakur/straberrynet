
const showDataOnbag = (data,parent)=>{

    parent.innerHTML=""
    data.forEach((el) => {
        let div = document.createElement("div");
        div.id = "prodcutDiv"

        let image = document.createElement("img")
        image.src =el.image1

        let proinfo = document.createElement("div");
        proinfo.id="proinfoid"
        let productName = document.createElement("div")
        productName.innerHTML=el.title

        let descripiton = document.createElement("div")
        descripiton.innerHTML=el.desc

        let productSize = document.createElement("div")
        productSize.innerHTML=el.size

        proinfo.append(productName,descripiton,productSize);

        let Proquant = document.createElement("p")
        Proquant.innerHTML="quant"+`<select>
        <Option>1</Option><Option>2</Option><Option>3</Option><Option>4</Option><select>`
        // +el.quant

        let Proprice = document.createElement("h5")
        Proprice.innerHTML=el.price

        div.append(image,proinfo,Proquant,Proprice)

        parent.append(div);
    });


}

export  default showDataOnbag; 