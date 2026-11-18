tag @s remove morph
tag @s remove morph2
tag @s remove morph11
tag @s remove morph12
tag @s remove handd
tag @s remove handd2
tag @s remove hand2
tag @s remove hand
clear @s r:figure_rage
clear @s r:figure_roar
clear @s r:figure_light
clear @s r:figure_light2
clear @s r:figure_remove
clear @s r:figure_remove2
clear @s r:figure_light_new
clear @s r:figure_light2_new
clear @s r:figure_tracker2
clear @s r:figure_bite
clear @s r:figure_tracker
clear @s r:figure_morph
clear @s r:figure_remove
clear @s r:figure_hands
clear @s r:figure_hands3
clear @s r:figure_hands4
clear @s r:figure_morph2
clear @s r:figure_morph3
clear @s r:figure_morph4
clear @s r:figure_bite2
give @p r:figure_morph3

playsound mob.figure.done @a[r=40]

title @s actionbar §lYour Back to Normal

particle r:morph_off

event entity @e[type=r:figure_step,r=3] minecraft:removed

event entity @e[type=r:figure_step2,r=3] minecraft:removed

event entity @e[type=r:figure_light,r=3] minecraft:removed

event entity @e[type=r:figure_particle,r=3] minecraft:removed

effect @s clear
