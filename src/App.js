import './App.css';
import Nav from './components/Navbar' 
import NewsCard from "./components/Card"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fullview from './components/Fullview';
import Catagory from './components/Catagory';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/news/:id" element={ <><Nav/> <Fullview /></> } />     
          <Route path="/news" element={ <><Nav/> <NewsCard /></> } />    
          <Route path="/news/list/:genre" element={ <> <Catagory /></> } />     


        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
