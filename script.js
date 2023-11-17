const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cartMenu = document.querySelector('.navbar-shopping-cart')

const bMenu = document.querySelector('.menu');
const burguerMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name: 'PC',
    price: 1500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productContent = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productContent.append(productPrice, productName);

    const productFigure = document.createElement('figure');
    const prodcutImgCart = document.createElement('img');
    prodcutImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.append(prodcutImgCart);

    productInfo.append(productContent, productFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
    
    }
}

navEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive')
});

bMenu.addEventListener('click', () => {
    const isAsideClosed = aside.classList.contains('inactive');

    burguerMenu.classList.toggle('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
});

cartMenu.addEventListener('click', () => {
    const isMobileMenuClosed = burguerMenu.classList.contains('inactive');
    const cartMenuClosed = cartMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        burguerMenu.classList.add('inactive');
    }

    if (!cartMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
});

renderProducts(productList);