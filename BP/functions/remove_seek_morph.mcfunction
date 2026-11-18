tag @s remove morph3

clear @s r:seek_hands
clear @s r:seek_hand
clear @s r:seek_morph
clear @s r:seek_cam
clear @s r:seek_jumpscare
clear @s r:seek_eye_spawn_egg
clear @s r:remove_seek_morph
clear @s r:seek_cam_exit
clear @s r:goo_area
clear @s r:goo_dash
give @p r:seek_morph
title @s actionbar §l§aYour Back To Normal
playsound mob.figure.done @a[r=40]
particle r:morph_off
event entity @e[type=doors:seek_hand2] minecraft:remove
kill @e[type=r:seek_eye]
kill @e[type=r:exit]
effect @s clear

event entity @e[type=r:seek_step,r=3] minecraft:removed
