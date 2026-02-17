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

    "cell_call_ai_again": [
        "The AI's voice cracks: 'Power... Support... Power...' It seems to be in a [loop]{note}."
    ],
    "cell_search_room": [
        "You fumble in the dark and find a [Small Battery]{item}."
    ]
};