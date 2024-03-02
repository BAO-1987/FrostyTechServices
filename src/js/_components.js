import './components/_burger';
import './components/_slider';

// const page = document.querySelector('.page');


// document.querySelectorAll('.btn--sign').forEach(btn => {
//   btn.addEventListener('click', () => {
//     document.querySelector('.formsapp-iframe.fullscreen').classList.add('is-open');
//     page ? .classList.add('open');
//   });
// });

// document.addEventListener('click', e => {
//   if (e.target.className === 'formsapp-iframe fullscreen') {
//     document.querySelector('.formsapp-iframe.fullscreen').classList.remove('is-open');
//     page?.classList.remove('open');
//   }
// });

const page = document.querySelector('.page');

document.querySelectorAll('.btn--sign').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.formsapp-iframe.fullscreen').classList.add('is-open');
    if (page) {
      page.classList.add('open');
    }
  });
});

document.addEventListener('click', e => {
  const targetClasses = e.target.className.split(' ');
  if (targetClasses.includes('formsapp-iframe') && targetClasses.includes('fullscreen')) {
    document.querySelector('.formsapp-iframe.fullscreen').classList.remove('is-open');
    if (page) {
      page.classList.remove('open');
    }
  }
});



