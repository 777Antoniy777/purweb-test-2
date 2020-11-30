const body = document.querySelector('body');
const menuButton = body.querySelector('.nav__menu-button');

const handleButtonClick = () => {
  body.classList.toggle('menu-open');
};

menuButton.addEventListener('click', handleButtonClick);
