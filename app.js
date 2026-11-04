let pokeymone = 0
let typers = []
document.getElementById("pokeamonContainer").innerHTML = ""

async function getAllPokemon () {
    document.getElementById("errorCatch").style.display = "none";
    document.getElementById("pokeamonContainer").innerHTML = "";
    for(let i = 0; i <= 12; i++){
    setTimeout(async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        typers = []
        for (let type in data.types ){
            typers.push(` ${data.types[type].type.name}`)
        }
        makePokemon(data)
        pokeymone ++;
    }, i *  100);
    }

}

function makePokemon(makePoke) {

    document.getElementById("pokeamonContainer").innerHTML += getElement(makePoke)
    

}

function getElement(data) {
    return `
    <div class="pokmone">
    <h3>${(data.name).toUpperCase()}</h3>
        <p>#${data.id}</p>
        <img src="${data.sprites.front_default}" alt="">
        <ul style = "background-color: purple;">${typers}</ul>
        <ul style="background-color: red;">${data.stats[0].stat.name}: ${data.stats[0].base_stat}</ul>
        <ul style="background-color: darkblue;">${data.stats[1].stat.name}: ${data.stats[1].base_stat}</ul>
        <ul style="background-color: green;">${data.stats[2].stat.name}: ${data.stats[2].base_stat}</ul>
    </div>`
}

async function searchPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
        document.getElementById("errorCatch").style.display = "block";
        throw new Error ("pokemon not found")
    }
    document.getElementById("errorCatch").style.display = "none";
    const data = await response.json();
    typers = []
    for (let type in data.types ){
        typers.push(` ${data.types[type].type.name}`)
    }
    makePokemon(data)
    pokemone ++;
    
}

document.getElementById("search").addEventListener("click", () => {
    const name = document.getElementById("name").value
    document.getElementById("pokeamonContainer").innerHTML = "";
    searchPokemon(name)  
})
document.getElementById("getAll").addEventListener("click", () => {
    getAllPokemon()
})
