tp @s @e[tag=eye,c=1]

effect @s invisibility 10000 255 true

ride @s start_riding @e[tag=eye,c=1] teleport_rider

playsound mob.seek.arise @p

clear @s r:seek_jumpscare

clear @s r:seek_hand

clear @s r:remove_seek_morph

clear @s r:seek_morph

clear @s r:goo_dash

effect @a[tag=!morph,tag=!morph2,tag=!morph3,tag=!eye,r=15] darkness 1 6 true

effect @a[tag=!morph,tag=!morph2,tag=!morph3,tag=!eye,r=15] slowness 1 3 true

tag @s remove morph3

replaceitem entity @s slot.hotbar 7 r:seek_cam_exit 1 0 {"item_lock":{"mode":"lock_in_slot"},"keep_on_death":{}}

clear @s r:seek_hands

tag @s add cam

clear @s r:seek_eye_spawn_egg

clear @s r:seek_cam

clear @s r:goo_area

event entity @e[type=r:seek_light,r=2] minecraft:remove
