# Pokemon-API

## TP

Le but de cet exercice est de communiquer avec Tyradex, une des pricipales API Pokémon en français.  
Et d'afficher nos Pokémons de manière dynamique dans des cards Bootstrap.

### Consignes : Récupérer et afficher les Pokémon de la 1ère génération
Dans cet exercice, vous allez utiliser JavaScript pour récupérer et afficher les Pokémon de la 1ère génération à partir d'une API. Vous apprendrez à manipuler les données pour créer une interface visuelle.

### Étape 1 : Récupérer les données de l'API
Déclarez une URL correspondant à l'API des Pokémon de la 1ère génération :

```js
const url = "https://tyradex.app/api/v1/gen/1";
```

Utilisez la fonction fetch pour récupérer les données. Par exemple :

```js
fetch(url).then(function(response) {
    return response.json();
  });
```

Stocker la réponse dans une variable :

```js
    const pokedex = response.json();
```

### Étape 2 : Manipuler et afficher les données

1. Parcourez les données retournées par l'API avec la méthode **forEach**.
À chaque itération, récupérez les informations importantes pour chaque Pokémon :

 - Numéro
 - Nom (en français)
 - Image (regular)
 - Types

Les Pokémons pouvant avoir deux types, on va les _mapper_

```js
pokemon.types.map(type => type.name).join(", ") // à mettre dans notre variable `types`
```

2. Créez dynamiquement avec la méthode `createElement` une _card_ Bootstrap pour chaque Pokémon, et la remplir avec les éléments suivants :

 - L'image du Pokémon
 - Un titre qui contient le numéro et le titre
 - Un paragraphe indiquant le(s) type(s)

3. Ajoutez ces cartes avec la méthode `appendChild` dans `<div class="pokemon-list">`.

4. Ajouter du CSS pour rendre le rendu impeccable !

### Script de départ

```js
const url = "https://tyradex.app/api/v1/gen/1";

const mesPokemon = fetch(url);
 
mesPokemon.then(function(response) {

    // stocker la reponse json dans une variable

    // faire un then qui initialise une fonction inclant un forEach pour parcourir l'API
    
    // Extraire les informations nécessaires
     
    // Sélectionner le conteneur HTML principal
     
    // Créer la card
    
    // Ajouter l'image, le titre, les types

    // Ajouter les éléments à la carte

    // Ajouter la carte dans le conteneur principal
     
})
    // Gérer les erreurs
  .catch(function(error) {
    console.error("Erreur :", error);
  });
```
