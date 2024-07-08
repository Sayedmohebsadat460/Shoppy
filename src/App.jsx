// App.jsx
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Hero/HeroSection";
import Products from "./components/Product/ProductList";
import BestProducts from "./components/Product/BestProducts";
import PromotionSection from "./components/PromotionSection/PromotionSection";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection";
import TestimonialsSlider from "./components/TestimonialsSection/TestimonialsSlider";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <NavBar cart={cart} />
      <HeroSection />
      <Products addToCart={addToCart} />
      <BestProducts />
      <PromotionSection />
      <NewsletterSection />
      <Products addToCart={addToCart} />
      <TestimonialsSlider />
      <Footer />
    </div>
  );
};

export default App;
