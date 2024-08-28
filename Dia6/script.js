
// CRUD Productos
function CargarJson(){
    const tableBody = document.querySelector('#products tbody')//agregarán las filas (rows) de productos.
    fetch('./info.json')// Realiza una solicitud para obtener el archivo info.json.
        .then(res => res.json())//Convierte la respuesta en un objeto JSON para que sea manejable en JavaScript.
        .then(data =>{
            data.products.forEach( product => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${product.id}</td>
                    <td>${product.nombre}</td>
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
CargarJson()

function createProduct(id) {
    fetch('./info.json')
        .then(res => res.json())
        .then(data => {
            const product = data.products.find(p => p.id === id);
            if (product) {
                document.getElementById('productId').value = product.id;
                document.getElementById('productName').value = product.name;
                document.getElementById('productCategory').value = product.category;
                document.getElementById('productPrice').value = product.price;
                document.getElementById('productQuantity').value = product.quantityInStock;
                document.getElementById('productSupplierId').value = product.supplierId;
            }
        })
        .catch(error => console.error('Error editing product:', error));
}

document.getElementById('formPro').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const quantityInStock = parseInt(document.getElementById('productQuantity').value);
    const supplierId = parseInt(document.getElementById('productSupplierId').value);

    fetch('./info.json')
        .then(res => res.json())
        .then(data => {
            if (id) {
                // Actualizar el producto existente
                const product = data.products.find(p => p.id === parseInt(id));
                product.name = name;
                product.category = category;
                product.price = price;
                product.quantityInStock = quantityInStock;
                product.supplierId = supplierId;
            } else {
                // Crear un nuevo producto
                const newProduct = {
                    id: data.products.length ? data.products[data.products.length - 1].id + 1 : 1,
                    name,
                    category,
                    price,
                    quantityInStock,
                    supplierId
                };
                data.products.push(newProduct);
            }

            // Guardar el JSON actualizado (aquí necesitas una forma de guardar el JSON en el servidor)
            console.log("Producto guardado/actualizado:", data);

            CargarJson();
            document.getElementById('formPro').reset();
        })
        .catch(error => console.error('Error saving product:', error));
});
function deleteProduct(id) {
    fetch('./info.json')
        .then(res => res.json())
        .then(data => {
            data.products = data.products.filter(product => product.id !== id);

            // Guardar el JSON actualizado (aquí necesitas una forma de guardar el JSON en el servidor)
            console.log("Producto eliminado:", data);

            CargarJson();
        })
        .catch(error => console.error('Error deleting product:', error));
}