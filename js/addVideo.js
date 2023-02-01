import { connected } from "./conectionAPI.js";

const form = document.querySelector('[data-form]');

async function newVideo(e) {
    e.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const title = document.querySelector('[data-title]').value;
    const image = document.querySelector('[data-image]').value;
    const describle = Math.floor(Math.random() * 10).toString();
    try {
        await connected.addVideo(title, describle, url, image);
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

form.addEventListener('submit', e => newVideo(e));

