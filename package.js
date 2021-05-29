class Mod
{
    constructor()
    {
		Logger.info("Loading: AdditionalGear - Weapon Module");
		
		ModLoader.onLoad["AdditionalGearWeaponModule"] = require("./src/additionalgearweapon.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();