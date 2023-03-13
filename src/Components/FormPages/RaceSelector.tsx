import { useState } from "react";
import { IData } from "../../types";

const ALLIANCE = ["Human", "Dwarf", "Night Elf", "Gnome", "Draenei"];
const HORDE = ["Orc", "Undead", "Tauren", "Troll", "Blood Elf"];

const RaceSelector = ({ faction, updateField }: IData) => {
  const fac = faction === "horde" ? HORDE : ALLIANCE;

  const renderedFaction = fac.map((race) => {
    return (
      <div key={race}>
        <input
          type="radio"
          value={`${race}`}
          name="charRace"
          onChange={() => updateField({ characterRace: race })}
        />
        <label>{race}</label>
      </div>
    );
  });

  return <>{faction && renderedFaction}</>;
};
export default RaceSelector;
