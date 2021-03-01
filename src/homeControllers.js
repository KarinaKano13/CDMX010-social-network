import { savePost, getData, db } from './firebase.js';
import { renderPost, home } from './homePages';

home();

const postbutton = document.getElementById('saveButton');
const titleCard = document.getElementById('title');
const subtitleCard = document.getElementById('subtitle');
const bodyCard = document.getElementById('body');
const showData = document.getElementById('post');

// FUNCIÓN PARA POSTEAR PUBLICACIÓN
postbutton.addEventListener('click', (e) => {
  console.log('estoy aqui')
  e.preventDefault();
  const post = {
    title: titleCard.value,
    subtitle: subtitleCard.value,
    body: bodyCard.value,
    fecha: Date.now(),
  };

  if (!titleCard.value.trim() || !subtitleCard.value.trim() || !bodyCard.value.trim()) {
    console.log('Input vacío!');
    return;
  }

  savePost(post)
    .then((result) => {
      showData.innerHTML += renderPost(post), like(), console.log(post.title, post.subtitle, post.body);
  })
    .catch((error) => console.log(error));

  titleCard.value = '';
  subtitleCard.value = '';
  bodyCard.value = '';
});

// FUNCIÓN PARA DAR LIKE
const like = () => {
    const likebutton = document.getElementById('like');
    likebutton.addEventListener('click', () => {
      console.log('Yo voy a dar Like');
    });
  };