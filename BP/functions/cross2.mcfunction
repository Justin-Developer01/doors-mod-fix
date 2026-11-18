summon doors:curious_light_circle 

tp @e[type=doors:curious_light_circle,c=1] ~~~ @e[type=!player,r=6]

summon doors:crucifix_yellow ~ ~ ~3

particle r:curious_light_explode

camerashake add @a 0.2 8 positional

playsound mob.closet.trap @a

clear @p r:curious_crucifix 1