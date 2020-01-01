let params = new URLSearchParams(location.search);
var name = params.get('from')
console.log(name)
if (name != 'null' && name != '') {
    console.log("This is not null");
    document.getElementById("wish").innerHTML = "From " + name;
}

const baseUrl = "https://shanudey.github.io/Happy-New-Year/?from=";

function createWish() {
    var value = document.getElementById("name").value;
    document.getElementById("liveUrl").innerHTML = baseUrl + value;
}

function copy() {
    var value = document.getElementById("name").value;
    wishUrl = baseUrl + value;
    var dummy = $('#name').val(wishUrl).select();
    document.execCommand('copy');
    $('#name').val(value);
    window.open(wishUrl, '_blank');
}