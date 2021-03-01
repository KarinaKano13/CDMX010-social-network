// eslint-disable-next-line import/no-cycle
import { onNavigate, routes, rootDiv } from './routes.js';
import { home, renderPost } from './home.js';
import { getData } from './firebase.js';

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;
