/* в этот файл добавляет скрипты*/
// const navElement = document.querySelector('.page-header__nav');
// const buttonElement = document.querySelector('.page-header__toggler');

// navElement.classList.add('page-header__nav--closed');

// buttonElement.addEventListener('click', () => {
//   if (navElement.classList.contains('page-header__nav--closed')) {
//     navElement.classList.add('page-header__nav--opened');
//     navElement.classList.remove('page-header__nav--closed');
//   } else {
//     navElement.classList.add('page-header__nav--closed');
//     navElement.classList.remove('page-header__nav--opened');
//   }
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
