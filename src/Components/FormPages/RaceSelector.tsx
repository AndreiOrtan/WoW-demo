import { useState } from "react";
import { UserInput, FormData } from "../../types";

const ALLIANCE = ["Human", "Dwarf", "Night Elf", "Gnome", "Draenei"];
const HORDE = ["Orc", "Undead", "Tauren", "Troll", "Blood Elf"];

const RaceSelector = ({
  faction,
  updateField,
  characterRace,
  title,
}: FormData) => {
  const fac = faction === "horde" ? HORDE : ALLIANCE;

  const renderedFaction = fac.map((race) => {
    return (
      <div key={race}>
        <input
          type="radio"
          value={`${race}`}
          name="charRace"
          checked={characterRace === race}
          onChange={() => updateField({ characterRace: race })}
        />
        <label>{race}</label>
      </div>
    );
  });

  return (
    <div className="race-selector">
      <h1>{title}</h1>
      <div>{faction && renderedFaction}</div>
    </div>
  );
};
export default RaceSelector;
