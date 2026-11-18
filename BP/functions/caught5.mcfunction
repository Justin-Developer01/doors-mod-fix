summon doors:ambush_stun

effect @e[tag=morph6,r=2] invisibility 10000 255 true

effect @e[tag=morph6,r=2] slowness 10000 255 true

tag @p[c=1] add caught

effect @e[tag=caught,c=1] invisibility 10000 255 true

effect @e[tag=caught,c=1] slowness 10000 255 true

title @s actionbar §l*You've been Caught*

tag @s remove morph6
clear @s r:ambush_jumpscare
clear @s r:ambush_area
clear @s r:ambush_area_remove
clear @s r:ambush_morph_remove
clear @s r:ambush_morph

event entity @e[type=r:ambush_particle,r=2] minecraft:removed


event entity @e[type=r:ambush_hitbox,r=2] minecraft:remove