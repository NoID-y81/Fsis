document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialisation de la carte Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiZm9ybWF0aW9uc2lzIiwiYSI6ImNreGFiNTl3aDBkMjUydXAwNDJxODR5b2MifQ.cHNXWQt2YQxs5LeBc9gpyg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [2.344, 48.956],  // Coordonnées pour Villetaneuse
        zoom: 12
    });

    // Ajout d'un marqueur à la carte
    new mapboxgl.Marker()
        .setLngLat([2.344, 48.956])  // Coordonnées précises pour le point de marqueur
        .addTo(map);
});
