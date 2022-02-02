import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/AppArea/Main/Main";
import axios, { AxiosError } from "axios";


function App() {
  const amount = (e)=>{
    e.target.value
  }
  const allLocations = async () => {
    try {
      const result = await Axios.get<LocationModel[]>(
        "http://localhost:3001/locations"
      );
      dispatch(updateLocationsStore(result.data));
    } catch (err) {
      openModalForError(err);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <input type="number" min="0" onChange={}/>
        <main>
          <Main />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
