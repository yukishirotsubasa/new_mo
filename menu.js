
var menu = ["item", "forge", "carpentry", "compare"];

function CreateMenu()
{
    var menuBtn = document.createElement("div");
    for (var i = 0; i <= menu.length - 1; i++) {
        let newBtn = document.createElement("button");
        newBtn.innerHTML = menu[i];
        newBtn.value = menu[i];
        newBtn.addEventListener("click", RefreshContent);
        newBtn.addEventListener("click", function() {ClickMenu(this.value);});
        menuBtn.appendChild(newBtn);
    }
    document.body.appendChild(menuBtn);
    document.body.appendChild(content);
}

function ClickMenu(menuName)
{
    if (menuName == "compare")
        Compare();
    else
    {
        CheckState(dataSet[menuName]);
        if (isCompareMode)
        {
            content.appendChild(DataToTable(filters[menuName], dataSet[menuName][newVerState["versionNum"]], postProcess[menuName], dataSet[menuName][oldVerState["versionNum"]]));
        }
        else if (newVerState["useable"])
        {
            content.appendChild(DataToTable(filters[menuName], dataSet[menuName][newVerState["versionNum"]], postProcess[menuName]));
        }
    }
}

function Compare()
{
    var but = document.createElement("button");
    but.onclick = GotoCompare;
    but.innerHTML = "goto";
    content.appendChild(VersionOptions("verNum1"));
    content.appendChild(VersionOptions("verNum2"));
    content.appendChild(but);
}

function VersionOptions(id)
{
    let sel = document.createElement("select");
    sel.id = id;
    let k = Object.keys(vl);
    for (var i = Object.keys(vl).length - 1; i >= 0; i--) {
        let opt = document.createElement("option");
        opt.value = k[i];
        opt.innerHTML = vl[k[i]];
        sel.appendChild(opt);
    }
    return sel;
}

function GotoCompare()
{
    location.href=location.pathname + '?' + document.getElementById("verNum1").value + "v" + document.getElementById("verNum2").value;
}
