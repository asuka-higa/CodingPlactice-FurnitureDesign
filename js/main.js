'use strict'

const hambBtn = document.querySelector('.hamb-btn');
const topBar = document.querySelector('.top-bar');
const bottomBar = document.querySelector('.bottom-bar');
const hambOverlay = document.querySelector('.hamb-overlay');
const hambNav = document.querySelector('.hamb-nav');

hambBtn.addEventListener('click', () => {
  topBar.classList.toggle('active');
  bottomBar.classList.toggle('active');
  hambOverlay.classList.toggle('active');
  hambNav.classList.toggle('active');
});

hambOverlay.addEventListener('click', () => {
  topBar.classList.toggle('active');
  bottomBar.classList.toggle('active');
  hambOverlay.classList.toggle('active');
  hambNav.classList.toggle('active');
});


