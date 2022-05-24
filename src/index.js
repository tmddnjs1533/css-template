// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import './index.scss';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.slide_pagination',
    type: 'fraction',
  },
  autoplay: {
    delay: 600,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slide_btn_next',
    prevEl: '.slide_btn_prev',
  },
  a11y: {
    prevSlideMessage: '이전 슬라이드!!',
    nextSlideMessage: '다음 슬라이드',
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
  on: {
    init: function () {
      let thisSlide = this;
      let autoPlayBtn = document.querySelector('.wrap-autoplay-control > button');
      autoPlayBtn.addEventListener('click', (e) => {
        let autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
        if (autoPlayState === 'false') {
          autoPlayBtn.setAttribute('aria-pressed', 'true');
          thisSlide.autoplay.stop();
        } else if (autoPlayState === 'true') {
          autoPlayBtn.setAttribute('aria-pressed', 'false');
          thisSlide.autoplay.start();
        }
      });
    },
  },
});
