tag @s remove morph10
clear @s r:screech_remove
clear @s r:screech_psst
clear @s r:screech_bite
clear @s r:screech_morph
give @p r:screech_morph

playsound mob.figure.done @a[r=40]

title @s actionbar §lYour Back to Normal

particle r:morph_off

effect @s clear
