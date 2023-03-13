import { useState } from "react";
import AddressForm from "./AddressForm";
import "./App.css";
import CharacterForm from "./CharacterForm";
import InfoForm from "./InfoForm";
import useFormHook from "./useFormHook";

const INITIAL_DATA = {
  name: "",
  age: "",
  university: "",
  characterName: "asd",
  characterClass: "123",
  street: "",
  number: "",
  letter: "",
};

interface IData {
  name: string;
  age: string;
  university: string;
  characterName: string;
  characterClass: string;
  street: string;
  number: string;
  letter: string;
}

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(field: Partial<IData>) {
    setData((prevData) => {
      return { ...prevData, ...field };
    });
  }
  const { indexPage, page, pages, nextPage, previousPage } = useFormHook([
    <AddressForm {...data} updateField={updateFields} />,
    <CharacterForm {...data} updateField={updateFields} />,
    <InfoForm {...data} updateField={updateFields} />,
  ]);
  return (
    <div className="selector">
      <form>
        <div className="paging">
          {indexPage + 1}/{pages.length}
        </div>
        {page}
        <div className="button_container">
          {indexPage !== 0 && (
            <button type="button" onClick={previousPage}>
              Back
            </button>
          )}
          {indexPage + 1 < pages.length && (
            <button type="button" onClick={nextPage}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
