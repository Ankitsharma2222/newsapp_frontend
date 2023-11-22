import './App.css';
import Nav from './components/Navbar' 
import NewsCard from "./components/Card"
function App() {
  return (
    <div className="App">
      <Nav/>
      <div>
        <NewsCard/>
   
      </div>
    </div>
  );
}

export default App;
