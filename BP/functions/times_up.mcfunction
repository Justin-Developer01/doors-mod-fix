tp @p[r=2] ~~~ facing @e[type=doors:screech]

tp @e[type=doors:screech,r=2] ~~~ facing @p

summon r:attack

summon r:times_up 

playsound mob.screech.attack @a

effect @e[tag=psst,r=3] slowness 1 1 true

playanimation @e[type=!player,r=3] animation.screech.attack
