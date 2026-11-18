summon r:tracker ~ ~1 ~

summon r:tracking 

summon doors:figure_none ~ ~ ~

playsound mob.figure.loud_roar @a[r=40]

tag @s[r=2] add track

effect @s night_vision 100000 255 true

event entity @e[type=r:figure_step,r=2] minecraft:removed

effect @s invisibility 10000 255 true

title @s actionbar §lYour now spectating in where Victims are