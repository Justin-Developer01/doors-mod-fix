summon doors:figure_circle

summon doors:figure_crucifix ~ ~ ~3

tp @e[type=doors:figure_circle,c=1] ~~~ @e[type=!player,r=6]

particle r:figure_explode

camerashake add @a 0.2 8 positional

playsound mob.closet.trap @a

clear @p r:figure_crucifix 1

playsound mob.figure.roar @a[r=40]