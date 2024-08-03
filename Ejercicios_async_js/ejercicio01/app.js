document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('character-list');
    const imgElement = document.querySelector('.character-image');

    
    fetch('https://thronesapi.com/api/v2/Characters')
        .then(response => response.json())
        .then(data => {
            data.forEach(character => {
                const option = document.createElement('option');
                option.value = character.imageUrl;
                option.textContent = character.fullName;
                selectElement.appendChild(option);
            });
        })
        .catch(error => console.error('Error al obtener los personajes:', error));

    selectElement.addEventListener('change', (event) => {
        const imageUrl = event.target.value;
        imgElement.src = imageUrl;
    });
});
