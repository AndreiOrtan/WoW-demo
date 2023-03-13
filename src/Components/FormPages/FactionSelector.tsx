import { IData } from "../../types";

const FactionSelector = ({ updateField }: IData) => {
  return (
    <div className="faction">
      <label>Choose a faction</label>
      <button
        type="button"
        onClick={() => updateField({ faction: "alliance" })}
      >
        Alliance
      </button>
      <button type="button" onClick={() => updateField({ faction: "horde" })}>
        Horde
      </button>
    </div>
  );
};
export default FactionSelector;
