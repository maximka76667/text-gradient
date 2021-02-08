const btn = document.querySelector('.btn');
const page = document.querySelector('.page');

function anim() {
  page.classList.toggle('page_animated');
}

btn.addEventListener('click', anim);