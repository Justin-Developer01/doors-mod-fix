summon r:tracker3 ~ ~1 ~

summon r:tracking3

summon doors:figure_none2 ~ ~ ~

playsound mob.figure.loud_roar @a[r=40]

tag @s[r=2] add track

effect @s night_vision 100000 255 true

event entity @e[type=r:figure_step,r=2] minecraft:removed

effect @s invisibility 10000 255 true

title @s actionbar §lYour now spectating in where Victims are