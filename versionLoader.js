
var versionNum = []
var CompareVersion =  function() {
    return (versionNum.length == 2)&&IsNumber(versionNum[0])&&IsNumber(versionNum[1]) ? versionNum : [newestVersion];
}

function GetVersionByUrl()
{
    if (location.search.length < 1 || location.search[0] != "?")
        return;

    versionNum = location.search.substr(1).split("v");
    if (versionNum.length != 2 || !IsNumber(versionNum[0]) || !IsNumber(versionNum[1]))
        versionNum = [];
}

function LoadReleaseJS()
{
    var fileVersionNums = CompareVersion();
    for (var i = 0; i < fileVersionNums.length; i++)
    {
        LoadJS(GetFileByVersion(fileVersionNums[i]),SaveData);
    }
}

function GetFileByVersion(v)
{
    if (v in vl)
    {
        return "./releaseJS/release_" + vl[v] + ".js";
    }
    return "";
}

function LoadJS(url, callback)
{
    var script = document.createElement("script");
    script.src = url;
    script.onload = callback;
    script.defer = true;
    document.getElementsByTagName('head')[0].getElementsByTagName('script')[0].appendChild(script);
}

function IsNumber(s)
{
    if (typeof(s) == "string")
        return s.search(/^-{0,1}\d+$/) != -1;
    return false;
}