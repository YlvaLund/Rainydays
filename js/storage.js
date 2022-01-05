function getStoredCart() {
    return JSON.parse(window.localStorage.getItem('inCart'));
}

function addToCart(inCart) {
    window.localStorage.setItem('inCart', JSON.stringify(inCart));
}

function clearCart() {
    window.localStorage.clear();
}
