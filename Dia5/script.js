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
function searchProducts(query) {
    
}
function MenusearchPro(){
    console.log("");
    console.log(
        " How would you like to search for the product?: \n"+
        " 1. Name \n"+
        " 2. Category \n"+
        " 3. Suplier."

    );
}

 booleano1=true;
while(booleano1==true){
    MenusearchPro()
    let opcSearch = prompt ("enter one of the above options")

    if (opcSearch==1){
        let query=prompt("Write product´s name")

    }
    else if(opcSearch==2){
        booleano1=false
    }
}