tag @s remove cam

tag @s add morph3

clear @s r:seek_cam_exit

kill @e[type=r:exit]

ride @s stop_riding @e[tag=eye,c=1]

event entity @e[type=r:seek_light,r=2] minecraft:remove