// eslint-disable-next-line import/no-cycle
import { onNavigate, routes, rootDiv } from './routes.js';
// import { createPost } from './app.js';

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

function routing(e) {
  switch (e) {
    case 'snipple':
      onNavigate('/');
      break;
    case 'userAvatar':
      onNavigate('/logIn');
      break;
    case 'searchIcon':
      onNavigate('/search');
      break;
    case 'cardContainer':
      onNavigate('/post');
      break;
    case 'plusIcon':
      onNavigate('/createPost');
      break;
    default:
      onNavigate('¨/');
      break;
  }
};

const link = document.querySelectorAll('.link');

link.forEach((boton) => {
  boton.addEventListener('click', () => {
    console.log(boton.id);
    routing(boton.id);
  });
});