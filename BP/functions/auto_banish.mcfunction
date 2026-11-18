effect @s resistance 15 255 true
effect @s absorption 15 255 true
effect @s fire_resistance 15 255 true
effect @s regeneration 3 255 true
effect @s instant_health 1 255 true
tag @s remove caught
tag @s remove hand
tag @s remove handd
tag @s remove hand2
tag @s remove morph
tag @s remove morph2
ride @s stop_riding
function jumpscare_stop
function jumpscare_stop2
kill @e[type=r:rush_jumpscare,r=16]
kill @e[type=r:ambush_jumpscare,r=16]
kill @e[type=r:jumpscare,r=16]
kill @e[type=r:jumpscare2,r=16]
kill @e[type=r:figure_grab,r=16]
kill @e[type=r:seek_grab,r=16]
kill @e[type=r:a60_jumpscare,r=16]
kill @e[type=r:a90_jumpscare,r=16]
kill @e[type=r:a120_jumpscare,r=16]
kill @e[type=r:depth_jumpscare,r=16]
kill @e[type=r:greed_jumpscare,r=16]
kill @e[type=r:quiet_jumpscare,r=16]
kill @e[type=r:barrage_jumpscare,r=16]
kill @e[type=r:frostbite_jumpscare,r=16]
kill @e[type=r:dread_jumpscare,r=16]
kill @e[type=r:strike_jumpscare,r=16]
kill @e[type=r:figurekill,r=16]
kill @e[type=r:figurekill2,r=16]
kill @e[type=r:rush_hitbox,r=16]
kill @e[type=r:ambush_hitbox,r=16]
kill @e[type=r:halt_hitbox,r=16]
kill @e[type=r:depth_hitbox,r=16]
kill @e[type=r:silence_hitbox,r=16]
kill @e[type=r:dupe_hit,r=16]
event entity @e[type=r:rush_hitbox,r=16] minecraft:removed
event entity @e[type=r:ambush_hitbox,r=16] minecraft:removed
event entity @e[type=r:halt_hitbox,r=16] minecraft:remove
event entity @e[type=r:figure_particle,r=16] minecraft:removed
event entity @e[type=r:rush_sound,r=16] minecraft:removed
event entity @e[type=r:ambush_particle,r=16] minecraft:removed
