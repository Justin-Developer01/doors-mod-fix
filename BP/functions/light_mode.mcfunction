tag @s remove morph

tag @s remove hand

tag @s remove hand

tag @s add morph2

clear @s r:figure_light


replaceitem entity @e[tag=morph2] slot.hotbar 4 r:figure_light2 1 0 {"item_lock":{"mode":"lock_in_slot"},"keep_on_death":{}}

summon r:figure_step2

summon r:figure_particle

title @s actionbar §l§eLight ON

event entity @e[type=r:figure_step,r=2] minecraft:removed

effect @s night_vision 10000 255 true