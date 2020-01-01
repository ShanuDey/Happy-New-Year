let params = new URLSearchParams(location.search);
var name = params.get('from')
console.log(name)
if (name != 'null' && name != '') {
    console.log("This is not null");
    document.getElementById("wish").innerHTML = "From " + name;
}