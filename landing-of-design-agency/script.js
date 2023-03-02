let dots = document.getElementsByClassName('dots-item'),
    dotsArea = document.getElementsByClassName('dots-block')[0],
    slides = document.getElementsByClassName('slides-item'),
    imageBlock = document.querySelector(".slides"),
    dotsBlock = document.querySelector(".dots"),
    nav = document.getElementsByClassName('nav_blok_2_link'),
    navArea = document.getElementsByClassName('navigation')[1],
    arrow = document.getElementsByClassName('btn'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    slideIndex = 1;

let images = [{
    url: "img/font2.png",
    title: "Rostov-on-Don, Admiral"
}, {
    url: "img/font2.2.png",
    title: "Sochi Thieves"
}, {
    url: "img/font2.3.png",
    title: "Rostov-on-Don Patriotic"
}];

init();

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prevBtn.onclick = function () {
    plusSlides(-1);
}

nextBtn.onclick = function () {
    plusSlides(1);
}

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}

navArea.onclick = function (e) {
    for (let i = 0; i < nav.length + 1; i++) {
        if (e.target.classList.contains('nav_blok_2_link') && e.target == nav[i - 1]) {
            currentSlide(i);
        }
    }
}

function init () {
    imageBlock.innerHTML = "";
    navArea.innerHTML = "";
    dotsBlock.innerHTML = "";
    images.forEach((image, index) => {

        let imageDiv = `<img class="slides-item" src="${images[index].url}">`;
        imageBlock.innerHTML += imageDiv;
        let navDiv = `<li><a class="nav_blok_2_link">${images[index].title}</a></li>`;
        navArea.innerHTML += navDiv;
        let dotDiv = `<div class="btn dots-item"></div>`;
        dotsBlock.innerHTML += dotDiv;
    });
}

document.getElementById("Call the measurer").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("email").value === "") {
        alert("Заполните поле email!");
    } else {
        alert("Спасибо за заявку, мы свяжемся с Вами в ближайшее время!");
    }
}

document.getElementById("submit").onclick = function () {
    if (document.getElementById("name1").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone1").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("Question").value === "") {
        alert("Напишите свой вопрос!");
    } else {
        alert("Спасибо за вопрос, мы свяжемся с Вами в ближайшее время!");
    }
}

 document.getElementById("submit2").onclick = function () {
     if (document.getElementById("name2").value === "") {
         alert("Заполните поле имя!");
     } else if (document.getElementById("phone2").value === "") {
         alert("Заполните поле телефон!");
     } else {
         alert("Спасибо за заявку, мы вышлем Вам ссылку на трансляцию!");
     }
}