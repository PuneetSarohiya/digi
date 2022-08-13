import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Card from "./components/Our Testmonials/Card"
import Content from './components/Content/Content';
import Testmonials from './components/Testmonials/Testmonials';

function App() {
  return (
    <div className="App">
{/*  */}
<Testmonials />
<Card /> 
<Content />
<Footer />
    </div>
  );
}

export default App;
