"use strict";

class AdditionalGearWeapon
{
	
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/Z_AdditionalGear_WeaponModule/db/`;
		const core = AdditionalGearCore;
		
		// add retexture (db,	"original item id",			"new item id",							"bundle path");
		core.AddRetexture(db, 	"5c793fc42e221600114ca25d", "AddGearWeapon_AdvancedTube_Blue",		"AddGearWeapon_AdvancedTube_Blue.bundle");
		core.AddRetexture(db, 	"5c793fc42e221600114ca25d", "AddGearWeapon_AdvancedTube_Green",		"AddGearWeapon_AdvancedTube_Green.bundle");
		
		core.AddRetexture(db, 	"570fd79bd2720bc7458b4583", "AddGearWeapon_OKP7A",					"AddGearWeapon_OKP7A.bundle");

		core.AddRetexture(db, 	"5bae13bad4351e00320204af", "AddGearWeapon_Archangel_OPFOR_Black",	"AddGearWeapon_Archangel_OPFOR_Black.bundle");

		core.AddRetexture(db, 	"5e81c6bf763d9f754677beff", "AddGearWeapon_Grip_M1911A1_Black",		"AddGearWeapon_Grip_M1911A1_Black.bundle");

		core.AddRetexture(db, 	"57fd23e32459772d0805bcf1", "AddGearWeapon_LS321_Black",			"AddGearWeapon_LS321_Black.bundle");

		core.AddRetexture(db, 	"5c0673fb0db8340023300271", "AddGearWeapon_PUFGUN_20_Black",		"AddGearWeapon_PUFGUN_20_Black.bundle");
		core.AddRetexture(db, 	"5c0672ed0db834001b7353f3", "AddGearWeapon_PUFGUN_30_Black",		"AddGearWeapon_PUFGUN_30_Black.bundle");

		core.AddRetexture(db, 	"5a7d9104159bd400134c8c21", "AddGearWeapon_Glock_TFX_Front_Orange",	"AddGearWeapon_Glock_TFX_Front_Orange.bundle");
		core.AddRetexture(db, 	"5a7d912f159bd400165484f3", "AddGearWeapon_Glock_TFX_Rear_Orange",	"AddGearWeapon_Glock_TFX_Rear_Orange.bundle");
		
		core.AddRetexture(db, 	"5a6f5f078dc32e00094b97dd", "AddGearWeapon_Glock_Viper_Black",		"AddGearWeapon_Glock_Viper_Black.bundle");
		core.AddRetexture(db, 	"5a9685b1a2750c0032157104", "AddGearWeapon_Glock_Moto_Black",		"AddGearWeapon_Glock_Moto_Black.bundle");
		core.AddRetexture(db, 	"5a6f5f078dc32e00094b97dd", "AddGearWeapon_Glock_Viper_FDE",		"AddGearWeapon_Glock_Viper_FDE.bundle");
		core.AddRetexture(db, 	"5a9685b1a2750c0032157104", "AddGearWeapon_Glock_Moto_FDE",			"AddGearWeapon_Glock_Moto_FDE.bundle");

		core.AddRetexture(db, 	"5b7c2d1d5acfc43d1028532a", "AddGearWeapon_FAL_MMW_20RND_Black",	"AddGearWeapon_FAL_MMW_20RND_Black.bundle");

		core.AddRetexture(db, 	"5eea21647547d6330471b3c9", "AddGearWeapon_MOE_590_FDE",			"AddGearWeapon_MOE_590_FDE.bundle");
		core.AddRetexture(db, 	"5eea21647547d6330471b3c9", "AddGearWeapon_MOE_590_OD",				"AddGearWeapon_MOE_590_OD.bundle");
		core.AddRetexture(db, 	"5eea21647547d6330471b3c9", "AddGearWeapon_MOE_590_PLM",			"AddGearWeapon_MOE_590_PLM.bundle");
		core.AddRetexture(db, 	"5eea21647547d6330471b3c9", "AddGearWeapon_MOE_590_SG",				"AddGearWeapon_MOE_590_SG.bundle");
		
		core.AddRetexture(db, 	"5a788068c5856700137e4c8f", "AddGearWeapon_MOE_870_FDE",			"AddGearWeapon_MOE_870_FDE.bundle");
		core.AddRetexture(db, 	"5a788068c5856700137e4c8f", "AddGearWeapon_MOE_870_OD",				"AddGearWeapon_MOE_870_OD.bundle");
		core.AddRetexture(db, 	"5a788068c5856700137e4c8f", "AddGearWeapon_MOE_870_PLM",			"AddGearWeapon_MOE_870_PLM.bundle");
		core.AddRetexture(db, 	"5a788068c5856700137e4c8f", "AddGearWeapon_MOE_870_SG",				"AddGearWeapon_MOE_870_SG.bundle");

		core.AddRetexture(db, 	"5dcbd56fdbd3d91b3e5468d5", "AddGearWeapon_MDR_762_FDE",			"AddGearWeapon_MDR/weapon_dt_mdr_762x51_container.bundle");
		core.AddRetexture(db, 	"5c488a752e221602b412af63", "AddGearWeapon_MDR_556_Black",			"AddGearWeapon_MDR/weapon_dt_mdr_556x45_container.bundle");

		core.AddRetexture(db, 	"5a3501acc4a282000d72293a", "AddGearWeapon_PMAG_762_20RND_FDE",		"AddGearWeapon_PMAG_762_20RND_FDE.bundle")

		// add trade offers   ("item id",								"trader id",				 "money id",				"price", "trader lvl");
		// Mechanic
		core.createTraderOffer("AddGearWeapon_AdvancedTube_Blue", 		"5a7c2eca46aef81a7ca2145d", "5449016a4bdc2d6f028b456f", 11693, 	4);
		core.createTraderOffer("AddGearWeapon_AdvancedTube_Green", 		"5a7c2eca46aef81a7ca2145d", "5449016a4bdc2d6f028b456f", 11693, 	4);
		core.createTraderOffer("AddGearWeapon_Glock_TFX_Front_Orange", 	"5a7c2eca46aef81a7ca2145d", "569668774bdc2da2298b4568", 9, 		2);
		core.createTraderOffer("AddGearWeapon_Glock_TFX_Rear_Orange", 	"5a7c2eca46aef81a7ca2145d", "569668774bdc2da2298b4568", 16, 	2);
		core.createTraderOffer("AddGearWeapon_Glock_Viper_Black", 		"5a7c2eca46aef81a7ca2145d", "569668774bdc2da2298b4568", 98, 	3);
		core.createTraderOffer("AddGearWeapon_Glock_Viper_FDE", 		"5a7c2eca46aef81a7ca2145d", "569668774bdc2da2298b4568", 98, 	3);
		core.createTraderOffer("AddGearWeapon_FAL_MMW_20RND_Black", 	"5a7c2eca46aef81a7ca2145d", "5449016a4bdc2d6f028b456f", 3368, 	2);
		core.createTraderOffer("AddGearWeapon_MOE_590_FDE", 			"5a7c2eca46aef81a7ca2145d", "5449016a4bdc2d6f028b456f", 8848, 	2);
		core.createTraderOffer("AddGearWeapon_MOE_590_OD", 				"5a7c2eca46aef81a7ca2145d", "5449016a4bdc2d6f028b456f", 8848, 	2);
		core.createTraderOffer("AddGearWeapon_MOE_590_PLM", 			"5a7c2eca46aef81a7ca2145d", "5449016a4bdc2d6f028b456f", 8848, 	2);
		core.createTraderOffer("AddGearWeapon_MOE_590_SG", 				"5a7c2eca46aef81a7ca2145d", "5449016a4bdc2d6f028b456f", 8848, 	2);
		core.createTraderOffer("AddGearWeapon_MOE_870_FDE", 			"5a7c2eca46aef81a7ca2145d", "590a358486f77429692b2790", 1, 		2);
		core.createTraderOffer("AddGearWeapon_MOE_870_OD", 				"5a7c2eca46aef81a7ca2145d", "590a358486f77429692b2790", 1, 		2);
		core.createTraderOffer("AddGearWeapon_MOE_870_PLM", 			"5a7c2eca46aef81a7ca2145d", "590a358486f77429692b2790", 1, 		2);
		core.createTraderOffer("AddGearWeapon_MOE_870_SG", 				"5a7c2eca46aef81a7ca2145d", "590a358486f77429692b2790", 1, 		2);

		// Skier
		core.createTraderOffer("AddGearWeapon_OKP7A", 					"58330581ace78e27b8b10cee", "5449016a4bdc2d6f028b456f", 12917, 	2);
		core.createTraderOffer("AddGearWeapon_LS321_Black", 			"58330581ace78e27b8b10cee", "5449016a4bdc2d6f028b456f", 18014, 	3);
		core.createTraderOffer("AddGearWeapon_PUFGUN_20_Black", 		"58330581ace78e27b8b10cee", "5449016a4bdc2d6f028b456f", 2128, 	1);
		core.createTraderOffer("AddGearWeapon_PUFGUN_30_Black", 		"58330581ace78e27b8b10cee", "5449016a4bdc2d6f028b456f", 3853, 	3);

		// Jaegar
		core.createTraderOffer("AddGearWeapon_Archangel_OPFOR_Black", 	"5c0647fdd443bc2504c2d371", "5449016a4bdc2d6f028b456f", 21579, 	4);
	}
}

module.exports = AdditionalGearWeapon;