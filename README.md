# Berserk - Explorer l'Univers du Manga

Le projet comprend une carte interactive et une chronologie des événements majeurs du manga "Berserk" de Kentaro Miura, permettant aux utilisateurs de suivre les moments clés, les personnages ainsi que les lieux marquants de l'histoire.

### Fonctionnalités Principales

- **Carte Interactive** : Localisez les lieux importants (Midland, Empire Kushan, etc.) avec des détails sur les batailles et événements associés.
- **Chronologie des Événements** : Suivez l'évolution de l'histoire grâce à une ligne du temps interactive.
- **Descriptions Détaillées** : Découvrez des informations sur les personnages et les événements marquants, avec des résumés clairs.

### Structure du Projet

1. **Données et Contenu** : Lieux, événements et personnages clés avec leurs rôles dans l'histoire.
2. **Interface Utilisateur** : Carte et chronologie interactives pour naviguer facilement dans l'univers de "Berserk".
3. **Fonctionnalités Techniques** : Affichage dynamique des informations selon la sélection de l'utilisateur.

### Lancer le projet

Localement (rapide) :

```powershell
# Depuis la racine du projet
python -m http.server 8000
# ou si 'python' n'est pas disponible mais que le lanceur l'est :
py -3 -m http.server 8000
```

Prévisualiser sans Python :

- Utiliser l'extension VS Code "Live Server" et ouvrir `templates/Kentaro_Miura.html`.
- Installer Node et `http-server` : `npm i -g http-server` puis `http-server -p 8000`.

Déployer sur GitHub Pages

1. Dans GitHub, ouvre la page du dépôt -> Settings -> Pages.
2. Sous "Source", choisis "Branch: main" et "Folder: / (root)" puis Enregistrer.
3. Le site sera disponible à l'URL indiquée (quelques minutes pour la première publication).

Remarques :
- J'ai ajouté un fichier `index.html` à la racine qui redirige vers `templates/Kentaro_Miura.html` — cela permet à GitHub Pages (source = root) d'afficher ta page principale sans déplacer les fichiers.
- Si tu préfères servir directement depuis un dossier `docs/` ou une branche `gh-pages`, on peut aussi copier les fichiers nécessaires dans `docs/` et configurer Pages sur `docs/`.
