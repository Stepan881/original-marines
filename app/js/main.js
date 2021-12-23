"use strict";

const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.slider__button--prev',
    prevEl: '.slider__button--next',
  },

  pagination: {
    el: ".slider__pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      function number(d) {
        let name = document.querySelectorAll(`.js-head-slide`);

        return `<span class="slider__pagination-count">${d}</span>
        <span class="slider__pagination-head">${name[d].textContent}</span>
        <div class="slider__border">
          <div class="slider__border-bold" style="left: ${(100 / total) * (current - 1 )}%; width: ${100 / total}%"></div>
        </div>
        <span class="slider__fraction"><span>${d} / ${total}</span>brands</span>
        <div class="slider__ico">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4197C12.63 22.1897 11.36 22.1897 10.58 21.4197L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.49 12.66 13.58 14.51 12.28 14.96Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>`
      }

      return number(current);

    }
  },


});

let swiperShops = new Swiper(".js-swiper-shops", {
  loop: true,
  slidesPerView: 'auto',
  initialSlide: 3,
  wrapperClass: 'js-swiper-wrapper',
  slideClass: 'shop',
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

let swiperProud = new Swiper(".js-swiper-proud", {

  slidesPerView: 'auto',
  wrapperClass: 'js-swiper-wrapper',
  slideClass: 'js-card',
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      loop: true,
      centeredSlides: true,
    },
    769: {
      loop: false,
    },
    debugger: false
  },

});


const tag = document.querySelector(`.js-html`);
const navNenu = () => {

  const close = document.querySelector(`.js-close`);
  const jsNavBtn = document.querySelector(`.js-nav-btn`);

  if (!tag && !close && !jsNavBtn) return;

  jsNavBtn.addEventListener(`click`, () => {
    tag.classList.add(`html__open`);
  });

  close.addEventListener(`click`, () => {
    tag.classList.remove(`html__open`);

  });

}

navNenu();

const scroll = () => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {

      tag.classList.remove(`html__open`);

      const blockID = anchor.getAttribute('href').substr(1)
      if (!blockID) return;


      const block = document.getElementById(blockID);

      if (!block) return;
      e.preventDefault()
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

scroll();

const linkText = () => {
  const text = document.querySelectorAll(`.js-text`);
  if (!text) return;
  const jsBtn = document.querySelectorAll(`.js-btn-text`);

  jsBtn.forEach(btn => {
    btn.addEventListener(`click`, (e) => {
      e.preventDefault();

      if (!btn.previousElementSibling.matches(`js-text`)) {
        btn.previousElementSibling.classList.remove(`brand__container`)
        btn.remove();
      }

    })
  })

}

linkText();


const modalForm = () => {
  const btnCommand = document.querySelector(`.js-modal-command-form`);
  const btnDiscounts = document.querySelector(`.js-modal-discounts-form`);
  const btnCooperation = document.querySelector(`.js-modal-cooperation-form`);
  const modalCommand = document.querySelector(`.js-modal-command`);
  const modalDiscounts = document.querySelector(`.js-modal-discounts`);
  const modalCooperation = document.querySelector(`.js-modal-cooperation`);
  const close = document.querySelectorAll(`.js-modal-close`);


  const openModal = (btn, modal) => {
    btn.addEventListener(`click`, (e) => {
      e.preventDefault();
      modal.classList.add(`modal--open`);
    })
  }


  openModal(btnCommand, modalCommand);
  openModal(btnDiscounts, modalDiscounts);
  openModal(btnCooperation, modalCooperation);


  close.forEach(btn => {
    btn.addEventListener(`click`, (e) => {
      e.preventDefault();
      btn.closest(`.modal--open`).classList.remove(`modal--open`);
    })
  })

}
modalForm();