# Vinny Giphy Mod + VSE ABBC3 Mod Bridge 

These two mods don't really work well together, but they're very useful.  This mod aims to bridge the two together so they can work. 

## Requirements: 
1. phpbb 3.3.x 
2. vse/abbc3  https://www.phpbb.com/community/viewtopic.php?t=2663497
3. vinny/giphy  https://www.phpbb.com/customise/db/extension/advanced_bbcode_box/

## Install
1. Download this mod 
2. Upload to ext folder
3. Install vse/abbc3 mod first
4. Install vinny/giphy mod second
5. Install sneakyninja/vinnygiphy_abbc3_bridge third

## Configuration 
There is no configuration, it just works behind the scenes to make sure these two mods work in harmony without mutating/patching the other two mods. 

## Why a bridge and not a patch
These two mods accomplish their own goals and in their own way.  
Vinny/Giphy works to add the core functionality but add the button to the core phpBB toolbar.  
VSE/ABBC3 works to create a new enhanced toolbar that doesn't necessarily scope in other mod's stuff. 
There's no reason either of these two mods need to know about each other and should be allowed to update without knowledge or dependence on each other. 
