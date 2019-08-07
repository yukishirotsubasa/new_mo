

var menu = ["RetaliationChest"]
var content = document.createElement("div");

function createMenu()
{
    var menuBtn = document.createElement("div");
    for (var i = 0; i <= menu.length - 1; i++) {
        let newBtn = document.createElement("button");
        newBtn.innerHTML = menu[i];
        newBtn.addEventListener("click", eval(menu[i]));
        menuBtn.appendChild(newBtn);
    }
    document.body.appendChild(menuBtn);
    document.body.appendChild(content);
}

createMenu();

function RetaliationChest()
{
    var t = document.createElement("table");
    //content.clear();
    content.appendChild(t);

    let loots = BossKeyCommon();
    for (var i = 0; i < loots.length; i++) {
        let row = t.insertRow()
        row.insertCell().innerHTML = loots[i].base_chance
        row.insertCell().innerHTML = loots[i].level
        row.insertCell().innerHTML = loots[i].id
    }
}

function BossKeyCommon()
{
    return object_base[708].params.results[0].returns;
}
function BossKeyRare()
{
    return object_base[709].params.results[0].returns;
}
function BossKeyLegendary()
{
    return object_base[710].params.results[0].returns;
}
// var hw = document.createElement("div");
// hw.innerHTML ="Hello World!";
// document.body.appendChild(hw);
// hw.innerHTML += "<br>" + item_base[11].name;