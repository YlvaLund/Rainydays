raincoats = [
    {id: 1, name: 'Orangepeel', price: 945, image: '/images/inventory/001.jpg', alt: 'Raincoat product Orange peel, woman standing in a waterfall smiling and wearing the orange peel coat', description: 'Description for Orangepeel - You will keep dry even when you get a bucket tossed at you, or standing under a waterfall.', stock: 2, category: 'women'},
    {id: 2, name: 'Yellow-skin', price: 899, image: '/images/inventory/002.jpg', alt: 'Raincoat product woman sitting with a yellow raincoat', description: 'Description for Yellow-Skin - The raincoat so thin you can not believe its not skin.', stock: 1, category: 'women'},
    {id: 3, name: 'Contrast-head', price: 1195, image: '/images/inventory/003.jpg', alt: 'Raincoat product backside of a person wearing a raincoat', description: 'Make sure your head area stands out with strong contrasting colors. Even the colorblind will notice your head is separate from your torso.', stock: 5, category: 'women'},
    {id: 4, name: 'Fall leaf', price: 899, image: '/images/inventory/004.jpg', alt: 'Raincoat product man sitting in the forest wearing a raincoat', description: 'Description for Fall leaf - The coat insipred by mid-fall yellow of the oak leaf. Enjoy exploration of the rainy fall forest with this unique jacket.', stock: 0, category: 'men'},
    {id: 5, name: 'Pink Spash', price: 945, image: '/images/inventory/005.jpg', alt: 'Raincoat product urban background, woman wearing a hip-pink splashed raincoat', description: 'Pink splash is for the wanna-be artistic people. If you need to make a statement while trecking through tri-becca then this is your coat! Too bad we never have this in stock.', stock: 0, category: 'women'},
    {id: 6, name: 'Sporty yellow', price: 1195, image: '/images/inventory/006.jpg', alt: 'Raincoat product man standing with the city background wearing a yellow raincoat', description: 'Description for Sporty-yellow. The raincoat created for the city explorer.', stock: 4, category: 'men'},
    {id: 7, name: 'Blue Frack', price: 1275, image: '/images/inventory/007.jpg', alt: 'Raincoat product woman sitting on stairs wearing bright red sun glasses and a bright blue rainjacket', description: 'beskrivelse', stock: 0, category: 'women'},
    {id: 8, name: 'Sporty yellow2', price: 1195, image: '/images/inventory/008.jpg', alt: 'Raincoat product man jumping while wearing a yellow raincoat', description: 'Description for Sporty-yellow2. The raincoat created for the city explorer2.', stock: 1, category: 'men'},
    {id: 9, name: 'Sunshine', price: 945, image: '/images/inventory/009.jpg', alt: 'Raincoat product woman wearing a yellow raincoat', description: 'Feeling a bit like sunshine just attached itself to your jacket? Well now you will.', stock: 11, category: 'women'},
    {id: 10, name: 'Mountain sea', price: 1275, image: '/images/inventory/010.jpg', alt: 'Raincoat product man in the mountains wearing a dark blue rainjacket', description: 'Hard outercoat treatet rainjacket made for the true adventurer, be whelmed.', stock: 20, category: 'men'},
    {id: 11, name: 'Ranger', price: 945, image: '/images/inventory/011.jpg', alt: 'Raincoat product deep in the forest you can see the back of a person wearing a bright red raincoat', description: 'The jacket is specially made for the campus rangers with theme colors.', stock: 20, category: 'men'},
    {id: 12, name: 'Adventure time', price: 1275, image: '/images/inventory/012.jpg', alt: 'Raincoat product a man walking in the forest with a black sporty rainjacket', description: 'When everest calls, this is for you.', stock: 20, category: 'men'}
]

function getItem(id) {
    if (raincoats?.length > 0){
        for (let r of raincoats){
            if (r.id === id){
                return r;
            }
        }
    }

    return false;
}

function removeFromStorage(id){
    for (let i = 0; i < raincoats.length; i++){
        if (raincoats[i].id === id){
            let tempStock = raincoats[i].stock;
            tempStock--;
            raincoats[i].stock = tempStock;
        }
    }
}

function addToStorage(id){
    for (let i = 0; i < raincoats.length; i++){
        if (raincoats[i].id === id){
            let tempStock = raincoats[i].stock;
            tempStock++;
            raincoats[i].stock = tempStock;
        }
    }
}