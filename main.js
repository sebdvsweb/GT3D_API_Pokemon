const url = "https://tyradex.app/api/v1/gen/2";

const mesPokemon = fetch(url);
 
mesPokemon.then(function(response) {

    // stocker la reponse json dans une variable
    const pokedex = response.json();

    // faire un then qui initialise une fonction inclant un forEach pour parcourir l'API
    pokedex.then(function(data){

        data.forEach(function(pokemon){

           /*
           
           if (pokemon.pokedex_id === 0) {
                return;
            }

            */

            // Extraire les informations nécessaires
            const numero = pokemon.pokedex_id; // on récupère l'ID
            const nom = pokemon.name.fr; // on récupère le nom français
            const image = pokemon.sprites.regular; // on récupère l'image classique
            const types = pokemon.types.map(type => type.name).join(", "); // Plante, Poison

            // Sélectionner le conteneur HTML principal
            let container = document.querySelector('.pokemon-list');
                
            // Créer la card
            let card = document.createElement('div'); // <div></div>
            card.className = "pokemon-card";

            // Ajouter l'image, le titre, les types
            let imgPokemon = document.createElement('img'); // </img>
            imgPokemon.src = image;
            imgPokemon.style.width = "100%";

            let nomPokemon = document.createElement('h4'); // <h4></h4>
            nomPokemon.textContent = '#' + numero + ' ' + nom; // #1 Bulbizarre

            let typePokemon = document.createElement('p') // <p></p>
            typePokemon.textContent = 'Type(s) : ' + types;

            // Ajouter les éléments à la carte
            card.appendChild(imgPokemon);
            card.appendChild(nomPokemon);
            card.appendChild(typePokemon);

            // Ajouter la carte dans le conteneur principal
            container.appendChild(card);

        })

    })
     
})
    // Gérer les erreurs
  .catch(function(error) {
    console.error("Erreur :", error);
  });
