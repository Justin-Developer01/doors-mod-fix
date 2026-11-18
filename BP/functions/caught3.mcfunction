summon doors:rush_stun

tag @s remove morph4

effect @e[tag=morph4,r=2] invisibility 10000 255 true

effect @e[tag=morph4,r=2] slowness 10000 255 true

tag @p[c=1] add caught

effect @e[tag=caught,c=1] invisibility 10000 255 true

effect @e[tag=caught,c=1] slowness 10000 255 true

title @s actionbar §l*You've been Caught*

tag @s remove morph4
clear @s r:rush_jumpscare
clear @s r:rush_area
clear @s r:rush_area_remove
clear @s r:rush_morph_remove
clear @s r:rush_morph
clear @s r:rush_darkness

event entity @e[type=r:rush_sound,r=2] minecraft:removed


event entity @e[type=r:rush_hitbox,r=2] minecraft:remove