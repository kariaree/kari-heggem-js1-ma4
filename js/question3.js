const gameUrl = "https://api.rawg.io/api/games/4200";

fetch(gameUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        createGameDetails(json);
    })
    .catch(function(){
        console.log(error);
    });

function createGameDetails(json){
    console.dir(json);

    const image = document.querySelector(".image");
    image.style.backgroundImage = `url('${json.background_image}')`;
    image.style.height = `600px`;
    image.style.width = `100%`;

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}