tag @s remove morph5
clear @s r:depth_morph_remove
clear @s r:depth_area
clear @s r:depth_jumpscare
clear @s r:depth_morph
clear @s r:depth_area_remove
give @p r:depth_morph

playsound mob.figure.done @a[r=40]

title @s actionbar §lYour Back to Normal

particle r:morph_off

event entity @e[type=r:depth_sound,r=2] minecraft:removed

effect @s clear

event entity @e[type=r:depth_hitbox,r=2] minecraft:remove

execute @s ~-13 ~-4 ~-12 fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block

fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block

