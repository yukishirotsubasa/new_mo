const newestVersion = "7462";

var vl = {
    "6311" : "2019_0214",
    "6662" : "2019_0421",
    "6670" : "2019_0428",
    "6801" : "2019_0721",
    "6899" : "2019_1025",
    "6951" : "2019_1223",
    "7030" : "2020_0214",
    "7096" : "2020_0410",
    "7310" : "2020_0722",
    "7419" : "2020_1025",
    "7462" : "2020_1222"
}

var filters = {"item":[["b_i"],
                        ["name"],
                        ["params","aim"],
                        ["params","power"],
                        ["params","armor"],
                        ["params","magic"],
                        ["params","archery"],
                        ["params","slot"],
                        ["params","price"],
                        ["params","no_present"]],
                "forge":[["item_id"],
                        ["no_smelt"],
                        ["level"],
                        ["wizardry_level"],
                        ["fletching_level"],
                        ["chance"],
                        ["recycle_chance"],
                        ["pattern"]],
                "carpentry":[["item_id"],
                        ["level"],
                        ["craftable"],
                        ["consumes"]]
            };

var postProcess = {
                "item":[NonePostProcess,
                        NonePostProcess,//["name"],
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess],
                "forge":[Itemid2Name,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        NonePostProcess,
                        ForgeMaterialPostProcess],
                "carpentry":[Itemid2Name,
                        NonePostProcess,
                        NonePostProcess,
                        CarpentryMateriaPostProcess]

                };