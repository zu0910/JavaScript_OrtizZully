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
//==================================================================================================================

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

// -----------------------------------------------------------------------

// Añadir producto.
function addProduct(product) {
  inventory.products.push(product);
  console.log("product was successfully added");
}

// Ver todos los productos.
function viewProduct() {
  console.log("----------- View Product Management ------------");
  for (var i of inventory.products) {
      console.log("ID: ", i.id);
      console.log("Name: ", i.name);
      console.log("Category: ", i.category);
      console.log("price: ", i.price);
      console.log("Quantity in Stock: ", i.quantityInStock);
      console.log("Supplier Id: ", i.supplierId);
      console.log("---------------------------------------------");
  }
}

// Menú principal de actualización
function UpdateMenuProduct() {
  console.log(
      "------------ Option to update products ------------\n" +
      "1. Name\n" +
      "2. Category\n" +
      "3. Price\n" +
      "4. Quantity in stock\n" +
      "5. Supplier ID\n" +
      "6. Back to Product Management Menu\n" +
      "---------------------------------------------"
  );
}

// Actualizar producto
function updateProduct(id, newDetails) {
  for (var i of inventory.products) {
      if (id == i.id) {
          i.name = newDetails[0];
          i.category = newDetails[1];
          i.price = parseFloat(newDetails[2]); // Convertir el precio a número decimal
          i.quantityInStock = parseInt(newDetails[3]); // Convertir la cantidad en stock a número entero
          i.supplierId = parseInt(newDetails[4]); // Convertir el ID del proveedor a número entero

          console.log("Product updated successfully.");
      } else {
          console.log("Product not found.");
      }
  }

}

// Borrar un producto
function deleteProduct(id) {
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
  let idDelete = -1;
  for (let i = 0; i < inventory.products.length; i++) {
      if (inventory.products[i].id == id) {
          idDelete = i;
          break;
      }
  }

  if (idDelete !== -1) {
      inventory.products.splice(idDelete, 1);
      console.log("Product with ID", id, "has been successfully deleted.");
  } else {
      console.log("Product with ID", id, "not found.");
  }
}

// ================================================================================================================

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

//------------------------------------------------------------------

// funcion para añadir un nuevo proveedor 
function addSupplier(supplier) {
  inventory.suppliers.push(supplier);
  console.log("Supplier was successful added");
}

// Ver proveedores 
function viewSupplier() {
  console.log("----------- View Supplier Management ------------");
  for (var i of inventory.suppliers) {
      console.log("ID: ", i.id);
      console.log("Name: ", i.name);
      console.log("Contact info");
      console.log("Phone: ", i.contactInfo.phone);
      console.log("Email: ", i.contactInfo.email);
      console.log("Address: ", i.contactInfo.address);
      console.log("----------------------------------------------");

  }
}

// Actualizacion de proveedores
function UpdateMenuSupplier() {
  console.log(
      "------------ Option to update supplier ------------\n" +
      "1. Name\n" +
      "2. Phone\n" +
      "3. Email\n" +
      "4. Address\n" +
      "5. Back to Supplier Management Menu\n" +
      "---------------------------------------------"
  );
}

// Actualizar proveedor
function updateSupplier(id, newDetails) {
  for (var i of inventory.suppliers) {
      if (id == i.id) {
          i.name = newDetails[0];
          i.contactInfo.phone = parseInt(newDetails[1]);
          i.contactInfo.email = parseFloat(newDetails[2]);
          i.contactInfo.address = parseInt(newDetails[3]);

          console.log("Supplier updated successfully.");
      } else {
          console.log("Supplier not found.");
      }
  }
}

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
  let IDdelete = -1;
  for (let i = 0; i < inventory.suppliers.length; i++) {
      if (inventory.suppliers[i].id == id) {
          IDdelete = i;
          break;
      }
  }
  if (IDdelete !== -1) {
      inventory.suppliers.splice(IDdelete, 1);
      console.log("Supplier with ID", id, "has been successfully deleted");
  } else {
      console.log("Product with ID", id, "not found");

  }
}

// =================================================================================

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
  for (var i of inventory.orders) {
      console.log("Order ID: ", i.id);
      console.log("Product ID: ", i.productId);
      console.log("Quantity: ", i.quantity);
      console.log("Order Date: ", i.orderDate);
      console.log("Status: ", i.status);
      console.log("--------------------------------------------");

  }
}


