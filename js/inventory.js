raincoats = [
    {id: 1, name: 'Orangepeel', price: 945, image: '/images/inventory/001.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Description for Orangepeel - You will keep dry even when you get a bucket tossed at you, or standing under a waterfall.', stock: 2, category: 'women'},
    {id: 2, name: 'Yellow-skin', price: 899, image: '/images/inventory/002.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Description for Yellow-Skin - The raincoat so thin you can not believe its not skin.', stock: 1, category: 'women'},
    {id: 3, name: 'Contrast-head', price: 1195, image: '/images/inventory/003.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Make sure your head area stands out with strong contrasting colors. Even the colorblind will notice your head is separate from your torso.', stock: 5, category: 'women'},
    {id: 4, name: 'Fall leaf', price: 899, image: '/images/inventory/004.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Description for Fall leaf - The coat insipred by mid-fall yellow of the oak leaf. Enjoy exploration of the rainy fall forest with this unique jacket.', stock: 0, category: 'men'},
    {id: 5, name: 'Pink Spash', price: 945, image: '/images/inventory/005.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Pink splash is for the wanna-be artistic people. If you need to make a statement while trecking through tri-becca then this is your coat! Too bad we never have this in stock.', stock: 0, category: 'women'},
    {id: 6, name: 'Sporty yellow', price: 1195, image: '/images/inventory/006.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Description for Sporty-yellow. The raincoat created for the city explorer.', stock: 4, category: 'men'},
    {id: 7, name: 'Blue Frack', price: 1275, image: '/images/inventory/007.jfif', alt: 'alternativ beskrivelse for bildet', description: 'beskrivelse', stock: 0, category: 'women'},
    {id: 8, name: 'Sporty yellow2', price: 1195, image: '/images/inventory/008.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Description for Sporty-yellow2. The raincoat created for the city explorer2.', stock: 1, category: 'men'},
    {id: 9, name: 'Sunshine', price: 945, image: '/images/inventory/009.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Feeling a bit like sunshine just attached itself to your jacket? Well now you will.', stock: 11, category: 'women'},
    {id: 10, name: 'Mountain sea', price: 1275, image: '/images/inventory/010.jfif', alt: 'alternativ beskrivelse for bildet', description: 'Hard outercoat treatet rainjacket made for the true adventurer, be whelmed.', stock: 20, category: 'men'},
    {id: 11, name: 'Ranger', price: 945, image: '/images/inventory/011.jfif', alt: 'alternativ beskrivelse for bildet', description: 'The jacket is specially made for the campus rangers with theme colors.', stock: 20, category: 'men'},
    {id: 12, name: 'Adventure time', price: 1275, image: '/images/inventory/012.jfif', alt: 'alternativ beskrivelse for bildet', description: 'When everest calls, this is for you.', stock: 20, category: 'men'}
]

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