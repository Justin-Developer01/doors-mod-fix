summon doors:greed_stun

effect @e[tag=morph7,r=2] invisibility 10000 255 true

effect @e[tag=morph7,r=2] slowness 10000 255 true

tag @p[c=1] add caught

effect @e[tag=caught,c=1] invisibility 10000 255 true

effect @e[tag=caught,c=1] slowness 10000 255 true

title @s actionbar §l*You've been Caught*

tag @s remove morph7
clear @s r:greed_morph_remove
clear @s r:greed_invisible
clear @s r:greed_jumpscare
clear @s r:greed_morph

event entity @e[type=r:greed_particle,r=2] minecraft:removed