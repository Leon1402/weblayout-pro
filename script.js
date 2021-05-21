const swiper = new Swiper('.hero__swiper', {
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 6000,
  },
});

const swiper2 = new Swiper(".galery__swiper", {
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 50,
  allowTouchMove: false,
  initialSlide: 7,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    1025: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
  pagination: {
    el: ".galery__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".galery__next",
    prevEl: ".galery__prev",
  },
});

const swiper3 = new Swiper(".editions__swiper", {
  slidesPerView: 1,
  allowTouchMove: false,
  spaceBetween: 50,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: ".editions__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".editions__next",
    prevEl: ".editions__prev",
  },
});

const swiper4 = new Swiper(".projects__swiper-container", {
  slidesPerView: 1,
  spaceBetween: 50,
  setWrapperSize: '200px',
  allowTouchMove: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: ".projects__next",
    prevEl: ".projects__prev",
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
}

// 55.758468, 37.601088

document.querySelector('.event__button').addEventListener('click', () => {
  document.querySelectorAll('.event__item_hide').forEach((item) => {
    item.classList.remove('event__item_hide')
  })
})

document.querySelector('.header__input').addEventListener('focus', () => {
  document.querySelector('.header__label').classList.add('header__label_active')
})

document.querySelector('.header__input').addEventListener('blur', () => {
  document.querySelector('.header__label').classList.remove('header__label_active')
})