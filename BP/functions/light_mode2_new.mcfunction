tag @s add morph11
tag @s remove morph12
tag @s remove handd
tag @s remove handd2
clear @s r:figure_rage
clear @s r:figure_roar
clear @s r:figure_light
clear @s r:figure_light_new
clear @s r:figure_light2_new
clear @s r:figure_bite
clear @s r:figure_tracker
clear @s r:figure_tracker_new
clear @s r:figure_morph
clear @s r:figure_remove
clear @s r:figure_hands
clear @s r:figure_morph2
clear @s r:figure_light2
clear @s r:figure_light2_new

event entity @e[type=r:figure_step2,r=3] minecraft:removed

summon r:figure_step

event entity @e[type=r:figure_light,r=3] minecraft:removed

event entity @e[type=r:figure_particle,r=3] minecraft:removed

effect @s clear

effect @s invisibility 10000 255 true