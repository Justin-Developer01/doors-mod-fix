summon r:figure_grab

tag @s add hand

tp @s[r=2] ~ ~ ~ facing @e[type=r:figure_grab]
tp @s[r=3] ~ ~ ~ facing @e[type=r:figure_grab]

playsound mob.figure.roar @a[r=40]

effect @s slowness 1 1 true

camerashake add @a 0.2 1 positional

event entity @s r:jumpscare_ready


