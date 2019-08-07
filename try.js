

var menu = ["RetaliationChest"];
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
    var t;
    for(var i = content.children.length - 1; i >= 0 ; i--)
    {
        content.children[i].remove();
    }

    content.appendChild(DataToTable(BossKeyLegendary(), ["base_chance", "level", "id"]));
    content.appendChild(DataToTable(BossKeyRare(), ["base_chance", "level", "id"]));
    content.appendChild(DataToTable(BossKeyCommon(), ["base_chance", "level", "id"]));
}

function DataToTable(data, filter)
{
    var t = document.createElement("table");
    for (var i = 0; i < data.length; i++)
    {
        let row = t.insertRow();
        for (var j = 0; j < filter.length; j++)
        {
            if (typeof(data[i][filter[j]]) == "undefined")
            {
                row.insertCell();
            }
            else
            {
                row.insertCell().innerHTML = data[i][filter[j]];
            }
        }
    }
    var div = document.createElement("div");
    div.setAttribute("class", "content");
    div.appendChild(t);
    return div;
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