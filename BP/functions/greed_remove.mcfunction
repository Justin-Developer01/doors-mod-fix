tag @s remove morph7
clear @s r:greed_morph_remove
clear @s r:greed_invisible
clear @s r:greed_jumpscare
clear @s r:greed_morph
give @p r:greed_morph

playsound mob.figure.done @a[r=40]

title @s actionbar §lYour Back to Normal

particle r:morph_off

event entity @e[type=r:greed_particle,r=2] minecraft:removed

effect @s clear
