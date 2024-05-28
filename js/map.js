// Attendre que le contenu du document soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    // Dimensions de l'image
    const imageWidth = 2048;
    const imageHeight = 1626;

    // Limites de la carte
    const bounds = [[0, 0], [imageHeight, imageWidth]];

    const map = L.map('map', {
        crs: L.CRS.Simple,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        zoomControl: true
    });

    // Image de la map
    const image = L.imageOverlay('../img/MAP/Map.png', bounds).addTo(map);

    // Zoom min/max
    const minZoom = map.getBoundsZoom(bounds, true);
    map.setMinZoom(minZoom);
    map.setMaxZoom(minZoom + 2.5); // Zoom max 2.5x

    // Centrer la carte et régler le zoom initial pour afficher la carte entière
    map.setView([imageHeight / 2, imageWidth / 2], minZoom);

    // Définir des icônes personnalisées
    const customIcon1 = L.icon({
        iconUrl: '../img/MAP/icons/tomes_1-5/custom-icon1.png', // Chemin vers votre icône personnalisée
        iconSize: [60, 60], // Taille de l'icône
        iconAnchor: [15, 15], // Point d'ancrage de l'icône (centre de l'icône)
        popupAnchor: [0, -15] // Point d'ancrage de la pop-up par rapport à l'icône
    });

    const customIcon2 = L.icon({
        iconUrl: '../img/MAP/icons/tomes_1-5/custom-icon2.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const customIcon3 = L.icon({
        iconUrl: '../img/MAP/icons/tomes_1-5/custom-icon3.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    // Emplacement des pings
    const pings = [
        { coords: [500, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_1-5/point1-image.png" alt="Image"><br>Point 1</div>', icon: customIcon1 },
        { coords: [600, 500], info: '<img class="popup-image" src="../img/MAP/icons/tomes_1-5/point2-image.png" alt="Image"><br>Point 2', icon: customIcon2 },
        { coords: [700, 500], info: '<img class="popup-image" src="../img/MAP/icons/tomes_1-5/point3-image.png" alt="Image"><br>Point 3', icon: customIcon3 }
    ];

    // Ajouter chaque ping à la carte avec une pop-up contenant des informations et une icône personnalisée
    pings.forEach(ping => {
        L.marker(ping.coords, { icon: ping.icon }).addTo(map) // Ajouter un marqueur aux coordonnées spécifiées avec une icône personnalisée
            .bindPopup(ping.info); // Lier une pop-up avec des informations au marqueur
    });
});
