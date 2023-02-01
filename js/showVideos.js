import { connected } from "./conectionAPI.js";

const list = document.querySelector('[data-lista]');

export default function card(titulo, descricao, url, imagem) {
    const newCard = document.createElement('li');
    newCard.className = 'videos__item';
    newCard.innerHTML = `
            <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;
    return newCard;
}

async function listVideos() {
    try {
        const listAPI = await connected.listVideos();
        listAPI.forEach(elemento => list.appendChild(card(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch {
        list.innerHTML = `
        <h2 class="mensagem__titulo">Não foi possivel carregar a lista de videos</h2>
        `;
    }
}

listVideos();