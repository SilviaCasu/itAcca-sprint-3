// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
//comento funcion buy para emplementar addToCard;
//-------------------------------------------------
/*function buy(id) { 
    // 1. Loop for to the array products to get the item to add to cart
    const PRODUCT_LONG = products.length;
    for (let i = 0; i < PRODUCT_LONG; i++) {
        if (products[i].id === id) {
            // 2. Add found product to the cartList array
            cartList.push(products[i]);
            console.log(cartList);
            generateCart();
        }
    }
    
} //-----------------------------------------------
*/

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    document.getElementById('count_product').innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
    var total = 0;
    for (let item of cartList) {
        console.log(item)
        total += item.price;
        console.log(total);
        // Calculate total price of the cart using the "cartList" array
    }

}

// Exercise 4
// comento funcion para emplementar addToCard;
//--------------------------------------------------------
/*function generateCart() {
    cart = [];
    for (var key in cartList) {
        let idProduct = cartList[key].id;
        let productEx = cart.find(e => e.id === idProduct);//busco id producto y comparo
        // now search id in cart
        if (productEx) {
            // añado +1 a quantity 
            productEx.quantity += 1;
            productEx.subtotal = parseInt(productEx.price * productEx.quantity);
            productEx.subtotalWithDiscount = applyPromotionsCart(productEx.id, productEx.quantity, productEx.subtotal);
            // alert(productEx.quantity);
            //alert(productEx.subtotal);
        } else {
            // añado el item al array cart con quantity=1
            cart.push(cartList[key]);
            cart[(cart.length) - 1].quantity = 1;
            cart[(cart.length) - 1].subtotal = cart[(cart.length) - 1].price;
            console.log(cart);
        }
    }
}*/
//--------------------------------------------------

// Exercise 5
function printCart() {
    var cartPrint = document.getElementById('cart_list');
    while (cartPrint.firstChild) {
        cartPrint.removeChild(cartPrint.lastChild);
    }
    let total = 0;
    cart.forEach((product, index) => {
        var rowProduct = cartPrint.insertRow(index);
        rowProduct.insertCell(0).innerHTML = product.name;
        rowProduct.insertCell(1).innerHTML = "$" + product.price;
        rowProduct.insertCell(2).innerHTML = product.quantity;
        let sub = 0;
        if (product.subtotalWithDiscount) {
            sub = product.subtotalWithDiscount;
        } else {
            sub = product.subtotal;
        }
        rowProduct.insertCell(3).innerHTML = "$" + sub.toFixed(2);
        (total += sub).toFixed(2);

        rowProduct.insertCell(4).innerHTML = '<a href="javascript:void(0)" class="btn btn-primary m-3 btn-sm" onclick="removeFromCart(' + product.id + ',' + product.price + ',' + product.quantity + ')" type="button" value="rem" />rem</a>';

    }

    ); quantitySw();

    document.getElementById('total_price').innerHTML = total.toFixed(2);
}

//------------------------------------------------------------------------------------

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    const PRODUCT_LONG = products.length;// verifico se il ID existe
    for (let i = 0; i < PRODUCT_LONG; i++) {
        if (products[i].id === id) {
            let productEx = cart.find(e => e.id === products[i].id); //busco ID y comparo
            if (productEx) {      // si ya está en cart añado qty y controlo promo
                productEx.quantity += 1; 
                productEx.subtotal = (productEx.price * productEx.quantity);
                productEx.subtotalWithDiscount = applyPromotionsCart(productEx.id, productEx.quantity, productEx.subtotal);
             
            } else {
                cart.push(products[i]); //si no está en cart añado producto 
                cart[(cart.length) - 1].quantity = 1;
                cart[(cart.length) - 1].subtotal = cart[(cart.length) - 1].price;
                console.log(products[i]);
            }
        }
    }
    quantitySw();

}


function quantitySw() { //fun para contar productos en el cart;
    let quantity = 0;
    for (let i = 0; i < cart.length; i++) {
        quantity += cart[i].quantity;
    }
    document.getElementById('count_product').innerHTML = quantity;
}

function applyPromotionsCart(idProduct, quantity, subtotal) {
    if (idProduct === 1 && quantity >= 3) {
        return (10 * quantity);
    }
    if
        (idProduct === 3 && quantity >= 10)
        return (subtotal / 3 * 2);
}


// Exercise 8
function removeFromCart(id) {

    for (let i = 0; i < cart.length; i++) { // control ID y si qty es === 1 resto 1;
        if (cart[i].id === id) {
            if (cart[i].quantity === 1) {
                cart.splice(i, 1) 
                return printCart();
            }
            if (cart[i].quantity >= 1) { // control ID y si qty es >= 1 resto 1 y hago control promo;
                cart[i].quantity = cart[i].quantity - 1;
                cart[i].subtotal = (cart[i].price * (cart[i].quantity));
                cart[i].subtotalWithDiscount = applyPromotionsCart(cart[i].id, cart[i].quantity, cart[i].subtotal);
                printCart();
            }
        }
    }
    quantitySw();
}
console.log(cart);


function open_modal() {
    console.log("Open Modal");
    printCart();
}