import AddressForm from "./AddressForm";
import "./App.css";
import CharacterForm from "./CharacterForm";
import InfoForm from "./InfoForm";
import useFormHook from "./useFormHook";

function App() {
  const { indexPage, page, pages, nextPage, previousPage } = useFormHook([
    <CharacterForm />,
    <AddressForm />,
    <InfoForm />,
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
