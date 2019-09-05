

var newVerState = {};
var oldVerState = {};
var isCompareMode = false;
var dataSet = {"item" : {},
                "forge" : {},
                "carpentry" : {}
            };

function StateSet(state, num = 0, useable = false)
{
    state["versionNum"] = num;
    state["useable"] = useable;
}

function CheckState(datas)
{
    let keys = Object.keys(datas).sort(function(a,b){return a<b? -1:1;});
    if (keys.length < 0)
    {
        StateSet(newVerState);
        StateSet(oldVerState);
        isCompareMode = false;
    }
    else if (keys.length == 1)
    {
        StateSet(oldVerState);
        StateSet(newVerState, keys[0], true);
        isCompareMode = false;
    }
    else if (keys.length >= 2)
    {
        StateSet(oldVerState,keys[0], true);
        StateSet(newVerState,keys[1], true);
        isCompareMode = true;
    }
}
function SaveData()
{
    dataSet["item"][release_version] = item_base;
    dataSet["forge"][release_version] = FORGE_FORMULAS;
    dataSet["carpentry"][release_version] = Object.values(CARPENTRY_FORMULAS).flat();
}

document.addEventListener('DOMContentLoaded', function() {
    GetVersionByUrl();
    LoadReleaseJS();
    CreateMenu();
}, false);