document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.querySelector('.random-image');

    const randomId = Math.floor(Math.random() * 151) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.sprites.front_default;
            imgElement.src = imageUrl;
        })
        .catch(error => console.error('Error al obtener el Pokémon:', error));
});
