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

// Tomes 1-5
    const Serpent = L.icon({
        iconUrl: '../img/MAP/icons/tomes_1-5/Serpent.png', // Chemin vers votre icône personnalisée
        iconSize: [60, 60], // Taille de l'icône
        iconAnchor: [15, 15], // Point d'ancrage de l'icône (centre de l'icône)
        popupAnchor: [0, -15] // Point d'ancrage de la pop-up par rapport à l'icône
    });

    const Zodd = L.icon({
        iconUrl: '../img/MAP/icons/tomes_1-5/Zodd.png', // Chemin vers une autre icône personnalisée
        iconSize: [55, 55],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

// Tomes 5-10
    const Doldrey = L.icon({
        iconUrl: '../img/MAP/icons/tomes_5-10/Doldrey.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const GvG = L.icon({
        iconUrl: '../img/MAP/icons/tomes_5-10/GvG.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Torture = L.icon({
        iconUrl: '../img/MAP/icons/tomes_5-10/Torture.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Save = L.icon({
        iconUrl: '../img/MAP/icons/tomes_5-10/Save.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Wyald = L.icon({
        iconUrl: '../img/MAP/icons/tomes_5-10/Wyald.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Skull_Knight = L.icon({
        iconUrl: '../img/MAP/icons/tomes_5-10/Skull_Knight.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Eclipse = L.icon({
        iconUrl: '../img/MAP/icons/tomes_5-10/Eclipse.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

// Tomes 10-15
    const Puck  = L.icon({
        iconUrl: '../img/MAP/icons/tomes_10-15/Puck.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Farnese = L.icon({
        iconUrl: '../img/MAP/icons/tomes_10-15/Farnese.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Rosine = L.icon({
        iconUrl: '../img/MAP/icons/tomes_10-15/Rosine.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Disciples = L.icon({
        iconUrl: '../img/MAP/icons/tomes_10-15/Disciples.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });

    const Mozgus = L.icon({
        iconUrl: '../img/MAP/icons/tomes_10-15/Mozgus.png', // Chemin vers une autre icône personnalisée
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });


    // Emplacement des pings
    const pings = [
        // Tomes 1-5
            // Fight Compte Serpent = Château du Serpent Count
            { coords: [500, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_1-5/Serpent1.png" alt="Image"><br><p class="description"> <strong>Description : </strong> Guts combat et tue le Serpent Count, un apôtre déguisé en seigneur féodal qui terrorise un village. Ce combat introduit le monde brutal de "Berserk" et la quête de Guts contre les apôtres.</p></div>', icon: Serpent },
            // Combat contre Zodd l'Immortel = Champ de bataille à Midland    
            { coords: [600, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_1-5/Zodd1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Guts et Griffith rencontrent Zodd, un puissant apôtre, sur le champ de bataille. Guts et Griffith luttent ensemble contre Zodd, mais sont presque vaincus. Zodd les épargne après avoir remarqué le Beherit de Griffith.</p></div>', icon: Zodd },
        
        //Tomes 5-10
            // Bataille de la Forteresse de Doldrey = Forteresse de Doldrey
            { coords: [700, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_5-10/Doldrey1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>La Troupe du Faucon, dirigée par Griffith, planifie la prise de la forteresse stratégique de Doldrey. Bien que ce combat soit détaillé plus tard, la planification et les préparations commencent ici.</p></div>', icon: Doldrey },
            // Duel entre Guts et Griffith = Midland
            { coords: [800, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_5-10/GvG1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Guts et Griffith s affrontent en duel. Guts gagne et décide de quitter la Troupe du Faucon pour chercher son propre destin.</p></div>', icon: GvG },
            // Capture et Torture de Griffith = Wyndham, la capitale de Midland.
            { coords: [900, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_5-10/Torture1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Griffith est capturé et emprisonné par le roi de Midland pour avoir eu une relation avec la princesse Charlotte. Il est torturé dans la Tour de la Rédemption.</p></div>', icon: Torture },
            // Sauvetage de Griffith =  Tour de la Rédemption, Wyndham
            { coords: [1000, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_5-10/Save1.png" alt="Image"><br><p class="description"> <strong>Description : </strong> Guts et la Troupe du Faucon infiltrent la Tour de la Rédemption pour sauver Griffith. Ils découvrent que Griffith est gravement mutilé et incapable de continuer comme avant.</p></div>', icon: Save },
            //Fight Wyald =  Midland
            { coords: [1100, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_5-10/Wyald1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Guts et la Troupe du Faucon affrontent Wyald, un apôtre monstrueux, alors qu ils fuient avec Griffith. Guts parvient à le vaincre malgré sa transformation démoniaque, démontrant sa détermination et sa force exceptionnelle.</p></div>', icon: Wyald },
            
        //Tomes 10-15+
            //Apparition de Skull Knight = camp de la troupe 
            { coords: [1200, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_10-15/Skull_Knight1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Skull Knight apparaît pour avertir Guts des dangers à venir, notamment l Éclipse.</p></div>', icon: Skull_Knight },
            //La Nuit de l'Éclipse =  Dimension alternative 
            { coords: [1300, 500], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_10-15/Eclipse1.png" alt="Image"><br><p class="description"> <strong>Description : </strong> L Éclipse est un événement cataclysmique où la Troupe du Faucon est sacrifiée par Griffith pour devenir Femto, un membre des God Hand. Guts et Casca sont les seuls survivants, mais Casca perd sa raison.</p></div>', icon: Eclipse },
            // Puck = village de Kokko
            { coords: [500, 600], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_10-15/Puck1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Guts sauve Puck au village de Kokko, qui devient son compagnon de voyage. Puck apporte une touche de légèreté et des capacités de guérison précieuses.</p></div>', icon: Puck },
            // Rencontre avec Farnese et les Chevaliers de la Sainte Chaîne de Fer = Midland
            { coords: [600, 600], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_10-15/Farnese1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Farnese, Serpico et Azan, membres des Chevaliers de la Sainte Chaîne de Fer, poursuivent Guts, le croyant être un hérétique. Après plusieurs affrontements, ils finissent par rejoindre son groupe. Guts affronte Farnese et ses chevaliers. Farnese est fascinée et effrayée par Guts, tandis que Serpico commence à comprendre la véritable nature de Guts</p></div>', icon: Farnese },
            // Combat contre Rosine = Misty Valley, proche de Midland.
            { coords: [700, 600], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_10-15/Rosine1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Guts affronte l apôtre Rosine, qui a pris la forme d une fée insectoïde. La bataille se déroule dans une forêt dense et est l une des plus intenses de cette période.</p></div>', icon: Rosine },
           
        //Tomes 15-20 
            // Premiers affrontements avec les Disciples de Mozgus = Tour de la Conviction.
            { coords: [800, 600], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_15-20/Disciples1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Guts commence à se confronter aux disciples de Mozgus, chacun possédant des capacités uniques et effrayantes.</p></div>', icon: Disciples },
            // Combat final contre Mozgus  = Tour de la Conviction.
            { coords: [800, 600], info: '<div style="text-align: center;"><img class="popup-image" src="../img/MAP/icons/tomes_15-20/Mozgus1.png" alt="Image"><br><p class="description"> <strong>Description : </strong>Guts affronte Mozgus dans une bataille intense. Mozgus, utilisant ses pouvoirs de transformation démoniaque, devient une menace redoutable. Guts doit utiliser toute sa force et son habileté pour vaincre Mozgus et ses disciples.</p></div>', icon: Mozgus }
            




    ];

    // Ajouter chaque ping à la carte avec une pop-up contenant des informations et une icône personnalisée
    pings.forEach(ping => {
        L.marker(ping.coords, { icon: ping.icon }).addTo(map) // Ajouter un marqueur aux coordonnées spécifiées avec une icône personnalisée
            .bindPopup(ping.info); // Lier une pop-up avec des informations au marqueur
    });
});
