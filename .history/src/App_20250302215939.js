import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Header from './components/Header/Header';
import carousel from './components/carousel/carousel';

function App() {
  return (
    <div>
     <Header />
     <Carousel />
    </div>
   
  );
}

export default App;
