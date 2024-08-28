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


