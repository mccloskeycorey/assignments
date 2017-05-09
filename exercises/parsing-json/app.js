var xhr = new XMLHttpRequest();


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var pokemonString = "";
        for (var i = 0; i < data.objects[0].pokemon.length; i++) {
            var pokemon = data.objects[0].pokemon[i];
            pokemonString += pokemon.name + " ";
        }
    }
    document.getElementById("results").innerHTML = pokemonString;

}
