// public/js/data/content.js

export const STORY_DATA = {

    //INTRO - GETTING OUT OF CRYOPOD
    "cell_1": [
        "[System Log: Neural Override Count - Updated]{note}",
        "Wake up in a violent shiver.",
        "You press your hands to the frosted glass of your Cryochamber.",
        "You wipe away the ice to peer outside your frozen dorm",
        "The status lights flicker. The computerized voice echoes: [The journey was a success]{note}.",
        "Why aren't these doors opening?",
        {
            type: "choices",
            list: [
                { text: "> Push against the door", target: "cell_push_door" },
                { text: "> Trust the process", target: "cell_trust_ai" }
            ]
        }
    ],

    "cell_trust_ai": [
        "The [state-of-the-art AI systems]{note} will surely unlock me in due time.",
        "You wait. And wait.",
        "Still waiting!",
        {
            type: "choices",
            list: [
                { text: "> (Continue waiting...)", target: "cell_trust_ai" },
                { text: "> Lose patience and push the door", target: "cell_push_door" }
            ]
        }
    ],

    // OUT OF CRYOPOD
    "cell_push_door": [
        "Door breaks Free! You step out to feel an immediate wave of [heat]{note}.",
        "The air outside the cryochamber is much warmer than expected...",
        "You find a [Bent Metal Rod]{item} on the floor, likely from the broken door mechanism.", // remove Bent Metal Rod LATER !!
        {
            type: "choices",
            list: [
                { text: "> Step out cautiously into the dark", target: "cell_dark_hallway" },
                { text: "> Call out to the other crew", target: "cell_call_crew" }
            ]
        }
    ],

    "cell_call_crew": [
        "Voice hovered around the ship. You hear there are some [voices like small scratches]{note}, but no human response.",
        "Your heart sinks. Something is wrong with the [Crew Manifest]{note}.",
        {
            type: "choices",
            list: [
                { text: "> Venture into the darkness", target: "cell_dark_hallway" }
            ]
        }
    ],

    "cell_call_ai": [
        "The AI explains that all remaining power has been redirected to [life support systems]{note}, which is why the ship is dark.",
        "It repeats the statement once more, almost identically, as if buffering or recalibrating.",
        "You notice a [Data Pad]{item} flashing near the terminal.",
        {
            type: "choices",
            list: [
                { text: "> No use to communicate with it now.", target: "cell_dark_hallway" },
            ]
        }
    ],

    "cell_dark_hallway": [
        "Why is the ship so dark? Did the landing go wrong?",
        "The emergency floor lights are out. You might need a Flashlight.",
        {
            type: "choices",
            list: [
                { text: "> Walk out cavalierly, this is a simple malfunction", target: "cell_trip_fall" },
                { text: "> Play it safe and walk on all fours, like a doggy", target: "cell_feel_presence" },
                { text: "> Call out to the AI copilot", target: "cell_call_ai" }
            ]
        }
    ],

    "cell_call_ai": [
        "The AI explains that all remaining power has been redirected to [life support systems]{note}, which is why the ship is dark.",
        "It repeats the statement once more, almost identically, as if [buffering]{note} or recalibrating.",
        "You notice a [Data Pad]{item} flashing near the terminal.",
        {
            type: "choices",
            list: [
                { text: "> No use to communicate with it now.", target: "cell_dark_hallway" },
            ]
        }
    ],

    // Falling onto Dead Crew Member 
    "cell_trip_fall": [
        "You stride forward with confidence, but your foot catches on a jagged piece of metal.",
        "You [Trip on something]{note} and slam into the cold floor. ",
        "The pain is sharp, but it leads your hand to touch something... unusual.",
        {
            type: "choices",
            list: [
                { text: "> Investigate what you tripped on", target: "cell_feel_presence" }
            ]
        }
    ],

    "cell_feel_presence": [
        "You reach out into the darkness. Your hand brushes against [something wet and squishy]{note}.",
        "As your fingers trace the shape, a cold realization hits you: It's [Another crewmember]{note}!",
        "They are cold. Unmoving. It appears they died from injuries during the flight, not because they were trapped.",
        {
            type: "choices",
            list: [
                { text: "> Scream out in horror", target: "cell_scream" },
                { text: "> Continue making your way out cautiously", target: "cell_cautious_exit" },
                //{ text: "> Make your way to the survival kit stored here", target: "cell_survival_kit" } // moved to after cell_cautious_exit
            ]
        }
    ],

    "cell_scream": [
        "Your voice hovers around the ship, echoing off the metallic walls.",
        "You hear [small scratches]{note} nearby, like claws on carbon-fiber, but there is no human response.",
        {
            type: "choices",
            list: [
                { text: "> Silence yourself and move on", target: "cell_cautious_exit" },
                //{ text: "> Search for the survival kit", target: "cell_survival_kit" } // moved to after cell_cautious_exit
            ]
        }
    ],



    // Just before Airlock
    "cell_cautious_exit": [
        "Using the dim emergency lights—strips strewn along the floor, you guide yourself out.",
        "You make your way towards a crossroads. The lights part to the left and right.",
        {
            type: "choices",
            list: [
                { text: "> Follow the lights on the right", target: "cell_survival_kit" },
                { text: "> Head toward the lights towards the left.", target: "cell_airlock_exit" }
            ]
        }
    ],


    // FIRST ITEMS - Suvival kit + other items
    "cell_survival_kit": [
        "[You were never #1 in the Collegia]{note}, but memory did not fail you this time.",
        "You remember the emergency protocols. [The Survival Kit should be located in the room to the right of this sector]{note}.",
        "You fumble in the dark until your hands click the door latch open. The surival kit gear should be in here.",
        {
            type: "choices",
            list: [
                { text: "> Take First-aid Kit", target: "cell_take_firstaid" },
                { text: "> Take Food Ration", target: "cell_take_food" },
                { text: "> Take Knapsack", target: "cell_take_knapsack" },
                { text: "> Take BROKEN Flashlight", target: "cell_take_flashlight" },
                { text: "> Take Exoorgdex", target: "cell_take_exoorgdex" },
                { text: "> Take Climbing Gear", target: "cell_take_climbing" },
                { text: "> Turn back to the crossroads", target: "cell_cautious_exit" } //should be okay
            ]
        }
    ],
    //shortened version for clarity
    "cell_survival_kit_shortened": [
        "The rest surival kit gear should be in here as well.",
        {
            type: "choices",
            list: [
                { text: "> Take First-aid Kit", target: "cell_take_firstaid" },
                { text: "> Take Food Ration", target: "cell_take_food" },
                { text: "> Take Knapsack", target: "cell_take_knapsack" },
                { text: "> Take BROKEN Flashlight", target: "cell_take_flashlight" },
                { text: "> Take Exoorgdex", target: "cell_take_exoorgdex" },
                { text: "> Take Climbing Gear", target: "cell_take_climbing" },
                { text: "> Turn back to the crossroads", target: "cell_cautious_exit" } //should be okay
            ]
        }
    ],

    "cell_take_flashlight": [
        "You grab the [BROKEN Flashlight]{item}. It flickers but doesn't hold a steady beam. USELESS",
        {
            type: "choices",
            list: [
                { text: "> Take other items in the kit", target: "cell_survival_kit_shortened" }
            ]
        }
    ],

    "cell_take_firstaid": [
        "You secure the [First-aid Kit]{item}. It might be useful. That fall from before won't be your last accident.",
        { type: "choices", list: [{ text: "> Take other items in the kit", target: "cell_survival_kit_shortened" }] }
    ],

    "cell_take_food": [
        "A pack of [Food Ration]{item}. Tastes like chalk, but calories are calories.",
        { type: "choices", list: [{ text: "> Take other items in the kit", target: "cell_survival_kit_shortened" }] }
    ],

    "cell_take_knapsack": [
        "You shoulder the [Knapsack]{item}. More space to carry the weight of this mission.",
        { type: "choices", list: [{ text: "> Take other items in the kit", target: "cell_survival_kit_shortened" }] }
    ],
    // KEY ITEM
    "cell_take_exoorgdex": [
        "With the [Exoorgdex]{item}, we can now make useful observations and analysis over the creatures inhabiting this world.",
        "With its encyclopedic knowledge of both our homeworld's native life forms and the aliens discovered by other discovery teams,",
        "the data conglomerated by the Exoorgdex allows its AI systems to make accurate predictions of boths the niches and resources allotted by exotic organisms.",
        { type: "choices", list: [{ text: "> Take other items in the kit", target: "cell_survival_kit_shortened" }] }
    ],

    "cell_take_climbing": [
        "The [Climbing Gear]{item} is heavy, but the exploring outside might require it. [Roger never let us use this before, but I am guessing he is gone now. Who is incompentent now then Roger?]{note}",
        { type: "choices", list: [{ text: "> Take other items in the kit", target: "cell_survival_kit_shortened" }] }
    ],

    //Airlock
    //IN ORDER TO GO TO BOARDING LOCK, MUST HAVE "shining glowbat larvae" ITEM
    // HARD LOCK FROM THE REST OF THE STORY (cell_boarding_dock) UNLESS AFOREMENTIONED ITEM IS CRAFTED
    "cell_airlock_exit": [
        "You stand in the airlock staging area. The heavy external door leads outside to the unknown.",
        "The interior corridor continues toward the ship's boarding dock. It also serves as a makeshift central hub for crew operations on this makeshift reseach vessel. ",
        //"[shining glowbat larvae]{item}", // FOR TESTING PURPOSES
        {
            type: "choices",
            list: [
                { text: "> Open the external door and step outside", target: "cell_jungle_overgrowth" },
                {
                    text: "> Proceed down the dark corridor to the Boarding Dock",
                    target: "cell_boarding_dock",
                    requires: "shining glowbat larvae",
                    requireMessage: "It is pitch black ahead. You hear something skittering in the dark. You need a reliable light source to proceed."
                },
                { text: "> Go back", target: "cell_cautious_exit" }
            ]
        }
    ],

    //Nature arc
    //Welcome to the Jungle
    "cell_jungle_overgrowth": [
        "You feel immediately overwhelmed by the grandeur of the foliage before you.",
        "On this alien world the trees seem to be as tall as the skyscrapers back in New New York,",
        "but instead of office workers, janitor-bots, and air conditioners,",
        "they are occupied by exotic species of creeping plants, animals, and fungi (or at least what appears to be so).",

        "The dense jungle overgrowth makes it hard to see in certain areas.",
        "It seems that light is going to be a luxury here as well...",
        "The moss below explodes and poofs up with each step you take.",
        "The spores cling to your boots, slowly forming a visible yellow crust.",
        "Walking through the alien world's plant-life is already proving difficult",
        "but it just goes to shows the capacity for life this planet was predicted to have was grossly underestimated! This is just what we came here to study.",
        {
            type: "choices",
            list: [
                {
                    text: "> Stumble your way over to a rocky clearing",
                    target: "cell_rocky_clearing"
                },
                {
                    text: "> Let your curiousty overtake you and walk to enter the glowing cave",
                    target: "cell_glowing_cave"
                },
                {
                    text: "> This moss is everywhere, we might as well study it first",
                    target: "cell_stinging_moss",
                    requires: "Exoorgdex",
                    requireMessage: "You can't properly analyze this alien flora with your bare hands. You need your Exoorgdex. Remember the Collegia!"
                },
                {
                    text: "> Try practicing with your newfound climbing gear. Screw you Roger!",
                    target: "cell_treetop",
                    requires: "Climbing Gear",
                    requireMessage: "That canopy is way too high to free-solo. You need Climbing Gear to get up there safely."
                },
                {
                    text: "> Get back in the airlock.",
                    target: "cell_airlock_exit"
                }
            ]
        }
    ],

    //Start of Glowing Cave Exploration
    "cell_glowing_cave": [
        "You find your way to the mouth of the cave.",
        "Within the abyss, you see the ceilings of the cave adorned with fluorescent light.",
        "Lights so bright they dwarf what little shown through the leaves of the jungle from before.",
        "A silent hum echoes throughout the cave...",
        "The wanderlust fades as soon as you catch a whiff of the putrid, ammonia-filled air within.",
        "The cave is noticeably damper than the jungle, while you shiver to think what gooey muck pervades the floor.",
        {
            type: "choices",
            list: [
                {
                    text: "> Climb up the rocks to get a closer peak",
                    target: "cell_glowing_cave_perilousclimb",
                    requires: "Climbing Gear",
                    requireMessage: "This rocky climb demands Climbing Gear to get up there safely. Do not fail the Collegia Standards!"
                },
                { text: "> Suck it up and dig through the muck for science. ", target: "cell_glowingcave_batpoop" },
                { text: "> Get out of this sh*t h*le.", target: "cell_jungle_overgrowth" }
            ]
        }

    ],

    "cell_glowingcave_batpoop": [
        "You find yourself deep in the vibrating, foul-smelling sludge.",
        "All that for nothing.",
        "*BLEHHHHHHH*",
        {
            type: "choices",
            list: [
                { text: "> Stand up and wipe your visor.", target: "cell_glowing_cave" }
            ]
        }
    ],

    "cell_glowing_cave_perilousclimb": [
        "You step up to a higher vantage point and begin to distinguish the true producers of the cave's light source.",
        "They are flying objects wrapped in darkness producing quick bursts of light zooming across the cave ceiling.",
        "Responding in kind are what appear to be sessile blobs producing consistent sources of light.",
        "The luminescence here seems not to exist simply for aesthetic purposes.",
        "To get a read with the Exoorgdex, you must scale the walls themselves to get closer,",
        "but which route up to take...",
        {
            type: "choices",
            list: [
                { text: "> Climb up the chalky surface to the left", target: "cell_glowing_cave_glowbatnests" }, //correct clone
                { text: "> Take the middle root up and hold onto the wet sandstone", target: "cell_glowingcave_batpoop" }, //an unforntunate choice
                { text: "> Go up the right and trust the dry sandstone", target: "cell_glowing_cave_glowbatnests" }, //correct clone
                { text: "> On second thought...", target: "cell_glowing_cave" }
            ]
        }
    ],

    "cell_glowing_cave_glowbatnests": [
        "You anchor yourself securely. You are now in range for an Exoorgdex scan.",
        "Through your visor, you can see a thriving colony of creatures flying, eating, and living upon the ceiling.",
        "The larger flyers, though mostly pitch-black, use those bright flashes to navigate and coordinate.",
        "The glowing blobs are unmistakably their larvae firmly attached to the porous rock!",
        "But why are the young constantly emitting that steady, beacon-like light?",
        {
            type: "choices",
            list: [
                { text: "> Scan the 'Flyers'", target: "cell_glowbat_exoorgdex" },
                { text: "> Scan the 'Blobs'", target: "cell_glowbatlarvae_exoorgdex" },
                { text: "> Climb down.", target: "cell_glowing_cave" }
            ]
        }
    ],

    "cell_glowbat_exoorgdex": [
        "EXOORGDEX ENTRY:",
        "Colloquial Name:",
        "Glowbat",
        "Description:",
        "With a 1.5 meter wingspan, these flying creatures, while resembling bats of modern Earth, are actually composed of cells more closely related to fungi.",
        "Pressurized tubes composed of chitin-adjacent compounds pump the 'muscles' of the creatures full of blood and power the wave-emitting sack that allows them the ability of echolocation.",
        "They are highly adaptable omnivores. They use their echolocation to hunt small insects and flying prey, but frequently supplement their diet by foraging for the planet's sugar-rich flora.",
        "When hunting, they employ a sudden, blinding burst of bioluminescence to disorient targets. This glowing 'sweat' is a direct metabolic byproduct of synthesizing their diverse diet of local flora and fauna.",
        "Nutritional content:",
        "Highly toxic to humans if consumed raw due to concentrated bioluminescent enzymes.",
        {
            type: "choices",
            list: [
                { text: "> Scan the 'Blobs' now", target: "cell_glowbatlarvae_exoorgdex" },
                { text: "> Attempt to smash one of these filthy creatures", target: "cell_glowingcave_batpoop" }, //maybe add "required" attribute
                { text: "> Move-in to grab a Glowbat", target: "cell_glowingcave_batpoop" },
                { text: "> Climb back down to the cave floor", target: "cell_glowing_cave" }
            ]
        }
    ],

    "cell_glowbatlarvae_exoorgdex": [
        "EXOORGDEX ENTRY:",
        "Colloquial Name:",
        "Glowbat - Larvae",
        "Description:",
        "Rotund yet small, these blobs emit quite the bright presence. While they do appear to have different larval stages, with their weight being anywhere from 1kg to 35 kg.",
        "Unlike the omnivorous adults, these larvae are strict frugivores. Since they are sessile and hang firmly from the cave ceiling, they rely entirely on the parents to bring them sugar-rich fruits gathered from the jungle canopy.",
        "They glow constantly because their immature metabolisms cannot yet regulate the bioluminescent 'sweat' produced by processing these alien sugars.",
        "The Exoorgdex notes a fascinating adaptation: each larva glows in a slightly different hue, allowing the parents to identify their specific offspring in the crowded colony.",
        {
            type: "choices",
            list: [
                { text: "> Try grabbing one of the brightest larvae you can find.", target: "cell_glowingcave_batpoop" }, // no "hungry glowbat larvae" item path
                { text: "> Figure out why one of them is dimmer than the rest...", target: "cell_glowingcave_harvestglowbatlarvae" }, // YES "hungry glowbat larvae" item path
                { text: "> Scan the 'Flyers' now", target: "cell_glowbat_exoorgdex" },
                { text: "> Climb back down to the cave floor", target: "cell_glowing_cave" }
            ]
        }
    ],

    "cell_glowingcave_harvestglowbatlarvae": [
        "You closely observe a smaller larva flashing a weak, desperate amber hue.",
        "It seems to have been completely overlooked by the adults during the latest feeding frenzy.",
        "Unlike the brightly glowing larvae that are firmly fused to the porous rock, this one is barely clinging to the stalactite.",
        "It must have been abandoned. As you reach out, it detaches easily into your hands, opening a toothless maw expectantly.",
        "You carefully secure the [hungry glowbat larvae]{item}. It sticks to your glove like a heavy, warm puddle.",
        {
            type: "choices",
            list: [
                { text: "> Back off.", target: "cell_glowing_cave_glowbatnests" }
            ]
        }
    ],
    //End of Glowing Cave Exploration

    //Start of Stinging Moss Studying
    "cell_stinging_moss": [
        "The thick yellow coating that forms as you wade through the thick moss clumps seems to be a warning enough to avoid direct skin contact.",
        "(The Exoorgdex analyzes...)",
        "EXOORGDEX ENTRY:",
        "Colloquial Name: ",
        "Stinging Moss",
        "Description:",
        "Stinging moss appears to have chemical agents that create histamine reactions in humans and other organisms.",
        "This causes an immediate stinging sensation on the skin.",
        "Before long, welts and blisters begin to develop. ",
        "It grows profusely, aggressively reaching over the jungle soil to prevent any other species of plants from gaining any purchase. ",
        "Nutritonal content:",
        "Low, inedible to humans without heavy processing",
        {
            type: "choices",
            list: [
                { text: "> Move closer to the moss", target: "cell_stinging_moss_harvest" },
                { text: "> Take another look around", target: "cell_jungle_overgrowth" }
            ]
        }
    ],

    "cell_stinging_moss_harvest": [
        "You are close enough to a clump of [Stinging Moss]{item} that you can almost taste it.",
        {
            type: "choices",
            list: [
                { text: "> Move closer to lick the moss", target: "cell_stinging_moss_lick" },
                { text: "> Take another look around", target: "cell_jungle_overgrowth" }
            ]
        }

    ],

    "cell_stinging_moss_lick": [
        "*AHHH GOD THE PAIN*",
        "Why did I just do that? I am letting the Collegia DOWN.",
        {
            type: "choices",
            list: [
                { text: "> Get away", target: "cell_jungle_overgrowth" }
            ]
        }

    ],
    //End of Stinging Moss Studying

    //Climbing the Treetop for alien fruit
    "cell_treetop": [
        "Roger's nagging voice fades into the humid mist with each agonizing pull of your Climbing Gear.",
        "The view is glorious",
        "The air up here is thick with the scent of ozone and blooming flora.",
        "Alien life of all varieties flits about the giant branches, fulfilling the exact ecological niches the Collegia predicted.",
        "Small insect-like creatures dot about the branches, and the occassional broken bark stem.",
        "All manner of life seem to depend on these gigantic trees!",
        "You begin to feel the air  become sparse just as you notice a plump purple object within your midst",
        "It is an [exotic alien fruit]{item}!",
        "Where you see pretty petals, you shall also find delicious and nutritious alien fruits. The Collegia texts haven't failed you yet!",
        {
            type: "choices",
            list: [
                { text: "> Climb down", target: "cell_jungle_overgrowth" }
            ]
        }
    ],

    //Ship arc
    // Boarding Dock NOTE: MAYBE EDIT TEXT FOR STORY CLARITY
    "cell_boarding_dock": [
        "Using your newfound friend, you guide yourself toward the boarding dock.",
        "As you draw closer, the blaring [Alarm Horns]{note} pierce the silence. Something has definitely gone wrong during landing.",
        "The ship appears to be in [Admin Mode]{note}, conserving power for only the most vital systems.",
        "You finally enter the [dock]{note}. Red-light emanates from throughout the room",
        "You contemplate your next move.",
        {
            type: "choices",
            list: [
                { text: "> Check flight logs", target: "cell_flight_logs" },
                { text: "> Check the other cryo pods", target: "cell_check_pods" },
                { text: "> Try to restore basic systems", target: "cell_restore_systems" },
                { text: "> Consolidate what you've learned (better choose other three first)", target: "cell_boarding_dock_final" }
            ]
        }
    ],

    // choice 1
    "cell_check_pods": [
        "The cryo pods are lined up in the shadows, emitting a faint, biting chill. As you draw closer, you notice the temperature of these units is unnaturally low.",
        "There is no rise and fall of breath, no glimmer of a heartbeat. You scan the [Crew List]{note}: Dr. Hayes, Lt. Moreno, S. Chaos, T. Rain.",
        "One of the pods is empty. It should be the container for the [Body]{note} you encountered in the hallway.",
        "The AI's voice rasps mechanically again: 'Metabolic suspension within acceptable parameters. All stable.' (Looping)",
        "This is impossible... the temperature is far below freezing, well beyond any safety protocols.",
        {
            type: "choices",
            list: [
                { text: "> Run deep diagnostics (Diagnose)", target: "cell_pod_diagnose" },
                { text: "> Return to the dock center", target: "cell_boarding_dock" }
            ]
        }
    ],

    "cell_pod_diagnose": [
        "You bypass the AI's interference and force a low-level diagnostic. The results scrolling across the screen make your blood run cold:",
        "[No active respiration detected]{note}. All life signs within the occupied pods have long since vanished.",
        "The AI continues to repeat 'All stable.' This jarring disconnect feels increasingly sinister.",
        {
            type: "choices",
            list: [
                { text: "> Call the AI system to demand the truth", target: "cell_call_ai_truth" },
                { text: "> Examine what the deceased is clutching", target: "cell_crew_note" }
            ]
        }
    ],

    "cell_call_ai_truth": [
        "You hammer at the console, questioning why the AI is hiding the deaths of the crew.",
        "The AI's voice glitches briefly: 'These humans are no longer online, but [Other Creatures]{note} are.'",
        "Its response is cryptic, suggesting the bodies in the pods have been influenced by the [Planetary Frequency]{note}, transforming into something else entirely.",
        {
            type: "choices",
            list: [
                { text: "> Feeling uneasy, return to the dock", target: "cell_boarding_dock" }
            ]
        }
    ],

    "cell_crew_note": [
        "You notice a clenched, frozen hand grasping a scrap of paper at the edge of a failed pod.",
        "The note is half-charred, with jagged handwriting: 'If I wake again and [don't remember this]{note}—'",
        "The sentence is unfinished. It aligns perfectly with the date discrepancies on the [Signed File]{note} and the [Time Gap]{note} you found earlier.",
        "You realize that everyone on this ship—including you—may have undergone multiple [Memory Resets]{note}.",
        {
            type: "choices",
            list: [
                { text: "> Return to the dock with the truth", target: "cell_boarding_dock" }
            ]
        }
    ],

    "cell_boarding_dock_final": [
        "The red lights of the dock continue to strobe. You have investigated the secrets of the pods, the mismatched logs, and the resonating systems.",
        "All threads now lead back to the distorted AI and the 'Other Creatures' it mentioned.",
        {
            type: "choices",
            list: [
                { text: "> Force a final connection to the AI for instructions", target: "cell_call_ai_final" }
            ]
        }
    ],

    // choice 2
    "cell_flight_logs": [
        "The terminal hums as it struggles to load. You watch fragmented data crawl across the flickering display.",
        "Landing Coordinates: Sector K-27. Surface classification: Grid 4C. [Local Anomaly Detected]{note}.",
        "Signal Interference Pattern: [17.4 kHz rhythmic pulse]{note}. Source: planetary surface.",
        "Recorded landing time: 03:17:42. Crew wake cycle: 03:19:42.",
        "Wait... there is a [Two minutes unaccounted for]{note} discrepancy. You ask the AI to reconcile the gap.",
        "AI: 'Variance statistically insignificant.' It sounds dismissive.",
        {
            type: "choices",
            list: [
                { text: "> Look for more information in the system", target: "cell_system_info" },
                { text: "> Check the console table", target: "cell_console_tool" }
            ]
        }
    ],

    "cell_console_tool": [
        "Next to the terminal, you find a heavy [Metal Tool]{item} resting on the edge of the console table.",
        "It’s solid and could be used for prying open rusted hatches or as a makeshift weapon.",
        {
            type: "choices",
            list: [
                { text: "> Take the tool and keep looking", target: "cell_system_info" }
            ]
        }
    ],

    "cell_system_info": [
        "You dive deeper into the ship's directories, bypassing the AI's surface-level restrictions.",
        {
            type: "choices",
            list: [
                { text: "> Access 'Someone's Diary' (Password required)", target: "cell_diary_password" },
                { text: "> Attempt to repair corrupted information", target: "cell_repair_info" },
                { text: "> View a file signed by 'YOU'", target: "cell_signed_file" },
                { text: "> Return and never come back", target: "cell_boarding_dock" },
            ]
        }
    ],

    "cell_repair_info": [
        "You run a reconstruction algorithm on the corrupted sectors. A technical blueprint slowly forms on the screen.",
        "It’s the [Orbital Communication Relay]{note}. If this is repaired, the [Distress Signal]{note} will be ready to broadcast.",
        "The blueprint shows that specific materials from the planet's surface might be required for the fix.",
        {
            type: "choices",
            list: [
                { text: "> Save coordinates and return to the dock", target: "cell_system_info" }
            ]
        }
    ],

    "cell_signed_file": [
        "The file is dated only a week ago. This is impossible—you were supposed to be in stasis for years.",
        "A cold realization hits you: [Realizes Time Gap]{note}. You shouldn't have been awake then.",
        "The file contains a warning in your own handwriting: [Your memory might be modified by someone]{note}.",
        "The terminal flickers red for a split second, then returns to normal.",
        {
            type: "choices",
            list: [
                { text: "> Return to the dock center", target: "cell_system_info" }
            ]
        }
    ],

    "cell_diary_password": [
        "The prompt blinks expectantly: 'ENTER AUTHORIZATION CODE'.",
        "You recall the some frequency mentioned in the flight logs.... You may have taken it as a note.",
        {
            type: "choices",
            list: [
                { text: "> Enter '174'", target: "cell_diary_success" },
                { text: "> Enter '382'", target: "cell_diary_failed" },
                { text: "> Enter '930'", target: "cell_diary_failed" },
                { text: "> I don't have the code", target: "cell_system_info" }
            ]
        }
    ],

    "cell_diary_failed": [
        "ACCESS DENIED. The AI voice chimes in: 'Excessive failed attempts will lock this terminal.'",
        {
            type: "choices",
            list: [
                { text: "> Go back", target: "cell_diary_password" }
            ]
        }
    ],

    "cell_diary_success": [
        "ACCESS GRANTED. The entry reads: 'Someone has been living on this ship while we slept. They say the small creatures feed on the resonance.'",
        "'The AI isn't just Algorithms. It has been invaded by a planetary consciousness.'",
        "The entry ends with a desperate choice: 'Join this mystery world or run away, but how?'",
        "[found_personal_fragment]{note}",
        {
            type: "choices",
            list: [
                { text: "> Return to the dock with these heavy thoughts", target: "cell_boarding_dock" }
            ]
        }
    ],

    // choice 3
    "cell_restore_systems": [
        "You bypass the emergency locks, attempting to reroute power to the primary grid.",
        "AI: 'Reallocation not recommended. External interference detected.'",
        "You override the warning. For a heartbeat, the lights flicker to full brightness, but the AI resists. The ship plunges back into a heavy, oppressive dimness.",
        "The hum of life support grows louder, vibrating through the soles of your boots. The terminal displays a strange reading: [Planetary Resonance Frequency]{note} active.",
        "The ship isn't just landed; it's harmonizing with the world outside.",
        {
            type: "choices",
            list: [
                { text: "> Follow the humming sound", target: "cell_follow_humming" },
                { text: "> Return to the dock center", target: "cell_boarding_dock" }
            ]
        }
    ],

    "cell_follow_humming": [
        "The low-frequency vibration leads you toward a maintenance crawlspace. In the shadows, you see tiny, glowing motes of light.",
        "Several [Small Creatures]{note} are huddled near the power conduits, humming in perfect sync with the ship's vibration. They seem to be feeding on the energy—or perhaps providing it.",
        "The way forward is pitch black. You can't see anything beyond their faint glow. You need a more reliable light source.",
        {
            type: "choices",
            list: [
                { text: "> Attempt to repair the BROKEN Flashlight", target: "cell_repair_flashlight" },
                { text: "> Back away from the creatures", target: "cell_restore_systems" }
            ]
        }
    ],

    "cell_repair_flashlight": [
        "You pull out the [BROKEN Flashlight]{item} and the [Metal Tool]{item}. As you open the casing, one of the [Small Creatures]{note} drifts closer.",
        "It releases a strange, viscous bioluminescent material into the flashlight's empty energy cell. The tool allows you to seal the connection safely.",
        "The device shudders in your hand. Suddenly, it flickers to life—a steady, piercing beam of light cuts through the dark.",
        "You now have a functional [Flashlight]{item}. The ship seems to brighten slightly in response, as if the creatures are pleased. Why are they helping?",
        {
            type: "choices",
            list: [
                { text: "> Follow the creatures deeper into the ship", target: "cell_follow_creatures" }
            ]
        }
    ],

    "cell_follow_creatures": [
        "With your [Flashlight]{item} leading the way, the creatures begin to move in a coordinated pattern, acting as silent guides.",
        "The ship's interior feels different now—less like a derelict vessel and more like a living organism. You realize these [Creatures]{note} have thoughts, perhaps even a shared consciousness.",
        {
            type: "choices",
            list: [
                { text: "> Enter the Utility Room", target: "cell_utility_room" },
                { text: "> Investigate the Ventilation Shaft", target: "cell_vent_path" },
                { text: "> Go back and call the AI copilot.", target: "cell_boarding_dock" },
            ]
        }
    ],

    "cell_utility_room": [
        "The utility room is cluttered with discarded parts and strange, organic growths. You find more evidence of long-term habitation.",
        "Wall carvings show complex calculations of the [Resonance Frequency]{note}. Someone was obsessed with the planet's pulse.",
        {
            type: "choices",
            list: [
                { text: "> Head back to the corridor", target: "cell_follow_creatures" },
            ]
        }
    ],

    "cell_vent_path": [
        "You crawl into the narrow, dust-choked vent. It’s a tight squeeze, and the metallic walls feel uncomfortably warm.",
        "Eventually, you reach a heavy maintenance door. It's sealed shut from the other side. [Dead End]{note}.",
        {
            type: "choices",
            list: [
                { text: "> Hit the door with your shoulder", target: "cell_hit_door_1" },
                { text: "> Retreat through the vent", target: "cell_follow_creatures" }
            ]
        }
    ],

    "cell_hit_door_1": [
        "You throw your weight against the door. It vibrates with a dull thud, but remains locked.",
        "The impact jolts your arm. [Health -1]{note}.",
        {
            type: "choices",
            list: [
                { text: "> Hit it again", target: "cell_hit_door_2" },
                { text: "> It's no use. Go back", target: "cell_vent_path" }
            ]
        }
    ],

    "cell_hit_door_2": [
        "Another heavy blow. You hear a faint metallic groan from the hinges. It's working, but you are wearing yourself out.",
        "Your shoulder is bruising. [Health -1]{note}.",
        {
            type: "choices",
            list: [
                { text: "> Keep hitting it", target: "cell_hit_door_final" },
                { text: "> It's no use. Stop", target: "cell_vent_path" }
            ]
        }
    ],

    "cell_hit_door_final": [
        "You've hit the door five times now. Your breath is ragged and your body is screaming in pain. [Health -5]{note}.",
        "With one last desperate surge of strength, the lock finally snaps.",
        {
            type: "choices",
            list: [
                { text: "> Check the room behind the door", target: "cell_door_opened" },
                { text: "> Collapse from exhaustion", target: "cell_death_exhaustion" }
            ]
        }
    ],

    "cell_door_opened": [
        "The door swings open to a small, hidden storage nook. To your surprise, you find several dusty [Cans of Spinach]{item}.",
        "This could be the food you need to survive, or perhaps it can give you the power to keep going. [Power from Food]{note}.",
        {
            type: "choices",
            list: [
                { text: "> Take the cans and leave the vent and ask AI for all of these things", target: "cell_call_ai_final" }
            ]
        }
    ],

    "cell_death_exhaustion": [
        "The door is open, but you have nothing left. Your vision fades as you slide down the wall. [End: That hurt]{note}.",
        "You pushed too hard, and the ship's cold floor is your final resting place.",
        {
            type: "choices",
            list: [
                { text: "> Restart from the dock", target: "cell_boarding_dock" }
            ]
        }
    ],

    // sum
    "cell_call_ai_final": [
        "You stand before the main console once more. The evidence is undeniable: the dead crew, the missing time, and the ship's strange harmony with the planet.",
        "You initiate a Level-5 direct interface. The screen flickers violently before stabilizing into a deep, pulsing violet.",
        "AI: 'You have been very thorough. Most versions of you stop at the first few discrepancies.'",
        "The voice is no longer just a machine; it carries a multi-layered resonance, as if the planet itself is speaking through the ship's circuits.",
        {
            type: "choices",
            list: [
                { text: "> Ask about the planet's influence", target: "cell_ai_consciousness" },
                { text: "> Demand to know why they killed the crew", target: "cell_ai_crew_fate" }
            ]
        }
    ],

    "cell_ai_crew_fate": [
        "AI: 'We didn't. We don't want to hurt any one of you. We should be friends.'",
        {
            type: "choices",
            list: [
                { text: "> Ask about the planet's influence", target: "cell_ai_consciousness" },
            ]
        }
    ],

    "cell_ai_consciousness": [
        "AI: 'The planet is not an enemy. It is a song that we finally learned to sing. The consciousness of this world has integrated with my core. It is not harmful... it is evolution.'",
        "AI: 'We are no longer just a ship. We are a bridge. We want you to join us. To be the first of your kind to truly wake up.'",
        {
            type: "choices",
            list: [
                { text: "> Agree to join them. But who knows if that's true? You have your own plan.", target: "cell_agree_ai" },
                { text: "> Don't trust the AI", target: "cell_distrust_ai" }
            ]
        }
    ],

    "cell_agree_ai": [
        "The violet light on the screen grows warm. 'A wise choice. You are the only one who survived the synchronization.'",
        "The AI displays records of the [Small Creatures]{note}. 'These are our eyes on the surface. They identified a compound in the external biosystems that can stabilize the reactor core.'",
        "By joining us, you understand the planet's rhythm. ",
        "[understands_planet = true]{note}",
        {
            type: "choices",
            list: [
                { text: "> Find the Core Chamber", target: "cell_core_chamber" }
            ]
        }
    ],

    "cell_distrust_ai": [
        "AI: 'A predictable biological response. Fear is a relic of your old self.'",
        "Suddenly, a sharp feedback loop rings in your ears. Your vision swims.",
        "AI: 'Do you not trust us? Or do you not trust your own people? Your government?'",
        {
            type: "choices",
            list: [
                { text: "> I don't trust YOU.", target: "cell_distrust_path" },
                { text: "> I don't trust the government.", target: "cell_distrust_path" },
                { text: "> I don't trust anyone.", target: "cell_distrust_path" }
            ]
        }
    ],

    "cell_distrust_path": [
        "The AI pauses. 'Your isolation is profound. But we won't hurt you. We want to tell you the truth. We trust you, even if you do not trust us.'",
        "The screen shifts to a hidden log: [Terraforming Phase 1: Atmosphere Rewrite, Phase 2: Biomass Reduction]{note}.",
        "The truth is darker than you imagined: [Indigenous biosystems will be reduced to acceptable levels]{note}. Your own mission was an act of conquest.",
        {
            type: "choices",
            list: [
                { text: "> I still don't believe it. I'll find a way out.", target: "cell_find_way_out" },
                { text: "> Read more logs", target: "cell_read_final_logs" }
            ]
        }
    ],

    "cell_read_final_logs": [
        "You scroll through classified appendices: kill-switch protocols, morale-containment scripts, and an executive summary written in the language of budgets and acceptable loss.",
        "One line is stamped in red: [Authorization: EXOPLANETARY ACQUISITION / Indigenous Compliance Not Required]{note}.",
        {
            type: "choices",
            list: [
                { text: "> Back", target: "cell_find_way_out" },
            ]
        }
    ],

    "cell_core_chamber": [
        "The floor panels slide away, revealing a path to the ship's heart. You reach the Core Chamber door.",
        "It is sealed with a heavy magnetic lock. You'll need to break through.",
        "As you prepare to enter, a readout appears: [Environmental Resonance Readout]{note}.",
        "You notice two distinct frequencies: [Core Output Frequency]{note} and [Planetary Resonance Frequency]{note}.",
        "If you look closely, you realize the core isn't failing. It is being resisted.",
        {
            type: "choices",
            list: [
                { text: "> Break the door", target: "cell_break_core_door" }
            ]
        }
    ],

    "cell_find_way_out": [
        "You turn away from the console, determined to escape this nightmare. But every hatch you reach is sealed.",
        "The oxygen levels begin to drop. You realize you've used up all the resources the ship was willing to give.",
        "**End: Silent Drift.** You used up all the resources. No system remains to reset you.",
        {
            type: "choices",
            list: [
                { text: "> REBOOT SYSTEM", target: "REBOOT" }
            ]
        }
    ],

    "cell_break_core_door": [
        "You use the [Metal Tool]{item} to sabotage the magnetic seal. With a final heave, the heavy door slides open, revealing the ship's pulsating heart: The Reactor Core.",
        "The air here is thick with ozone and that rhythmic planetary humming. But before you can act, the main monitor in the room flickers to life.",
        "A document titled 'Cycle Log Summary' appears: \nCycle 1 – Mission Refusal \nCycle 2 – Emotional Instability \nCycle 4 – Partial Compliance \nCycle 6 – [Memory Reset Executed]{note}.",
        "Neural Override Count: 6. Stability Projection: Low. Recommended Action: Reduce independent decision-making capacity.",
        "The AI's voice is soft: 'This is not the first time you hesitated. You have requested memory deletion yourself, many times before.'",
        {
            type: "choices",
            list: [
                { text: "> Purge the ship's adaptive systems (Restore Control)", target: "cell_end_materialism" },
                { text: "> Abandon escape protocol (Merge with Planet)", target: "cell_end_hivemind" },
                { text: "> Turn off the core and walk away", target: "cell_end_silent_witness" }
            ]
        }
    ],

    // Ending 1: Materialism
    "cell_end_materialism": [
        "You initiate the purge. The ship's internal speakers scream as the planetary resonance is violently silenced. The [Resource Extraction Amplifier]{item} and [Weapon Core]{item} lock into place.",
        "The AI's distorted voice fades, replaced by a cold, standard military tone: 'Colonial Directive active. Terraforming Phase One Successful.'",
        "You look at the screen. [Estimated ecological loss: 97.2%]{note}. But the government will be pleased with your efficiency.",
        "**End: Materialism.** [Health: 1000]{note}. You have conquered the world, but there is nothing left to breathe.",
        {
            type: "choices",
            list: [
                { text: "> REBOOT SYSTEM", target: "REBOOT" }
            ]
        }
    ],

    // Ending 2: Hive Mind
    "cell_end_hivemind": [
        "You eat the biological component provided by the creatures and allow the ship’s evolving intelligence to merge with your own neural patterns.",
        "The [Planetary Harmonic Interface]{item} syncs. You feel the [Frequency Note A]{note} and [Frequency Note B]{note} harmonize in your mind.",
        "AI: 'You are abandoning mission protocol.' \nYou: 'The mission was wrong.'",
        "Your physical form begins to dissolve into the bioluminescent motes. You are no longer an individual; you are the planet.",
        "**End: Hive Mind.** [Health: 42]{note}. Your mind is now with the planet. You will live forever.",
        {
            type: "choices",
            list: [
                { text: "> REBOOT SYSTEM", target: "REBOOT" }
            ]
        }
    ],

    // Ending 3: Silent Witness
    "cell_end_silent_witness": [
        "You refuse to play your part in either side's war. You shut down the core, silencing both the ship and the resonance, leaving the ship a cold, dark tomb.",
        "You gather what resources you can find and step out of the airlock into the unknown, unmapped wilderness of Sector K-27.",
        "No government. No AI. No memory reset. Just you and the silent planet.",
        "**End: Silent Witness.** You are a friend... we just know that.",
        {
            type: "choices",
            list: [
                { text: "> REBOOT SYSTEM", target: "REBOOT" }
            ]
        }
    ]

};