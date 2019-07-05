import React from 'react';
import {Link} from 'react-redux';

const SplashForm = () => (
  <div className='splash'>
    <div className="hero-img-container">
      <img className="hero-img" alt="hero image" src="https://basecamp.com/assets/landing/hof-compact-eb2cabf8af9ac85d7d7179b3560303001f94cf686dbee1f943e464b8aff5d219.jpg" />
    </div>

    <div className="intro-container">
      <h1 className="intro-title">We've been expecting you.</h1>

      <p className="intro-body">
        All growing businesses run into the same fundamental problems.
        Hair on fire, buried under email, stuff everywhere.
        The good news? Basechamp solves them.
				</p>
    </div>


    <div className="splash-signup">
      <div className="call-to-action">
        <h3>Try Basechamp Today: <span id="arrow">⟶</span></h3>

        <ul>
          <li><span>✓</span>Everything will be in one organized place</li>
          <li><span>✓</span>Everyone will be on the same page</li>
          <li><span>✓</span>Projects will get off the ground faster</li>
          <li><span>✓</span>You'll know exactly what’s going on</li>
          <li><span>✓</span>You'll free up time spent on meetings</li>
        </ul>
      </div>
    </div>
  </div>
);


export default SplashForm;