let pokeymone = 0
let typers = []
document.getElementById("pokemonContainer").innerHTML = ""
for(let i = 0; i < 300; i++){
fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) =>response.json())
.then((data) => {
    typers = []
    for (let type in data.types.name) {
        typers.push(type)
    }
    makePokemon(data)
    pokeymone ++;
})
}

function makePokemon(makePoke) {

    document.getElementById("pokemonContainer").innerHTML += getElement(makePoke)
    

}

function getElement(data) {
    return `
    <div class="pokmone">
    <h3>${data.name}</h3>
        <p>#${data.id}</p>
        <img src="${data.sprites.front_default}" alt="">
        <li>
        <ul>${typers}</ul>
        <ul>${data.stats[1].stat.name} ${data.stats[1].base_stat}</ul>
        </li>
    </div>`
}

