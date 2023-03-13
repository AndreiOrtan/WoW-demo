interface UserFormProps {
  updateField: (field: Partial<InfoForm>) => void;
}
interface InfoForm extends UserFormProps {
  name: string;
  age: string;
  university: string;
}

export default function InfoForm({
  name,
  age,
  university,
  updateField,
}: InfoForm) {
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => updateField({ name: e.target.value })}
      />
      <label>Age</label>

      <input
        type="text"
        value={age}
        onChange={(e) => updateField({ age: e.target.value })}
      />
      <label>University</label>

      <input
        type="text"
        value={university}
        onChange={(e) => updateField({ university: e.target.value })}
      />
    </div>
  );
}
