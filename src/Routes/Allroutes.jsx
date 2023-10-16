import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { AboutPetfinder } from "../Pages/AboutPetfinder";
import { AdoptingPets } from "../Pages/AdoptingPets";
import ContributionForm from "../Pages/ContributionForm";
import { CatProduct } from "../Components/Products/Cat_adopt";
import { DogProduct } from "../Components/Products/Dog_adopt";
import Register from "../Components/Register";
import { SinglePage } from "../Components/Products/SinglePage";
import Login from "../Components/Login"
import { AdminLogin } from "../Admin/AdminLogin"
import { AdminHomePage } from "../Admin/AdminHomePage"
import { AdminPrivateRoute } from "../context/AdminPrivateRoute"
import { AdoptionPage } from "../Pages/AdoptionPage";

import { SingleCatPage } from "../Components/Products/SingleCatPage";
import FeedingCat from "../Pages/FeedingCats";
import FeedingDog from "../Pages/FeedingDog";

import { AuthPrivateRoute } from "../context/AuthPrivateRoute";
import { UserProfile } from "../Pages/UserProfile";




export const AllRoutes = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContributionForm" element={<AuthPrivateRoute><ContributionForm/></AuthPrivateRoute>}/>
            <Route path="/catadopt" element={<CatProduct/>}/>
            <Route path="/dogadopt" element={<DogProduct/>}/>
            <Route path="/SinglePage/:id" element={<AuthPrivateRoute><SinglePage/></AuthPrivateRoute>}/>
            <Route path="/SingleCatPage/:id" element={<AuthPrivateRoute><SingleCatPage/></AuthPrivateRoute>}/>
            <Route path="/signup" element={ <Register/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/adminLogin" element={ <AdminLogin/> }/>
            <Route path="/adminHome" element={<AdminPrivateRoute> <AdminHomePage/> </AdminPrivateRoute>}/>

            <Route path="/adoptionPage" element={<AdoptionPage/>}/>
            <Route path="/FeedingCat" element={<FeedingCat/>}/>
            <Route path="/FeedingDog" element={<FeedingDog/>}/>
           
           
            

            <Route path="/adoptionPage" element={<AuthPrivateRoute><AdoptionPage/></AuthPrivateRoute>}/>
            <Route path="/userProfile" element={<AuthPrivateRoute><UserProfile/></AuthPrivateRoute>}/>


         </Routes>
      </div>
   );
};
