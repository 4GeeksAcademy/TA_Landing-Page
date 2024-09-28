import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="d-flex justify-content-center my-4">
        <Cards
          img={
            "https://plus.unsplash.com/premium_photo-1707410050248-a8a8c7e2fffd?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Cards
          img={
            "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Cards
          img={
            "https://plus.unsplash.com/premium_photo-1707410050552-e94a738102a1?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Cards
          img={
            "https://images.unsplash.com/photo-1498336179775-9836baef8fdf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
