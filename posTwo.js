(function () {
const inventory = [
    {
        category: 'Cookie',
        name:'Chocolate Chip',
        price: 1.00,
        description: 'Classic Milk Chocolate Chip Cookie',  /// all descriptions are placeholders for now
        id: 'choc-chip',
        image: "assets/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg",
        quantity: 0
        
    },
    {
        category: 'Cookie',
        name:'Peanut Butter',
        price: 1.00,
        description: 'Pure Peanut Butter Heaven',
        id: 'pb',
        image: "assets/priscilla-du-preez--Y-qg-ncD34-unsplash.jpg",
        quantity: 0
    },
    {
        category: 'Cookie',
        name: 'Double Chocolate',
        price: 1.25,
        description: 'Double the Decadance, Double the Chocolate',
        id: 'dbl-choc',
        image: "assets/julissa-capdevilla-HHee8b4ZAlU-unsplash.jpg",
        quantity: 0
    },
    {
        category: 'Cookie',
        name: 'White Chocolate',
        price: 1.75,
        description: 'White Chocolate Wonderfulness',
        id: 'w-choc',
        image: "assets/morgane-perraud-XhrW0XlRy8c-unsplash.jpg",
        quantity: 0

    },
    {
        category: 'Donuts',
        name: 'Chocolate Glazed',
        price: 1.00,
        description: 'yup',
        id: 'choc-glazed',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
        quantity: 0
    },
    {
        category: 'Donuts',
        name: 'Powdered Sugar',
        price: 1.00,
        description: 'yum',
        id: 'pow-sug',
        image: "assets/no-revisions-vUSfCfuq-2Y-unsplash.jpg",
        quantity: 0

    },
    {
        category: 'Donuts',
        name: 'Apple Fritter',
        price: 1.50,
        description: 'fritter-tastic',
        id: 'fritter',
        image: "assets/katherine-sousa-k2UM3jOgmGI-unsplash.jpg",
        quantity: 0
        
    },
    {
        category: 'Donuts',
        name: 'Cinnamon Roll',
        price: 1.75,
        description: 'roll it up',
        id: 'roll',
        image: "assets/andy-hay-1uaIZcCJ-H0-unsplash.jpg",
        quantity: 0
    },
    {
        category: 'Pies',
        name: 'Apple',
        price: 10.00,
        description: "'Merica",
        id: 'apple',
        image: "assets/kavya-p-k-zQ4jrYelvLs-unsplash.jpg",
        quantity: 0

    },
    {
        category: 'Pies',
        name: 'Cherry',
        price: 10.00,
        description: 'very cherry',
        id: 'cherry',
        image: "assets/marie-g-geri6ml5e2I-unsplash.jpg",
        quantity: 0

    },

    {
        category: 'Pies',
        name: 'Key Lime',
        price: 12.00,
        description: 'key to happiness',
        id: 'key',
        image: "assets/kaouther-djouada-j8ufR4H4PaE-unsplash.jpg",
        quantity: 0
    },
    {
        category: 'Pies',
        name: 'Pecan',
        price: 12.00,
        description: 'you can pecan',
        id: 'pecan',
        image: "assets/keighla-exum-wnn9GuvXIZ4-unsplash.jpg",
        quantity: 0

    }
]
const cart = [];

const addToCart = (event) => {
    const grabInventory = inventory.find(food => food.id === event.target.id);
    const existingCartItem = cart.find(food => food.id === event.target.id);
    if (existingCartItem === undefined) {
        grabInventory.quantity++;
    cart.push(grabInventory);
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('cart-item');
    const image = document.createElement('img');
    image.src = grabInventory.image;
    image.classList.add('item-image');
    const titleSpan = document.createElement('span');
    titleSpan.setAttribute('data-id', grabInventory.id)
    titleSpan.innerText = `${grabInventory.name} x${grabInventory.quantity}`;
    const priceSpan = document.createElement('span');
    priceSpan.innerText = `$${grabInventory.price}`;
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'Remove';

    cartDiv.append(image);
    cartDiv.append(titleSpan);
    cartDiv.append(priceSpan);
    cartDiv.append(removeButton);

    const cartItem = document.querySelector('.cart-items');
    cartItem.append(cartDiv);

    removeButton.addEventListener('click', (event) => {
        const cartThing = event.target.parentNode;
        cartThing.remove();
        //cart.filter(item => )
        updateTotal()
    })

} else {
    existingCartItem.quantity++;
    const existingHTML = document.querySelector(`[data-id=${existingCartItem.id}]`);
    existingHTML.innerText = `${existingCartItem.name} x${existingCartItem.quantity}`
    console.log(existingHTML)
}



updateTotal()
}

function updateTotal() {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.quantity));
    document.querySelector('.cart-total-price').innerText = `Total: $${total}`;

}




const buttons = document.querySelectorAll('.add-to-cart-button');

for (let button of buttons){
    button.addEventListener('click', addToCart)
};

//was trying go get it so hovering over shop item causes the description to appear

// const individualShopItem = document.querySelectorAll('.individual-shop-item');
// individualShopItem.addEventListener('mouseover', () => {
//     const itemDescription = getElementById('description');
//     itemDescription.style.display = 'block'
// });









//to open checkout
const checkoutPopUp = document.querySelector('.checkout-popup');
  const checkOutButton = document.getElementById('open-checkout');
  checkOutButton.addEventListener('click', event => {
    
    checkoutPopUp.style.display = 'block';

  })

  //BAKERYCHECKOUTJS

  const cashButton = document.getElementById('cash');
const cardButton = document.getElementById('card');
const purchaseButton = document.getElementById('subBut');

cashButton.addEventListener('click', () => {
    const cashForm = document.getElementById('ifCash');
    const cardForm = document.getElementById('ifCard');
    cashForm.style.display = 'block';
    cardForm.style.display = 'none'
});

cardButton.addEventListener('click', () => {
    const cardForm = document.getElementById('ifCard');
    const cashForm = document.getElementById('ifCash')
    cardForm.style.display = 'block';
    cashForm.style.display = 'none'

});
purchaseButton.addEventListener('click', () => {
    const receiptForm = document.getElementById('rec');
    const cartSection = document.getElementById('cart-section');


    receiptForm.style.display = 'block';
    checkoutPopUp.style.display = 'none';
    cartSection.style.display = 'none';


})



})();
