execute @s ~ ~ ~ ride @e[r=3,type=!doors:hotel_door,type=!doors:skeleton_door,type=!doors:door50,type=!r:figure_wait2,type=!doors:figure,type=!doors:figure2,type=!doors:figure3,type=!doors:figure4,type=!r:figure_wait,type=!doors:screech,type=!doors:seek,type=!doors:seek_s,type=!doors:eyes,type=!doors:rush,type=!doors:ambush,type=!doors:figure_bad,type=!doors:shadow,type=!doors:timothy,type=!doors:depth,type=!doors:greed,type=!doors:silence,type=!doors:seek_eye,type=!doors:closet2,type=!secret:a_60,type=!doors:hotel_plant,type=!doors:grandfather_clock,type=!doors:seek_hand,type=!doors:guiding_light,type=!r:light,type=!doors:shadow,type=!doors:red_ambush,type=!doors:windows,type=!doors:timothy,type=!doors:glitch,type=!r:grab_new,type=!doors:ambush_bad,type=!doors:closet,type=!doors:title,type=!doors:rush_bad,type=!doors:figure_hard,type=!doors:seek_bad,type=!doors:nightmare_seek,type=!doors:xmas_figure,type=!doors:trollface2,type=!doors:drawer,type=!doors:drawer2,type=!doors:xmas_screech,type=!doors:bald_screech,type=!doors:wardrobe,type=!doors:closet_bad,type=!doors:figure_plush,type=!doors:glitch_fight,type=!doors:screech_fight,type=!doors:rush_plush,type=!doors:ambush_plush,type=!doors:halt_plush,type=!doors:screech_plush,type=!doors:trollface,type=!doors:seek_plush,type=!r:figure_blast,type=!doors:snare,type=!doors:snare2,type=!r:figure_detect,family=!inanimate] start_riding @s


event entity @s minecraft:is_attacking

effect @p[r=3] blindness 1 2 true

effect @p[r=3] slowness 1 10 true

playsound mob.closet.spike @a[r=40]
