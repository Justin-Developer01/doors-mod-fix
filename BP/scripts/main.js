import { system, world } from "@minecraft/server";

const ITEM_ACTIONS = {
  "r:crucifix": {
    "actions": [
      {
        "commands": [
          "event entity @s r:crucifix_fire",
          "playsound r_crucifix_shot @a[r=20]"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false,
    "spawn": "r:crucifix"
  },
  "r:crucifix2": {
    "actions": [
      {
        "commands": [
          "event entity @s r:crucifix_fire",
          "playsound r_crucifix_shot @a[r=20]"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false,
    "spawn": "r:crucifix"
  },
  "r:curious_crucifix": {
    "actions": [
      {
        "commands": [
          "event entity @s r:curious_crucifix_fire",
          "playsound r_curious_crucifix_shot @a[r=20]"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false,
    "spawn": "r:curious_crucifix"
  },
  "r:figure_crucifix": {
    "actions": [
      {
        "commands": [
          "event entity @s r:figure_crucifix_fire",
          "playsound r_crucifix_shot @a[r=20]"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false,
    "spawn": "r:figure_crucifix"
  },
  "r:screech_psst": {
    "actions": [
      {
        "commands": [
          "playsound mob.screech.psst @a[r=6]"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:locater": {
    "actions": [
      {
        "commands": [
          "function item_spawn"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_bite2": {
    "actions": [
      {
        "commands": [
          "function jumpscare_player3"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_roar": {
    "actions": [
      {
        "commands": [
          "function roar"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:seek_jumpscare": {
    "actions": [
      {
        "commands": [
          "function got_seeked"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:screech_bite": {
    "actions": [
      {
        "commands": [
          "summon r:attack",
          "event entity @s r:player_rage"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:rush_area_remove": {
    "actions": [
      {
        "commands": [
          "event entity @e[type=r:rush_hitbox,r=2] minecraft:remove"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:silence_area_remove": {
    "actions": [
      {
        "commands": [
          "event entity @e[type=r:silence_hitbox,r=2] minecraft:remove"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:halt_tele": {
    "actions": [],
    "damage_on_use": false
  },
  "r:figure_light2_new": {
    "actions": [
      {
        "commands": [
          "function light_mode2_new"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:halt_area": {
    "actions": [
      {
        "commands": [
          "summon r:halt_hitbox"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:shield_potion2": {
    "actions": [
      {
        "commands": [
          "function potion2"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_light_new": {
    "actions": [
      {
        "commands": [
          "function light_mode_new"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_hands4": {
    "actions": [],
    "damage_on_use": false
  },
  "r:seek_cam_exit": {
    "actions": [
      {
        "commands": [
          "function exit",
          "tp @p[tag=cam] @e[type=r:exit]",
          "event entity @e[type=r:seek_eye,r=1] minecraft:remove"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:silence_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph8",
          "tellraw @s {\"rawtext\":[{\"selector\":\"@p\"},{\"text\":\" You are now §lSilence use your abilities to hunt down your §cVictims!\"}]}",
          "clear @s r:silence_morph",
          "summon r:silence_sound",
          "gamerule showdeathmessages false"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:greed_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph7",
          "tellraw @s {\"rawtext\":[{\"selector\":\"@p\"},{\"text\":\" You are now §l§dGreed use your abilities to hunt down your §cVictims!\"}]}",
          "clear @s r:greed_morph",
          "summon r:greed_particle",
          "gamerule showdeathmessages false"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:greed_jumpscare": {
    "actions": [
      {
        "commands": [
          "summon r:greed_jumpscare",
          "event entity @s r:player_rage"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:seek_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph3",
          "clear @s r:seek_morph",
          "playsound mob.seek.scream_far @a[r=40]",
          "tellraw @s {\"rawtext\":[{\"selector\":\"@p\"},{\"text\":\" You are now §l§fSeek use your abilities to haunt down your §cVictims!\"}]}",
          "summon r:seek_step",
          "gamerule showdeathmessages false"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:depth_area_remove": {
    "actions": [
      {
        "commands": [
          "event entity @e[type=r:depth_hitbox,r=2] minecraft:remove"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:rush_darkness": {
    "actions": [
      {
        "commands": [
          "effect @a[tag=!morph,tag=!morph2,tag=!morph3,tag=!morph4,tag=!morph5,tag=!morph6] darkness 10"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:shakelight": {
    "actions": [
      {
        "commands": [
          "title @s actionbar your flashlight had run out of energy"
        ],
        "condition": "query.remaining_durability == 0"
      },
      {
        "commands": [
          "playsound mob.closet.shake @s",
          "function shake_event2",
          "event entity @s r:glow_on"
        ],
        "condition": "!query.is_moving"
      },
      {
        "commands": [
          "function shake_event",
          "playsound mob.closet.shake @s",
          "replaceitem entity @e[type=r:light2,r=1] slot.armor.head 0 r:empty",
          "execute as @s positioned ~-13 ~-4 ~-12 run fill ~20 ~ ~20 ~ ~20 ~ air replace light_block",
          "fill ~20 ~ ~20 ~ ~20 ~ air replace light_block",
          "event entity @s r:glow_on",
          "summon r:light_removal"
        ],
        "condition": "query.is_sneaking"
      }
    ],
    "damage_on_use": true
  },
  "r:music_changer": {
    "actions": [
      {
        "commands": [
          "function music_change"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_tracker2": {
    "actions": [
      {
        "commands": [
          "function track_target_new"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_morph4": {
    "actions": [
      {
        "commands": [
          "tag @s remove morph11",
          "tag @s add morph12",
          "playsound mob.figure.roar @a[r=40]",
          "playsound mob.figure.roar @a[r=40]",
          "event entity @e[type=r:figure_step,r=2] minecraft:removed",
          "summon r:figure_step2",
          "summon r:figure_particle",
          "summon r:figure_light",
          "clear @s r:figure_morph2"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:ambush_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph6",
          "summon r:ambush_particle",
          "clear @s r:ambush_morph",
          "tellraw @s {\"rawtext\":[{\"selector\":\"@p\"},{\"text\":\" You are now §l§aAmbush use your abilities to hunt down your §cVictims!\"}]}",
          "gamerule showdeathmessages false"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:silence_morph_remove": {
    "actions": [
      {
        "commands": [
          "function silence_remove",
          "event entity @s r:change_size2",
          "stopsound @a mob.silence.idle"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:rush_morph_remove": {
    "actions": [
      {
        "commands": [
          "function rush_remove",
          "event entity @s r:change_size2",
          "stopsound @a mob.rush.ambient"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:ambush_area_remove": {
    "actions": [
      {
        "commands": [
          "event entity @e[type=r:ambush_hitbox,r=2] minecraft:remove"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:flashlight": {
    "actions": [
      {
        "commands": [
          "title @s actionbar your flashlight had run out of energy"
        ],
        "condition": "query.remaining_durability == 0"
      },
      {
        "commands": [
          "playsound mob.closet.equip @s",
          "function flash2_event",
          "summon r:power",
          "event entity @s r:glow_on"
        ],
        "condition": "!query.is_moving"
      },
      {
        "commands": [
          "function flash_event",
          "playsound mob.closet.equip @s",
          "replaceitem entity @e[type=r:light,r=1] slot.armor.head 0 r:empty",
          "event entity @e[type=r:power,r=1] minecraft:remove",
          "summon r:light_removal",
          "event entity @s r:glow_on"
        ],
        "condition": "query.is_sneaking"
      }
    ],
    "damage_on_use": true
  },
  "r:lighter": {
    "actions": [
      {
        "commands": [
          "function lighter2",
          "event entity @s r:fire_on",
          "event entity @e[type=doors:frostbite] r:is_stun"
        ],
        "condition": "!query.is_moving"
      },
      {
        "commands": [
          "replaceitem entity @e[type=r:fire,r=1] slot.armor.head 0 r:empty",
          "function lighter",
          "event entity @s r:fire_off",
          "event entity @e[type=doors:frostbite_stun3] minecraft:event_dead",
          "summon r:light_removal"
        ],
        "condition": "query.is_sneaking"
      }
    ],
    "damage_on_use": true
  },
  "r:halt_remove": {
    "actions": [
      {
        "commands": [
          "function halt_remove",
          "event entity @s r:change_size2",
          "stopsound @a mob.halt.coming"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:heartbeat_item": {
    "actions": [
      {
        "commands": [
          "function silent"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_hands2": {
    "actions": [],
    "damage_on_use": false
  },
  "r:figure_remove2": {
    "actions": [
      {
        "commands": [
          "function figure_skills_off2",
          "event entity @s r:change_size2"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:halt_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph9",
          "particle r:morph_active",
          "summon r:halt_particle",
          "clear @s r:halt_morph",
          "tellraw @s {\"rawtext\":[{\"selector\":\"@p\"},{\"text\":\" You are now §l§aHalt use your abilities to hunt down your §cVictims!\"}]}",
          "gamerule showdeathmessages false",
          "gamemode survival @s"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_morph3": {
    "actions": [
      {
        "commands": [
          "tag @s add morph11",
          "function figure_information",
          "playsound mob.figure.roar @a[r=40]",
          "playsound mob.figure.roar @a[r=40]",
          "summon r:figure_step",
          "clear @s r:figure_morph3"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:silence_area": {
    "actions": [
      {
        "commands": [
          "summon r:silence_hitbox"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:tablet": {
    "actions": [
      {
        "commands": [
          "function reveal"
        ],
        "condition": "query.is_sneaking"
      },
      {
        "commands": [
          "function reveal_hidden"
        ],
        "condition": "!query.is_sneaking"
      }
    ],
    "damage_on_use": true
  },
  "r:rush_area": {
    "actions": [
      {
        "commands": [
          "summon r:rush_hitbox"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:rush_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph4",
          "summon r:rush_sound",
          "clear @s r:rush_morph",
          "tellraw @s {\"rawtext\":[{\"selector\":\"@p\"},{\"text\":\" You are now §lRush use your abilities to hunt down your §cVictims!\"}]}",
          "gamerule showdeathmessages false"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:lighting_item": {
    "actions": [
      {
        "commands": [
          "effect @e[type=r:a60_light] invisibility 10000 255 true",
          "effect @e[type=r:a60_light2] invisibility 10000 255 true",
          "effect @e[type=r:eyes_light] invisibility 10000 255 true",
          "title @s actionbar §lLightings are off"
        ],
        "condition": null
      },
      {
        "commands": [
          "effect @e[type=r:a60_light] clear",
          "effect @e[type=r:a60_light2] clear",
          "effect @e[type=r:eyes_light] clear",
          "title @s actionbar §lLightings are on"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:ambush_jumpscare": {
    "actions": [
      {
        "commands": [
          "summon r:ambush_jumpscare",
          "event entity @s r:player_rage"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:greed_invisible": {
    "actions": [
      {
        "commands": [
          "tag @s remove morph7",
          "tag @s add greed",
          "function greed_remove",
          "title @s actionbar §l§dYour now invisible",
          "title @s actionbar §l§dYour now invisible",
          "effect @s invisibility 10000 255 true"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:rotate_lock": {
    "actions": [
      {
        "commands": [
          "event entity @e[type=doors:small_lock,r=1] minecraft:rotate",
          "event entity @e[type=doors:elevator2,r=3] minecraft:rotate",
          "event entity @e[type=doors:elevator,r=3] minecraft:rotate",
          "event entity @e[type=doors:door100_lever,r=3] minecraft:rotate",
          "event entity @e[type=doors:door_lever,r=3] minecraft:rotate",
          "event entity @e[type=doors:elevator_power,r=3] minecraft:rotate",
          "event entity @e[type=doors:elevator_power2,r=3] minecraft:rotate",
          "event entity @e[type=doors:drawer,r=3] minecraft:rotate",
          "event entity @e[type=doors:drawer2,r=3] minecraft:rotate",
          "event entity @e[type=doors:drawer3,r=3] minecraft:rotate",
          "event entity @e[type=doors:drawer4,r=3] minecraft:rotate",
          "event entity @e[type=doors:drawer5,r=3] minecraft:rotate",
          "event entity @e[type=doors:wall_light,r=3] minecraft:rotate",
          "event entity @e[type=doors:door50_complete,r=3] minecraft:rotate"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:shield_potion": {
    "actions": [
      {
        "commands": [
          "function potion"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_remove": {
    "actions": [
      {
        "commands": [
          "function figure_skills_off",
          "event entity @s r:change_size2"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_light2": {
    "actions": [
      {
        "commands": [
          "function light_mode2"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph",
          "function figure_information",
          "playsound mob.figure.roar @a[r=40]",
          "playsound mob.figure.roar @a[r=40]",
          "summon r:figure_step",
          "clear @s r:figure_morph"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_morph2": {
    "actions": [
      {
        "commands": [
          "tag @s remove morph",
          "tag @s add morph2",
          "playsound mob.figure.roar @a[r=40]",
          "playsound mob.figure.roar @a[r=40]",
          "event entity @e[type=r:figure_step,r=2] minecraft:removed",
          "summon r:figure_step2",
          "summon r:figure_particle",
          "summon r:figure_light",
          "clear @s r:figure_morph2"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:greed_morph_remove": {
    "actions": [
      {
        "commands": [
          "function greed_remove",
          "event entity @s r:change_size2"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:remove_seek_morph": {
    "actions": [
      {
        "commands": [
          "function remove_seek_morph"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:silence_gravity": {
    "actions": [
      {
        "commands": [
          "effect @e[tag=!morph,tag=!morph2,tag=!morph3,tag=!morph4,tag=!morph5,tag=!morph6,tag=!morph7,tag=!morph8,r=20] levitation 11",
          "summon r:purple_fog",
          "playsound mob.silence.gravity @a"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:depth_morph_remove": {
    "actions": [
      {
        "commands": [
          "function depth_remove",
          "event entity @s r:change_size2",
          "stopsound @a mob.depth.idle",
          "summon r:light_removal"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_hands3": {
    "actions": [],
    "damage_on_use": false
  },
  "r:silence_jumpscare": {
    "actions": [
      {
        "commands": [
          "summon r:quiet_jumpscare",
          "event entity @s r:player_rage"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_tracker": {
    "actions": [
      {
        "commands": [
          "function track_target"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:seek_hands": {
    "actions": [],
    "damage_on_use": false
  },
  "r:figure_light": {
    "actions": [
      {
        "commands": [
          "function light_mode"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:rush_jumpscare": {
    "actions": [
      {
        "commands": [
          "summon r:rush_jumpscare",
          "event entity @s r:player_rage"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:lockpick": {
    "actions": [
      {
        "commands": [
          "function unlocked",
          "event entity @e[type=doors:hotel_door2,r=5] minecraft:open",
          "event entity @e[type=doors:hotel_door3,r=5] minecraft:open",
          "event entity @e[type=doors:metal_door,r=5] minecraft:open",
          "event entity @e[type=doors:metal_door2,r=5] minecraft:open",
          "event entity @e[type=doors:old_door,r=5] minecraft:open",
          "event entity @e[type=doors:skeleton_door,r=5] minecraft:open",
          "playsound mob.elevator.door_open @a[r=6]",
          "clear @s r:lockpick 0 1"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:depth_area": {
    "actions": [
      {
        "commands": [
          "summon r:depth_hitbox"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:halt_area_remove": {
    "actions": [
      {
        "commands": [
          "event entity @e[type=r:halt_hitbox,r=2] minecraft:remove"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:depth_jumpscare": {
    "actions": [
      {
        "commands": [
          "summon r:depth_jumpscare",
          "event entity @s r:player_rage"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:screech_remove": {
    "actions": [
      {
        "commands": [
          "function screech_remove",
          "event entity @s r:change_size2"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_hands": {
    "actions": [],
    "damage_on_use": false
  },
  "r:depth_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph5",
          "tellraw @s {\"rawtext\":[{\"selector\":\"@p\"},{\"text\":\" You are now §l§bDepth use your abilities to hunt down your §cVictims!\"}]}",
          "clear @s r:depth_morph",
          "summon r:depth_sound",
          "gamerule showdeathmessages false"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:goo_area": {
    "actions": [
      {
        "commands": [
          "summon r:seek_light"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:seek_hand": {
    "actions": [
      {
        "commands": [
          "function spawn_hands"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:ambush_area": {
    "actions": [
      {
        "commands": [
          "summon r:ambush_hitbox"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_rage": {
    "actions": [
      {
        "commands": [
          "function rage"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:figure_bite": {
    "actions": [
      {
        "commands": [
          "function jumpscare_player"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:ambush_morph_remove": {
    "actions": [
      {
        "commands": [
          "function ambush_remove",
          "event entity @s r:change_size2",
          "stopsound @a mob.ambush.ambush_sound",
          "summon r:light_removal"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:seek_cam": {
    "actions": [
      {
        "commands": [
          "function seek_eye",
          "summon r:exit"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:screech_morph": {
    "actions": [
      {
        "commands": [
          "tag @s add morph10",
          "clear @s r:screech_morph",
          "tellraw @s {\"rawtext\":[{\"selector\":\"@p\"},{\"text\":\" You are now §lScreech use your abilities to sneak up on your §cVictims!\"}]}",
          "gamerule showdeathmessages false"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  },
  "r:key": {
    "actions": [
      {
        "commands": [
          "playsound r_key_shot @a[r=20]",
          "function unlocked",
          "event entity @e[type=doors:hotel_door2,r=4] minecraft:open",
          "event entity @e[type=doors:metal_door,r=4] minecraft:open",
          "event entity @e[type=doors:skeleton_door,r=4] minecraft:open",
          "clear @s r:key 0 1"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false,
    "spawn": "r:key"
  },
  "r:holy_hand_grenade": {
    "actions": [
      {
        "commands": [
          "playsound mob.closet.throw @a[r=40]",
          "clear @s r:holy_hand_grenade 0 1"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false,
    "spawn": "r:bomb"
  },
  "r:hammer": {
    "actions": [
      {
        "commands": [
          "event entity @e[type=doors:elevator_power,r=6] minecraft:is_started",
          "event entity @e[type=doors:elevator_power2,r=6] minecraft:is_started",
          "playsound mob.closet.breaker @a[r=6]"
        ],
        "condition": null
      }
    ],
    "damage_on_use": false
  }
};

function evalCondition(player, condition) {
  if (!condition) return true;
  const c = String(condition).trim();
  try {
    if (c === "query.is_sneaking") return player.isSneaking === true;
    if (c === "!query.is_sneaking") return player.isSneaking !== true;
    if (c === "query.is_moving") {
      const v = player.getVelocity?.();
      if (!v) return false;
      return (Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z)) > 0.01;
    }
    if (c === "!query.is_moving") {
      const v = player.getVelocity?.();
      if (!v) return true;
      return (Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z)) <= 0.01;
    }
  } catch (e) {}
  return true;
}

function runCommands(player, commands) {
  if (!commands) return;
  for (const cmd of commands) {
    if (!cmd) continue;
    try {
      player.runCommand(cmd);
    } catch (e) {
      try { player.runCommandAsync?.(cmd); } catch (e2) {}
    }
  }
}

const lastUse = new Map();

function spawnInLook(player, typeId) {
  try {
    const dim = player.dimension;
    const head = player.getHeadLocation();
    const view = player.getViewDirection();
    const loc = {
      x: head.x + view.x * 0.9,
      y: head.y + view.y * 0.9,
      z: head.z + view.z * 0.9
    };
    const ent = dim.spawnEntity(typeId, loc);
    try {
      const proj = ent.getComponent("minecraft:projectile");
      if (proj) {
        if (proj.owner !== undefined) proj.owner = player;
        if (typeof proj.shoot === "function") {
          proj.shoot(view, 1.6);
        } else if (typeof proj.shoot === "function") {
          proj.shoot(view);
        }
      }
    } catch (e) {}
    try {
      ent.applyImpulse({ x: view.x * 1.8, y: view.y * 1.8, z: view.z * 1.8 });
    } catch (e) {
      try { ent.applyKnockback(view.x, view.z, 1.8, view.y); } catch (e2) {}
    }
    return true;
  } catch (e) {
    try {
      player.runCommand(`summon ${typeId} ^^^1`);
      return true;
    } catch (e2) {
      return false;
    }
  }
}

function handleUse(event) {
  try {
    const player = event.source;
    const stack = event.itemStack;
    if (!player || !stack) return;
    const id = stack.typeId;
    const entry = ITEM_ACTIONS[id];
    if (!entry) return;
    const now = Date.now();
    const key = String(player.id) + "|" + id;
    if (lastUse.has(key) && now - lastUse.get(key) < 800) return;
    lastUse.set(key, now);
    if (entry.spawn) spawnInLook(player, entry.spawn);
    if (String(id).includes("crucifix")) {
      try { forceRemoveRooms(player.dimension, player.location, 24); } catch (e) {}
      try { forceBanishRushAmbush(player.dimension, player.location, 32); } catch (e) {}
    }

    let remaining = null;
    try {
      const dur = stack.getComponent?.("minecraft:durability");
      if (dur) remaining = dur.maxDurability - dur.damage;
    } catch (e) {}

    for (const action of entry.actions || []) {
      const cond = action.condition;
      if (cond && String(cond).includes("remaining_durability")) {
        const wantZero = String(cond).replace(/\s+/g, "").includes("==0");
        if (wantZero && remaining !== 0) continue;
        if (!wantZero && remaining === 0) continue;
      } else if (!evalCondition(player, cond)) {
        continue;
      }
      runCommands(player, action.commands);
    }

    if (CRUCIFIX_ITEM_IDS.has(id)) {
      try { removeRoomsNear(player.dimension, player.location, 12); } catch (err) {}
      system.runTimeout(() => {
        try { removeRoomsNear(player.dimension, player.location, 12); } catch (err) {}
      }, 8);
    }

    if (entry.damage_on_use) {
      try {
        const dur = stack.getComponent?.("minecraft:durability");
        if (dur && dur.damage < dur.maxDurability) {
          dur.damage += 1;
          const eq = player.getComponent?.("minecraft:equippable");
          if (eq) {
            const slot = eq.getEquipmentSlot?.("Mainhand");
            if (slot) slot.setItem(stack);
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
}

const component = { onUse: handleUse };

function register(regEvent) {
  try {
    regEvent.itemComponentRegistry.registerCustomComponent("r:on_use", component);
  } catch (e) {}
}

if (system?.beforeEvents?.startup?.subscribe) {
  system.beforeEvents.startup.subscribe(register);
} else if (world?.beforeEvents?.worldInitialize?.subscribe) {
  world.beforeEvents.worldInitialize.subscribe(register);
}


const CRUCIFIX_FUNCS = {
  "r:crucifix": "cross",
  "r:curious_crucifix": "cross2",
  "r:figure_crucifix": "cross3"
};

const processedHits = new Set();

const ROOMS_IDS = [
  "doors:a_120", "doors:a_90", "doors:a_90_stop", "doors:a_90_angry",
  "r:a_90", "r:a_90_stop", "r:a_90_angry",
  "secret:a_60", "secret:a_602", "doors:a_60v1", "doors:a_60v2",
  "doors:a60_stun", "doors:a60_stun2",
  "doors:a90_stun", "doors:a90_stun2",
  "doors:a120_stun", "doors:a120_stun2",
  "r:a60_jumpscare", "r:a90_jumpscare", "r:a120_jumpscare",
  "r:a60_light", "r:a60_light2", "r:a90kill", "r:a120kill"
];

const CRUCIFIX_ITEM_IDS = new Set([
  "r:crucifix", "r:crucifix2", "r:curious_crucifix", "r:figure_crucifix"
]);

function removeRoomsNear(dim, loc, radius) {
  if (!dim || !loc) return;
  for (const tid of ROOMS_IDS) {
    let list = [];
    try {
      list = dim.getEntities({ type: tid, location: loc, maxDistance: radius });
    } catch (e) {}
    for (const ent of list) {
      try { ent.remove(); } catch (err) {}
    }
  }
}

const FIGURE_IDS = [
  "doors:figure", "doors:figure2", "doors:figure3", "doors:figure4",
  "doors:figure_hard", "doors:figure_noob", "doors:xmas_figure",
  "doors:figure_boss", "doors:figure_enraged", "doors:figure_search",
  "doors:figure_search2", "doors:figure_not_blind", "doors:figure_none",
  "doors:figure_none2"
];

function posCmd(loc) {
  return `${loc.x.toFixed(2)} ${loc.y.toFixed(2)} ${loc.z.toFixed(2)}`;
}

function tryCmd(target, cmd) {
  try { target.runCommand(cmd); return true; } catch (e) {
    try { target.runCommandAsync?.(cmd); return true; } catch (e2) { return false; }
  }
}

function runBanish(proj, funcName, player) {
  if (!proj || !funcName) return;
  const id = proj.id;
  if (processedHits.has(id)) return;
  processedHits.add(id);
  const loc = proj.location;
  try { forceRemoveRooms(proj.dimension, loc, 20); } catch (e) {}
  try { forceBanishRushAmbush(proj.dimension, loc, 28); } catch (e) {}
  try { scheduleCrucifixCleanup(proj.dimension, loc); } catch (e) {}
  const runner = player || proj;

  // Run original function at the hit location from the player when possible
  if (player) {
    tryCmd(player, `execute as @s positioned ${posCmd(loc)} run function ${funcName}`);
  }
  tryCmd(proj, `function ${funcName}`);

  // Extra guaranteed trap spawn for curious / figure crucifixes
  try {
    const dim = proj.dimension;
    if (funcName === "cross2") {
      dim.spawnEntity("doors:curious_light_circle", loc);
      dim.spawnEntity("doors:crucifix_yellow", { x: loc.x, y: loc.y, z: loc.z + 1 });
      if (player) {
        tryCmd(player, "camerashake add @a 0.2 8 positional");
        tryCmd(player, "playsound mob.closet.trap @a");
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run particle r:curious_light_explode`);
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run effect @e[type=!player,r=6] slowness 8 2 true`);
        for (const tid of ROOMS_IDS) {
          tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=${tid},r=8] minecraft:event_spawn_done2`);
          tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=${tid},r=8] minecraft:event_spawn_done`);
          tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=${tid},r=8] minecraft:event_spawn_done3`);
          tryCmd(player, `execute as @s positioned ${posCmd(loc)} run tp @e[type=${tid},r=8] ${posCmd(loc)}`);
        }
      }
    }
    if (funcName === "cross3") {
      dim.spawnEntity("doors:figure_circle", loc);
      dim.spawnEntity("doors:figure_crucifix", { x: loc.x, y: loc.y, z: loc.z + 1 });
      if (player) {
        tryCmd(player, "camerashake add @a 0.2 8 positional");
        tryCmd(player, "playsound mob.closet.trap @a");
        tryCmd(player, "playsound mob.figure.roar @a[r=40]");
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run particle r:figure_explode`);
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run effect @e[type=!player,r=8] slowness 8 2 true`);
        for (const tid of FIGURE_IDS) {
          tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=${tid},r=10] minecraft:event_spawn_stun`);
          tryCmd(player, `execute as @s positioned ${posCmd(loc)} run tp @e[type=${tid},r=10] ${posCmd(loc)}`);
        }
      }
    }
  } catch (e) {}


  // Force Rooms (A-60/90/120) banishing for EVERY crucifix type
  try {
    removeRoomsNear(proj.dimension, loc, 12);
    system.runTimeout(() => {
      try { removeRoomsNear(proj.dimension, loc, 12); } catch (e2) {}
    }, 10);
    if (player) {
      for (const tid of ROOMS_IDS) {
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=${tid},r=10] minecraft:event_spawn_done`);
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=${tid},r=10] minecraft:event_spawn_done2`);
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=${tid},r=10] minecraft:event_spawn_done3`);
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=${tid},r=10] minecraft:remove`);
        tryCmd(player, `execute as @s positioned ${posCmd(loc)} run kill @e[type=${tid},r=10]`);
      }
      tryCmd(player, `execute as @s positioned ${posCmd(loc)} run kill @e[type=r:a60_jumpscare,r=12]`);
      tryCmd(player, `execute as @s positioned ${posCmd(loc)} run kill @e[type=r:a90_jumpscare,r=12]`);
      tryCmd(player, `execute as @s positioned ${posCmd(loc)} run kill @e[type=r:a120_jumpscare,r=12]`);
      tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=r:a60_light,r=12] minecraft:remove`);
      tryCmd(player, `execute as @s positioned ${posCmd(loc)} run event entity @e[type=r:a60_light2,r=12] minecraft:remove`);
    }
  } catch (e) {}

  try { proj.remove(); } catch (e) {}
}

function nearestPlayer(entity) {
  try {
    const players = entity.dimension.getPlayers({ location: entity.location, closest: 1, maxDistance: 128 });
    return players && players[0];
  } catch (e) {
    const all = [...world.getPlayers()];
    return all[0];
  }
}

function bindHitEvents() {
  try {
    world.afterEvents.projectileHitEntity?.subscribe((ev) => {
      const fn = CRUCIFIX_FUNCS[ev.projectile?.typeId];
      if (!fn) return;
      const player = ev.source || nearestPlayer(ev.projectile);
      runBanish(ev.projectile, fn, player);
    });
  } catch (e) {}
  try {
    world.afterEvents.projectileHitBlock?.subscribe((ev) => {
      const fn = CRUCIFIX_FUNCS[ev.projectile?.typeId];
      if (!fn) return;
      const player = ev.source || nearestPlayer(ev.projectile);
      runBanish(ev.projectile, fn, player);
    });
  } catch (e) {}
}

try { bindHitEvents(); } catch (e) {}

try {
  world.afterEvents.itemStartUse.subscribe((ev) => handleUse(ev));
} catch (e) {}
try {
  world.afterEvents.itemUse.subscribe((ev) => handleUse(ev));
} catch (e) {}

const BREAKER_IDS = new Set(["doors:elevator_power", "doors:elevator_power2"]);

function onEntityInteract(ev) {
  try {
    const player = ev.player;
    const ent = ev.target;
    if (!player || !ent) return;
    const id = ent.typeId;
    if (BREAKER_IDS.has(id) && holding(player, "r:hammer")) {
      tryCmd(ent, "event entity @s minecraft:is_started");
      return;
    }
    if ((id === "doors:jeff_table" || id === "doors:jeff" || id === "doors:jeff_open") && holding(player, "r:coin")) {
      tryCmd(player, "event entity @e[type=doors:jeff_table,r=5] shop_opened");
      tryCmd(player, "event entity @e[type=doors:gate,r=5] r:open");
    }
  } catch (e) {}
}

try {
  world.afterEvents.playerInteractWithEntity.subscribe(onEntityInteract);
} catch (e) {}

function isTrapId(id) {
  return (
    id.startsWith("doors:light_circle") ||
    id.startsWith("doors:crucifix") ||
    id === "doors:curious_light_circle" ||
    id === "doors:figure_circle" ||
    id === "doors:figure_crucifix" ||
    id === "doors:crucifix_yellow" ||
    id === "doors:crucifix_blue" ||
    id === "doors:crucifix_red"
  );
}

function isCrucifixThreat(typeId) {
  const id = String(typeId || "");
  if (!id || id === "minecraft:player" || id === "minecraft:item" || id === "minecraft:xp_orb") return false;
  if (CRUCIFIX_FUNCS[id] || isTrapId(id)) return false;
  if (id.includes("stun")) return false;
  return id.includes("rush") || id.includes("ambush") ||
    id.includes("a_60") || id.includes("a60") ||
    id.includes("a_90") || id.includes("a90") ||
    id.includes("a_120") || id.includes("a120");
}

system.runInterval(() => {
  try {
    for (const player of world.getPlayers()) {
      const dim = player.dimension;
      const all = dim.getEntities({ location: player.location, maxDistance: 128 });
      for (const proj of all) {
        const fn = CRUCIFIX_FUNCS[proj.typeId];
        if (!fn) continue;
        const nearby = dim.getEntities({ location: proj.location, maxDistance: 28 });
        const hit = nearby.some((n) => isCrucifixThreat(n.typeId));
        if (hit) runBanish(proj, fn, player);
      }
    }
  } catch (e) {}
}, 1);


// ---------- Auto-banish when a Doors entity hurts / jumpscares the player ----------
const JUMPSCARE_IDS = new Set([
  "r:rush_jumpscare", "r:ambush_jumpscare", "r:jumpscare", "r:jumpscare2",
  "r:a60_jumpscare", "r:a90_jumpscare", "r:a120_jumpscare",
  "r:depth_jumpscare", "r:greed_jumpscare", "r:quiet_jumpscare",
  "r:barrage_jumpscare", "r:frostbite_jumpscare", "r:dread_jumpscare",
  "r:strike_jumpscare", "r:figure_grab", "r:figure_grab_wait",
  "r:seek_grab", "r:seekhand_kill", "r:figurekill", "r:figurekill2",
  "r:a90kill", "r:a120kill", "r:rush_hitbox", "r:ambush_hitbox",
  "r:halt_hitbox", "r:depth_hitbox", "r:silence_hitbox", "r:dupe_hit"
]);

const IGNORE_AUTO = [
  "minecraft:item", "minecraft:xp_orb", "minecraft:arrow",
  "minecraft:snowball", "minecraft:fishing_hook", "minecraft:armor_stand",
  "minecraft:thrown_trident", "minecraft:egg", "minecraft:ender_pearl",
  "minecraft:xp_bottle", "minecraft:lingering_potion", "minecraft:splash_potion"
];

const FURNITURE_BITS = [
  "hotel_door", "skeleton_door", "door50", "door100", "closet", "drawer",
  "wardrobe", "radio", "chair", "plant", "plush", "jeff", "bob", "el_goblino",
  "rift", "elevator", "grandfather", "shop_sign", "bars_door", "small_lock",
  "hotel_cart", "gate", "metal_door", "old_door", "door_lever", "light_circle",
  "crucifix", "protection", "title", "guiding_light", "blue_light", "blue_chain"
];

const HELD_CRUCIFIX = {
  "r:crucifix": "cross",
  "r:crucifix2": "cross",
  "r:curious_crucifix": "cross2",
  "r:figure_crucifix": "cross3"
};

function isFurniture(typeId) {
  const id = String(typeId || "").toLowerCase();
  return FURNITURE_BITS.some((b) => id.includes(b));
}

function isAutoBanishTarget(typeId) {
  if (!typeId) return false;
  if (IGNORE_AUTO.includes(typeId)) return false;
  if (CRUCIFIX_FUNCS[typeId]) return false;
  if (isTrapId(typeId) || isFurniture(typeId)) return false;
  return true;
}

function isDoorsThreat(typeId) {
  if (!typeId) return false;
  const id = String(typeId).toLowerCase();
  if (JUMPSCARE_IDS.has(typeId)) return true;
  if (id.startsWith("doors:") || id.startsWith("r:") || id.startsWith("secret:")) {
    return !isFurniture(typeId) && !isTrapId(typeId) && !CRUCIFIX_FUNCS[typeId];
  }
  return false;
}

function isAutoBanishOn(player) {
  try { return !!(player && player.hasTag("auto_banish")); } catch (e) { return false; }
}

function heldCrucifixProtocol(player) {
  if (!player) return null;
  try {
    const eq = player.getComponent("minecraft:equippable");
    if (eq) {
      for (const slot of ["Mainhand", "Offhand"]) {
        try {
          const stack = eq.getEquipment(slot);
          if (stack && HELD_CRUCIFIX[stack.typeId]) return HELD_CRUCIFIX[stack.typeId];
        } catch (e) {}
      }
    }
  } catch (e) {}
  return null;
}



const banishPending = new Set();
const BANISH_REMOVE_TICKS = 120;

// The spinning crucifix entities are meant to be temporary; remove them once the banish is done
const CRUCIFIX_ENTITY_IDS = [
  "doors:crucifix", "doors:crucifix_red", "doors:crucifix_blue",
  "doors:crucifix_yellow", "doors:figure_crucifix"
];
const CRUCIFIX_CLEANUP_TICKS = BANISH_REMOVE_TICKS + 20;
const CRUCIFIX_MAX_AGE_TICKS = 260;
const crucifixSeen = new Map();

function scheduleCrucifixCleanup(dim, loc) {
  if (!dim || !loc) return;
  const at = { x: loc.x, y: loc.y, z: loc.z };
  system.runTimeout(() => {
    try {
      for (const id of CRUCIFIX_ENTITY_IDS) {
        for (const e of dim.getEntities({ type: id, location: at, maxDistance: 16 })) {
          try { e.remove(); } catch (e2) {}
        }
      }
    } catch (e) {}
  }, CRUCIFIX_CLEANUP_TICKS);
}

// Safety net: any crucifix entity still around long after it spawned gets removed
system.runInterval(() => {
  try {
    const now = system.currentTick;
    const alive = new Set();
    for (const dim of [world.getDimension("overworld"), world.getDimension("nether"), world.getDimension("the_end")]) {
      for (const id of CRUCIFIX_ENTITY_IDS) {
        let list = [];
        try { list = dim.getEntities({ type: id }); } catch (e) {}
        for (const e of list) {
          alive.add(e.id);
          const first = crucifixSeen.get(e.id);
          if (first === undefined) crucifixSeen.set(e.id, now);
          else if (now - first > CRUCIFIX_MAX_AGE_TICKS) {
            try { e.remove(); } catch (e2) {}
            crucifixSeen.delete(e.id);
          }
        }
      }
    }
    for (const id of [...crucifixSeen.keys()]) if (!alive.has(id)) crucifixSeen.delete(id);
  } catch (e) {}
}, 20);
// Proximity auto-banish: any of these Doors entities (or a hostile mob) within range gets banished
const AUTO_BANISH_RANGE = 10;
const PROTECT_INTERVAL_TICKS = 20;
const DOORS_BANISH_IDS = new Set([
  ...["ambush", "ambush2", "ambush_bad", "ambush_bad2", "red_ambush", "red_ambush2",
      "screech", "screech_big", "screech_fight", "bald_screech", "xmas_screech",
      "barrage", "barrage2", "cursed_rush", "decoy", "decoy2", "depth", "depth2", "dread",
      "dupe", "dupe2", "eyes", "eyes2", "eyes_s", "eyes_s2", "xmas_eyes",
      "frostbite", "glitch", "glitch_fight", "greed", "halt", "halt_bad", "jack", "jack_bad",
      "jeffthekiller", "nightmare_rush", "nightmare_seek", "nightmare_seek_s",
      "rush", "rush2", "rush_bad", "rush_bad2",
      "seek", "seek_bad", "seek_gentlemen", "seek_gentlemen_s", "seek_s", "xmas_seek", "xmas_seek_s",
      "shocker", "silence", "strike", "trollface", "trollface2"].map((n) => "doors:" + n),
  ...FIGURE_IDS,
  "doors:figure_bad",
  "r:dupe", "r:dupe2",
  ...Array.from({ length: 19 }, (_, i) => i + 1).filter((n) => n !== 10).map((n) => "doors:rush_variant" + n)
]);
const killerProtectTick = new Map();

// A-60 / A-90 / A-120 can now be banished by ANY crucifix (regular, curious, figure)
const A_SERIES_IDS = new Set([
  "doors:a_60v1", "doors:a_60v2", "doors:a_90", "doors:a_90_angry", "doors:a_90_stop", "doors:a_120",
  "r:a_90", "r:a_90_angry", "r:a_90_stop", "secret:a_60", "secret:a_602"
]);

function isBanishableEntity(e, curious) {
  try {
    if (DOORS_BANISH_IDS.has(e.typeId)) return true;
    if (A_SERIES_IDS.has(e.typeId)) return true;  // any crucifix
  } catch (err) {}
  return false;
}
const autoCooldown = new Map();
const playerCeremonyLock = new Map();
let autoTick = 0;

function threatFamily(typeId) {
  const id = String(typeId || "").toLowerCase();
  if (id.includes("rush")) return "rush";
  if (id.includes("ambush")) return "ambush";
  if (id.includes("seek")) return "seek";
  if (id.includes("figure")) return "figure";
  if (id.includes("screech")) return "screech";
  if (id.includes("halt")) return "halt";
  if (id.includes("eyes")) return "eyes";
  if (id.includes("depth")) return "depth";
  if (id.includes("greed")) return "greed";
  if (id.includes("silence") || id.includes("quiet")) return "silence";
  if (id.includes("barrage")) return "barrage";
  if (id.includes("frostbite")) return "frostbite";
  if (id.includes("dread")) return "dread";
  if (id.includes("strike")) return "strike";
  if (id.includes("dupe")) return "dupe";
  if (id.includes("a60") || id.includes("a_60")) return "a60";
  if (id.includes("a90") || id.includes("a_90")) return "a90";
  if (id.includes("a120") || id.includes("a_120")) return "a120";
  if (id.includes("jack")) return "jack";
  if (id.includes("shadow")) return "shadow";
  if (id.includes("glitch")) return "glitch";
  if (id.includes("timothy")) return "timothy";
  if (id.includes("snare")) return "snare";
  return id;
}

function ceremonyReady(player, family) {
  const until = playerCeremonyLock.get(player.id) || 0;
  if (autoTick < until) return false;
  playerCeremonyLock.set(player.id, autoTick + 35);
  autoCooldown.set(player.id + ":" + family, autoTick);
  return true;
}

function recentlyBanished(player, family) {
  const until = playerCeremonyLock.get(player.id) || 0;
  if (autoTick < until) return true;
  const last = autoCooldown.get(player.id + ":" + family) || 0;
  return autoTick - last < 35;
}

function cleanupJumpscares(player) {
  tryCmd(player, "function auto_banish");
  for (const id of JUMPSCARE_IDS) {
    tryCmd(player, `kill @e[type=${id},r=16]`);
  }
}

function protectPlayer(player) {
  if (!player) return;
  try {
    player.addEffect("resistance", 300, { amplifier: 255, showParticles: false });
    player.addEffect("absorption", 300, { amplifier: 255, showParticles: false });
    player.addEffect("fire_resistance", 300, { amplifier: 255, showParticles: false });
    player.addEffect("regeneration", 60, { amplifier: 255, showParticles: false });
  } catch (e) {
    tryCmd(player, "effect @s resistance 15 255 true");
    tryCmd(player, "effect @s absorption 15 255 true");
    tryCmd(player, "effect @s fire_resistance 15 255 true");
    tryCmd(player, "effect @s regeneration 3 255 true");
  }
  tryCmd(player, "effect @s instant_health 1 255 true");
  try {
    const hp = player.getComponent("minecraft:health");
    if (hp && typeof hp.setCurrentValue === "function") {
      hp.setCurrentValue(hp.effectiveMax ?? hp.currentValue);
    }
  } catch (e) {}
  tryCmd(player, "tag @s remove caught");
  tryCmd(player, "tag @s remove hand");
  tryCmd(player, "tag @s remove handd");
  tryCmd(player, "tag @s remove hand2");
}

function extraStunCommands(player, loc, typeId) {
  const ppos = posCmd(loc);
  const stunEvents = [
    "minecraft:event_spawn_done",
    "minecraft:event_spawn_done2",
    "minecraft:event_spawn_done3",
    "minecraft:event_spawn_panic",
    "minecraft:event_spawn_stun"
  ];
  // Rush/Ambush despawn instantly on the remove events, so stun them like the trap does instead
  const family = threatFamily(typeId);
  if (family === "rush") stunEvents.push("minecraft:event_spawn_rush_stun");
  else if (family === "ambush") stunEvents.push("minecraft:event_spawn_ambush_stun");
  else if (family === "seek") stunEvents.push("minecraft:event_spawn_death");
  else if (family === "figure") stunEvents.push("minecraft:event_spawn_stun2", "minecraft:event_spawn_stun3", "minecraft:event_spawn_stun4");
  else if (family === "a60" || family === "a90" || family === "a120") { /* the done events above banish these */ }
  else stunEvents.push("minecraft:remove", "minecraft:removed");
  for (const ev of stunEvents) {
    tryCmd(player, `execute as @s positioned ${ppos} run event entity @e[type=${typeId},r=10] ${ev}`);
  }
}

function runCeremony(player, entity, fn) {
  const loc = (entity && entity.location) || player.location;
  const autoFn = fn === "cross2" ? "auto_cross2" : fn === "cross3" ? "auto_cross3" : "auto_cross";
  tryCmd(player, `execute as @s positioned ${posCmd(loc)} run function ${autoFn}`);
  // Banish sounds: played once here (the auto_cross functions no longer play any)
  tryCmd(player, "playsound mob.closet.trap @a");
  if (fn === "cross2") tryCmd(player, "playsound r_curious_crucifix_shot @a[r=24]");
  else tryCmd(player, "playsound r_crucifix_shot @a[r=24]");
  if (fn === "cross3") tryCmd(player, "playsound mob.figure.roar @a[r=40]");
  try {
    const dim = player.dimension;
    if (fn === "cross") {
      try { dim.spawnEntity("doors:light_circle", loc); } catch (e) {}
      try { dim.spawnEntity("doors:crucifix", { x: loc.x, y: loc.y, z: loc.z + 1 }); } catch (e) {}
    } else if (fn === "cross2") {
      try { dim.spawnEntity("doors:curious_light_circle", loc); } catch (e) {}
      try { dim.spawnEntity("doors:crucifix_yellow", { x: loc.x, y: loc.y, z: loc.z + 1 }); } catch (e) {}
    } else if (fn === "cross3") {
      try { dim.spawnEntity("doors:figure_circle", loc); } catch (e) {}
      try { dim.spawnEntity("doors:figure_crucifix", { x: loc.x, y: loc.y, z: loc.z + 1 }); } catch (e) {}
    }
  } catch (e) {}
  scheduleCrucifixCleanup(player.dimension, loc);
  if (entity) banishTail(player, entity, loc);
  cleanupJumpscares(player);
}

function banishTail(player, entity, loc) {
  extraStunCommands(player, loc, entity.typeId);
  tryCmd(player, `execute as @s positioned ${posCmd(loc)} run effect @e[type=${entity.typeId},r=10] slowness 10 255 true`);
  if (entity.typeId !== "minecraft:player") {
    // Let the trap hold the mob for the banish animation, then remove it at the end (~6s)
    const eid = entity.id;
    banishPending.add(eid);
    system.runTimeout(() => {
      try { entity.remove(); } catch (e) {}
      banishPending.delete(eid);
    }, BANISH_REMOVE_TICKS);
  }
  if (entity.typeId === "minecraft:player") {
    tryCmd(player, `execute as @s positioned ${posCmd(loc)} run title @a[r=8] actionbar §l§b*Guiding Light says no PvP*`);
  }
}

function autoBanishEntity(player, entity) {
  if (!player || !entity) return;
  if (entity.id && player.id && entity.id === player.id) return;
  const typeId = entity.typeId;
  if (!isAutoBanishTarget(typeId)) return;
  if (!isAutoBanishOn(player)) return;
  const fn = heldCrucifixProtocol(player);
  if (!fn) return;

  protectPlayer(player);
  if (entity.id && banishPending.has(entity.id)) return;
  const family = threatFamily(typeId);

  if (JUMPSCARE_IDS.has(typeId) && recentlyBanished(player, family)) {
    cleanupJumpscares(player);
    return;
  }

  if (!ceremonyReady(player, family)) {
    if (JUMPSCARE_IDS.has(typeId)) cleanupJumpscares(player);
    return;
  }

  runCeremony(player, entity, fn);
  return true;
}

function autoBanishFromHurt(player, source) {
  if (!isAutoBanishOn(player) || !heldCrucifixProtocol(player)) return;
  protectPlayer(player);
  if (source && source.id !== player.id && isAutoBanishTarget(source.typeId)) {
    autoBanishEntity(player, source);
    return;
  }
  try {
    const near = player.dimension.getEntities({ location: player.location, maxDistance: 10 });
    const jumps = near.filter((e) => JUMPSCARE_IDS.has(e.typeId));
    const threats = near.filter((e) => e.id !== player.id && isAutoBanishTarget(e.typeId));
    autoBanishEntity(player, jumps[0] || threats[0]);
  } catch (e) {}
}

function bindAutoBanish() {
  try {
    world.afterEvents.entityHurt?.subscribe((ev) => {
      try {
        if (ev.hurtEntity?.typeId !== "minecraft:player") return;
        const src = ev.damageSource?.damagingEntity || ev.damageSource?.damagingProjectile;
        autoBanishFromHurt(ev.hurtEntity, src);
      } catch (e) {}
    });
  } catch (e) {}
  try {
    world.beforeEvents?.entityHurt?.subscribe((ev) => {
      try {
        if (ev.hurtEntity?.typeId !== "minecraft:player") return;
        const src = ev.damageSource?.damagingEntity;
        if (src && src.id !== ev.hurtEntity.id && isAutoBanishTarget(src.typeId) && isAutoBanishOn(ev.hurtEntity) && heldCrucifixProtocol(ev.hurtEntity)) {
          protectPlayer(ev.hurtEntity);
          try { ev.cancel = true; } catch (e2) {}
        }
      } catch (e) {}
    });
  } catch (e) {}
  try {
    world.afterEvents.entityHitEntity?.subscribe((ev) => {
      try {
        if (ev.hitEntity?.typeId !== "minecraft:player") return;
        if (ev.damagingEntity && ev.damagingEntity.id !== ev.hitEntity.id) {
          autoBanishFromHurt(ev.hitEntity, ev.damagingEntity);
        }
      } catch (e) {}
    });
  } catch (e) {}
}

try { bindAutoBanish(); } catch (e) {}

system.runInterval(() => {
  autoTick++;
  try {
    for (const player of world.getPlayers()) {
      const locked = autoTick < (playerCeremonyLock.get(player.id) || 0);
      if (!isAutoBanishOn(player) && !locked) continue;
      if (locked) {
        protectPlayer(player);
        cleanupJumpscares(player);
      }
      if (!heldCrucifixProtocol(player) && !locked) continue;
      const near = player.dimension.getEntities({ location: player.location, maxDistance: 10 });
      const jumps = [];
      const parents = [];
      const targets = [];
      const curious = heldCrucifixProtocol(player) === "cross2";
      for (const e of near) {
        if (isBanishableEntity(e, curious) && !banishPending.has(e.id)) targets.push(e);
        if (JUMPSCARE_IDS.has(e.typeId)) jumps.push(e);
        else if (isDoorsThreat(e.typeId)) parents.push(e);
      }
      if (isAutoBanishOn(player) && heldCrucifixProtocol(player)) {
        try {
          for (const h of player.dimension.getEntities({ location: player.location, maxDistance: AUTO_BANISH_RANGE, families: ["monster"] })) {
            if (String(h.typeId).startsWith("minecraft:") && !banishPending.has(h.id)) targets.push(h);
          }
        } catch (e2) {}
      }
      if (targets.length && isAutoBanishOn(player) && heldCrucifixProtocol(player)) {
        // Protect the player, then banish the nearest threat within range
        if (autoTick - (killerProtectTick.get(player.id) ?? -100) >= PROTECT_INTERVAL_TICKS) {
          protectPlayer(player);
          killerProtectTick.set(player.id, autoTick);
        }
        const pl = player.location;
        const dist = (e) => { const l = e.location; return Math.hypot(l.x - pl.x, l.y - pl.y, l.z - pl.z); };
        targets.sort((x, y) => dist(x) - dist(y));
        const ran = autoBanishEntity(player, targets[0]);
        if (ran) {
          // Every crucifix banishes everything in range at once (one sound, one ceremony)
          for (const extra of targets.slice(1)) {
            if (!banishPending.has(extra.id)) {
              try { banishTail(player, extra, extra.location); } catch (e3) {}
            }
          }
        }
      }
      if (!jumps.length && !locked) continue;
      if (jumps.length) {
        protectPlayer(player);
        const target = parents[0] || jumps[0];
        autoBanishEntity(player, target);
        cleanupJumpscares(player);
        for (const e of jumps) {
          try { e.remove(); } catch (e2) {}
        }
      }
    }
  } catch (e) {}
}, 1);

const ROOMS_REMOVE_IDS = [
  "doors:a_120", "doors:a_90", "doors:a_90_stop", "doors:a_90_angry",
  "r:a_90", "r:a_90_stop", "r:a_90_angry",
  "secret:a_60", "secret:a_602", "doors:a_60v1", "doors:a_60v2",
  "doors:a60_stun", "doors:a60_stun2",
  "r:a60_jumpscare", "r:a90_jumpscare", "r:a120_jumpscare",
  "r:a60_light", "r:a60_light2", "r:a90kill", "r:a120kill"
];

function forceRemoveRooms(dim, loc, radius) {
  if (!dim || !loc) return;
  for (const typeId of ROOMS_REMOVE_IDS) {
    let found = [];
    try { found = dim.getEntities({ type: typeId, location: loc, maxDistance: radius }); } catch (e) { continue; }
    for (const entity of found) {
      try { entity.remove(); } catch (e2) {}
    }
  }
}

const RUSH_STUN_IDS = [
  "doors:rush", "doors:rush2", "doors:cursed_rush", "doors:nightmare_rush"
];
for (let n = 1; n <= 19; n++) if (n !== 10) RUSH_STUN_IDS.push("doors:rush_variant" + n);

const AMBUSH_STUN_IDS = [
  "doors:ambush", "doors:ambush2", "doors:red_ambush", "doors:red_ambush2"
];

const RUSH_AMBUSH_REMOVE_IDS = [
  "doors:rush_bad", "doors:rush_bad2", "doors:rush_bad_d",
  "doors:ambush_bad", "doors:ambush_bad2", "doors:ambush_bad_d",
  "r:rush", "r:rush_hitbox", "r:rush_jumpscare", "r:rush_light", "r:rush_sound",
  "r:ambush_hitbox", "r:ambush_jumpscare", "r:ambush_particle"
];

function forceBanishRushAmbush(dim, loc, radius) {
  if (!dim || !loc) return;
  const stun = (typeId, eventName) => {
    let found = [];
    try { found = dim.getEntities({ type: typeId, location: loc, maxDistance: radius }); } catch (e) { return; }
    for (const entity of found) {
      try { entity.triggerEvent(eventName); } catch (e) {}
      const captured = entity;
      system.runTimeout(() => {
        try {
          if (captured.typeId === typeId) captured.remove();
        } catch (e2) {}
      }, 5);
    }
  };
  for (const id of RUSH_STUN_IDS) stun(id, "minecraft:event_spawn_rush_stun");
  for (const id of AMBUSH_STUN_IDS) stun(id, "minecraft:event_spawn_ambush_stun");
  for (const id of RUSH_AMBUSH_REMOVE_IDS) {
    let found = [];
    try { found = dim.getEntities({ type: id, location: loc, maxDistance: radius }); } catch (e) { continue; }
    for (const entity of found) {
      try { entity.remove(); } catch (e2) {}
    }
  }
}

function holding(player, typeId) {
  try {
    const eq = player.getComponent("minecraft:equippable");
    if (!eq) return false;
    for (const slot of ["Mainhand", "Offhand"]) {
      const stack = eq.getEquipment(slot);
      if (stack && stack.typeId === typeId) return true;
    }
  } catch (e) {}
  return false;
}

function openJeffShop(player) {
  try {
    const dim = player.dimension;
    const near = dim.getEntities({ type: "r:shop", location: player.location, maxDistance: 8 });
    if (!near.length) dim.spawnEntity("r:shop", player.location);
    player.runCommand("dialogue open @e[type=r:shop,r=8,c=1] @s prerun_shop");
    player.runCommand("playsound mob.elevator.shop @a[r=6]");
  } catch (e) {}
}

ITEM_ACTIONS["r:key"] = {
  actions: [{ commands: [
    "function unlocked",
    "event entity @e[type=doors:hotel_door2,r=5] minecraft:open",
    "event entity @e[type=doors:hotel_door3,r=5] minecraft:open",
    "event entity @e[type=doors:metal_door,r=5] minecraft:open",
    "event entity @e[type=doors:metal_door2,r=5] minecraft:open",
    "event entity @e[type=doors:old_door,r=5] minecraft:open",
    "playsound mob.elevator.door_open @a[r=6]",
    "clear @s r:key 0 1"
  ], condition: null }],
  damage_on_use: false
};

ITEM_ACTIONS["r:skeleton"] = {
  actions: [{ commands: [
    "function unlocked",
    "event entity @e[type=doors:skeleton_door,r=5] minecraft:open",
    "event entity @e[type=doors:skeleton_door2,r=5] minecraft:open",
    "event entity @e[type=doors:skeleton_door3,r=5] minecraft:open",
    "event entity @e[type=doors:hotel_door2,r=5] minecraft:open",
    "playsound mob.elevator.door_open @a[r=6]",
    "clear @s r:skeleton 0 1"
  ], condition: null }],
  damage_on_use: false
};

ITEM_ACTIONS["r:hammer"] = {
  actions: [{ commands: [
    "event entity @e[type=doors:elevator_power,r=5] minecraft:is_started",
    "event entity @e[type=doors:elevator_power2,r=5] minecraft:is_started",
    "playsound mob.closet.breaker @a[r=6]",
    "title @s actionbar §l§eBreaker switched"
  ], condition: null }],
  damage_on_use: false
};

ITEM_ACTIONS["r:holy_hand_grenade"] = {
  spawn: "r:bomb",
  actions: [{ commands: [
    "playsound random.fuse @a[r=8]",
    "clear @s r:holy_hand_grenade 0 1"
  ], condition: null }],
  damage_on_use: false
};

function bindWorldFixes() {
  if (!world.afterEvents.playerInteractWithEntity) return;
  world.afterEvents.playerInteractWithEntity.subscribe((ev) => {
    const player = ev.player;
    const target = ev.target;
    if (!player || !target) return;
    const id = target.typeId || "";
    const hand = ev.itemStack && ev.itemStack.typeId;
    try {
      if (id === "doors:elevator" || id === "doors:elevator2") {
        target.runCommand("event entity @s minecraft:is_spawn");
        system.run(() => {
          try {
            const ride = target.getComponent("minecraft:rideable");
            if (ride) ride.addRider(player);
            else player.runCommand("ride @s start_riding @e[type=" + id + ",r=4,c=1]");
            player.runCommand("title @s actionbar §lEntering the elevator...");
          } catch (e2) {}
        });
      } else if (id === "doors:elevator_power" || id === "doors:elevator_power2") {
        if (hand === "r:hammer" || holding(player, "r:hammer")) {
          target.runCommand("event entity @s minecraft:is_started");
          player.runCommand("playsound mob.closet.breaker @a[r=6]");
          player.runCommand("title @s actionbar §l§eBreaker switched");
        } else {
          player.runCommand("title @s actionbar §lHold the Hammer, then use the breaker");
        }
      } else if (id === "doors:hotel_door2" || id === "doors:hotel_door3" || id === "doors:metal_door" || id === "doors:metal_door2" || id === "doors:old_door") {
        if (holding(player, "r:key") || holding(player, "r:lockpick") || holding(player, "r:skeleton")) {
          target.runCommand("event entity @s minecraft:open");
          player.runCommand("function unlocked");
          player.runCommand("playsound mob.elevator.door_open @a[r=6]");
        } else {
          player.runCommand("title @s actionbar §lThis door needs a Key or Lockpick");
        }
      } else if (id.startsWith("doors:skeleton_door")) {
        if (holding(player, "r:skeleton") || holding(player, "r:key")) {
          target.runCommand("event entity @s minecraft:open");
          player.runCommand("function unlocked");
          player.runCommand("playsound mob.elevator.door_open @a[r=6]");
        } else {
          player.runCommand("title @s actionbar §lThis door needs a Skeleton Key");
        }
      } else if (id === "doors:jeff" || id === "r:shop" || id === "doors:jeff_table") {
        openJeffShop(player);
      }
    } catch (e) {}
  });
}

try { bindWorldFixes(); } catch (e) {}
