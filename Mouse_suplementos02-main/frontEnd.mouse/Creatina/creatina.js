document.querySelectorAll('.stars').forEach(starsContainer => {
    const productId = starsContainer.getAttribute('data-product-id');
    const stars = starsContainer.querySelectorAll('i');
    const averageRatingDisplay = starsContainer.nextElementSibling.querySelector('.average-rating');

    let ratings = []; // Array para armazenar as avaliações

    // Evento de clique para cada estrela
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = parseInt(star.getAttribute('data-value'));

            // Adicionar avaliação ao array
            ratings.push(ratingValue);

            // Calcular média
            const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);

            // Atualizar exibição
            averageRatingDisplay.textContent = averageRating;

            // Atualizar destaque das estrelas
            updateStarHighlight(ratingValue, stars);
        });
    });

    // Atualiza o destaque das estrelas
    function updateStarHighlight(value, stars) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});
