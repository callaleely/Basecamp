import React from 'react';
import {Link} from 'react-redux';


const SplashForm = () => (
  <div className='splash'>
    <div>
      <Link to='/login'>Sign In</Link>
      <button onClick={demoLogin(e)}>Demo Signin</button>
      <Link to='/signup'>Try it FREE</Link>
    </div>
    <span className="intro-container">
      <h1 className="intro-title">I've been expecting you.</h1>

      <p className="intro-body">
        All growing businesses run into the same fundamental problems.
        Hair on fire, buried under email, stuff everywhere.
        The good news? Basechamp solves them.
				</p>
    </span>

    <span className="busy-img-container">
      <img className="busy-img" alt="hero image" src="https://basecamp.com/assets/landing/hof-compact-eb2cabf8af9ac85d7d7179b3560303001f94cf686dbee1f943e464b8aff5d219.jpg" />
    </span>

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