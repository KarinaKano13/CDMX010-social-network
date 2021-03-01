// AQUI ESTARIAN LOS TEMPLATES
export const home = (container) => {
  const html = `
    <div id="header">
        <img id="snipple" src="resources/garabato.png" alt="logo">
        <img id="userAvatar" class="icons" src="resources/user.png" alt="genericAvatar">
        <img id="searchIcon" class="icons" src="resources/search.png" alt "searchIcon">
    </div>

    <h1>¡Hola Elena!</h1>

    <div>
      <div id="newPost">
          <h6>Comparte tus hallazgos:</h6>
            <input type="text" placeholder="Título de la publicación" id="title"></input>
            <textarea placeholder="Subtítulo" id="subtitle"></textarea>
            <textarea placeholder="Cuerpo de la publicación" id="body"></textarea>
            <button id="saveButton">Publicar</button>
      </div>
    </div>

    <div id="post"></div>

    <div id="container"></div>
  `;
  container.innerHTML = html;
};

export const renderPost = (param) => `
  <div id="cardContainer">
    <h2 id="rendertitle">${param.title}</h2><br>
    <h3 id"cardSubtitle">${param.subtitle}</h3><br>
    <p id="renderBody">${param.body}</p>
  </div>
  <div>
    <button id="like">LIKE</button>
    <button id="edit">Edit</button>
    <button id="delete">DELETE</button>
  </div>
  `;
