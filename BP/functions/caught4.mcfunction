summon doors:depth_stunned

tag @s remove morph5

effect @e[tag=morph5,r=2] invisibility 10000 255 true

effect @e[tag=morph5,r=2] slowness 10000 255 true

tag @p[c=1] add caught

effect @e[tag=caught,c=1] invisibility 10000 255 true

effect @e[tag=caught,c=1] slowness 10000 255 true

title @s actionbar §l*You've been Caught*

tag @s remove morph5
clear @s r:depth_jumpscare
clear @s r:depth_area
clear @s r:depth_area_remove
clear @s r:depth_morph_remove
clear @s r:depth_morph

event entity @e[type=r:depth_sound,r=2] minecraft:removed

event entity @e[type=r:depth_hitbox,r=2] minecraft:remove