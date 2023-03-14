import { FormData } from "../../types";

const CLASES = [
  "Mage",
  "Rogue",
  "Warrior",
  "Paladin",
  "Priest",
  "Death Knight",
  "Warlock",
  "Shaman",
  "Hunter",
  "Druid",
];
console.log(CLASES);
const ClassSelector = ({ updateField, characterClass, title }: FormData) => {
  return (
    <div className="class-selector">
      <h1>{title}</h1>
      {CLASES.map((clss) => {
        return (
          <div key={clss}>
            <input
              type="radio"
              value={`${clss}`}
              name="charClass"
              checked={characterClass === clss}
              onChange={() => updateField({ characterClass: clss })}
            />
            <label>{clss}</label>
          </div>
        );
      })}
    </div>
  );
};
export default ClassSelector;
