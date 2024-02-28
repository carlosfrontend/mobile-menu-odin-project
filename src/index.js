import './styles/main.css';

const navbar = document.querySelector('#navbar');
const menuButton = document.querySelector('#menu-button');
const otherButtons = [...navbar.children].filter((el) => (el.id !== 'menu-button' ? el : null));
const homeButton = document.querySelector('#home-button');
const profileButton = document.querySelector('#profile-button');
const sendButton = document.querySelector('#send-button');
const settingsButton = document.querySelector('#settings-button');

const toggleMenuAnimation = (e) => {
  if (e.target.closest('#menu-button')) {
    otherButtons.forEach((btn) => btn.classList.toggle('showButtons'));
    navbar.classList.toggle('showNavbar');
    homeButton.classList.toggle('rotateLeft');
    profileButton.classList.toggle('rotateLeft');
    sendButton.classList.toggle('rotateRight');
    settingsButton.classList.toggle('rotateRight');
  }
  // eslint-disable-next-line no-shadow
  const handleFocus = (e) => {
    e.currentTarget.firstChild.classList.add('changeIconsStyles');
  };

  // eslint-disable-next-line no-shadow
  const handleBlur = (e) => {
    e.currentTarget.firstChild.classList.remove('changeIconsStyles');
  };
  otherButtons.forEach((el) => el.addEventListener('focus', handleFocus));
  otherButtons.forEach((el) => el.addEventListener('blur', handleBlur));
};

const animateMobileMenu = () => {
  menuButton.addEventListener('click', toggleMenuAnimation);
};

animateMobileMenu();
