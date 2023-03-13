import { FormData } from "../../types";

const CharacterName = ({ characterName, updateField, title }: FormData) => {
  return (
    <div className="name">
      <h1>{title}</h1>
      <input
        type="text"
        value={characterName}
        onChange={(e) => updateField({ characterName: e.target.value })}
      />
    </div>
  );
};
export default CharacterName;
