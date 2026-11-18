tag @s add morph
tag @s remove morph2
tag @s remove hand2
tag @s remove hand
clear @s r:figure_rage
clear @s r:figure_roar
clear @s r:figure_light
clear @s r:figure_bite
clear @s r:figure_tracker
clear @s r:figure_morph
clear @s r:figure_remove
clear @s r:figure_hands
clear @s r:figure_morph2
clear @s r:figure_light2
clear @s r:figure_light2_new
give @p r:figure_morph

event entity @e[type=r:figure_step2,r=3] minecraft:removed

summon r:figure_step

event entity @e[type=r:figure_light,r=3] minecraft:removed

event entity @e[type=r:figure_particle,r=3] minecraft:removed

effect @s clear

effect @s invisibility 10000 255 true