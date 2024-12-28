// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Category from './components/Category';
import Category2 from './components/Category2';
import Services from './components/Services';
import Banner from './components/Banner';
import Products from './components/Products';
import Banner2 from './components/Banner2';
import Blogs from './components/Blogs';
import Partners from './components/Partners';
import Footer from './components/Footer';


function App() {
   
  return (
    <div   className="app ">
          
          <Navbar></Navbar>
          <Hero></Hero>
          <Category></Category>
          <Category2></Category2>
          <Services></Services>
          <Banner></Banner>
          <Products></Products>
          <Banner2></Banner2>
          <Blogs></Blogs>
          <Partners></Partners>
          <Footer></Footer>
         
    
    </div>
  );
}

export default App;
