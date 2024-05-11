import FooterComponent from './FooterComponent/FooterComponent';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import ProductGrid from './ProductGrid/ProductGrid';
import './App.css';

function App() {
  return (
    <div className='mainContainer'>
      <div className='headerContainer'>
        <HeaderComponent />
      </div>
       <div className='productContainer'>
       <ProductGrid />
       </div>
        <div className='footerContainer'>
        <FooterComponent />
        </div>
        
    </div>
  );
}

export default App;
