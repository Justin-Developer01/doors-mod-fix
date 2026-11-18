summon doors:seek_hand2 ~ ~ ~1

summon doors:seek_hand2 ~ ~ ~1

summon doors:seek_hand2 ~ ~ ~1

particle r:seek_done

event entity @s r:player_hit2

effect @s slowness 1 3 true

event entity @e[type=r:seek_light,r=2] minecraft:remove

playsound mob.seek.emerge @a[r=5]