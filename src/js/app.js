let formBtn = document.getElementById('formBtn');
formBtn.addEventListener('click', function(e){
    e.preventDefault()
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let body = `First Name: ${firstName}; <br/> Last Name: ${lastName}; <br/> Email: ${email}; <br/> Phone: ${phone}; <br/> Subject: ${subject}; <br/> Message: ${message};`
    Email.send({
        SecureToken : "d95658a0-2340-48d6-81c5-92f83bedb77f",
        To : 'dtamurov19@gmail.com',
        From : email,
        Subject : subject,
        Body : body,
    }).then(
      message => alert(message)
    );
})

let menuToggleAnimation = document.querySelector('.toggle');
let navContainer = document.querySelector('.nav-container');
let buttonsContainer = document.querySelector('.buttons-toggle');
menuToggleAnimation.onclick = function() {
  menuToggleAnimation.classList.toggle('active')
  navContainer.classList.toggle('active')
  buttonsContainer.classList.toggle('active')
}


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1, 
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  slidesPerView: 1, 
});

const swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  slidesPerView: 1, 
});

const swiper4 = new Swiper('.swiper4', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },
  slidesPerView: 1, 
});
