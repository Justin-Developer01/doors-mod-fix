tag @s remove morph4
clear @s r:rush_morph_remove
clear @s r:rush_area
clear @s r:rush_jumpscare
clear @s r:rush_morph
clear @s r:rush_area_remove
clear @s r:rush_darkness
give @p r:rush_morph

playsound mob.figure.done @a[r=40]

title @s actionbar §lYour Back to Normal

particle r:morph_off

event entity @e[type=r:rush_sound,r=2] minecraft:removed

effect @s clear

event entity @e[type=r:rush_hitbox,r=2] minecraft:removed