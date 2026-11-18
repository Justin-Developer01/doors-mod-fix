tag @s remove morph9
clear @s r:halt_remove
clear @s r:halt_area
clear @s r:halt_tele
clear @s r:halt_morph
clear @s r:halt_area_remove
give @p r:halt_morph

playsound mob.figure.done @a[r=40]

title @s actionbar §lYour Back to Normal

particle r:morph_off

effect @s clear

event entity @e[type=r:halt_hitbox,r=2] minecraft:remove

event entity @e[type=r:halt_particle,r=2] minecraft:removed
