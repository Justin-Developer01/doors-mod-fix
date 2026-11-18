tag @s remove morph6
clear @s r:ambush_morph_remove
clear @s r:ambush_area
clear @s r:ambush_jumpscare
clear @s r:ambush_morph
clear @s r:ambush_area_remove
give @p r:ambush_morph

playsound mob.figure.done @a[r=40]

title @s actionbar §lYour Back to Normal

particle r:morph_off

event entity @e[type=r:ambush_particle,r=2] minecraft:removed

effect @s clear

event entity @e[type=r:ambush_hitbox,r=2] minecraft:remove

execute @s ~-13 ~-4 ~-12 fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block

fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block