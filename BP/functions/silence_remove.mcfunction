tag @s remove morph8
clear @s r:silence_morph_remove
clear @s r:silence_area
clear @s r:silence_jumpscare
clear @s r:silence_morph
clear @s r:silence_area_remove
clear @s r:silence_gravity
give @p r:silence_morph

playsound mob.figure.done @a[r=40]

title @s actionbar §lYour Back to Normal

particle r:morph_off

event entity @e[type=r:silence_sound,r=2] minecraft:removed

effect @s clear

event entity @e[type=r:silence_hitbox,r=2] minecraft:removed