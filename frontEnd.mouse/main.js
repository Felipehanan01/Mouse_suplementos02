function toggleCarrosel(carroselId) {
    // Esconde todos os carrosséis
    const carrossels = document.querySelectorAll('.carrosel');
    carrossels.forEach(carrosel => {
        carrosel.style.display = 'none';
    });

    // Exibe o carrossel associado ao botão clicado
    const carrosel = document.getElementById(carroselId);
    if (carrosel.style.display === 'none' || carrosel.style.display === '') {
        carrosel.style.display = 'flex'; // Mostra o carrossel
    } else {
        carrosel.style.display = 'none'; // Esconde o carrossel
    }
}
