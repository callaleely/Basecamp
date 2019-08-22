import React from 'react';
import {Link} from 'react-router-dom';


const SplashForm = () => (
  <div>
    <nav className='top-nav'>
      <div  href="/">
        <img className='top-nav-logo' src='https://basecamp.com/assets/about/press/basecamp-press-kit/logos/basecamp-full-standard-3345adc6950bd888db795a6a6d65829ab6b730b86b5441de05162b1161686f8b.png' alt="Basecamp"/>
      </div>
      <div>
        <Link className='nav-button' to='/login'>Sign In</Link>
        <Link className='nav-button' to='/login'>Demo Signin</Link>
        <Link className='signup-button' to='/signup'>Try it FREE</Link>
      </div>
    </nav>
    <div className='intro-container'>
      <div className="intro-message">
        <h1 className="intro-title">We've been expecting you.</h1>
          <p className="intro-body">
            All growing businesses run into the same fundamental problems.
            Hair on fire, buried under email, stuff everywhere.
            The good news? 
            <Link className='intro-link' to='/signup'>
            Basecamp solves them. </Link>
            <span className='intro-bold'>Try Basecamp free for 30days:</span>
            </p>
        <div className="trial-box">
          <input className='trial-input' type="text" defaultValue="enter your email address"/>
          <br></br>
          <Link to='/signup'>
          <button className="trial-button">Start a free 30 day trial</button>
          </Link>
        </div>
      </div>
        <img className="intro-img" alt="hero image" src="https://basecamp.com/assets/landing/hof-compact-eb2cabf8af9ac85d7d7179b3560303001f94cf686dbee1f943e464b8aff5d219.jpg" />
    </div>
    <hr className='green-line'></hr>
    <div className="subheading-container">
      <h3 className="intro-subheading">3,258 businesses signed up last week to get results like these...</h3>
    </div>
    <div className="intro-stat">
      <blockquote className="intro-stat-each">
        <h3 className="quote-title">89% have a better handle on business.</h3>
        <p className="quote-body">
          <span>
          “We can see exactly what needs to be done and when. We're much more efficient.”
          </span>
        </p>
        <cite className="quote-cite">
        -Tina Lannin, 121 Captions
        </cite>
      </blockquote>
      <blockquote className="intro-stat-each">
        <h3 className="quote-title">84% report more self-sufficient teams.</h3>
        <p className="quote-body">
          <span>
          “Accountability for tasks. No more ‘I thought so and so was responsible for that.’”
          </span>
        </p>
        <cite className="quote-cite">-George Groves, Piehole.TV</cite>
      </blockquote>
      <blockquote className="intro-stat-each">
        <h3 className="quote-title">59% have fewer weekly meetings.</h3>
        <p className="quote-body">
          <span>
          “We don't need to spend as much time in meetings now that we use Basecamp.”
          </span>
        </p>
        <cite className="quote-cite">
        -Brad Vandiviere, Faith Chapel Billings
        </cite>
      </blockquote>
    </div>
      <p className="intro-bottom-body">
        The problems teams deal with mostly boil down to stuff scattered in too many places - emails, chat threads, Word docs, etc. That makes things easy to miss and hard to find, which leads to communication gaps, preventable emergencies, and extra work.
        <br/><br/>
        Single purpose project management and chat apps can't fix this problem - they can only make it worse. Basecamp is different. 
        It combines all the tools teams need in a single, straightforward package that makes work feel like less work.
        <br/><br/>
        We use Basecamp to make software (Basecamp!), discuss ideas, plan marketing campaigns, share pet pics - you get the idea.
        It's one stop shop for all the things teams do together.
        <br/><br/>
      <span className="intro-bottom-button">
      <Link to='/signup'>
          <button className="trial-button">Start a free 30 day trial</button>
      </Link>
      </span>
      </p>
  </div>
);


export default SplashForm;