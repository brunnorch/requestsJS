async function listVideos() {
    const connection = await fetch('https://my-json-server.typicode.com/brunnorch/requestsJS/videos');
    const conversion = await connection.json();
    return conversion;
}

async function addVideo(title, describle, url, image) {
    const connection = await fetch('https://my-json-server.typicode.com/brunnorch/requestsJS/videos', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: describle,
            url: url,
            imagem: image
        })
    });
    if (!connection.ok) {
        throw new Error('Não foi possivel adicionar esse video');
    }
    const conversion = await connection.json();
    return conversion
}

async function searchVideo(search) {
    const connection = await fetch(`https://my-json-server.typicode.com/brunnorch/requestsJS/videos?q=${search}`);
    const conversion = connection.json();
    return conversion;
}

export const connected = {
    listVideos,
    addVideo,
    searchVideo,
}