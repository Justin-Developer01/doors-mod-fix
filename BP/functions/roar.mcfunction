event entity @s r:player_roar 

playsound mob.figure.roar @a[r=40]

camerashake add @a 0.2 1 positional

camerashake add @a 0.2 1 positional

effect @e slowness 1 5 true

effect @s clear

effect @s invisibility 1 1 true

playsound mob.figure.ambient @a[r=20]