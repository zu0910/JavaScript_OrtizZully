var inventory = {
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "category": "Electronics",
      "price": 999.99,
      "quantityInStock": 50,
      "supplierId": 101
    }
  ],
  "suppliers": [
    {
      "id": 101,
      "name": "Tech Supplies Inc.",
      "contactInfo": {
        "phone": "123-456-7890",
        "email": "sales@techsupplies.com",
        "address": "123 Tech Lane, Silicon Valley, CA"
      }
    }
  ],
  "orders": [
    {
      "orderId": 1001,
      "productId": 1,
      "quantity": 5,
      "orderDate": "2024-08-23",
      "status": "Delivered"
    }
  ]
}
// ----------------------------------------------------------------------------------------------------------------------------------

// Menu principal
function mainMenu() {
  console.log("");
  console.log(
    "--- Inventory Management System ---\n" +
    "1. Manage Products\n" +
    "2. Manage Suppliers\n" +
    "3. Manage Orders\n" +
    "4. Stock Management\n" +
    "5. Reports\n" +
    "6. Search and Filter\n" +
    "7. Exit\n"
  );
}

// ----------------------------------------------------------------------------------------------------------------------------------

//Menu de gestionamiento de productos 
function productMenu() {
  console.log("");
  console.log(
    "--- Product Management ---\n" +
    "1. Add Product\n" +
    "2. View Products\n" +
    "3. Update Product\n" +
    "4. Delete Product\n" +
    "5. Back to Main Menu\n"
  );
}

// funcion para agregar un producto
function addProduct(product) {
  inventory.products.push(product);
  console.log("product was successfully added");
}

// Funcion para ver todos los productos
function viewProduct() {
  console.log("----------- View Product Management ------------");
  //forEach recorre todos los productos que esta en el inventario producto
  // asiganacion de variable product que es la que tendra cada dato del inventario
  for (var i of inventory.products) {
    console.log("ID: ", i.id);
    console.log("Name: ", i.name);
    console.log("Category: ", i.category);
    console.log("price: ", i.price);
    console.log("Quantity in Stock: ", i.quantityInStock);
    console.log("Supplier Id: ", i.supplierId);
  }
}

// Funcion para actualizar u producto.
function updateProduct(id, newDetails) {
   id = parseInt(id);// Convertir el id ingresado a número para hacer la comparación correcta
   let product = inventory.products.find(product => product.id == id);// Buscar el producto en el inventario por su ID
 
   if (product) {// Actualizar los detalles del producto con los valores de newDetails
     product.name = newDetails[0];
     product.category = newDetails[1];
     product.price = parseFloat(newDetails[2]); // Convertir el precio a número decimal
     product.quantityInStock = parseInt(newDetails[3]); // Convertir la cantidad en stock a número entero
     product.supplierId = parseInt(newDetails[4]); // Convertir el ID del proveedor a número entero

     console.log("Product updated successfully.");

   } else {
     console.log("Product not found.");
   }
}

