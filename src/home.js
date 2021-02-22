// eslint-disable-next-line import/no-cycle
const home = () => `

<div id="header">
    
        <img id="snipple" src="resources/garabato.png" alt="logo" class="link">

        <img id="userAvatar" class="link" src="resources/user.png" alt="genericAvatar">
    
        <img id="searchIcon" src="resources/search.png" alt "searchIcon">

</div>

<h1>¡Hola Elena!</h1>

<div>
    <textarea>Crear publicación</textarea>
    <img id="plusIcon" class="link" src="resources/plus.png" alt="plusIcon">
   
</div>

<div>
    
        <div id="cardContainer" class="link" >
            <img id="authorAvatar" class="icons" src="resources/user.png" alt="authorAvatar">
            <h2>Seres de luz</h2>
            <h3>Apuntes sobre el papel de la iluminación 
            escénica en la coreografía.</h3>
            <img id="readingTime" class="icons" src="resources/clock.png" alt="readingTime">
        </div>

<div>
    <input type="text" id="title"></input>
    <button id="saveButton">Publicar</button>
</div>
`;

export default home;
