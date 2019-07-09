import React from 'react';
import {Link} from 'react-router-dom';


const SplashForm = () => (
  <div className='splash'>
    <nav className='top-nav'>
      <div  href="/">
        <img className='top-nav-logo' src='https://basecamp.com/assets/about/press/basecamp-press-kit/logos/basecamp-full-standard-3345adc6950bd888db795a6a6d65829ab6b730b86b5441de05162b1161686f8b.png' alt="Basecamp"/>
      </div>
      <div>
        <Link className='nav-button' to='/login'>Sign In</Link>
        <button className='nav-button'>Demo Signin</button>
        <Link className='signup-button' to='/signup'>Try it FREE</Link>
      </div>
    </nav>
    <div className='intro-container'>
      <div className="intro-message">
        <h1 className="intro-title">I've been expecting you.</h1>
          <p className="intro-body">
            All growing businesses run into the same fundamental problems.
            Hair on fire, buried under email, stuff everywhere.
            The good news? Basechamp solves them. <h3>Try Basecamp free for 30days:</h3>
            </p>
        <div className="trial-box">
          <input type="text" value="enter your email address"/>
          <br></br>
          <button className="trial-button">Start a free 30 day trial</button>
        </div>
      </div>
      <div className="intro-img">
        <img className="busy-img" alt="hero image" src="https://basecamp.com/assets/landing/hof-compact-eb2cabf8af9ac85d7d7179b3560303001f94cf686dbee1f943e464b8aff5d219.jpg" />
      </div>
    </div>
    <hr className='sketch-green-line'></hr>
    <div className="splash-signup">
      <div className="call-to-action">
        <h3>3,258 businesses signed up last week to get results like these...<span id="arrow">⟶</span></h3>
        <p>
          The problems teams deal with mostly boil down to stuff scattered in too many places - emails, chat threads, Word docs, etc. That makes things easy to miss and hard to find, which leads to communication gaps, preventable emergencies, and extra work.
          <br></br>
          Single purpose project management and chat apps can't fix this problem - they can only make it worse. Basecamp is different. 
          It combines all the tools teams need in a single, straightforward package that makes work feel like less work.
          <br></br>
          We use Basecamp to make software (Basecamp!), discuss ideas, plan marketing campaigns, share pet pics - you get the idea.
          It's one stop shop for all the things teams do together.
          <br></br>
        </p>
      </div>
    </div>
  </div>
);


export default SplashForm;