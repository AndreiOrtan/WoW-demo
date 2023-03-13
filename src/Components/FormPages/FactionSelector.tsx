import { FormData } from "../../types";
import "./FormPages.css";

const FactionSelector = ({ updateField, title, faction }: FormData) => {
  return (
    <div className="faction">
      <h1>{title}</h1>
      <div className="faction-buttons">
        <button
          type="button"
          onClick={() => updateField({ faction: "alliance" })}
          className={`${faction === "alliance" ? "alliance-btn" : ""}`}
        >
          Alliance
        </button>
        <button
          type="button"
          onClick={() => updateField({ faction: "horde" })}
          className={`${faction === "horde" ? "horde-btn" : ""}`}
        >
          Horde
        </button>
      </div>
    </div>
  );
};
export default FactionSelector;
