import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(this.state)
      .then(() => {
        this.props.history.push(`/scopes`)
      }) 
  }

  async demoLogin(e) {
    e.preventDefault();
    const demoUser = {
      email: 'demouser@basecamp.com',
      password: 'password'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    for (let i = 1; i <= demoUser.email.length; i++) {
      this.setState({ email: demoUser.email.substr(0, i) });
      await sleep(50);
    }
    await sleep(250);

    for (let i = 0; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }
    await sleep(250);

    document.getElementById('session-submit-btn').click();
  }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let buttonValue;
    let buttonRoute;
    let clickButton;
    if (this.props.formType === 'signup') {
      buttonValue = 'log in'
      buttonRoute = '/login'
      // clickButton = this.props.history.push('/login')
     } else {
      buttonValue = "sign up"
      buttonRoute = "/signup"
      clickButton = this.demoLogin
     }
    return (
      <div className="background">
        <div>
          <div className="logo-container">
            <Link to="/">
            <img className="session-logo" src="https://help.basecamp.com/images/logo-bc.png"/>
            </Link>
          </div>
          <div className="login-container">
            <form onSubmit={this.handleSubmit} className="login-form-container">
              <h1>Try Basecamp</h1>
              <br/>
              <div className="login-mid">
              Already have an account? 
              <br/>
              Please <Link to={buttonRoute} className="mouse-over">{buttonValue}</Link></div>
              {/* {this.renderErrors()} */}
                <br/>
                <div className="login-form">
                <label className="field-label">Name:
                  <input type="text"
                    onChange={this.update('name')}
                    className="login-input"
                  />
                </label>
                <label className="field-label">Email:
                  <input type="text"
                    onChange={this.update('email')}
                    className="login-input"
                  />
                </label>
                <br />
                <label className='field-label'>Password:
                  <input type="password"
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>

                <br />
                <input className="session-submit" id="session-submit-btn" type="submit" value={this.props.formType} />
                </div>
            </form>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
