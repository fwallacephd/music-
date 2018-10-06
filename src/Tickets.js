import React from 'react';
import {Animated} from "react-animated-css";

const tickets = () => {
  return (
    <section className="ticketImages">  
    <div className="row">
        <div className="col-md-4 explain text-center">
        <img className="img-fluid ticket" src="explain.jpg" alt="Explain the Game"></img>
        </div>
        <div className="col-md-4 lobby ticket text-center">

        

        <img className="img-fluid ticket flipinX" src="lobby.jpg" alt="Go to the Lobby"></img>
        </div>
        <div className="col-md-4 account ticket text-center">
        <img className="img-fluid ticket" src="masteraccount.jpg" alt="Explain the Game"></img>
        </div>
      </div>

      <div className="row ether">
        <div className="col-md-12 text-center">
          <p className="ether1">By the way, you need <span className="blue">Ether</span> and an <span className="blue">Ethereum</span> wallet to play Pickflix.</p>
          <p className="ether2">If you don't know what that means, our helpful Usher <img className="img-fluid flashlight" src="Flashlight.png" alt="FAQ"></img> can explain.</p>
        </div>
      </div>
    </section>
  )
}

export default tickets