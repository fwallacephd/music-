import React, { Component } from 'react';
import './App.css';
import {Animated} from "react-animated-css";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
      
      <div className="row">
      <div className="col-md-12 text-center logo">
        <img className="logoImage img-fluid" src="logo.jpg" alt="Pickflix logo"></img>
      </div>
      </div>

      <div className="testanimate">
      
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div>
        hello world ;)
        </div>
      </Animated>
      
      </div>

      <div className="row background">
        <div className="col-md-1"></div>
        <div className="col-md-10 tags text-center">
          <p className="tagline"><img className="topHat" src="topHat.png" alt="Top Hat"></img> Lights! Camera! Cha-Ching! <img className="floppyhatheader" src="asset 2.png" alt="Hat"></img></p>
          <p className="subTitle">The new box office predicaton game where YOU are the MovieMaster</p>
        </div>
        <div className="col-md-1"></div>
    </div>

    <div className="row ticketicons">
      <div className="col-md-4 explain text-center">
        <img className="img-fluid ticket" src="explain.jpg" alt="Explain the Game"></img>
      </div>
      <div className="col-md-4 lobby ticket text-center">
        <img className="img-fluid ticket flipinX" src="lobby.jpg" alt="Go to the Lobby"></img>
      </div>
      <div className="col-md-4 account ticket text-center">
        <img className="img-fluid ticket" src="moviemaster.jpg" alt="Explain the Game"></img>
      </div>
    </div>

    <div className="row ether">
      <div className="col-md-12 text-center">
        <p className="ether1">By the way, you need <span className="blue">Ether</span> and an <span className="blue">Ethereum</span> wallet to play Pickflix.</p>
        <p className="ether2">If you don't know what that means, our helpful Usher <img className="img-fluid flashlight" src="Flashlight.png" alt="FAQ"></img> can explain.</p>
      </div>
    </div>
    <div className="trademark row">
      <div className="col-md-12 text-center">
      <p className="copyright">The Pickflix <sup>TM</sup> of GoBlock USA LLC <i class="far fa-copyright"></i> 2018 All Rights Reserved <br></br> Be Excellent tp Each Other and Block On! </p>
    </div>
    </div>
    <div className="container">
    <div className="header1">
    <div className="logoheader">
      <img className="logoImageHeader img-fluid" src="logo.jpg" alt="Pickflix logo" />
    </div>
    <div className="moviemaster-container">
      <div>
        <p className="moviemaster">My Movie Master</p>
      </div>
      <img className="topHatHeader" src="topHat.png" alt="Top Hat"></img>
    </div>
  </div>
  <div className="bottomheader1 align-items-start">
    <div>
      <div className="notices">
        <p className="noticeslisting mb-0">Area for Notices when needed - keep part of the sticky top header.</p>
      </div>
      <div className="d-flex align-items-center">
        <img className="check-icon" src="ropeBanner.png" alt="Clock" />
        <p className="checkmein-text mb-0">The Lobby</p>
      </div>
    </div>
    <div className="pastgames-container">
      <img className="check-icon" src="clock.png" alt="Clock" />
      <p className="pastgames"> Show Me Past Games </p>
    </div>
  </div>
</div>
<div className="container">
  <div className="header1">
    <div className="logoheader">
      <img className="logoImageHeader img-fluid" src="logo.jpg" alt="Pickflix logo" />
    </div>
    <div className="research">
      <form className="d-flex align-items-center mb-0">
        <div className="form-group mb-0">
          <input placeholder="Research" type="text" name="research" id="research" className="research-input" />
        </div>
        <img className="img-fluid research-icon mx-2" src="research.png" alt="research" />
      </form>
    </div>
    <div className="moviemaster-container">
      <div>
        <p className="moviemaster">Check Me In</p>
      </div>
    </div>
  </div>
  <div className="bottomheader1">
    <div className="d-flex align-items-center">
      <div className="checkmein pt-2 d-flex align-items-center">
        <img className="check-icon" src="clock.png" alt="Clock" />
        <p className="mb-0 checkmein-text">Check me in</p>
      </div>
    </div>
    <div className="pastgames-container">
      <img className="clock" src="ropeBanner.png" alt="Clock" />
      <p className="pastgames">Take me to lobby</p>
    </div>
  </div>
</div>
<div className="row lobbyimage">
    <div className="ropebarrier col-md-12">
        <p className="lobby"><img className="ropebarrier" src="RopeBarrier.png" alt="Rope Barrier"></img> The Lobby </p>
      </div>
    </div>  
  
    </div>
    
  
  
  
    );
  }
}

export default App;
