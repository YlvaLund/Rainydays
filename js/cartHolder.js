let params = new URLSearchParams(window.location.search);
let itemId = params.get("item");
itemId = parseInt(itemId);
let triggered = false;
for (let i = 0; i < raincoats.length; i++){
    if (raincoats[i].id === itemId){
        triggered = updateDOM(raincoats[i])
    }
}
if (!triggered){
    /* not sure if this is the best experience, but we do not want people on our site while the item is not  */
    history.back()
}


function updateDOM(item){
    if (typeof item?.id === 'undefined'){
        return false;
    }
    const nameHolder = document.getElementById("itemName");
    const priceHolder = document.getElementById("itemPrice");
    const descriptionHolder = document.getElementById("itemDescription");
    const imageHolderA = document.getElementById("itemImageA");
    const imageHolderB = document.getElementById("itemImageB");
    const addButton = document.getElementById("addToChart");

    nameHolder.innerText = item?.name;
    priceHolder.innerText = item?.price;
    descriptionHolder.innerText = item?.description;
    imageHolderA.src = item?.image;
    imageHolderB.src = item?.image;

    /* Update the add to cart button */
    if (item.stock <= 0){
        addButton.style.background = "gray";
        addButton.style.textDecoration = "line-through"
        addButton.style.cursor = "not-allowed";
        
    } else {
        addButton.addEventListener("click", () => {
            let sizes = document.getElementsByName("size");
            let selectedSize;
            for (let i = 0; i < sizes.length; i++){
                console.log(sizes[i]);
                if (sizes[i].checked){
                    selectedSize = sizes[i].value;
                }
            }
            let alreadyStored = getStoredCart();
            let cart = [];
            let alreadyExists = false;
            if (alreadyStored.length > 0){
                for (let s of alreadyStored){
                    if (s.id === item.id){
                        s.quantity = s.quantity + 1;
                        alreadyExists = true;
                        // handle if the size is different.
                        
                    }
                    cart.push(s);
                }
            }
            if (!alreadyExists){
                cart.push({id: item.id, quantity: 1, unitPrice: item.price, size: selectedSize});
            }
            console.log(cart);
            addToCart(cart); // Should have more than one item in inventory...
        });
    }

    return true;
}






