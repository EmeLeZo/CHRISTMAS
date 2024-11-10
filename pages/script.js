// Selección de los elementos
const botonSi = document.getElementById('botonSi');
const botonNo = document.getElementById('botonNo');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrarModal');

// Evento para el botón "Sí"
botonSi.addEventListener('click', () => {
    // Mostrar el modal en el centro de la pantalla
    modal.style.display = 'flex';
    spotifyPlayer.src = "https://open.spotify.com/intl-es/track/1dGr1c8CrMLDpV6mPbImSI?si=b27b1740fbba4dd6"; // Cambia la URL por la de tu canción
});

// Evento para el botón "No"
botonNo.addEventListener('mouseover', () => {
    // Generar una posición aleatoria para mover el botón "No"
    const x = Math.random() * (window.innerWidth - botonNo.clientWidth);
    const y = Math.random() * (window.innerHeight - botonNo.clientHeight);
    botonNo.style.position = "absolute";
    botonNo.style.left = `${x}px`;
    botonNo.style.top = `${y}px`;
});

// Evento para cerrar el modal al hacer clic en "Aceptar"
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
