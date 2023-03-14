import { useState } from "react";
import "./App.css";
import CharacterName from "./Components/FormPages/CharacterName";
import ClassSelector from "./Components/FormPages/ClassSelector";
import FactionSelector from "./Components/FormPages/FactionSelector";
import RaceSelector from "./Components/FormPages/RaceSelector";
import SpecSelector from "./Components/FormPages/SpecSelector";
import { FormData, UserInput } from "./types";
import useFormHook from "./useFormHook";

const INITIAL_DATA = {
  faction: "",
  characterName: "",
  characterRace: "",
  characterClass: "",
  characterSpec: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [players, setPlayers] = useState<Partial<FormData>[]>([]);
  console.log(data);

  function updateField(field: Partial<UserInput>) {
    setData((prevData) => {
      return { ...prevData, ...field };
    });
  }
  function createPlayer(playerData: Partial<FormData>) {
    setPlayers((prevPlayers) => {
      return [...prevPlayers, playerData];
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
    <ClassSelector
      {...data}
      updateField={updateField}
      title="Choose a class for your character"
    />,
    <SpecSelector
      {...data}
      updateField={updateField}
      title="Choose a spec for your character"
    />,
  ]);
  return (
    <div className="selector">
      <form>
        <div className="paging">
          {indexPage + 1}/{pages.length}
        </div>
        {page}
        <div className="button-container">
          {indexPage !== 0 && (
            <button type="button" onClick={previousPage} className="back-btn">
              Back
            </button>
          )}
          {indexPage + 1 < pages.length ? (
            <button type="button" onClick={nextPage} className="advance-btn">
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={() => createPlayer(data)}
              className="advance-btn"
            >
              Create
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
