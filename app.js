let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#navbar-btn');

//responsive navbar btn
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
      // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

var swiper = new Swiper(".reviews-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});


var addItemId = 0;
function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick', 'del(' + addItemId + ')');


    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}

function del(item) {
    document.getElementById(item).remove();
}

function alertMsg() {
    alert("Your order has been successfully submitted. Thanks!");
}
function resetForm() {
    document.getElementById("form").reset();
}


