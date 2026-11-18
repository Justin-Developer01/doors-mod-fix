summon doors:seek_p_stun

effect @e[tag=morph3,r=2] invisibility 10000 255 true

effect @e[tag=morph3,r=2] slowness 10000 255 true

title @s actionbar §l*Stunned*

playsound mob.seek.scream_far @a

tag @s remove morph3
tag @s remove cam
clear @s r:seek_jumpscare
clear @s r:seek_cam
clear @s r:seek_eye_spawn_egg
clear @s r:seek_hands
clear @s r:seek_hand
clear @s r:seek_morph
clear @s r:remove_seek_morph
clear @s r:seek_cam_exit
clear @s r:goo_area
clear @s r:goo_dash

event entity @e[type=r:seek_step,r=3] minecraft:removed


event entity @e[type=r:seek_light,r=3] minecraft:removed