/*fetch("info.json")
    .then(res => res.json())
    .then(data => {
        function hola(){
            const tableBody = document.querySelector('#products tbody')
            for (i of data.products){
                const row = document.createElement('tr');
                products.innerHTML = `<td>${i.id}
                <td>${i.name}`
            }
        }
           
    pru.addEventListener("click", (e) => {
         document.getElementById("prueba2").style.display = "none"
         hola()

    })
    

})*/
  
// CRUD Productos
function ProductoJson(){
    const tableBody = document.querySelector('#products tbody')//agregarán las filas (rows) de productos.
    fetch('./info.json')// Realiza una solicitud para obtener el archivo info.json.
        .then(res => res.json())//Convierte la respuesta en un objeto JSON para que sea manejable en JavaScript.
        .then(data =>{
            data.products.forEach( product => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.price}</td>
                    <td>${product.quantityInStock}</td>
                    <td>${product.supplierId}</td>
                    <td>
                        <button onclick="editProduct(${product.id})">Edit</button>
                        <button onclick="deleteProduct(${product.id})">Delete</button>
                    </td>
                `;

                tableBody.appendChild(row)
            });

           
            });
        }
ProductoJson();




// CRUD Proveedores 
function ProveedorJson(){
    const tableBody = document.querySelector('#suppliers tbody')//agregarán las filas (rows) de productos.
    fetch('./info.json')// Realiza una solicitud para obtener el archivo info.json.
        .then(res => res.json())//Convierte la respuesta en un objeto JSON para que sea manejable en JavaScript.
        .then(data =>{
            data.suppliers.forEach( supplier => {
                
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${supplier.id}</td>
                    <td>${supplier.name}</td>
                    <td>${supplier.contactInfo.phone}</td>
                    <td>${supplier.contactInfo.email}</td>
                    <td>${supplier.contactInfo.address}</td>
                    <td>
                        <button onclick="editSupplier(${supplier.id})">Edit</button>
                        <button onclick="deleteSupplier(${supplier.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row)
            });
            });
        }
ProveedorJson();

// CRUD Ordenes
function OrdenesJson(){
    const tableBody = document.querySelector('#order tbody')//agregarán las filas (rows) de productos.
    fetch('./info.json')// Realiza una solicitud para obtener el archivo info.json.
        .then(res => res.json())//Convierte la respuesta en un objeto JSON para que sea manejable en JavaScript.
        .then(data =>{
            data.orders.forEach( order => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${order.orderId}</td>
                    <td>${order.productId}</td>
                    <td>${order.quantity}</td>
                    <td>${order.orderDate}</td>
                    <td>${order.status}</td>
                    <td>
                        <button onclick="editSupplier(${order.id})">Edit</button>
                        <button onclick="deleteSupplier(${order.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row)
            });
            });
        }
OrdenesJson();


//document.getElementById("hola").addEventListener("click",mostrar);
let info = [];
fetch("info.json")
.then(res =>res.json())
.then(data => {
    info.push(data)
})

function obtener_producto(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let quantityInStock = document.getElementById("quantityInStock").value;
    let supplierId = document.getElementById("supplierId").value;
    let lista_productos_agregar={"id":id,"name":name,"category":category,"price":price,"quantityInStock":quantityInStock,"supplierId":supplierId};
    addProduct(lista_productos_agregar);
}
function addProduct(product){//función que agrega un nuevo producto
    let contador=0;
    let contador_p=0;
    for (const x of info[0]["products"]){
        if (product["id"]==x["id"]) {
            contador_p+=1;
        }
    }
    for (const i of info[0]["suppliers"]){
        if (product["supplierId"]==i["id"]) {//verifica si el proveedor existe
            contador+=1
        }
    }
    if (contador>0 && contador_p==0){//si el proveedor existe se agrega el nuevo producto
        info[0]["products"].push(product)
    }
    if (contador_p>0) {
        alert("ya existe un producto con este id")
    }
    if (contador==0) {
        alert("no se encontró el proveedor que especificaste")
    }
}
document.getElementById("ver_productos").addEventListener("click",viewProducts)
function viewProducts(){//función que muestra todos los productos
    document.getElementById("mostrar_productos").innerHTML =""
    for (const i of info[0]["products"]){
        document.getElementById("mostrar_productos").innerHTML +=
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
function actualizar_producto(){
    let id = document.getElementById("id_actualizar").value;
    let name = document.getElementById("nombre_actualizar").value;
    let category = document.getElementById("categoria_actualizar").value;
    let price = document.getElementById("precio_actualizar").value;
    let quantityInStock = document.getElementById("cantidad_actualizar").value;
    let actualizar_producto={"name":name,"category":category,"price":price,"quantityInStock":quantityInStock};
    updateProduct(id,actualizar_producto)
}
function updateProduct(id, newDetails){//función que actualiza los detalles de un producto
    let contador = 0;
    for (const i of info[0]["products"]){
        if (id==i["id"]) {
            contador+=1;
            if (newDetails["name"]!="") {
                i["name"]=newDetails["name"]
            }
            if (newDetails["category"]!="") {
                i["category"]=newDetails["category"]
            }
            if (newDetails["price"]!="") {
                i["price"]=newDetails["price"]
            }
            if (newDetails["quantityInStock"]!="") {
                i["quantityInStock"]=newDetails["quantityInStock"]
            }
        }
    }
    if (contador==0) {
        alert("el id que ingresaste no existe");
    }
}
function eliminar_producto(){
    let id = document.getElementById("id_eliminar").value;
    deleteProduct(id);
}
function deleteProduct(id){//función que elinina un producto especificado por el usuario
    let contador = 0;
    for (let i=info[0]["products"].length-1; i >= 0; i--){
        if (id==info[0]["products"][i]["id"]) {
            info[0]["products"].splice(i,1);
            contador+=1;
        }
    }
    if (contador==0) {
        alert("El id que ingresaste no existe");
    }
}