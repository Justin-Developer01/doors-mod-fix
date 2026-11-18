summon doors:halt_stun

effect @e[tag=morph9,r=2] invisibility 10000 255 true

effect @e[tag=morph9,r=2] slowness 10000 255 true

tag @p[c=1] add caught

effect @e[tag=caught,c=1] invisibility 10000 255 true

effect @e[tag=caught,c=1] slowness 10000 255 true

title @s actionbar §l*You've been Caught*

tag @s remove morph9
clear @s r:halt_tele
clear @s r:halt_area
clear @s r:halt_area_remove
clear @s r:halt_remove
clear @s r:halt_morph

event entity @e[type=r:halt_particle,r=2] minecraft:removed

event entity @e[type=r:halt_hitbox,r=2] minecraft:remove