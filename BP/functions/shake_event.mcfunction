title @p actionbar §l§aGummy Flashlight §cOFF

event entity @e[type=r:light3,r=1] minecraft:remove

event entity @e[type=r:power8,r=1] minecraft:remove

event entity @e[type=r:power7,r=1] minecraft:remove

execute @s ~-13 ~-4 ~-12 fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block

fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block

execute @s ~-13 ~-4 ~-12 fill ~20 ~ ~20 ~ ~20 ~ air 0 replace light_block
