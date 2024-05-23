const pokeName = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const sprite = document.getElementById("sprite-container");
const type = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const getPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.roncks/api/pokemo/${pokemonNameOrId}`
    );
    const data = await response.json();

    // Pokemon Info
    pokeName.textContent = `${data.name.toUpperCase()}`;
    id.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    sprite.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;
    // Pokemon Stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;
    // Pokemon Types
    type.innerHTML = data.types.map((type) => `<span>${type.type.name.toUpperCase()}</span>`).join("");
  } catch (err) {
    alert("Pokémon not found");
  }
};

searchBtn.addEventListener("click", getPokemon);
