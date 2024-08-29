fetch('info.json')
    .then(response => response.json())
    .then(data => {
        var products = data.products;

        // Función para mostrar productos
        function viewProducts() {
            var productList = document.getElementById("productList");
            productList.innerHTML = "";//Para no duplicar los datos
            for (var i = 0; i < products.length; i++) {
                var productItem = document.createElement("div");
                productItem.classList.add("product-item");

                productItem.innerHTML = `
                    <p><strong>ID:</strong> ${products[i].id}</p>
                    <p><strong>Name:</strong> ${products[i].name}</p>
                    <p><strong>Category:</strong> ${products[i].category}</p>
                    <p><strong>Price:</strong> $${products[i].price}</p>
                    <p><strong>Quantity:</strong> ${products[i].quantityInStock}</p>
                    <p><strong>Supplier ID:</strong> ${products[i].supplierId}</p>
                    <button onclick="editProduct(${i})">Edit</button>
                    <button onclick="deleteProduct(${i})">Delete</button>
                `;

                productList.appendChild(productItem);
            }
        }

        // Función para agregar o actualizar un producto
        document.getElementById("productForm").addEventListener("submit", function(e) {
            e.preventDefault();

            var id = parseInt(document.getElementById("productId").value);
            var name = document.getElementById("productName").value;
            var category = document.getElementById("productCategory").value;
            var price = parseFloat(document.getElementById("productPrice").value);
            var quantity = parseInt(document.getElementById("productQuantity").value);
            var supplierId = parseInt(document.getElementById("productSupplier").value);

            var existingProduct = products.find(function(product) {
                return product.id === id;
            });

            if (existingProduct) {
                existingProduct.name = name;
                existingProduct.category = category;
                existingProduct.price = price;
                existingProduct.quantityInStock = quantity;
                existingProduct.supplierId = supplierId;
            } else {
                products.push({
                    id: id,
                    name: name,
                    category: category,
                    price: price,
                    quantityInStock: quantity,
                    supplierId: supplierId
                });
            }

            viewProducts();
            this.reset();// se limpia el formulario despues de proceso
        });

        // Función para eliminar un producto
        window.deleteProduct = function(id) {
            products.splice(id, 1);
            viewProducts();
        }

        // Función para editar un producto
        window.editProduct = function(id) {
            var product = products[id];
            document.getElementById("productId").value = product.id;
            document.getElementById("productName").value = product.name;
            document.getElementById("productCategory").value = product.category;
            document.getElementById("productPrice").value = product.price;
            document.getElementById("productQuantity").value = product.quantityInStock;
            document.getElementById("productSupplier").value = product.supplierId;
        }

        // Mostrar productos al cargar la página
        viewProducts();
    })
    .catch(function(error) {
        console.error('Error loading JSON:', error);
    });