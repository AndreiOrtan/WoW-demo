import { FormData } from "../../types";

const FactionSelector = ({ updateField, title }: FormData) => {
  return (
    <div className="faction">
      <h1>{title}</h1>
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