function UpdateMenuOrder() {
  console.log(
      "------------ Order to update products ------------\n" +
      "1. OrderId\n" +
      "2. productId\n" +
      "3. quantity\n" +
      "4. orderDate\n" +
      "5. status\n" +
      "6. Back to order Management Menu\n" +
      "---------------------------------------------"
  );
}

function updateOrder(id, newDetails) {
  for (var i of inventory.orders) {
      if (id == i.orderId) {
          i.orderID = parseInt(newDetails[0]);
          i.productId = parseInt(newDetails[1]);
          i.quantity = parseInt(newDetails[2]);
          i.orderDate = parseInt(newDetails[3]);
          i.status = newDetails[4];

          console.log("Order updated successfully.");
      } else {
          console.log("Product not found.");
      }
  }
}

function deleteOrder(id) {
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
  let idDelete = -1;
  for (let i = 0; i < inventory.orders.length; i++) {
      if (inventory.orders[i].id == id) {
          idDelete = i;
          break;
      }
  }

  if (idDelete !== -1) {
      inventory.orders.splice(idDelete, 1);
      console.log("Product with ID", id, "has been successfully deleted.");
  } else {
      console.log("Product with ID", id, "not found.");
  }
}

// =============================================================================


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
  for (var i of inventory.products) {
      if (i.quantityInStock < 10) {
          console.log("Product: ", i.name);
          console.log("Quantity in stock: ", i.quantityInStock);
          console.log("Category: ", i.category);
          console.log("Price: ", i.price);
          console.log("SupplierID: ", i.supplierId);
          console.log("----------------------------------------");
      }
  }
}

