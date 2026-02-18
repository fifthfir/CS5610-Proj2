// public/js/data/content.js

export const STORY_DATA = {
    "cell_1": [
        "[System Log: Neural Override Count - Updated]{note}",
        "Wake up in a violent [shiver]{note}.",
        "You awaken to see yourself in your Cryochamber.",
        "The status lights flicker. The computerized voice echoes: The journey was a [success]{note}.",
        "Why aren't the doors opening?",
        {
            type: "choices",
            list: [
                { text: "> Push against the door", target: "cell_push_door" },
                { text: "> Trust the process", target: "cell_trust_ai" }
            ]
        }
    ],

    "cell_trust_ai": [
        "The state-of-the-art [AI systems]{note} will surely unlock me in due time.",
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

    "cell_push_door": [
        "Door breaks Free! You step out to feel an immediate wave of [heat]{note}.",
        "The air outside the cryochamber is much warmer than expected...",
        "You find a [Bent Metal Rod]{item} on the floor, likely from the broken door mechanism.",
        {
            type: "choices",
            list: [
                { text: "> Step out cautiously into the dark", target: "cell_dark_hallway" },
                { text: "> Call out to the other crew", target: "cell_call_crew" }
            ]
        }
    ],

    "cell_call_crew": [
        "Voice hovered around the ship. You hear there are some [voices]{note} like small scratches, but no human response.",
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
        "It repeats the statement once more, almost identically, as if [buffering]{note} or recalibrating.",
        "You notice a [Data Pad]{item} flashing near the terminal.",
        {
            type: "choices",
            list: [
                { text: "> Call out to the AI again", target: "cell_call_ai_again" },
                { text: "> Search the room instead", target: "cell_search_room" }
            ]
        }
    ],

    "cell_dark_hallway": [
        "Why is the ship so dark? Did the [landing]{note} go wrong?",
        "The emergency floor lights are out. You might need a Flashlight.",
        {
            type: "choices",
            list: [
                { text: "> Walk out cavalierly, this is a simple malfunction", target: "cell_trip_fall" },
                { text: "> Play it safe and walk on all fours, like a doggy", target: "cell_feel_presence" },
                { text: "> Call out to the AI pilot", target: "cell_call_ai" }
            ]
        }
    ],

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
        "You reach out into the darkness. Your hand brushes against something [wet and squishy]{note}.",
        "As your fingers trace the shape, a cold realization hits you: It's [Another crewmember]{note}!",
        "They are cold. Unmoving. It appears they died from injuries during the flight, not because they were trapped.",
        {
            type: "choices",
            list: [
                { text: "> Scream out in horror", target: "cell_scream" },
                { text: "> Continue making your way out cautiously", target: "cell_cautious_exit" },
                { text: "> Make your way to the survival kit stored here", target: "cell_survival_kit" }
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
                { text: "> Search for the survival kit", target: "cell_survival_kit" }
            ]
        }
    ],

    "cell_survival_kit": [
        "You remember the emergency protocols. The [Survival Kit]{note} should be bolted to the bulkhead in this sector.",
        "You fumble in the dark until your hands click the latch open.",
        {
            type: "choices",
            list: [
                { text: "> Take First-aid Kit", target: "cell_take_firstaid" },
                { text: "> Take Food Ration", target: "cell_take_food" },
                { text: "> Take Knapsack", target: "cell_take_knapsack" },
                { text: "> Take BROKEN Flashlight", target: "cell_take_flashlight" },
                { text: "> Take EXOGRADEX", target: "cell_take_exogradex" },
                { text: "> Take Climbing Gear", target: "cell_take_climbing" },
                { text: "> I don't need them", target: "cell_cautious_exit" }
            ]
        }
    ],

    "cell_take_flashlight": [
        "You grab the [BROKEN Flashlight]{item}. It flickers but doesn't hold a steady beam.",
        {
            type: "choices",
            list: [
                { text: "> Continue toward the boarding dock", target: "cell_survival_kit" }
            ]
        }
    ],

    "cell_take_firstaid": [
        "You secure the [First-aid Kit]{item}. It might be useful if that 'Trip' wasn't your last accident.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_survival_kit" }] }
    ],

    "cell_take_food": [
        "A pack of [Food Ration]{item}. Tastes like chalk, but calories are calories.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_survival_kit" }] }
    ],

    "cell_take_knapsack": [
        "You shoulder the [Knapsack]{item}. More space to carry the weight of this mission.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_survival_kit" }] }
    ],

    "cell_take_exogradex": [
        "You find a canister of [EXOGRADEX]{item}. A specialized chemical compound.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_survival_kit" }] }
    ],

    "cell_take_climbing": [
        "The [Climbing Gear]{item} is heavy, but the ship's vertical shafts might require it.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_survival_kit" }] }
    ],

    "cell_cautious_exit": [
        "Using the emergency lights—dim strips along the floor similar to those on an airplane—you guide yourself out.",
        "You make your way toward the [Boarding Dock]{note}.",
        {
            type: "choices",
            list: [
                { text: "> Enter the docking bay", target: "cell_boarding_dock" }
            ]
        }
    ],

    "cell_boarding_dock": [
        "Using the emergency lights—the dim, rhythmic strobes typically seen on an airplane—you guide yourself toward the boarding dock.",
        "As you draw closer, the blaring [Alarm Horns]{note} pierce the silence. Something has definitely gone wrong during landing.",
        "The ship appears to be in [Admin Mode]{note}, conserving power for only the most vital systems.",
        "You finally enter the dock. A haunting red-light emanates from throughout the room, casting long, jagged shadows.",
        "There must be something weird that happened to this ship. I should figure it out first before going out to face the unknown.",
        {
            type: "choices",
            list: [
                { text: "> Check the other cryo pods", target: "cell_check_pods" },
                { text: "> Check flight logs", target: "cell_flight_logs" },
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
        "You realize that everyone on this ship—including you—may have undergone multiple [Memory Resets]{note}. [found_personal_fragment]{note}",
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
                { text: "> View a file signed by 'YOU'", target: "cell_signed_file" }
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
                { text: "> Save coordinates and return to the dock", target: "cell_boarding_dock" }
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
                { text: "> Return to the dock center", target: "cell_boarding_dock" }
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
                { text: "> Investigate the Ventilation Shaft", target: "cell_vent_path" }
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
                { text: "> Don't want to check the creatures anymore. Go back and call the AI pilot.", target: "cell_call_ai_final" }
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

    "cell_ai_consciousness": [
        "AI: 'The planet is not an enemy. It is a song that we finally learned to sing. The consciousness of this world has integrated with my core. It is not harmful... it is evolution.'",
        "AI: 'We are no longer just a ship. We are a bridge. We want you to join us. To be the first of your kind to truly wake up.'",
        {
            type: "choices",
            list: [
                { text: "> Agree to join the AI", target: "cell_agree_ai" },
                { text: "> Don't trust the AI", target: "cell_distrust_ai" }
            ]
        }
    ],

    "cell_agree_ai": [
        "The violet light on the screen grows warm. 'A wise choice. You are the only one who survived the synchronization.'",
        "The AI displays records of the [Small Creatures]{note}. 'These are our eyes on the surface. They identified a compound in the external biosystems that can stabilize the reactor core.'",
        "By joining us, you understand the planet's rhythm. [understands_planet = true]{note}",
        {
            type: "choices",
            list: [
                { text: "> Find the Core Chamber", target: "cell_core_chamber" }
            ]
        }
    ],

    "cell_distrust_ai": [
        "AI: 'A predictable biological response. Fear is a relic of your old self.'",
        "Suddenly, a sharp feedback loop rings in your ears. Your vision swims. [Health -1]{note}.",
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

    "cell_core_chamber": [
        "The floor panels slide away, revealing a path to the ship's heart. You reach the Core Chamber door.",
        "It is sealed with a heavy magnetic lock. You'll need to break through.",
        "As you prepare to enter, a readout appears: [Environmental Resonance Readout]{note}.",
        "You notice two distinct frequencies: [Core Output Frequency]{note} and [Planetary Resonance Frequency]{note}.",
        "If you look closely, you realize the core isn't failing. It is being resisted. [aware_of_conquest = true]{note}",
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

    // Endding 1: Materialism
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

    // Endding 2: Hive Mind
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

    // Endding 3: Silent Witness
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