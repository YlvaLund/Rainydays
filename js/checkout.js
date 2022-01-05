let emptyButton = document.getElementById("emptyCart");
emptyButton.addEventListener("click", () => {
    clearCart();
})

console.log(getStoredCart());

function setupCart() {
    let total = document.getElementById("totalPrice");
    let calculation = 0;
    let itemContainer = document.getElementById("item_list_container");

    /* Add the itemListings */
    let cart = getStoredCart();
    if (cart?.length > 0){
        for (let item of cart){
            console.log(item);
            let raincoat = getItem(item.id);
            let itemSet = document.createElement("div");
            itemSet.classList.add("item");

            itemSet.innerHTML = `<span class="item_name">${raincoat.name}</span>
                                <span class="item_size">${item.size}</span>
                                <span class="item_quantity">${item.quantity}</span>
                                <span class="item_price">${item.unitPrice}</span>`
            itemContainer.appendChild(itemSet);
            calculation += parseInt(item.quantity * item.unitPrice);
        }
    }

    total.innerText = calculation + 99 + ',-'; // added shippingprice
    

}




setTimeout(setupCart, 1000);
