title @p actionbar §l§eLighter §cOFF

event entity @e[type=r:fire,r=1] minecraft:remove

execute @s ~-13 ~-4 ~-12 fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block

playsound mob.closet.nolight @s

event entity @s r:fire_off

event entity @e[type=r:power3,r=1] minecraft:remove