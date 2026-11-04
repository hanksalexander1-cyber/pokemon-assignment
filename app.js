import { Pokemon, getPokemon, loadPokemon } from "./pokemond.js";

let pokeymone = 0
let typers = []
document.getElementById("pokeamonContainer").innerHTML = ""

async function getAllPokemon() {
    document.getElementById("errorCatch").style.display = "none";
    document.getElementById("pokeamonContainer").innerHTML = "";

    let pokemonList = await loadPokemon(1, 12)

    for (let i = 0; i < pokemonList.length; i++) {
        let pokemon = pokemonList[i]
        typers = pokemon.types
        document.getElementById("pokeamonContainer").innerHTML += getElement(pokemon)
        pokeymone++
        updateCreatedCounter()
    }
}

function updateCreatedCounter() {
    document.getElementById("createdCounter").textContent = `created: ${Pokemon.getTotalCreated()}`
}

function makePokemon(makePoke) {
    document.getElementById("pokeamonContainer").innerHTML += getElement(makePoke)
}

function getElement(data) {
    return `
    <div class="pokmone">
    <h3>${data.name.toUpperCase()}</h3>
        <p>#${data.id}</p>
        <img src="${data.image}" alt="">
        <ul style = "background-color: purple;">${data.types.map(type => `<li>${type}</li>`).join("")}</ul>
        <ul style="background-color: red;">Attack: ${data.attackPower}</ul>
        <ul style="background-color: darkblue;">Defense: ${data.defense}</ul>
        <ul style="background-color: green;">HP: ${data.health}/${data.maxHealth}</ul>
    </div>`
}

async function searchPokemon(name) {
    try {
        const pokemon = await getPokemon(name)
        document.getElementById("errorCatch").style.display = "none"
        document.getElementById("pokeamonContainer").innerHTML = ""
        typers = pokemon.types
        document.getElementById("pokeamonContainer").innerHTML += getElement(pokemon)
        pokeymone++
        updateCreatedCounter()
    } catch (error) {
        document.getElementById("errorCatch").style.display = "block"
    }
}

document.getElementById("search").addEventListener("click", () => {
    let name = document.getElementById("name").value
    document.getElementById("pokeamonContainer").innerHTML = "";
    searchPokemon(name)  
})
document.getElementById("getAll").addEventListener("click", () => {
    getAllPokemon()
})