function restockProduct(id, quantity) {
  id = parseInt(id);
  quantity = parseInt(quantity)

  // Buscar el producto por ID
  let product = inventory.products.find(product => product.id == id);

  if (product) {
      product.quantityInStock += quantity; // Incrementar la cantidad en stock
      console.log("Restocked", quantity);
      console.log("New stock for", product.name, ":", product.quantityInStock);
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

  let generate = inventory.orders.filter(g => g.orderDate >= startDate && new Date(orderDate) <= endDate);

  console.log("-------- Sales Report --------");

  // Si se encuentran órdenes dentro del rango de fechas, imprimir los detalles
  if (generate.length > 0) {
      for (var i of generate) {
          console.log("Order ID:", i.orderId);
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
  for (var i of inventory.products) {
      console.log("Name: ", i.name);
      console.log("Category: ", i.category);
      console.log("Price", i.price);
      console.log("Product: ", i.quantityInStock);
      console.log("Total stock", i.price * i.quantityInStock);
      console.log("----------------------------------------");

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
  switch (query) {
      case "1":
          var namePro = prompt("Enter product name that you want")
          for (var i of inventory.products) {
              if (namePro == i.name) {
                  console.log("ID: ", i.id);
                  console.log("Name: ", i.name);
                  console.log("Category: ", i.category);
                  console.log("price: ", i.price);
                  console.log("Quantity in Stock: ", i.quantityInStock);
                  console.log("Supplier Id: ", i.supplierId);
              }
          }
          break;

      case "2":
          var categoryPro = prompt("Enter category product that you want");
          for (var i of inventory.products) {
              if (categoryPro == i.category) {
                  console.log("ID: ", i.id);
                  console.log("Name: ", i.name);
                  console.log("Category: ", i.category);
                  console.log("price: ", i.price);
                  console.log("Quantity in Stock: ", i.quantityInStock);
                  console.log("Supplier Id: ", i.supplierId);
              }
          }
          break

      case "3":
          var supplierPro = Number(prompt("Enter supplier id that you want"));
          for (var i of inventory.products) {
              if (supplierPro == i.supplierId) {
                  console.log("ID: ", i.id);
                  console.log("Name: ", i.name);
                  console.log("Category: ", i.category);
                  console.log("price: ", i.price);
                  console.log("Quantity in Stock: ", i.quantityInStock);
                  console.log("Supplier Id: ", i.supplierId);
              }
          }
          break
      default:
          console.log("Invalid option");
          break;
  }
}


function filterOrders(criteria) {
  // Implement a function filterOrders(criteria) that allows users to filter orders by status, date range, or product.
  switch (criteria) {
      case "1":
          var statusOpc = prompt("Enter status of the order");
          for (var i of inventory.orders) {
              if (statusOpc == i.status) {
                  console.log("Order ID: ", i.id);
                  console.log("Product ID: ", i.productId);
                  console.log("Quantity: ", i.quantity);
                  console.log("Order Date: ", i.orderDate);
                  console.log("Status: ", i.status);
              }
          }
          break;
      case "2":
          var rangeOpc = prompt("Enter order range of the order");
          for (var i of inventory.orders) {
              if (rangeOpc == i.orderDate) {
                  console.log("Order ID: ", i.id);
                  console.log("Product ID: ", i.productId);
                  console.log("Quantity: ", i.quantity);
                  console.log("Order Date: ", i.orderDate);
                  console.log("Status: ", i.status);
              }
          }
          break
      case "3":
          var productOpc = prompt("Enter product id of the order");
          for (var i of inventory.orders) {
              if (productOpc == i.productId) {
                  console.log("Order ID: ", i.id);
                  console.log("Product ID: ", i.productId);
                  console.log("Quantity: ", i.quantity);
                  console.log("Order Date: ", i.orderDate);
                  console.log("Status: ", i.status);
              }
          }
          break
      default:
          console.log("Invalid option");
          break;
  }
}









var booleanito = true;
while (booleanito == true) {
  mainMenu()
  let opcMainMenu = prompt("write one of the options from the main menu");

  switch (opcMainMenu) {

      case "1":
          var booleanito1 = true;
          while (booleanito1 == true) {
              productMenu()
              var opcProduct = prompt("Write one of the options from the product Menu");
              switch (opcProduct) {
                  // Añadir productos
                  case "1":
                      let newProduct = {
                          id: parseInt(prompt("Write producto ID")),
                          name: prompt("Write product name"),
                          category: parseInt(prompt("Write category product")),
                          price: parseFloat(prompt("write price product")),
                          quantityInStock: parseInt(prompt("Write quantity in stock product")),
                          supplierId: parseInt(prompt("Write supplier id product")),
                      };
                      addProduct(newProduct);
                      break;

                  // Ver productos    
                  case "2":
                      viewProduct();
                      break;
                  // Actualizar
                  case "3":

                      let productID = Number(prompt("Enter the ID of the product you wish to update"));
                      let confirmation = "si";
                      let name, category, price, quantityInStock, supplierId;
                      while (confirmation == "si") {
                          UpdateMenuProduct();
                          let updateOpc = prompt("Enter the option of the menu to update the product");

                          switch (updateOpc) {
                              case "1":
                                  name = prompt("Write the new name");
                                  break;

                              case "2":
                                  category = prompt("Write the new category");
                                  break;

                              case "3":
                                  price = prompt("Write the new price");
                                  break;

                              case "4":
                                  quantityInStock = prompt("Write the new quantity in stock");
                                  break;

                              case "5":
                                  supplierId = prompt("Write the new supplier id");
                                  break;
                              case "6":
                                  confirmation = "no"
                                  break
                              default:
                                  console.log("Opcion Invalid")
                                  break;
                          }
                          if (confirmation != "no") {
                              confirmation = prompt("If you want to modify other information enter: si, otherwise enter: no.");
                          }
                      }
                      let up = [name, category, price, quantityInStock, supplierId];
                      updateProduct(productID, up);
                      break;

                  //Eliminar producto
                  case "4":
                      let idproduct = prompt("Enter the ID of the product you want to delete:");
                      deleteProduct(idproduct);

                      break;
                  case "5":
                      booleanito1 = false;
                      mainMenu();
                      break;
                  default:
                      console.log("Invalid option, please try again.");
                      productMenu()
                      break;
              }
          }
          break;

      case "2":
          var booleanito2 = true;
          while (booleanito2 == true) {
              supplierMenu();
              var opcSupplier = prompt("Write one of the options from the supplier menu");

              switch (opcSupplier) {

                  case "1":
                      // Añadir proveedor 
                      let newSupplier = {
                          id: prompt("Write supplier ID"),
                          name: prompt("Write supplier name"),
                          phone: parseInt(prompt("Write phone supplier")),
                          email: prompt("write email supplier"),
                          address: prompt("Write address supplier"),
                      };
                      addSupplier(newSupplier);
                      break;

                  case "2":
                      viewSupplier();
                      break;

                  case "3":

                      let supplierID = Number(prompt("Enter the ID of the supplier you wish to update"));
                      let confirmation = "si";
                      let name, phone, email, address;
                      while (confirmation == "si") {
                          UpdateMenuSupplier();
                          let upDateOpc = prompt("Enter the option of the menu to update the supplier");

                          switch (upDateOpc) {
                              case "1":
                                  name = prompt("Write the new name");
                                  break;
                              case "2":
                                  phone = prompt("Write the new phone");
                                  break;
                              case "3":
                                  email = prompt("Write the new email");
                                  break;
                              case "4":
                                  address = prompt("Write the new address");
                                  break;
                              case "5":
                                  confirmation = "no"
                                  break;
                              default:
                                  console.log("Opcion Invalid")
                                  break;
                          }
                          let upSupp = [name, phone, email, address];
                          updateSupplier(supplierID, upSupp);
                      }
                      break;

                  case "4":
                      let idSupp = prompt("Enter the ID of the supplier you want to delete: ")
                      deleteSupplier(idSupp);
                      break;

                  case "5":
                      booleanito2 = false;
                      mainMenu()
                      break;

                  default:
                      console.log("Option invalid");
                      break;
              }
          }
          break;

      case "3":
          var booleanito3 = true;
          while (booleanito3 == true) {
              orderMenu();
              var opcOrder = prompt("Write one of the options from the supplier menu");

              switch (opcOrder) {
                  case "1":
                      let newOrder = {
                          orderId: prompt("Write order ID"),
                          productId: prompt("Write product ID order"),
                          quantity: prompt("Write quantity order"),
                          orderDate: prompt("write order date"),
                          status: prompt("Write status order"),
                      };
                      addProduct(newOrder);
                      break;

                  case "2":
                      viewOrder();
                      break;

                  case "3":
                      let orderID = Number(prompt("Enter the ID of the order you wish to update"));
                      let confirmation = "si";
                      let orderId, productId, quantity, orderDate, status;
                      while (confirmation == "si") {
                          UpdateMenuOrder();
                          let upDateOpc = prompt("Enter the option of the order to update the supplier");

                          switch (upDateOpc) {
                              case "1":
                                  let orderID = prompt("Write the new order id");
                                  break;

                              case "2":
                                  let productId = prompt("Write the new product id");
                                  break;

                              case "3":
                                  let quantity = prompt("Write the new quantity");
                                  break;

                              case "4":
                                  let orderDate = prompt("Write the new order date");
                                  break;

                              case "5":
                                  let status = prompt("Write the new status");
                                  break;

                              case "6":
                                  confirmation = "no"
                                  orderMenu();
                                  break;

                              default:
                                  console.log("Option Invalide");

                                  break;
                          }
                          let upOrder = [IDorder, orderID, productId, quantity, orderDate, status];
                          updateOrder(orderID, upOrder);
                      }
                      break;

                  case "4":
                      let idOr = prompt("Enter the ID of the order you want to delete:")
                      deleteOrder(idOr)
                      break;

                  case "5":
                      mainMenu();
                      break;

                  default:
                      console.log("Invalid option. Please choose again.");
                      orderMenu();
                      break;
              }
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
      case '5':
          reportMenu();
          var opcReport = prompt("Write one of the options from the report menu");

          switch (opcReport) {
              case '1':
                  let startDate = prompt("Enter the start date (YYYY-MM-DD):");
                  let endDate = prompt("Enter the end date (YYYY-MM-DD):");
                  let newstartd = new Date(startDate)
                  let newend = new Date(endDate)
                  generateSalesReport(newstartd, newend);

                  break;

              case '2':
                  generateInventoryReport();
                  break;

              case '3':
                  mainMenu();
                  break;

              default:
                  console.log("Invalid option. Please choose again.");
                  reportMenu();

                  break;
          }
          break;

      case '6':
          searchFilterMenu()
          var opcSearch = prompt("Write one of the options from the search filter menu");

          switch (opcSearch) {

              case "1":
                  searchProducts(opcSearch);
                  break;

              case "2":
                  filterOrders(opcSearch)
                  break;

              case "3":
                  console.log("Invalid option. Please choose again.");
                  break;

              default:
                  console.log("Invalid option. Please choose again.");
                  searchFilterMenu();
                  break;
          }
          break;

      case "7":
          console.log("Thank you for having used our programme XD");
          booleanito = false
          break
      default:
          console.log("Invalid option, please try again.");
          mainMenu
          break;
  }
}
