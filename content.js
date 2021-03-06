
var content = document.createElement("div");
function RefreshContent(f)
{
    for(var i = content.children.length - 1; i >= 0 ; i--)
    {
        content.children[i].remove();
    }
}

function GetAttr(obj, path)
{
    let result = obj;
    try
    {
        for (var i = 0; i < path.length; i++)
        {
            result = result[path[i]];
        }
    }
    catch(e)
    {
        return "";
    }
    return (typeof(result) == "undefined" ? "" : result);
}
function DataToTable(filter, data, pp = null, data2 = null)
{
    var div = document.createElement("div");
    div.setAttribute("class", "content");
    var t = document.createElement("table");
    var thr = t.createTHead().insertRow();
    for (var i = 0; i < filter.length; i ++)
    {
        thr.insertCell().innerHTML = filter[i][filter[i].length-1];
    }
    let dataLength = 0;
    if (typeof(data) == "array")
        dataLength = data.length;
    else if (typeof(data) == "object")
        dataLength = Object.keys(data).length;
    for (var i = 0; i < dataLength; i++)
    {
        let haveDiff = (data2 == null ? true : false);
        let row = t.insertRow();
        for (var j = 0; j < filter.length; j++)
        {
            let v1 = GetAttr(data[i], filter[j]);
            let v2 = (data2 == null ? "" : GetAttr(data2[i], filter[j]));
            if (pp != null)
            {
                v1 = pp[j](v1);
                if (v2 != "")
                    v2 = pp[j](v2);
            }
            if (data2 == null || v1 == v2 || v2 == "")
            {
                row.insertCell().innerHTML = v1;
                if (v2 == "" && v1 != v2)
                    haveDiff = true;
            }
            else
            {
                row.insertCell().innerHTML = v2 + "→" + v1;
                haveDiff = true;
            }
            
        }
        if (!haveDiff)
            row.remove();
    }
    div.appendChild(t);
    return div;
}

function NonePostProcess(argument)
{
    return argument;
}

function ForgeMaterialPostProcess(pattern)
{
    let patternExpand = pattern.flat();
    let materialCounter = {};
    for(var i = 0 ; i < patternExpand.length; i++)
    {
        if (typeof(materialCounter[patternExpand[i]]) == "undefined")
            materialCounter[patternExpand[i]] = 1;
        else
            materialCounter[patternExpand[i]] += 1;
    }
    let resultStr = "";
    let matKeys = Object.keys(materialCounter);
    for(var i = 0 ; i < matKeys.length ; i++)
    {
        if (matKeys[i] != -1)
            resultStr += Itemid2Name(matKeys[i]) + "*" + materialCounter[matKeys[i]] + "<br>";
    }
    return resultStr;
}

function CarpentryMateriaPostProcess(consumes)
{
    let resultStr = "";
    for(var i = 0 ; i < consumes.length ; i++)
    {
        resultStr += Itemid2Name(consumes[i].id) + "*" + consumes[i].count + "<br>";
    }
    return resultStr;
}

function Itemid2Name(itemid)
{
    return dataSet["item"][newVerState["versionNum"]][itemid]["name"];
}