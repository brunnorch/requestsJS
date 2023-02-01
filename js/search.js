import { connected } from "./conectionAPI.js";
import card from "./showVideos.js";


async function seek(event) {
    event.preventDefault();
    const searchBar = document.querySelector('[data-search]').value;
    const search = await connected.searchVideo(searchBar);

    const list = document.querySelector('[data-lista]');
    list.innerHTML = '';

    search.forEach(element => list.appendChild(card(element.titulo, element.descricao, element.url, element.imagem)));

    if (search.length === 0) {
        list.innerHTML = `
        <h2 class="mensagem__titulo">Nenhum video foi encontrado</h2>
        `;
    }
}

const button = document.querySelector('[data-btn]');
button.addEventListener('click', e => seek(e));