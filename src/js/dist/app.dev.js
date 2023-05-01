"use strict";

var formBtn = document.getElementById('formBtn');
formBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var body = "First Name: ".concat(firstName, "; <br/> Last Name: ").concat(lastName, "; <br/> Email: ").concat(email, "; <br/> Phone: ").concat(phone, "; <br/> Subject: ").concat(subject, "; <br/> Message: ").concat(message, ";");
  Email.send({
    SecureToken: "d95658a0-2340-48d6-81c5-92f83bedb77f",
    To: 'dtamurov19@gmail.com',
    From: email,
    Subject: subject,
    Body: body
  }).then(function (message) {
    return alert(message);
  });
});
var menuToggleAnimation = document.querySelector('.toggle');
var navContainer = document.querySelector('.nav-container');
var buttonsContainer = document.querySelector('.buttons-toggle');

menuToggleAnimation.onclick = function () {
  menuToggleAnimation.classList.toggle('active');
  navContainer.classList.toggle('active');
  buttonsContainer.classList.toggle('active');
};

var swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1
});
var swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2'
  },
  slidesPerView: 1
});
var swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3'
  },
  slidesPerView: 1
});
var swiper4 = new Swiper('.swiper4', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4'
  },
  slidesPerView: 1
});