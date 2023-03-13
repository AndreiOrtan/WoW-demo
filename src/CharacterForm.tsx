interface UserFormProps {
  updateField: (field: Partial<InfoForm>) => void;
}
interface InfoForm extends UserFormProps {
  characterName: string;
  characterClass: string;
}
const CharacterForm = ({
  characterName,
  characterClass,
  updateField,
}: InfoForm) => {
  return (
    <div>
      <label htmlFor="">Type in your character name</label>
      <input
        type="text"
        value={characterName}
        onChange={(e) => updateField({ characterName: e.target.value })}
      />
      <label htmlFor="">Type in your character class</label>
      <input
        type="text"
        value={characterClass}
        onChange={(e) => updateField({ characterClass: e.target.value })}
      />
    </div>
  );
};
export default CharacterForm;
