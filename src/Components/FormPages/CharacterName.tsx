import { IData } from "../../types";

const CharacterName = ({ characterName, updateField }: IData) => {
  return (
    <div className="name">
      <label htmlFor="">Type in your character name</label>
      <input
        type="text"
        value={characterName}
        onChange={(e) => updateField({ characterName: e.target.value })}
      />
    </div>
  );
};
export default CharacterName;
