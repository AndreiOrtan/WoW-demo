import { useState } from "react";
import "./App.css";
import CharacterName from "./Components/FormPages/CharacterName";
import FactionSelector from "./Components/FormPages/FactionSelector";
import RaceSelector from "./Components/FormPages/RaceSelector";
import { UserInput } from "./types";
import useFormHook from "./useFormHook";

const INITIAL_DATA = {
  faction: "",
  characterName: "",
  characterRace: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  console.log(data);
  function updateField(field: Partial<UserInput>) {
    setData((prevData) => {
      return { ...prevData, ...field };
    });
  }
  const { indexPage, page, pages, nextPage, previousPage } = useFormHook([
    <CharacterName
      {...data}
      updateField={updateField}
      title="Type a name for your character"
    />,
    <FactionSelector
      updateField={updateField}
      {...data}
      title="Choose a faction"
    />,
    <RaceSelector
      {...data}
      updateField={updateField}
      title="Choose a race for your character"
    />,
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
