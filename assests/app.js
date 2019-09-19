var topics = ["Penguin", "Pug", "Bear", "Goat"];
var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=tmJIMO9lUCeu2gahwNz7Jpy9dfQKELCM";
console.log(topics)
console.log($)

function createButtons() {
    $("#animalButtons").empty();
    for (var i = 0; i < topics.length; i++) {
        var gifButton = $("<button>");
        gifButton.addClass("topics");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", topics[i]);
        gifButton.text(topics[i]);
        $("#animalButtons").append(gifButton);
        console.log(gifButton);
    }
}
createButtons();