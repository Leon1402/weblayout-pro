const swiper = new Swiper('.hero__swiper', {
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

const swiper3 = new Swiper(".editions__swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper4 = new Swiper(".projects__swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  setWrapperSize: '200px',
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const choices = new Choices('.galery__select', {});

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
  el.addEventListener('click', e => { e._isDropdownClick = true })
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

tippy('.tooltip1', {
  content: 'Пример современных тенденций - современная методология разработки',
  maxWidth: 264,
});

tippy('.tooltip2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
  maxWidth: 264,
});

tippy('.tooltip3', {
  content: 'В стремлении повысить качество ',
  maxWidth: 264,
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('mymap', {
    center: [48.872197, 2.354224],
    zoom: 13,
    controls: []
  });

  // myPlacemark = new ymaps.Placemark([48.872197, 2.354224], {
  //   hintContent: 'улица дю Фобур Сен Дени, 54',
  // }, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'src/icon.svg',
  //   iconImageSize: [28, 40],
  //   iconImageOffset: [-5, -38]
  // }),

  //   myMap.geoObjects
  //     .add(myPlacemark)
}