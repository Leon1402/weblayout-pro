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
  allowTouchMove: true,
  initialSlide: 7,
  breakpoints: {
    321: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      allowTouchMove: false,
    },
    1025: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 50,
      allowTouchMove: false,
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
  spaceBetween: 40,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 38,
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
  allowTouchMove: false,
  breakpoints: {
    500: {
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

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('mymap', {
    center: [48.872197, 2.354224],
    zoom: 13,
    controls: []
  });
}

// 55.758468, 37.601088

const openAllCard = (button) => {
  button.style.display = 'none';
  document.querySelectorAll('.event__slide').forEach((item) => {
    item.style.display = 'flex'
  })
}

const hideCard = (button) => {
  button.style.display = 'flex';
  document.querySelectorAll('.event__slide_hide').forEach((item) => {
    item.style.removeProperty('display');
  });
  document.querySelector('.event__slide_hide-1024').style.removeProperty('display');
}

document.querySelector('.event__button').addEventListener('click', (e) => {
  openAllCard(e.currentTarget)
})

document.querySelector('.header__input').addEventListener('focus', () => {
  document.querySelector('.header__label').classList.add('header__label_active')
})

document.querySelector('.header__input').addEventListener('blur', () => {
  document.querySelector('.header__label').classList.remove('header__label_active')
})

let swiper5

const startSwiper = () => {
  const item = document.querySelector('.event__swiper');
  if (window.innerWidth <= 500 && item.dataset.mobile == 'false') {
    item.dataset.mobile = 'true';
    openAllCard(document.querySelector('.event__button'))
    swiper5 = new Swiper(item, {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".event__pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }
  if (window.innerWidth > 500) {
    hideCard(document.querySelector('.event__button'))
    if (item.classList.contains('swiper-container-initialized')) {
      item.dataset.mobile = 'false';
      swiper5.destroy()
    }
  }
}

startSwiper()

window.addEventListener('resize', (e) => {
  startSwiper();
})

const catalogButton = document.querySelectorAll('.catalog__lang-button');
const catalogContent = document.querySelectorAll('.catalog__item')

catalogButton.forEach(button => {
  button.addEventListener('click', e => {
    catalogButton.forEach(button => {
      button.classList.remove('catalog__lang-button_active');
    })
    catalogContent.forEach(item => {
      item.classList.remove('catalog__item_active')
    })
    e.currentTarget.classList.add('catalog__lang-button_active');
    catalogContent[e.currentTarget.dataset.index - 1].classList.add('catalog__item_active')
  })
})


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



