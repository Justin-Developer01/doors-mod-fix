summon doors:screech_stun

effect @e[tag=morph10,r=2] invisibility 10000 255 true

effect @e[tag=morph10,r=2] slowness 10000 255 true

tag @p[c=1] add caught

effect @e[tag=caught,c=1] invisibility 10000 255 true

effect @e[tag=caught,c=1] slowness 10000 255 true

title @s actionbar §l*You've been Caught*

tag @s remove morph10
clear @s r:screech_bite
clear @s r:screech_psst
clear @s r:screech_remove
clear @s r:screech_morph
