// public/js/data/content.js

export const STORY_DATA = {
    "cell_1": [
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

    "cell_dark_hallway": [
        "Why is the ship so dark? Did the [landing]{note} go wrong?",
        "The emergency floor lights are out. You might need a [Flashlight]{item}.",
        {
            type: "choices",
            list: [
                { text: "> Call out to the AI pilot", target: "cell_call_ai" }
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
        "The emergency floor lights are out. You might need a [Flashlight]{item}.",
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
        "You [Trip on something]{note} and slam into the cold floor. (-1 Health)",
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
                { text: "> Take Climbing Gear", target: "cell_take_climbing" }
            ]
        }
    ],

    "cell_take_flashlight": [
        "You grab the [BROKEN Flashlight]{item}. It flickers but doesn't hold a steady beam.",
        {
            type: "choices",
            list: [
                { text: "> Continue toward the boarding dock", target: "cell_boarding_dock" }
            ]
        }
    ],

    "cell_take_firstaid": [
        "You secure the [First-aid Kit]{item}. It might be useful if that 'Trip' wasn't your last accident.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_boarding_dock" }] }
    ],

    "cell_take_food": [
        "A pack of [Food Ration]{item}. Tastes like chalk, but calories are calories.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_boarding_dock" }] }
    ],

    "cell_take_knapsack": [
        "You shoulder the [Knapsack]{item}. More space to carry the weight of this mission.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_boarding_dock" }] }
    ],

    "cell_take_exogradex": [
        "You find a canister of [EXOGRADEX]{item}. A specialized chemical compound.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_boarding_dock" }] }
    ],

    "cell_take_climbing": [
        "The [Climbing Gear]{item} is heavy, but the ship's vertical shafts might require it.",
        { type: "choices", list: [{ text: "> Move toward the dock", target: "cell_boarding_dock" }] }
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
        "The air here is thinner. The massive pressure doors of the boarding dock loom ahead."
    ]
};