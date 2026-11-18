title @p actionbar §lFlashlight §cOFF

event entity @e[type=r:light,r=1] minecraft:remove

execute @s ~-13 ~-4 ~-12 fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block

