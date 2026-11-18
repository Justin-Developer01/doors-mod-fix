summon doors:figure_p_stun2

effect @e[tag=morph11,r=2] invisibility 10000 255 true

effect @e[tag=morph11,r=2] slowness 10000 255 true

effect @e[tag=morph12,r=2] invisibility 10000 255 true

effect @e[tag=morph12,r=2] slowness 10000 255 true

title @s actionbar §l*Stunned*

playsound mob.figure.loud_roar @a[r=40]

tag @s remove morph11
tag @s remove morph12
tag @s remove handd
tag @s remove handd
clear @s r:figure_rage
clear @s r:figure_roar
clear @s r:figure_bite
clear @s r:figure_morph3
clear @s r:figure_morph4
clear @s r:figure_hands3
clear @s r:figure_hands4
clear @s r:figure_light2
clear @s r:figure_light2_new
clear @s r:figure_light_new
clear @s r:figure_tracker2
clear @s r:figure_remove2

event entity @e[type=r:figure_step2,r=3] minecraft:removed


event entity @e[type=r:figure_light,r=3] minecraft:removed