// Attendre que le contenu du document soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser la carte avec un système de coordonnées simple et un niveau de zoom minimum de -5
    const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -5
    });

    // Définir les limites de la carte en fonction de la taille de l'image
    // Ici, on suppose que l'image fait 1000x1000 pixels, ajustez les valeurs selon la taille réelle de votre image
    const bounds = [[0, 0], [1000, 1000]];

    // Ajouter l'image de la carte comme une superposition
    // Assurez-vous que le chemin vers l'image est correct
    const image = L.imageOverlay('../img/MAP/Map.png', bounds).addTo(map);

    // Ajuster la vue de la carte pour s'adapter aux limites définies
    map.fitBounds(bounds);

    // Tableau de pings avec des coordonnées et des informations pour les pop-ups
    const pings = [
        { coords: [500, 500], info: 'Point 1' },
        { coords: [200, 300], info: 'Point 2' },
        { coords: [800, 700], info: 'Point 3' }
    ];

    // Ajouter chaque ping à la carte avec une pop-up contenant des informations
    pings.forEach(ping => {
        L.marker(ping.coords).addTo(map) // Ajouter un marqueur aux coordonnées spécifiées
            .bindPopup(ping.info); // Lier une pop-up avec des informations au marqueur
    });
});
