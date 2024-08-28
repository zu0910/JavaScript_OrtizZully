let info = [];
fetch ("info.json")
    .then( res => res.json())
    .then(Data => {
        info.push(Data)
    })

function addProduct() {
    let id = document.getElementById("productId").value;
    let name = document.getElementById("productName").value;
    let category = document.getElementById("productCategory").value;
    let price = document.getElementById("productPrice").value;
    let quantityInStock = document.getElementById("productQuantityInStock").value;
    let supplierId = document.getElementById("productSupplierId").value;

    let add = {"id":id,"name":name,"category":category,"price":price,"quantityInStock":quantityInStock,"supplierId":supplierId};
    add_Product(add)
}

function add_Product(product) {
    let productico = info[0].products.find( p => p.id == product.id );
    if (productico){
        alert("Product with id", product.id, "already exists")
    }
    for (const i of info.products){
        if (product.id == i.id){
        }
    }
    info[0].products.push(product);
}


document.getElementById("viewProducts").addEventListener("click", view_Products)
function view_Products() {
    document.getElementById("show_Products").innerHTML =""
    for (const i of info[0]["products"]){
        document.getElementById("show_Products").innerHTML +=
        `<p>----------------------------</p>
        <p>id: ${i["id"]}</p>
        <p>name: ${i["name"]}</p>
        <p>category: ${i["category"]}</p>
        <p>price: ${i["price"]}</p>
        <p>quantityInStock: ${i["quantityInStock"]}</p>
        <p>supplierId: ${i["supplierId"]}</p>
        <p>----------------------------</p>`
    }
}