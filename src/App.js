// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import TopProduct from './components/TopProduct';
import Banner from './components/Banner';
import Subscribe from './components/Subscribe';
import Carousel from './components/Carousel';
import Winter from './components/Winter';
import Footer from './components/Footer';



function App() {
   
    

  return (
    <div   className="app ">
         
         <Navbar></Navbar>
         <Hero></Hero>
         <Products></Products>
         <TopProduct></TopProduct>
         <Banner></Banner>
        <Subscribe></Subscribe>
        <Carousel></Carousel>
        <Winter></Winter>
        <Footer></Footer>
     
       
        
        
        
    </div>
  );
}

export default App;
