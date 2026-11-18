playsound mob.screech.scream @a

playanimation @s animation.screech.look

event entity @e[type=r:screech_ride,r=5] minecraft:remove

summon r:gone1

kill @e[type=r:attack]

event entity @e[type=r:times_up,r=5] minecraft:event_dead

tag @p[r=3] remove psst