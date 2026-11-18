summon doors:silence_stun

effect @e[tag=morph8,r=2] invisibility 10000 255 true

effect @e[tag=morph8,r=2] slowness 10000 255 true

tag @p[c=1] add caught

effect @e[tag=caught,c=1] invisibility 10000 255 true

effect @e[tag=caught,c=1] slowness 10000 255 true

title @s actionbar §l*You've been Caught*

tag @s remove morph8
clear @s r:silence_jumpscare
clear @s r:silence_area
clear @s r:silence_area_remove
clear @s r:silence_morph_remove
clear @s r:silence_morph
clear @s r:silence_gravity

event entity @e[type=r:silence_sound,r=2] minecraft:removed

event entity @e[type=r:silence_hitbox,r=2] minecraft:remove