function deleteProduct(id) {//Eliminar un producto
  console.log("------------ Products ----------------");
  let cont = 1; // Inicializar el contador para enumerar los productos
  
  for (let product of inventory.products) {// Mostrar todos los productos con un índice numerado
    console.log(cont + "."); // Mostrar el número del producto
    console.log("ID:", product.id);
    console.log("Name:", product.name);
    console.log("Category:", product.category);
    console.log("Price:", product.price);
    console.log("Quantity in Stock:", product.quantityInStock);
    console.log("Supplier Id:", product.supplierId);
    console.log("-----------------------------------");
    cont++; // Incrementar el contador
  }
  let findProduct = inventory.products.findIndex(p => p.id == id);// Encontrar el índice del producto que tiene el ID proporcionado
  
  if (findProduct !== -1) { // Verificar si el producto con el ID proporcionado existe
    inventory.products.splice(findProduct, 1);// Eliminar el producto del inventario

    console.log("the product was successfully removed.");
  } else {
    console.log("Product not found.");
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------

// Menu de proveedores  
function supplierMenu() {
  console.log("");
  console.log(
    "--- Supplier Management ---\n" +
    "1. Add Supplier\n" +
    "2. View Suppliers\n" +
    "3. Update Supplier\n" +
    "4. Delete Supplier\n" +
    "5. Back to Main Menu\n"
  );
}

// funcion para añadir un nuevo proveedor 
function addSupplier(supplier) {

  inventory.suppliers.push(supplier);

  console.log("Supplier was successful added");

}

// Funcion para ver los datos que estan en el area de proveedores
function viewSupplier() {
  console.log("----------- View Supplier Management ------------");
  for (var i of inventory.suppliers) {
    console.log("ID: ", i.id);
    console.log("Name: ", i.name);
    console.log("Contact info");
    console.log("Email: ", i.contactInfo.phone);
    console.log("Phone: ", i.contactInfo.email);
    console.log("Address: ", i.contactInfo.address);
  }
}

// Modificar informacion del proveedor 
function updateSupplier(id, newDetails) {

  id = parseInt(id);

  let supplier = inventory.suppliers.find( supli => supli.id == id);

  if (supplier) {
    supplier.name = newDetails[0];
    supplier.contactInfo.phone = newDetails[1];
    supplier.contactInfo.email= parseFloat(newDetails[2]); 
    supplier.contactInfo.address = parseInt(newDetails[3]);   

    console.log("Product updated successfully.");

  } else {
    console.log("Product not found.");
  }
}

// Funcion eliminar

function deleteSupplier(id) {
  console.log("-----------  Supplier Management ------------");
  let cont = 1;
  for (var i of inventory.suppliers) {
    console.log(cont + ".");
    console.log("ID: ", i.id);
    console.log("Name: ", i.name);
    console.log("Contact info");
    console.log("Email: ", i.contactInfo.phone);
    console.log("Phone: ", i.contactInfo.email);
    console.log("Address: ", i.contactInfo.address);
    console.log("----------------------------------------");
    cont++;
  }
  let findsupplier = inventory.suppliers.findIndex(s => s.id == id);

  if (findProduct !== -1){
    inventory.suppliers.splice(findsupplier,1);

    console.log("the supplier was successfully removed.");
  } else {
    console.log("Supplier not found.");
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------

// Menu principal de order
function orderMenu() {
  console.log("");
  console.log(
    "--- Order Management ---\n" +
    "1. Add Order\n" +
    "2. View Orders\n" +
    "3. Update Order\n" +
    "4. Delete Order\n" +
    "5. Back to Main Menu"
  );
}

//Agregar una orden
function addOrder(order) {

  inventory.orders.push(order);
  console.log("Supplier was successful added");
}

// Ver 
function viewOrder() {
  console.log("----------- View Orders Management ------------");
  for ( var i of inventory.orders) {
    console.log("Order ID: ", i.id);
    console.log("Product ID: ", i.productId);
    console.log("Quantity: ", i.quantity);
    console.log("Order Date: ", i.orderDate);
    console.log("Status: ", i.status);
  }
}

//Actualizar
function updateOrder(id, newDetails) {
  id = parseInt(id);

  let order = inventory.orders.find( or => or.id == id);

  if (order) {
    order.orderID = parseInt(newDetails[0]);
    order.productId = parseInt(newDetails[1]);
    order.quantity= parseInt(newDetails[2]); 
    order.orderDate = parseInt(newDetails[3]); 
    order.status =  newDetails[3];   

    console.log("Order updated successfully.");

  } else {
    console.log("Order not found.");
  }
}

//Eliminar
function deleteOrder(id) {

  console.log("-----------  Orders Management ------------");
  let cont=1;
  for ( var orde of inventory.orders) {
    console.log(cont + ".");
    console.log("Order ID: ", orde.id);
    console.log("Product ID: ", orde.productId);
    console.log("Quantity: ", orde.quantity);
    console.log("Order Date: ", orde.orderDate);
    console.log("Status: ", orde.status);
    console.log("-----------------------------------------");
    cont++;
  }
  let findOrder = inventory.orders.findIndex(o => o.id == id);
  if (findOrder !== -1){
    inventory.orders.splice(findOrder,1);

    console.log("The order was successfully removed");
    
  }else{
    console.log("Order not found.");
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------

function stockMenu() {
  console.log("");
  console.log(
    "--- Stock Management ---\n" +
    "1. Check Stock Levels\n" +
    "2. Restock Product\n" +
    "3. Back to Main Menu\n"
  );
}

function checkStockLevels() {

  console.log("--------Stocks Levels --------------------");
  for (var i of inventory.products){
    console.log("Product: ", i.name);
    console.log("Quantity in stock: ", i.quantityInStock);
    console.log("----------------------------------------");
    
  }
}

function restockProduct(id, quantity) {
  id = parseInt(id);
  quantity = parseInt(quantity)

   // Buscar el producto por ID
   let product = inventory.products.find(product => product.id == id);

   if (product) {
     product.quantityInStock += quantity; // Incrementar la cantidad en stock
     console.log(`Restocked ${quantity} units. New stock for ${product.name}: ${product.quantityInStock}`);
     console.log("Restocked", quantity);
     console.log("New stock for", product.name ,":", product.quantityInStock);
     
     
   } else {
     console.log("Product not found.");
   }

} 

// ----------------------------------------------------------------------------------------------------------------------------------

function reportMenu() {
  console.log("");
  console.log(
    "------- Reports -------\n" +
    "1. Generate Sales Report\n" +
    "2. Generate Inventory Report\n" +
    "3. Back to Main Menu\n"
  );
}

function generateSalesReport(startDate, endDate) {

  let generate = inventory.orders.filter(g => g.orderDate >= startDate && orderDate<=endDate);
   
  console.log("-------- Sales Report --------");

  // Si se encuentran órdenes dentro del rango de fechas, imprimir los detalles
  if (generate.length > 0) {
    for ( var i of generate){
      console.log("Order ID:",i.orderId);
      console.log("Order Date", i.orderDate);
      console.log("Product ID:", i.productId);
      console.log("Quantity sold:", order.quantity);
      console.log("-------------------------------");
    }
  } else {
    // Si no se encuentran órdenes, imprimir un mensaje indicando que no hay ventas registradas en ese período
    console.log("No sales");
  }
}

function generateInventoryReport() {
  console.log("-------- Inventory Report --------");
  for (var i of inventory.products){
    console.log("Product: ", i.name);
    console.log("Ctegory: ", i.category);
    console.log("Product: ", i,quantityInStock);
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------

function searchFilterMenu() {
  console.log("");
  console.log(
    "--- Search and Filter ---\n" +
    "1. Search Products\n" +
    "2. Filter Orders\n" +
    "3. Back to Main Menu\n"
  );
}

function searchProducts(query) {
//Implement a function searchProducts(query) that allows users to search for products by name, category, or supplier.
}

function filterOrders(criteria) {
// Implement a function filterOrders(criteria) that allows users to filter orders by status, date range, or product.
}


// ----------------------------------------------------------------------------------------------------------------------------------


var booleanito = true;
while (booleanito == true) {
  mainMenu()
  let opcMainMenu = prompt("write one of the options from the main menu");

  switch (opcMainMenu) {
    
    case '1':
      productMenu()
      var opcProduct = prompt("Write one of the options from the product Menu");

      switch (opcProduct) {

        case '1':
          let newProduct = {
            id: prompt("Write producto ID"),
            name: prompt("Write product name"),
            category: prompt("Write category product"),
            price: prompt("write price product"),
            quantityInStock: prompt("Write quantity in stock product"),
            supplierId: prompt("Write supplier id product"),
          };
          addProduct(newProduct);
          break;

        case '2':
          viewProduct();

          break;

        case '3':
          let IDproduct = prompt("write the number of the id you want to update");
          let name = prompt ("Write the new name");
          let category = prompt("Write the new category");
          let price = prompt("Write the new price");
          let quantityInStock=prompt("Write the new quantity in stock");
          let supplierId =prompt("Write the new supplier id");

          let up=[name,category,price,quantityInStock,supplierId];

          updateProduct(IDproduct,up);

          break;

        case '4':
          let idproduct = prompt("Enter the ID of the product you want to delete:");
          deleteProduct(idproduct);

          break;

        case '5':
          mainMenu();

          break;

        default:
          console.log("Invalid option. Please choose again.");
          productMenu();

          break;
      }

      break;

    case '2':

      supplierMenu()
      var opcSupplier = prompt("Write one of the options from the supplier menu");

      switch (opcSupplier) {

        case '1':
          let newSupplier = {
            id: prompt("Write supplier ID"),
            name: prompt("Write supplier name"),
            phone: prompt("Write phone supplier"),
            email: prompt("write email supplier"),
            address: prompt("Write address supplier"),
          };
          addProduct(newSupplier);

          break;

        case '2':
          viewSupplier();

        case '3':
          let idSup = prompt("Write the number of the id you want to update");

          let name = prompt ("Write the new name");
          let phone = prompt("Write the new phone");
          let email = prompt("Write the new email");
          let address=prompt("Write the new address");

          let upSup=[name,phone,email,address];

          updateProduct(idSup,upSup);

          break;

        case '4':
          let idSupp = prompt("Enter the ID of the supplier you want to delete: ")
          deleteSupplier(idSupp);

          break;

        case '5':
          mainMenu();

          break;

        default:
          console.log("Invalid option. Please choose again.");
          supplierMenuMenu();

          break;
      }

      break;

    case '3':
      orderMenu();
      var opsOrder = prompt("Write one of the options from the supplier menu");

      switch (opsOrder) {

        case '1':
          let newOrder = {
            orderId: prompt("Write order ID"),
            productId: prompt("Write product ID order"),
            quantity: prompt("Write quantity order"),
            orderDate: prompt("write order date"),
            status: prompt("Write status order"),
          };
          addProduct(newOrder);

          break;

        case '2':
          viewOrder()

        case '3':
          let IDorder = prompt("write the number of the id you want to update");
          let orderID = prompt ("Write the new order id");
          let productId = prompt("Write the new product id");
          let quantity = prompt("Write the new quantity");
          let orderDate=prompt("Write the new order date");
          let status =prompt("Write the new status");

          let upOrder=[IDorder, orderID, productId, quantity, orderDate, status];

          updateProduct(IDorder,upOrder);

          break;

        case '4':
          let idOr = prompt("Enter the ID of the order you want to delete:")
          deleteOrder(idOr)

          break;

        case '5':
          mainMenu();

          break;

        default:
          console.log("Invalid option. Please choose again.");
          orderMenu();

          break;
      }
      break;

    case '4':

      stockMenu();
      var opcStock = prompt("Write one of the options from the supplier menu");

      switch (opcStock) {

        case '1':
          console.log(checkStockLevels());
          
          break;

        case '2':
          let Id = prompt("Enter the product ID to restock:");
          let Quantity = prompt("Enter the quantity to add to stock:");
          restockProduct(Id, Quantity);
          break;

        case '3':
          mainMenu()
        break;

        default:
          console.log("Invalid option. Please choose again.");
          stockMenu();

          break;
      }


      break;

    case '5':
      reportMenu();
      var opcReport = prompt("Write one of the options from the report menu");

      switch (opcReport) {

        case '1':
          let startDate = prompt("Enter the start date (YYYY-MM-DD):");
          let endDate = prompt("Enter the end date (YYYY-MM-DD):");
          generateSalesReport(startDate, endDate);

          break;

        case '2':
          generateInventoryReport();
          break;

        case '3':
          mainMenu
          break;
      
        default:
          console.log("Invalid option. Please choose again.");
          reportMenu();

          break;
      }
      break;

    case '6':
      searchFilterMenu()
      var opcSearch = prompt("Write one of the options from the search filter menu")

      switch (opcSearch) {
        case "1":
          
          break;

        case "2":
          
          break;

        case "3":
          
          break;

        default:
          console.log("Invalid option. Please choose again.");
          searchFilterMenu();
          break;
      }

      break;

    case '7':

      console.log("Thank you for be here, see you soon XD");

      booleanito=false
      
      break;

    default:
      console.log("Invalid option, please try again.");
      mainMenu
      break;
  }

}
