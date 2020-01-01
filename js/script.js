let params = new URLSearchParams(location.search);
var name = params.get('from')
console.log(name)
if (name != 'null' && name != '') {
    console.log("This is not null");
    document.getElementById("wish").innerHTML = "From " + name;
}

const baseUrl = "file:///home/shanu/Documents/HappyNewYear/index.html?from=";

function createWish() {
    var value = document.getElementById("name").value;
    document.getElementById("liveUrl").innerHTML = baseUrl + value;
}