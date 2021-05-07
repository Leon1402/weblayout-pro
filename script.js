const swiper = new Swiper('.swiper__container', {
  allowTouchMove: false,
  loop: true,
  autoplay: {
     delay: 6000,
  },
});

const swiper2 = new Swiper(".galery-swiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  allowTouchMove: false,
  initialSlide: 7,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const headerButtons = document.querySelectorAll('.header-list__button');
const dropdowns = document.querySelectorAll('.dropdown');

headerButtons.forEach(el => {
  el.addEventListener('click', e => {
    const drop = e.currentTarget.nextElementSibling;
    e.cancelBubble = true;
    e.currentTarget.classList.toggle('header-list__button_active')

    dropdowns.forEach(item => {
      if (item != drop)
      item.classList.remove('dropdown_active');
    })

    headerButtons.forEach(item => {
      if (item != e.currentTarget)
      item.classList.remove('header-list__button_active');
    })

    drop.classList.toggle('dropdown_active');
  });
})

dropdowns.forEach(el => {
  el.addEventListener('click', e => {e._isDropdownClick = true})
});

window.addEventListener('click', e => {
  if (!e._isDropdownClick) {
    dropdowns.forEach(item => {
      item.classList.remove('dropdown_active');
    })
    headerButtons.forEach(item => {
      item.classList.remove('header-list__button_active');
    })
  }
});

