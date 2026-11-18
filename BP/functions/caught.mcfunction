summon doors:figure_p_stun

effect @e[tag=morph,r=2] invisibility 10000 255 true

effect @e[tag=morph,r=2] slowness 10000 255 true

effect @e[tag=morph2,r=2] invisibility 10000 255 true

effect @e[tag=morph2,r=2] slowness 10000 255 true

title @s actionbar §l*Stunned*

playsound mob.figure.loud_roar @a[r=40]

tag @s remove morph
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

event entity @e[type=r:figure_step2,r=3] minecraft:removed


event entity @e[type=r:figure_light,r=3] minecraft:removed