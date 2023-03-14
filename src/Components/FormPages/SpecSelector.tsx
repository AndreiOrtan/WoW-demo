import { FormData } from "../../types";

type Classes = {
  [key: string]: string[];
};
const SPECS_PER_CLASS: Classes = {
  Mage: ["Frost", "Fire", "Arcane"],
  Rogue: ["Sublety", "Assasination", "Combat"],
  Warrior: ["Arms", "Fury", "Protection"],
  Paladin: ["Holy", "Retribution", "Protection"],
  Priest: ["Shadow", "Holy", "Discipline"],
  "Death Knight": ["Blood", "Frost", "Unholy"],
  Warlock: ["Destruction", "Demonology", "Affliction"],
  Shaman: ["Elemental", "Fire", "Arcane"],
  Hunter: ["Survival", "Marksmanship", "Beast Mastery"],
  Druid: ["Restoration", "Balance", "Feral"],
};
const SpecSelector = ({ characterClass, updateField, title }: FormData) => {
  return (
    <div>
      <h1>{title}</h1>
      {SPECS_PER_CLASS[`${characterClass}`].map((spec) => {
        return (
          <div key={`${spec}`}>
            <input
              type="radio"
              value={`${spec}`}
              name="charSpec"
              // checked={characterRace === race}
              onChange={() =>
                updateField({
                  characterSpec: spec,
                })
              }
            />
            <label>{spec}</label>
          </div>
        );
      })}
    </div>
  );
};
export default SpecSelector;
