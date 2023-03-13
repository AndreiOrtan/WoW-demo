interface UserFormProps {
  updateField: (field: Partial<InfoForm>) => void;
}
interface InfoForm extends UserFormProps {
  street: string;
  number: string;
  letter: string;
}

export default function AddressForm({
  street,
  number,
  letter,
  updateField,
}: InfoForm) {
  return (
    <div>
      <label>Street</label>
      <input
        type="text"
        value={street}
        onChange={(e) => updateField({ street: e.target.value })}
      />
      <label>Number</label>

      <input
        type="text"
        value={number}
        onChange={(e) => updateField({ number: e.target.value })}
      />
      <label>Letter</label>

      <input
        type="text"
        value={letter}
        onChange={(e) => updateField({ letter: e.target.value })}
      />
    </div>
  );
}
