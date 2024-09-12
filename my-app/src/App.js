import './App.css';
import Menu from './pages/Menu'
import Slider from './pages/Slider';
import Cloth from './pages/Cloth';
import Accessories from './pages/Accessories';
import Footer from './pages/Footer';

const lst = ["Apple", "Orange", "Mango", "Banana", "Lichy"];

function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <Cloth />
      <Accessories />
      <Footer />
    </div>
  );
}

export default App;
