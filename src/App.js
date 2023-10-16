import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./Routes/Allroutes";
import Navbar from "./Components/Navbar";
import { AboutPetfinder } from "./Pages/AboutPetfinder";
import { AdoptingPets } from "./Pages/AdoptingPets";
import { AdminLogin } from "./Admin/AdminLogin";
import { AdminHomePage } from "./Admin/AdminHomePage";
import AdoptingDogs from "./Pages/AdoptingDogs";
import FeedingDog from "./Pages/FeedingDog";
import AdoptingCats from "./Pages/AdoptionCat";
import Birdss from "./Pages/Birds";
import Home from "./Pages/Home";
import Login from "./Components/Login";

function App() {
   return (
      <div className="App">

      <Navbar/>
          <AllRoutes/>
      </div>
   );
}

export default App;
